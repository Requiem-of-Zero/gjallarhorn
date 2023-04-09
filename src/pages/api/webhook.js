import * as admin from "firebase-admin";
import { getApps } from "firebase-admin/app";
import { buffer } from "micro";
import Stripe from "stripe";
const serviceAccount = require("../../../permissions.json");
export const config = {
  api: {
    bodyParser: false,
  },
};

const app = !getApps().length
  ? admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    })
  : admin.app();

const webhookSecret = process.env.STRIPE_SIGNING_SECRET;

const fulfillOrder = async (session) => {
  console.log("fulfilling order", session);

  return app
    .firestore()
    .collection("users")
    .doc(session.metadata.email)
    .collection("orders")
    .doc(session.id)
    .set({
      amount: session.amount / 100,
      images: JSON.parse(session.metadata.images),
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    })
    .then(() => {
      console.log("added to db");
    });
};

export default async function webhookHandler(req, res) {
  console.log("Payment intent");
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  let event;
  if (req.method === "POST") {
    const buf = await buffer(req)
    const signature = req.headers["stripe-signature"];
    // Get the signature sent by Stripe
    try {
      if(!signature || !webhookSecret) return;

      event = stripe.webhooks.constructEvent(
        buf,
        signature,
        webhookSecret
      );
    } catch (err) {
      console.log(`⚠️  Webhook signature verification failed.`, err.message);
      return res.status(404).send('webhook error');
    }

    console.log(event)
    
    res.status(200).send();
  }

  // Handle the event
  switch (event.type) {
    case "payment_intent.succeeded":
      const session = event.data.object;
      return fulfillOrder(session)
        .then(() => res.status(200))
        .catch((err) => res.status(400).send("Webhook Error"));
    case "payment_intent.created":
      break;
    case "checkout.session.completed":
      break;
    case "charge.succeeded":
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }
}

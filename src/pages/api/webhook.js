import * as admin from "firebase-admin";
import { buffer } from "micro";
import Stripe from "stripe";
const serviceAccount = require("../../../permissions.json");
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const config = {
  api: {
    bodyParser: false,
  },
};

const app = !admin.apps.length
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
      amount: session.amount_total / 100,
      amount_shipping: session.total_details.amount_shipping / 100,
      quantity: JSON.parse(session.metadata.quantity),
      items_id: JSON.parse(session.metadata.items_id),
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    })
    .then(() => {
      console.log("added to db");
    });
};

export default async function webhookHandler(req, res) {
  console.log("Payment intent");
  let event;
  if (req.method === "POST") {
    const buf = await buffer(req);
    const signature = req.headers["stripe-signature"];
    // Get the signature sent by Stripe
    try {
      if (!signature || !webhookSecret) return;

      event = stripe.webhooks.constructEvent(buf, signature, webhookSecret);
    } catch (err) {
      console.log(`⚠️  Webhook signature verification failed.`, err.message);
      return res.status(404).send("webhook error");
    }

    console.log(event.type);

    res.status(200).send();
  }

  // Handle the event
  switch (event.type) {
    case "payment_intent.succeeded":
      break;
    case "payment_intent.created":
      break;
    case "checkout.session.completed":
      const session = event.data.object;
      return fulfillOrder(session)
        .then(() => res.status(200)).then(()=> {

        })
        .catch((err) => res.status(400).send("Webhook Error"));
    case "charge.succeeded":
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }
}

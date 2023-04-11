import * as admin from "firebase-admin";
import { buffer } from "micro";
const serviceAccount = require("../../../permissions.json");
const stripe = require("stripe")(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

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

const webhookSecret = process.env.NEXT_PUBLIC_STRIPE_SIGNING_SECRET;

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
      items_id_quantity: JSON.parse(session.metadata.items_id_quantity),
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    })
    .then(() => {
      console.log(`success order ${session.id} added to db`);
    });
};

export default async function webhookHandler(req, res) {
  console.log("Payment intent");
  if (req.method === "POST") {
    const buf = await buffer(req);
    const signature = req.headers["stripe-signature"];
    let event;
    // Get the signature sent by Stripe
    try {
      event = stripe.webhooks.constructEvent(buf, signature, webhookSecret);
    } catch (err) {
      console.log(`⚠️  Webhook signature verification failed.`, err.message);
      return res.status(404).send("webhook error");
    }

    const session = event.data.object;
    // Handle the event
    switch (event.type) {
      case "payment_intent.succeeded":
        break;
      case "payment_intent.created":
        break;
      case "checkout.session.completed":
        return fulfillOrder(session)
          .then(() => res.status(200))
          .catch((err) => res.status(400).send("Webhook Error"));
      case "charge.succeeded":
        break;
      default:
        console.log(`Unhandled event type ${event.type}`);
    }
  }
}

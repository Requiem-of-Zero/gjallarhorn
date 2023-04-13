import * as admin from "firebase-admin";
import { buffer } from "micro";
import { client } from "../../contentful/client";
const serviceAccount = require("../../../permissions.json");
const stripe = require("stripe")(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};

const app = !admin.apps.length
  ? admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    })
  : admin.app();

const webhookSecret = process.env.NEXT_PUBLIC_STRIPE_SIGNING_SECRET;

const fulfillOrder = async (session) => {
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
      status: JSON.parse(session.metadata.status),
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    })
    .then(() => {
      console.log(`success order ${session.id} added to db`);
    });
};

const handleContentful = async (session, client) => {
  for (const item of JSON.parse(session.metadata.items_id_quantity)) {
    let [itemId, quantity] = item.split(",");

    client
      .getSpace(process.env.CONTENTFUL_SPACE_ID)
      .then((space) =>
        space.getEnvironment(process.env.CONTENTFUL_ENVIRONMENT_ID)
      )
      .then((environment) => environment.getEntry(itemId))
      .then((entry) => {
        if (entry.fields.quantity["en-US"] > 0) {
          entry.fields.quantity["en-US"] -= quantity;
        }

        if (entry.fields.quantity["en-US"] <= 0) {
          entry.fields.type["en-US"] = 1;
        }
        
        return entry.update();
      })
      .then(
        (entry) =>
          console.log(`Entry ${entry.sys.id} updated.`) || entry.publish()
      )
      .then((entry) => console.log(`Entry ${entry.sys.id} published.`))
      .catch(console.error);
  }
};

export default async function webhookHandler(req, res) {
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

    // Handle the event
    if (event.type === "checkout.session.completed") {
      const session = event.data.object;
      return fulfillOrder(session)
        .then(() => res.status(200))
        .then(() => handleContentful(session, client))
        .catch((err) => res.status(400).send(`Webhook Error: ${err.message}`));
    }
  }
}

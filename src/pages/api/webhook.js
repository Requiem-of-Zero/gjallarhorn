import * as admin from "firebase-admin";
import { buffer } from "micro";

const serviceAccount = require("../../../permissions.json");

const app = !admin.apps.length
  ? admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    })
  : admin.app();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const endpointSecret = process.env.STRIPE_SIGNIN_SECRET;
const fulfillOrder = async (session) => {
  console.log('fulfilling order', session)

  return app.firestore().collection('users')
}
export default async (req, res) => {
  if (req.method === "POST") {
    const requestBuffer = await buffer(req)
    const payload = requestBuffer.toString();
    const sig = req.headers['stripe-signature'];

    let event;

    try {
      event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
    } catch(error) {
      return res.status(400).send(`Webhook Error: ${error.message}`)
    }

    if(event.type === 'checkout.session.completed'){
      const session = event.data.object;
    }
  }
};

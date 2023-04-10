const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
exports.stripeWebhook = functions.https.onRequest(async (request, response) => {
  const stripe = require("stripe")(functions.config().stripe.token);

  let event;
  if (request.method === "POST") {
    const raw = request.rawBody;
    const signature = request.headers["stripe-signature"];
    const whSecret = functions.config()(stripe.webhookSecret);

    try {
      if (!signature || !whSecret) return;
      event = stripe.webhooks.constructEvent(raw, signature, whSecret);
    } catch (err) {
      console.log(`⚠️  Webhook signature verification failed.`, err.message);
      return response.status(404).send("webhook error");
    }
  }

  const session = event.data.object;

  await admin
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
        console.log("added to db");
      });
});

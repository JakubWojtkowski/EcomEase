const functions = require("firebase-functions");

exports.createStripeCheckout = functions.https.onCall((data, context) => {
  // stripe init
  const stripe = require("stripe")(functions.config().stripe.secret_key);
  const session = stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/cancel",
    line_items: [
      {
        quantity: 1,
        price_data: {
          currency: "usd",
          unit_amount: 100 * 100, // 10000 = 100 usd
          product_data: {
            name: "Your order",
          },
        },
      },
    ],
  });

  return {
    id: session.id,
  };
});

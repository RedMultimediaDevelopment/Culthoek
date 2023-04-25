// import fastify from "fastify";
// import Stripe from "stripe";
// import notionSoldTickets from "./notionSoldTickets";

// const stripe = new Stripe("YOUR_STRIPE_SECRET_KEY", {
//   apiVersion: "2022-11-15",
// });

// const app = fastify();

// app.addContentTypeParser(
//   "application/json",
//   { parseAs: "buffer" },
//   function (req, body, done) {
//     try {
//       const parsed = JSON.parse(body.toString());
//       done(null, parsed);
//     } catch (err) {
//       err.statusCode = 400;
//       done(err, undefined);
//     }
//   }
// );


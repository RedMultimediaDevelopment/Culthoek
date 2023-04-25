import fastify, { FastifyRequest, FastifyReply } from "fastify";
import Stripe from "stripe";

//TODO:key
const stripe = new Stripe("HERE_SECRET_KEY", {
  apiVersion: "2022-11-15",
});

const app = fastify();

app.post<{ Body: { line_items: any } }>("/checkout/nl", async (request: FastifyRequest<{ Body: { line_items: any } }>, reply: FastifyReply) => {
  try {
    // Create a checkout session with Stripe
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["ideal", "card", "klarna", "sofort", "giropay"],
      shipping_address_collection: {
        allowed_countries: ["NL"],
      },
      shipping_options: [
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: {
              amount: 0,
              currency: "eur",
            },
            display_name: "Shipping to The Netherlands",

            delivery_estimate: {
              minimum: {
                unit: "business_day",
                value: 2,
              },
              maximum: {
                unit: "business_day",
                value: 5,
              },
            },
          },
        },
      ],

      line_items: request.body.line_items,
      mode: "payment",
      allow_promotion_codes: true,
      success_url: `${process.env.DOMAIN}/order/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.DOMAIN}/order/cancel`,
    });
    reply.send({ url: session.url });
  } catch (e: any) {
    // If there is an error send it to the client
    reply.status(500).send({ error: e.message });
  }
});

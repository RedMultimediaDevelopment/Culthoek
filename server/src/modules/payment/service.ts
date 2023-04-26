import Stripe from "stripe";
import { PrismaClient } from "../../../event-client";

const stripe = new Stripe(
  "sk_test_51MNjQWG8ThNa3eXL39qdiF6BAoo0RD1DlgCpGVZY4tsEIsn3foD6Cc4zim02G5Oy9EZdBBCggvuSnQ0ZvnShYkHa00zuhatc4b",
  {
    apiVersion: "2022-11-15",
  }
);
interface LineItem {
  price?: string;
  quantity: number;
  price_data?: {
    currency: string;
    unit_amount: number;
    product_data: {
      name: string;
      description: string;
      images: string[];
    };
  };
}

const prisma = new PrismaClient();

export const paymentService = {
  async createSession(eventId: string, amount: number) {
    const event = await prisma.eventTicket.findUnique({
      where: { id: eventId },
      select: { name: true, description: true, image: true, price: true },
    });
    if (!event) {
      throw new Error(`Event not found with id ${eventId}`);
    }

    const lineItems: LineItem[] = [
      {
        price_data: {
          currency: "eur",
          unit_amount: event.price * 100,
          product_data: {
            name: event.name,
            description: event.description,
            images: [event.image],
          },
        },
        quantity: amount,
      },
    ];

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `http://localhost:3000/success`,
      cancel_url: `http://localhost:3000/cancel`,
    });
    //TODO: use sessionId on front-end to redirect
    const getSession = await stripe.checkout.sessions.retrieve(session.id);
    console.log(getSession);

    return { sessionId: session.id };
  },
};

import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-08-16",
});

export async function POST(req: Request) {
  const { title, price } = await req.json();

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: "clp",
          product_data: { name: title },
          unit_amount: price * 100,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: "http://localhost:3000",
    cancel_url: "http://localhost:3000",
  });

  return NextResponse.json({ url: session.url });
}


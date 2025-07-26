import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();

  console.log("Nuevo producto:", data);

  return NextResponse.json({ success: true, message: "Producto recibido" });
}

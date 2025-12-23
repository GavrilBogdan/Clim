import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { userName, userPhone, userAddress, packageName, packagePrice } =
      await request.json();

    const html = `
      <h1>Cerere Ofertă</h1>

      <p><strong>Nume:</strong> ${userName}</p>
      <p><strong>Telefon:</strong> ${userPhone}</p>
      <p><strong>Localitate:</strong> ${userAddress}</p>

      <hr />

      <p><strong>Tip cerere:</strong> ${packageName}</p>
      <p><strong>Buget:</strong> ${packagePrice}</p>
    `;

    await resend.emails.send({
      from: "GreenClim <onboarding@resend.dev>",
      to: ["gavrilbogdan3@gmail.com"],
      subject: "Cerere ofertă – GreenClim",
      html,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}

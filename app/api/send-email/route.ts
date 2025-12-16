import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { nume, prenume, localitate, buget, telefon } = body;

    // ❗ BACKEND VALIDATION (Required fields)
    if (!nume || !prenume || !localitate || !buget || !telefon) {
      return NextResponse.json(
        { error: "Toate câmpurile sunt obligatorii." },
        { status: 400 }
      );
    }

    // SEND EMAIL
    const data = await resend.emails.send({
      from: "ClimInstall <onboarding@resend.dev>",
      to: "gavrilbogdan3@gmail.com",
      subject: "Client Nou",
      html: `
        <h2>Cerere ofertă primită</h2>
        <p><strong>Nume:</strong> ${nume}</p>
        <p><strong>Prenume:</strong> ${prenume}</p>
        <p><strong>Localitate:</strong> ${localitate}</p>
        <p><strong>Buget Estimativ:</strong> ${buget} <strong>RON</strong></p>
        <p><strong>Telefon:</strong> ${telefon}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

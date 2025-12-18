import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      userName,
      userPhone,
      userAddress,
      btu,
      withKit,
      extras,
      estimatedPrice,
    } = body;

    const html = `
      <h1>Cerere Nouă de Montaj AC</h1>

      <h3>Configurare:</h3>
      <ul>
        <li><strong>BTU:</strong> ${btu}</li>
        <li><strong>Kit:</strong> ${withKit ? "Cu kit" : "Fără kit"}</li>
        <li><strong>Traseu frigorific:</strong> ${
          extras.traseuFrigorific
        } m</li>
        <li><strong>Cablu alimentare:</strong> ${extras.cabluAlimentare} m</li>
        <li><strong>Furtun condens:</strong> ${extras.furtunCondens} m</li>
        <li><strong>Demontare AC:</strong> ${
          extras.demontare ? "Da" : "Nu"
        }</li>
      </ul>

      <h3>Total estimativ:</h3>
      <p><strong>${estimatedPrice} lei</strong></p>

      <hr />

      <h3>Date client:</h3>
      <p><strong>Nume:</strong> ${userName}</p>
      <p><strong>Telefon:</strong> ${userPhone}</p>
      <p><strong>Localitate:</strong> ${userAddress}</p>
    `;

    const data = await resend.emails.send({
      from: "ClimInstall <onboarding@resend.dev>",
      to: ["gavrilbogdan3@gmail.com"],
      subject: `Cerere montaj AC – ${btu} BTU`,
      html,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Eroare la trimitere email" },
      { status: 500 }
    );
  }
}

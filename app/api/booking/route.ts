import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { userName, userPhone, userAddress, packageName, packagePrice } =
      body;

    const data = await resend.emails.send({
      from: "Contact <onboarding@resend.dev>",
      to: ["gavrilbogdan3@gmail.com"],
      subject: `Cerere Montaj: ${packageName}`,
      html: `
        <h1>Cerere Nouă de Montaj</h1>
        <p><strong>Pachet:</strong> ${packageName} (${packagePrice})</p>
        <hr />
        <h3>Detalii Client:</h3>
        <p><strong>Nume:</strong> ${userName}</p>
        <p><strong>Telefon:</strong> ${userPhone}</p>
        <p><strong>Adresă/Zonă:</strong> ${userAddress}</p>
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}

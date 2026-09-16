import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const rateLimit = new Map<string, { count: number; resetTime: number }>();

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for") || "unknown";
    const now = Date.now();
    const rateData = rateLimit.get(ip);

    if (rateData && now < rateData.resetTime) {
      if (rateData.count >= 3) {
        return NextResponse.json(
          { error: "Too many requests" },
          { status: 429 },
        );
      }
      rateData.count++;
    } else {
      rateLimit.set(ip, { count: 1, resetTime: now + 3600000 });
    }

    const body = await request.json();

    if (body.botField) {
      return NextResponse.json({ success: true });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"FLOWERS EVENTS Site Web" <${process.env.SMTP_USER}>`,
      to: process.env.EMAIL_DESTINATION,
      subject: `Nouvelle demande — ${body.typeEvenement} — ${body.nom}`,
      text: `
NOUVELLE DEMANDE DE RÉSERVATION — FLOWERS EVENTS
------------------------------------------------

👤 CLIENT
Statut : ${body.statut}
Nom : ${body.nom}
Prénom : ${body.prenom}
E-mail : ${body.email}
Téléphone : ${body.telephone}

📅 ÉVÉNEMENT
Type : ${body.typeEvenement}
Date : ${body.date}
Adresse : ${body.adresse}

🍸 FORMULES & OPTIONS
Formule Cocktails : ${body.formule}
Option Softs : ${body.optionSoft || "Aucune"}
Option Bières : ${body.optionBiere || "Aucune"}

💬 COMMENTAIRES :
${body.commentaires || "Aucun commentaire."}

------------------------------------------------
Date de réception : ${new Date().toLocaleString("fr-FR")}
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur API Contact", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}

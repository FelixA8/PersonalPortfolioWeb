import { google } from "googleapis";
import { NextApiRequest, NextApiResponse } from "next";

type SheetForm = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).send({ message: "Only Post Request are allowed" });
  }
  const body = req.body as SheetForm;

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_CLIENT_KEY?.replace(/\\n/g, "\n"),
      private_key_id: process.env.PRIVATE_KEY_ID,
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({
    auth,
    version: "v4",
  });
  try {
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "A1:D1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[body.name, body.email, body.subject, body.message]],
      },
    });
  } catch (e) {
    return res.status(500)
  }
  return res.status(200).json({});
}

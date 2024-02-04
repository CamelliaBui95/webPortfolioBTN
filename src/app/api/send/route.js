import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
    
  try {
    const data = await resend.emails.send({
      from: `Camellia <${fromEmail}>`,
      to: [fromEmail, email],
      subject: subject,
      react: (
        <>
          <h2>Nouveau Message Envoyé:</h2>
          <h3>
            Subjet: {subject}
          </h3>
          <h3>
            Contenu:
          </h3>
          <p>{message}</p>
          <br/>
          <p>Merci de me contacter. Je vous contacterai dans les plus brefs délais.</p>
          <h4>Camellia Bui</h4>
        </>
      ),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
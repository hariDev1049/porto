import { mailOptions } from '@/app/config/nodemailerconfig';
import { NextRequest, NextResponse } from 'next/server';
import { EmailTemplate } from './../../components/emailTemplate/email-template';
import { transporter } from '@/app/config/nodemailerconfig';

export async function POST(req: NextRequest) {
  const { username, subject, email, message } = await req.json();

  if (!username || !subject || !email || !message) {
    return NextResponse.json({ message: 'Bad Request' }, { status: 400 });
  }

  const body = EmailTemplate({ username, email, subject, message });

  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: subject,
      text: 'Query from Portfolio',
      html: body,
    });

    return NextResponse.json(
      { message: 'Mail sent successfully.' },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
}

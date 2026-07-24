import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, service, message } = body ?? {};

    if (!name || !phone || !message) {
      return NextResponse.json({ ok: false, error: 'Missing required fields.' }, { status: 400 });
    }

    // TODO: Wire this up to an email provider (e.g. Resend, SendGrid) or CRM webhook.
    // For now we log the enquiry server-side so it is visible during development.
    console.log('New OD Construction enquiry:', { name, phone, email, service, message });

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ ok: false, error: 'Invalid request.' }, { status: 400 });
  }
}

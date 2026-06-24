import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, message, elapsed, honeypot } = await req.json()
    if (honeypot) return NextResponse.json({ ok: true })
    if (!elapsed || elapsed < 3000) return NextResponse.json({ error: 'Zu schnell' }, { status: 400 })
    if (!name || name.length > 80) return NextResponse.json({ error: 'Ungültiger Name' }, { status: 400 })
    const noSpaceRun = message?.split(' ').some((w: string) => w.length > 60)
    if (noSpaceRun) return NextResponse.json({ error: 'Ungültige Nachricht' }, { status: 400 })

    const { Resend } = await import('resend')
    const resend = new Resend(process.env.RESEND_API_KEY!)
    await resend.emails.send({
      from: 'noreply@pan21.com',
      to: 'info@firmenaktie.de',
      replyTo: email,
      subject: `Kontaktanfrage Firmenaktie.de: ${name}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>E-Mail:</strong> ${email}</p><p><strong>Nachricht:</strong><br>${message?.replace(/\n/g,'<br>')}</p>`
    })
    return NextResponse.json({ ok: true })
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 })
  }
}

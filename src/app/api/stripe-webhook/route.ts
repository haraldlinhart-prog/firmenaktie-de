import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { supabase } from '@/lib/supabase'
import { Resend } from 'resend'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)
const resend = new Resend(process.env.RESEND_API_KEY!)

export async function POST(req: NextRequest) {
  const body = await req.text()
  const sig = req.headers.get('stripe-signature')!
  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!)
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 400 })
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.CheckoutSession
    const meta = session.metadata || {}
    const email = session.customer_email || ''

    // Gründung
    if (meta.company_id) {
      const renewal = new Date()
      renewal.setFullYear(renewal.getFullYear() + 1)
      const { data: co } = await supabase
        .from('fa_companies')
        .update({ status: 'active', paid_at: new Date().toISOString(), renewal_due: renewal.toISOString() })
        .eq('id', meta.company_id)
        .select().single()

      if (co) {
        // Ins Register eintragen
        await supabase.from('fa_registry').insert({ company_name: co.company_name }).onConflict('company_name').ignore()

        // Bestätigungsmail
        await resend.emails.send({
          from: 'noreply@pan21.com',
          to: email,
          replyTo: 'info@firmenaktie.de',
          subject: `Ihre Series LLC wurde gegründet: ${co.company_name} Series of 10com Services LLC`,
          html: `
            <div style="font-family:Georgia,serif;max-width:600px;margin:0 auto;background:#0f1a12;color:#fff;padding:40px;">
              <h1 style="color:#d4b896;font-weight:normal;font-size:28px;">Glückwunsch zur Gründung!</h1>
              <p style="color:rgba(255,255,255,0.7);">Ihre Series LLC wurde erfolgreich gegründet und ins öffentliche Register eingetragen.</p>
              <div style="border:1px solid rgba(212,184,150,0.2);padding:20px;margin:24px 0;">
                <p style="color:#d4b896;margin:0 0 8px;font-size:12px;text-transform:uppercase;letter-spacing:2px;">Gesellschaftsname</p>
                <p style="color:#fff;font-size:18px;margin:0;">${co.company_name} Series of 10com Services LLC</p>
              </div>
              <p style="color:rgba(255,255,255,0.55);font-size:14px;">Ihre Gründungsdokumente (Operating Agreement, Apostille & Übersetzung) werden innerhalb von 24 Stunden als PDF an diese E-Mail-Adresse gesendet.</p>
              <p style="color:rgba(255,255,255,0.55);font-size:14px;">Die jährliche Erneuerungsgebühr von EUR 19 ist fällig am: <strong style="color:#d4b896;">${renewal.toLocaleDateString('de-DE')}</strong></p>
              <hr style="border-color:rgba(212,184,150,0.1);margin:24px 0;">
              <p style="color:rgba(255,255,255,0.3);font-size:12px;">Firmenaktie.de · PAN21.COM Corporate Consultants Ltd</p>
            </div>
          `
        })
      }
    }

    // Aktienausgabe
    if (meta.share_id) {
      await supabase.from('fa_shares')
        .update({ status: 'issued', paid_at: new Date().toISOString(), issued_at: new Date().toISOString() })
        .eq('id', meta.share_id)

      await resend.emails.send({
        from: 'noreply@pan21.com',
        to: email,
        subject: 'Ihre Aktienausgabe wurde bearbeitet',
        html: `<p>Ihre Aktienausgabe wurde erfolgreich verarbeitet. Die Aktien werden innerhalb von 24 Stunden ausgestellt und per E-Mail zugesandt.</p>`
      })
    }
  }

  return NextResponse.json({ received: true })
}

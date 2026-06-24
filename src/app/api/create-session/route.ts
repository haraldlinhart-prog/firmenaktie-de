import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { supabase } from '@/lib/supabase'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function POST(req: NextRequest) {
  try {
    const { name, targetCompany, targetShare, uid, email } = await req.json()
    if (!name || !uid) return NextResponse.json({ error: 'Fehlende Parameter' }, { status: 400 })

    // Vorab in DB anlegen
    const { data: co, error: dbErr } = await supabase
      .from('fa_companies')
      .insert({ user_id: uid, company_name: name, target_company: targetCompany || null, target_share: targetShare || null, status: 'pending' })
      .select().single()
    if (dbErr) return NextResponse.json({ error: dbErr.message }, { status: 500 })

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      customer_email: email,
      line_items: [{
        price_data: {
          currency: 'eur',
          unit_amount: 4900,
          product_data: {
            name: `Series LLC Gründung: ${name} Series of 10com Services LLC`,
            description: 'Einmalige Gründungsgebühr inkl. Operating Agreement, Apostille & Übersetzung',
          }
        },
        quantity: 1
      }],
      metadata: { company_id: co.id, uid },
      success_url: `${req.nextUrl.origin}/dashboard?success=1`,
      cancel_url: `${req.nextUrl.origin}/dashboard/gruenden`,
    })

    // Session ID speichern
    await supabase.from('fa_companies').update({ stripe_session: session.id }).eq('id', co.id)
    return NextResponse.json({ url: session.url })
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 })
  }
}

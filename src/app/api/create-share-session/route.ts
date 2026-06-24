import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { supabase } from '@/lib/supabase'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function POST(req: NextRequest) {
  try {
    const { companyId, capitalUsd, shareType, price, uid, email } = await req.json()

    const { data: share, error: dbErr } = await supabase
      .from('fa_shares')
      .insert({ company_id: companyId, user_id: uid, share_type: shareType, capital_usd: capitalUsd, price_eur: price, status: 'pending' })
      .select().single()
    if (dbErr) return NextResponse.json({ error: dbErr.message }, { status: 500 })

    const typeLabel = shareType === 'bearer' ? 'Inhaberaktien' : 'Namensaktien'
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      customer_email: email,
      line_items: [{
        price_data: {
          currency: 'eur',
          unit_amount: price * 100,
          product_data: {
            name: `Aktienausgabe: ${typeLabel}`,
            description: `Aktienkapital USD ${capitalUsd.toLocaleString('de-DE')} — ${typeLabel}`,
          }
        },
        quantity: 1
      }],
      metadata: { share_id: share.id, uid },
      success_url: `${req.nextUrl.origin}/dashboard?share_success=1`,
      cancel_url: `${req.nextUrl.origin}/dashboard/aktien`,
    })

    await supabase.from('fa_shares').update({ stripe_session: session.id }).eq('id', share.id)
    return NextResponse.json({ url: session.url })
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 })
  }
}

import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { supabase } from '@/lib/supabase'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function POST(req: NextRequest) {
  try {
    const { companyId, uid, email, targetCompany, sharePercent } = await req.json()
    if (!uid || !email) return NextResponse.json({ error: 'Nicht eingeloggt' }, { status: 401 })

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      customer_email: email,
      line_items: [{
        price_data: {
          currency: 'eur',
          unit_amount: 49900,
          product_data: {
            name: 'Vertragswerk Stille Beteiligung',
            description: `Stiller Beteiligungsvertrag (Series LLC als stiller Gesellschafter)${targetCompany ? ` — ${targetCompany}` : ''} inkl. aller Anlagen`,
          }
        },
        quantity: 1
      }],
      metadata: { type: 'stille_beteiligung', company_id: companyId || '', uid, target_company: targetCompany || '', share_percent: sharePercent || '' },
      success_url: `${req.nextUrl.origin}/dashboard?stille_success=1`,
      cancel_url: `${req.nextUrl.origin}/stille-beteiligung`,
    })

    return NextResponse.json({ url: session.url })
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 })
  }
}

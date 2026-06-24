'use client'
import { useState, Suspense } from 'react'
import { createClient } from '@supabase/supabase-js'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'

const sb = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

function calcPrice(usd: number) {
  if (usd <= 100000) return 99
  if (usd <= 1000000) return 99 + Math.ceil((usd - 100000) / 100000) * 29
  return 329
}

function AktienForm() {
  const router = useRouter()
  const params = useSearchParams()
  const companyId = params.get('company')
  const [capitalUsd, setCapitalUsd] = useState(100000)
  const [shareType, setShareType] = useState<'bearer' | 'registered'>('bearer')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const price = calcPrice(capitalUsd)
  const isOnRequest = capitalUsd > 1000000

  async function handleCheckout() {
    setLoading(true); setError('')
    const { data: { session } } = await sb.auth.getSession()
    const r = await fetch('/api/create-share-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ companyId, capitalUsd, shareType, price, uid: session?.user.id, email: session?.user.email })
    })
    const d = await r.json()
    if (d.url) window.location.href = d.url
    else setError(d.error || 'Fehler')
    setLoading(false)
  }

  return (
    <div className="max-w-xl mx-auto px-4 sm:px-8 py-12 space-y-8">
      <div>
        <p className="text-xs tracking-widest uppercase text-copper mb-2">Premium Option</p>
        <h1 className="font-display text-3xl text-white mb-3">Aktienausgabe konfigurieren</h1>
        <p className="text-sm text-white/45">Geben Sie Inhaber- oder Namensaktien für Ihre Series LLC aus.</p>
      </div>
      <div className="card border-copper/20 space-y-6">
        <div>
          <label className="text-xs text-white/40 uppercase tracking-widest block mb-3">Aktientyp</label>
          <div className="grid grid-cols-2 gap-3">
            {(['bearer', 'registered'] as const).map(type => (
              <button key={type} onClick={() => setShareType(type)}
                className={`p-4 border text-left transition-colors ${shareType === type ? 'border-copper bg-copper/10' : 'border-champ/15 hover:border-champ/30'}`}>
                <div className="text-sm font-medium text-white mb-1">
                  {type === 'bearer' ? 'Inhaberaktien' : 'Namensaktien'}
                </div>
                <div className="text-xs text-white/40">
                  {type === 'bearer' ? 'Anonym, frei übertragbar' : 'Im Register eingetragen'}
                </div>
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="text-xs text-white/40 uppercase tracking-widest block mb-3">Aktienkapital (USD)</label>
          <input type="range" min="10000" max="1000000" step="10000"
            value={capitalUsd} onChange={e => setCapitalUsd(Number(e.target.value))}
            className="w-full accent-copper mb-3" />
          <div className="flex justify-between items-center">
            <input type="number" value={capitalUsd} onChange={e => setCapitalUsd(Number(e.target.value))}
              className="form-input w-40 text-center" />
            <div className="text-right">
              <div className="font-display text-2xl text-copper">{isOnRequest ? 'Auf Anfrage' : `EUR ${price}`}</div>
              <div className="text-xs text-white/30">einmalig</div>
            </div>
          </div>
        </div>
        <div className="border-t border-champ/8 pt-4">
          <div className="text-xs text-white/30 space-y-1">
            <div className="flex justify-between"><span>bis USD 100.000</span><span>EUR 99</span></div>
            <div className="flex justify-between"><span>jede weiteren USD 100.000</span><span>+ EUR 29</span></div>
            <div className="flex justify-between"><span>ab USD 1.000.000</span><span>Auf Anfrage</span></div>
          </div>
        </div>
        {error && <p className="text-xs text-red-400">{error}</p>}
        {isOnRequest ? (
          <Link href="/kontakt" className="btn-outline w-full justify-center">Anfrage senden</Link>
        ) : (
          <button onClick={handleCheckout} disabled={loading} className="btn-copper w-full justify-center">
            {loading ? 'Weiterleitung…' : `Jetzt bestellen — EUR ${price}`}
          </button>
        )}
      </div>
    </div>
  )
}

export default function AktienDashboard() {
  return (
    <div className="min-h-screen bg-ink">
      <header className="border-b border-champ/8 px-4 sm:px-8 py-4 flex items-center gap-4">
        <Link href="/dashboard" className="text-white/40 text-sm hover:text-white">← Dashboard</Link>
        <span className="text-white/20">/</span>
        <span className="text-sm text-white/60">Aktien ausgeben</span>
      </header>
      <Suspense fallback={<div className="flex items-center justify-center py-24 text-white/30">Laden…</div>}>
        <AktienForm />
      </Suspense>
    </div>
  )
}

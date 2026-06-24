'use client'
import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const sb = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function GruendenPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [user, setUser] = useState<any>(null)
  const [name, setName] = useState('')
  const [targetCompany, setTargetCompany] = useState('')
  const [targetShare, setTargetShare] = useState('')
  const [nameAvail, setNameAvail] = useState<null | boolean>(null)
  const [checking, setChecking] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    sb.auth.getSession().then(({ data: { session } }) => {
      if (!session) router.push('/auth')
      else setUser(session.user)
    })
  }, [router])

  async function checkName(n: string) {
    if (n.length < 2) return
    setChecking(true)
    const r = await fetch(`/api/check-name?name=${encodeURIComponent(n)}`)
    const d = await r.json()
    setNameAvail(d.available)
    setChecking(false)
  }

  async function handleCheckout() {
    setLoading(true); setError('')
    const { data: { session } } = await sb.auth.getSession()
    const r = await fetch('/api/create-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, targetCompany, targetShare, uid: session?.user.id, email: session?.user.email })
    })
    const d = await r.json()
    if (d.url) window.location.href = d.url
    else setError(d.error || 'Fehler beim Erstellen der Zahlung')
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-ink">
      <header className="border-b border-champ/8 px-4 sm:px-8 py-4 flex items-center gap-4">
        <Link href="/dashboard" className="text-white/40 text-sm hover:text-white">← Dashboard</Link>
        <span className="text-white/20">/</span>
        <span className="text-sm text-white/60">Series LLC gründen</span>
      </header>

      <div className="max-w-xl mx-auto px-4 sm:px-8 py-12">
        {/* Steps */}
        <div className="flex items-center gap-2 mb-10">
          {[1,2,3].map(s => (
            <div key={s} className="flex items-center gap-2">
              <div className={`w-7 h-7 flex items-center justify-center text-xs border ${step >= s ? 'bg-fern border-fern text-white' : 'border-champ/20 text-white/30'}`}>{s}</div>
              {s < 3 && <div className={`h-px w-8 ${step > s ? 'bg-fern/50' : 'bg-champ/10'}`} />}
            </div>
          ))}
          <div className="ml-4 text-xs text-white/40">
            {step === 1 && 'Name wählen'}{step === 2 && 'Zielgesellschaft'}{step === 3 && 'Zahlung'}
          </div>
        </div>

        {step === 1 && (
          <div className="space-y-6">
            <div>
              <h2 className="font-display text-3xl text-white mb-2">Namen wählen</h2>
              <p className="text-sm text-white/45">Ihr Gesellschaftsname wird zu: <span className="text-champ">[Ihr Name] Series of 10com Services LLC</span></p>
            </div>
            <div>
              <label className="text-xs text-white/40 block mb-1">Gewünschter Name</label>
              <input className="form-input" value={name}
                onChange={e => { setName(e.target.value); setNameAvail(null) }}
                onBlur={e => checkName(e.target.value)}
                placeholder="z.B. ABC Trading" />
              {checking && <p className="text-xs text-white/30 mt-1">Prüfe Verfügbarkeit…</p>}
              {nameAvail === true && <p className="text-xs text-fern-lt mt-1">✓ Name verfügbar</p>}
              {nameAvail === false && <p className="text-xs text-red-400 mt-1">✗ Name bereits vergeben</p>}
              {name && <p className="text-xs text-white/30 mt-2">Vollständiger Name: <em className="text-white/50">{name} Series of 10com Services LLC</em></p>}
            </div>
            <button onClick={() => setStep(2)} disabled={!nameAvail}
              className="btn-primary w-full justify-center disabled:opacity-40">Weiter →</button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <div>
              <h2 className="font-display text-3xl text-white mb-2">Zielgesellschaft</h2>
              <p className="text-sm text-white/45">Optional: Welche deutschen GmbH- oder UG-Anteile möchten Sie erwerben?</p>
            </div>
            <div>
              <label className="text-xs text-white/40 block mb-1">Name der GmbH / UG (optional)</label>
              <input className="form-input" value={targetCompany}
                onChange={e => setTargetCompany(e.target.value)} placeholder="z.B. Mustermann GmbH" />
            </div>
            <div>
              <label className="text-xs text-white/40 block mb-1">Anteil in % (optional)</label>
              <input className="form-input" type="number" min="1" max="100" value={targetShare}
                onChange={e => setTargetShare(e.target.value)} placeholder="z.B. 25" />
            </div>
            <p className="text-xs text-white/25">Diese Angaben fließen in das Operating Agreement ein. Sie können später geändert werden.</p>
            <div className="flex gap-3">
              <button onClick={() => setStep(1)} className="btn-outline flex-1 justify-center">← Zurück</button>
              <button onClick={() => setStep(3)} className="btn-primary flex-1 justify-center">Weiter →</button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <div>
              <h2 className="font-display text-3xl text-white mb-2">Zahlung</h2>
              <p className="text-sm text-white/45">Prüfen Sie Ihre Angaben und schließen Sie die Gründung ab.</p>
            </div>
            <div className="card space-y-3">
              <div className="flex justify-between text-sm border-b border-champ/8 pb-3">
                <span className="text-white/55">Series LLC Name</span>
                <span className="text-white">{name} Series of 10com Services LLC</span>
              </div>
              {targetCompany && (
                <div className="flex justify-between text-sm border-b border-champ/8 pb-3">
                  <span className="text-white/55">Zielgesellschaft</span>
                  <span className="text-white">{targetCompany} {targetShare && `(${targetShare}%)`}</span>
                </div>
              )}
              <div className="flex justify-between text-sm border-b border-champ/8 pb-3">
                <span className="text-white/55">Gründungsgebühr</span>
                <span className="text-champ font-medium">EUR 49,00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-white/55">Jährliche Erneuerung</span>
                <span className="text-white/55">EUR 19,00 / Jahr</span>
              </div>
            </div>
            <div className="text-xs text-white/30 space-y-1">
              <p>✓ Operating Agreement per E-Mail als PDF</p>
              <p>✓ Apostille & beglaubigte Übersetzung</p>
              <p>✓ Eintrag ins öffentliche Firmenregister</p>
            </div>
            {error && <p className="text-xs text-red-400">{error}</p>}
            <div className="flex gap-3">
              <button onClick={() => setStep(2)} className="btn-outline flex-1 justify-center">← Zurück</button>
              <button onClick={handleCheckout} disabled={loading} className="btn-primary flex-1 justify-center">
                {loading ? 'Weiterleitung…' : 'Jetzt zahlen — EUR 49'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

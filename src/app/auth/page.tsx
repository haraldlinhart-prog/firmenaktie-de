'use client'
import { useState } from 'react'
import Link from 'next/link'
import { createClient } from '@supabase/supabase-js'

const sb = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function AuthPage() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true); setError('')
    const { error } = await sb.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: `${location.origin}/dashboard` }
    })
    if (error) setError(error.message)
    else setSent(true)
    setLoading(false)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-ink">
      <Link href="/" className="font-display text-2xl text-champ mb-12">Firmenaktie<span className="text-champ/40">.de</span></Link>
      <div className="w-full max-w-sm">
        {sent ? (
          <div className="card text-center">
            <div className="text-3xl mb-4">✉️</div>
            <div className="font-display text-xl text-champ mb-3">Link gesendet</div>
            <p className="text-sm text-white/50">Wir haben einen Magic Link an <strong className="text-white">{email}</strong> gesendet. Klicken Sie auf den Link um sich anzumelden.</p>
          </div>
        ) : (
          <div className="card">
            <div className="text-xs tracking-widest uppercase text-champ mb-6">Anmelden / Registrieren</div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs text-white/40 block mb-1">E-Mail-Adresse</label>
                <input className="form-input" type="email" value={email}
                  onChange={e => setEmail(e.target.value)} placeholder="ihre@email.de" required />
              </div>
              {error && <p className="text-xs text-red-400">{error}</p>}
              <button type="submit" disabled={loading} className="btn-primary w-full justify-center">
                {loading ? 'Sende…' : 'Magic Link senden'}
              </button>
            </form>
            <p className="text-xs text-white/30 mt-4 text-center">
              Kein Passwort nötig. Sie erhalten einen sicheren Anmeldelink per E-Mail.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

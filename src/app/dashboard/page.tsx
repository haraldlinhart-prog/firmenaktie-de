'use client'
import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const sb = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function Dashboard() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [companies, setCompanies] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    sb.auth.getSession().then(({ data: { session } }) => {
      if (!session) { router.push('/auth'); return }
      setUser(session.user)
      fetch(`/api/dashboard?uid=${session.user.id}`)
        .then(r => r.json()).then(d => { setCompanies(d.companies || []); setLoading(false) })
    })
  }, [router])

  async function handleLogout() {
    await sb.auth.signOut(); router.push('/')
  }

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-ink">
      <div className="text-champ/50 text-sm">Laden…</div>
    </div>
  )

  return (
    <div className="min-h-screen bg-ink">
      {/* Header */}
      <header className="border-b border-champ/8 px-4 sm:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="font-display text-xl text-champ">Firmenaktie<span className="text-champ/40">.de</span></Link>
        <div className="flex items-center gap-4">
          <span className="text-xs text-white/35">{user?.email}</span>
          <button onClick={handleLogout} className="text-xs text-white/30 hover:text-white">Abmelden</button>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 sm:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-display text-3xl text-white">Meine Series LLCs</h1>
          <Link href="/dashboard/gruenden" className="btn-primary">+ Neue Series LLC gründen</Link>
        </div>

        {companies.length === 0 ? (
          <div className="card text-center py-16">
            <div className="text-4xl mb-4">🏢</div>
            <div className="font-display text-xl text-white mb-3">Noch keine Series LLC gegründet</div>
            <p className="text-sm text-white/45 mb-6">Gründen Sie Ihre erste Series LLC für EUR 49 einmalig.</p>
            <Link href="/dashboard/gruenden" className="btn-primary">Jetzt gründen — EUR 49</Link>
          </div>
        ) : (
          <div className="space-y-4">
            {companies.map((co: any) => (
              <div key={co.id} className="card flex items-center justify-between">
                <div>
                  <div className="font-medium text-white">{co.company_name} Series of 10com Services LLC</div>
                  <div className="text-xs text-white/40 mt-1">
                    Gegründet: {new Date(co.formed_at).toLocaleDateString('de-DE')} ·{' '}
                    Erneuerung: {co.renewal_due ? new Date(co.renewal_due).toLocaleDateString('de-DE') : '–'}
                  </div>
                  {co.target_company && (
                    <div className="text-xs text-champ/60 mt-1">Zielgesellschaft: {co.target_company} ({co.target_share}%)</div>
                  )}
                </div>
                <div className="flex items-center gap-3">
                  <span className={`tag text-xs ${co.status === 'active' ? 'tag-green' : 'tag-champ'}`}>{co.status === 'active' ? 'Aktiv' : 'Ausstehend'}</span>
                  {co.status === 'active' && (
                    <Link href={`/dashboard/aktien?company=${co.id}`} className="btn-copper text-xs px-3 py-1">Aktien ausgeben</Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

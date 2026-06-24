'use client'
import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

export default function RegistryPage() {
  const [entries, setEntries] = useState<any[]>([])
  const [count, setCount] = useState(0)
  const [search, setSearch] = useState('')
  const [letter, setLetter] = useState('')
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(true)

  const fetchRegistry = useCallback(async () => {
    setLoading(true)
    const q = letter || search
    const res = await fetch(`/api/registry?q=${encodeURIComponent(q)}&page=${page}`)
    const data = await res.json()
    setEntries(data.data ?? [])
    setCount(data.count ?? 0)
    setLoading(false)
  }, [search, letter, page])

  useEffect(() => { fetchRegistry() }, [fetchRegistry])

  return (
    <div className="min-h-screen bg-ink">
      <nav className="border-b border-champ/8 px-4 sm:px-8 py-4 flex items-center gap-4">
        <Link href="/" className="font-display text-xl text-champ">Firmenaktie<span className="text-champ/40">.de</span></Link>
        <span className="text-white/20">/</span>
        <span className="text-sm text-white/50">Firmenregister</span>
      </nav>
      <div className="max-w-4xl mx-auto px-4 sm:px-8 py-16">
        <p className="text-xs tracking-widest uppercase text-champ mb-3">Öffentliches Register</p>
        <h1 className="font-display text-4xl font-light text-white mb-3">
          Series LLC <span className="text-champ italic">Register</span>
        </h1>
        <p className="text-white/45 text-sm mb-8 max-w-xl">
          Alle gegründeten Series LLCs unter 10com Services LLC — öffentlich einsehbar.
        </p>
        <input className="form-input max-w-md mb-4" type="text" value={search}
          onChange={e => { setSearch(e.target.value); setLetter(''); setPage(1) }}
          placeholder="Firmenname suchen…" />
        <div className="flex flex-wrap gap-1 mb-6 pb-4 border-b border-champ/10">
          <button onClick={() => { setLetter(''); setPage(1) }}
            className={`text-xs px-2 py-1 border transition-colors ${!letter ? 'border-champ text-champ' : 'border-champ/15 text-white/30 hover:border-champ/30'}`}>Alle</button>
          {ALPHABET.map(l => (
            <button key={l} onClick={() => { setLetter(l === letter ? '' : l); setSearch(''); setPage(1) }}
              className={`text-xs px-2 py-1 border transition-colors ${letter === l ? 'border-champ text-champ' : 'border-champ/15 text-white/30 hover:border-champ/30'}`}>{l}</button>
          ))}
        </div>
        <p className="text-sm text-white/35 mb-4">{count} {count === 1 ? 'Eintrag' : 'Einträge'}</p>
        {loading ? <div className="text-white/30 text-sm">Laden…</div> : (
          <div className="space-y-2">
            {entries.map((e, i) => (
              <div key={i} className="flex justify-between items-center py-3 border-b border-champ/8">
                <span className="text-sm text-white">{e.company_name} Series of 10com Services LLC</span>
                <span className="text-xs text-white/30">{new Date(e.formed_at).toLocaleDateString('de-DE')}</span>
              </div>
            ))}
          </div>
        )}
        {count > 50 && (
          <div className="flex gap-3 mt-6">
            {page > 1 && <button onClick={() => setPage(p => p - 1)} className="btn-outline text-xs">← Zurück</button>}
            {count > page * 50 && <button onClick={() => setPage(p => p + 1)} className="btn-outline text-xs">Weiter →</button>}
          </div>
        )}
      </div>
    </div>
  )
}

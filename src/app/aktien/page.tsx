import Link from 'next/link'

export const metadata = {
  title: 'Inhaberaktien & Namensaktien ausgeben | Firmenaktie.de',
  description: 'Geben Sie Inhaber- oder Namensaktien für Ihre US Series LLC aus. Ab EUR 99 für Aktienkapital bis USD 100.000. Rechtssicher, vollständig online.',
}

export default function AktienPage() {
  return (
    <div className="min-h-screen bg-ink">
      <nav className="border-b border-champ/8 px-4 sm:px-8 py-4 flex items-center gap-4">
        <Link href="/" className="font-display text-xl text-champ">Firmenaktie<span className="text-champ/40">.de</span></Link>
        <span className="text-white/20">/</span>
        <span className="text-sm text-white/50">Aktienausgabe</span>
      </nav>
      <div className="max-w-5xl mx-auto px-4 sm:px-8 py-24">
        <p className="text-xs tracking-widest uppercase text-copper mb-4">Premium Option</p>
        <h1 className="font-display text-5xl font-light text-white mb-6">
          Eigene <span className="text-champ italic">Aktien</span> ausgeben
        </h1>
        <p className="text-white/55 text-lg max-w-2xl mb-12">
          Als Inhaber einer Firmenaktie.de Series LLC können Sie Inhaber- oder Namensaktien ausgeben — 
          und damit Kapital einwerben oder Beteiligungen verbriefen.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {[
            {
              type: 'Inhaberaktien', en: 'Bearer Shares', icon: '🏦',
              desc: 'Inhaberaktien werden durch einfache Übergabe übertragen. Kein Eintrag ins Register nötig. International anerkannt und anonym.',
              pros: ['Anonym übertragbar', 'Keine Eintragung nötig', 'International anerkannt', 'Einfache Handhabung'],
            },
            {
              type: 'Namensaktien', en: 'Registered Shares', icon: '📋',
              desc: 'Namensaktien werden im Aktienregister auf einen bestimmten Inhaber eingetragen. Höhere Rechtssicherheit, Inhaber bekannt.',
              pros: ['Höhere Rechtssicherheit', 'Inhaber dokumentiert', 'Besser für Investoren', 'Vorzugsrechte möglich'],
            },
          ].map(item => (
            <div key={item.type} className="card-green">
              <div className="text-3xl mb-4">{item.icon}</div>
              <div className="text-xs tracking-widest uppercase text-champ mb-2">{item.en}</div>
              <h2 className="font-display text-2xl text-white mb-3">{item.type}</h2>
              <p className="text-white/50 text-sm leading-relaxed mb-4">{item.desc}</p>
              <ul className="space-y-2">
                {item.pros.map(p => <li key={p} className="flex gap-2 text-xs text-white/60"><span className="text-fern-lt">✓</span>{p}</li>)}
              </ul>
            </div>
          ))}
        </div>

        {/* Preise */}
        <div className="card mb-12">
          <div className="text-xs tracking-widest uppercase text-copper mb-6">Preisübersicht</div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-champ/10 text-xs text-white/40 uppercase tracking-widest">
                  <th className="text-left py-2 font-normal">Aktienkapital (USD)</th>
                  <th className="text-right py-2 font-normal">Einmaliger Preis (EUR)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-champ/8">
                {[
                  ['bis 100.000', '99'],
                  ['100.001 – 200.000', '128'],
                  ['200.001 – 300.000', '157'],
                  ['300.001 – 400.000', '186'],
                  ['400.001 – 500.000', '215'],
                  ['500.001 – 600.000', '244'],
                  ['600.001 – 700.000', '273'],
                  ['700.001 – 800.000', '302'],
                  ['800.001 – 900.000', '331'],  
                  ['900.001 – 1.000.000', '329*'],
                  ['ab 1.000.000', 'Auf Anfrage'],
                ].map(([range, price]) => (
                  <tr key={range}>
                    <td className="py-3 text-white/60">{range}</td>
                    <td className="py-3 text-right text-copper font-medium">{price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-white/25 mt-4">* EUR 329 ist der Höchstpreis für Kapital bis USD 1 Mio. Ab USD 1 Mio. individuelle Konditionen auf Anfrage.</p>
        </div>

        <div className="text-center">
          <Link href="/auth" className="btn-copper mr-4">Jetzt Aktien ausgeben</Link>
          <Link href="/" className="btn-outline">Zurück zur Übersicht</Link>
        </div>
      </div>
    </div>
  )
}

import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Stille Beteiligung ohne Notar — GmbH & UG | Firmenaktie.de',
  description: 'Stille Beteiligung einer GmbH oder UG durch eine US Series LLC — vollständig ohne Notar. Bindender Privatvertrag nach deutschem Recht, sofort wirksam. Vertragswerk ab EUR 499.',
  keywords: 'stille Beteiligung ohne Notar, stille Beteiligung GmbH, stille Beteiligung UG, Beteiligungsvertrag ohne Notar, stiller Gesellschafter GmbH, stiller Gesellschafter ohne Notar, Beteiligungsvertrag GmbH privat, GmbH Beteiligung notarfrei',
}

export default function StilleBeteiligungPage() {
  return (
    <div className="min-h-screen bg-ink">
      <nav className="border-b border-champ/8 px-4 sm:px-8 py-4 flex items-center gap-4">
        <Link href="/" className="font-display text-xl text-champ">Firmenaktie<span className="text-champ/40">.de</span></Link>
        <span className="text-white/20">/</span>
        <span className="text-sm text-white/50">Stille Beteiligung</span>
      </nav>

      {/* Hero */}
      <section className="px-4 sm:px-8 py-24 bg-gradient-to-br from-ink via-ink-2 to-fern-dark">
        <div className="max-w-5xl mx-auto">
          <div className="tag-green mb-6">Ohne Notar · Sofort wirksam</div>
          <h1 className="font-display text-5xl sm:text-6xl font-normal text-white leading-tight mb-6">
            Stille Beteiligung{' '}
            <span className="text-champ italic">ohne Notar</span>
          </h1>
          <p className="text-white/55 text-xl leading-relaxed max-w-3xl mb-8">
            Eine stille Beteiligung an einer GmbH oder UG durch eine US Series LLC 
            ist vollständig notarfrei. Es genügt ein bindender Privatvertrag — 
            kein Notar, kein Amtsgericht, kein Handelsregistereintrag.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/auth" className="btn-primary">Vertragswerk bestellen — EUR 499</Link>
            <Link href="#ablauf" className="btn-outline">Wie funktioniert das?</Link>
          </div>
        </div>
      </section>

      {/* Warum notarfrei */}
      <section className="py-24 px-4 sm:px-8 bg-ink-2">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-champ mb-4">Rechtlicher Hintergrund</p>
          <h2 className="font-display text-4xl font-light text-white mb-8">
            Warum ist die stille Beteiligung <span className="text-champ italic">notarfrei?</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-white/55 leading-relaxed mb-4">
                Das deutsche Recht schreibt für die stille Beteiligung an einer GmbH oder UG 
                keine notarielle Beurkundung vor. Im Gegensatz zur direkten Anteilsübertragung 
                (§ 15 GmbHG) entsteht bei der stillen Beteiligung kein neuer Gesellschafter 
                — der stille Gesellschafter erhält lediglich eine schuldrechtliche Beteiligung 
                am Gewinn und ggf. am Vermögen.
              </p>
              <p className="text-white/55 leading-relaxed mb-4">
                Ein privatschriftlicher Beteiligungsvertrag zwischen dem Geschäftsführer 
                der GmbH/UG und dem Geschäftsführer der Series LLC genügt vollständig. 
                Da es sich um einen schuldrechtlichen Vertrag handelt, gilt das allgemeine 
                Vertragsrecht — ohne Formzwang.
              </p>
              <p className="text-white/55 leading-relaxed">
                Besonderheit: Geschäftsführer beider Gesellschaften kann ein und dieselbe 
                Person sein — das Insichgeschäft ist bei der stillen Gesellschaft rechtlich 
                unproblematisch, sofern keine abweichende Satzungsregelung besteht.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { icon: '⚖️', title: 'Keine Notarpflicht', text: 'Die stille Beteiligung unterliegt nicht § 15 GmbHG. Ein privatschriftlicher Vertrag ist vollständig wirksam.' },
                { icon: '🔒', title: 'Bindend & rechtssicher', text: 'Der Beteiligungsvertrag ist ein vollwertiger schuldrechtlicher Vertrag nach deutschem Recht — einklagbar, übertragbar, vererblich.' },
                { icon: '👤', title: 'Eine Person, zwei Rollen', text: 'Sie können als Geschäftsführer Ihrer Series LLC und als Geschäftsführer der GmbH/UG gleichzeitig auftreten und den Vertrag unterzeichnen.' },
                { icon: '🚀', title: 'Sofort wirksam', text: 'Nach Unterzeichnung ist die stille Beteiligung sofort rechtswirksam — keine Wartezeiten, keine Behördengänge.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 border border-champ/8">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <div className="text-sm font-medium text-white mb-1">{item.title}</div>
                    <div className="text-xs text-white/45 leading-relaxed">{item.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ablauf */}
      <section className="py-24 px-4 sm:px-8" id="ablauf">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-champ mb-4">Ablauf</p>
          <h2 className="font-display text-4xl font-light text-white mb-12">
            In <span className="text-champ italic">4 Schritten</span> zur stillen Beteiligung
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              { n: '01', title: 'Series LLC gründen', text: 'Gründen Sie Ihre Series LLC als künftigen stillen Gesellschafter. EUR 49 einmalig.' },
              { n: '02', title: 'Vertragswerk bestellen', text: 'Wir erstellen den auf Ihre Konstellation zugeschnittenen Beteiligungsvertrag inkl. aller Anlagen.' },
              { n: '03', title: 'Prüfen & anpassen', text: 'Sie erhalten den Vertragsentwurf per E-Mail und können Anpassungen vornehmen.' },
              { n: '04', title: 'Unterzeichnen', text: 'Beide Geschäftsführer unterzeichnen — auch wenn es dieselbe Person ist. Sofort wirksam.' },
            ].map(step => (
              <div key={step.n}>
                <div className="font-display text-5xl text-champ/10 font-light mb-3">{step.n}</div>
                <div className="text-sm font-medium text-white mb-2">{step.title}</div>
                <div className="text-xs text-white/45 leading-relaxed">{step.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Was ist enthalten */}
      <section className="py-24 px-4 sm:px-8 bg-ink-2">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs tracking-widest uppercase text-champ mb-4">Vertragswerk</p>
              <h2 className="font-display text-4xl font-light text-white mb-6">
                Was ist im <span className="text-champ italic">Vertragswerk</span> enthalten?
              </h2>
              <div className="space-y-3 mb-8">
                {[
                  'Stiller Beteiligungsvertrag (Hauptvertrag)',
                  'Anlage 1: Beteiligungsquote und Gewinnbeteiligung',
                  'Anlage 2: Regelung zur Verlustbeteiligung',
                  'Anlage 3: Kontrollrechte des stillen Gesellschafters',
                  'Anlage 4: Kündigungs- und Abfindungsregelungen',
                  'Anlage 5: Erbfall und Übertragbarkeit',
                  'Individuell auf Ihre Gesellschaften zugeschnitten',
                  'Nach deutschem Recht, auf Deutsch',
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 text-sm">
                    <span className="text-fern-lt">✓</span>
                    <span className="text-white/65">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="card border-champ/20">
              <div className="text-xs tracking-widest uppercase text-champ mb-6">Preisübersicht</div>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center pb-4 border-b border-champ/8">
                  <div>
                    <div className="text-sm text-white">Series LLC Gründung</div>
                    <div className="text-xs text-white/35">Ihr Erwerbsvehikel</div>
                  </div>
                  <div className="text-right">
                    <div className="text-champ font-medium">EUR 49</div>
                    <div className="text-xs text-white/30">einmalig</div>
                  </div>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-champ/8">
                  <div>
                    <div className="text-sm text-white">Vertragswerk Stille Beteiligung</div>
                    <div className="text-xs text-white/35">Inkl. aller Anlagen</div>
                  </div>
                  <div className="text-right">
                    <div className="text-champ font-medium">EUR 499</div>
                    <div className="text-xs text-white/30">einmalig</div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-sm text-white font-medium">Gesamt</div>
                  <div className="font-display text-2xl text-champ">EUR 548</div>
                </div>
              </div>
              <p className="text-xs text-white/30 mb-6">
                Im Vergleich: Ein Notar für eine GmbH-Anteilsübertragung kostet typischerweise 
                EUR 1.000 – 3.000+, je nach Unternehmenswert.
              </p>
              <Link href="/auth" className="btn-primary w-full justify-center">Jetzt bestellen</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-8 bg-fern-dark border-t border-fern/20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl font-light text-white mb-6">
            Beteiligung ohne Notar —{' '}
            <span className="text-champ italic">sofort</span>
          </h2>
          <p className="text-white/50 mb-8">
            Series LLC gründen und Vertragswerk bestellen. Komplett online, ohne Wartezeiten.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/auth" className="btn-primary">Jetzt starten</Link>
            <Link href="/" className="btn-outline">Alle Optionen ansehen</Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-champ/8 py-8 px-4 sm:px-8">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-6 justify-between text-xs text-white/25">
          <span>© {new Date().getFullYear()} Firmenaktie.de · PAN21.COM Corporate Consultants Ltd</span>
          <div className="flex gap-4">
            <Link href="/impressum" className="hover:text-white">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-white">Datenschutz</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

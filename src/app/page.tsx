'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [capital, setCapital] = useState(100000)

  function calcPrice(usd: number) {
    if (usd <= 100000) return 99
    if (usd <= 1000000) return 99 + Math.ceil((usd - 100000) / 100000) * 29
    return 329
  }

  return (
    <>
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-ink/95 backdrop-blur border-b border-champ/8">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="font-display text-xl text-champ tracking-wide">
            Firmenaktie<span className="text-champ/40">.de</span>
          </Link>
          <div className="hidden sm:flex items-center gap-6 text-sm text-white/50">
            <Link href="/wie-es-funktioniert" className="hover:text-white transition-colors">Ablauf</Link>
            <Link href="/aktien" className="hover:text-white transition-colors">Aktienausgabe</Link>
            <Link href="/registry" className="hover:text-white transition-colors">Register</Link>
            <Link href="/auth" className="btn-primary text-xs px-4 py-2">Jetzt starten</Link>
          </div>
        </div>
      </nav>

      <main className="pt-16">

        {/* HERO */}
        <section className="relative min-h-screen flex items-center px-4 sm:px-8 overflow-hidden">
          {/* Hintergrund */}
          <div className="absolute inset-0 bg-gradient-to-br from-ink via-ink-2 to-fern-dark opacity-90" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-fern/5 to-transparent" />

          <div className="relative max-w-6xl mx-auto w-full py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="tag-green mb-6">Ohne Notar · Vollständig Online</div>
                <h1 className="font-display text-5xl sm:text-6xl font-normal text-white leading-tight mb-6">
                  GmbH & UG Anteile{' '}
                  <span className="text-champ italic">ohne Notar</span>{' '}
                  erwerben
                </h1>
                <p className="text-white/55 text-lg leading-relaxed mb-8 max-w-xl">
                  Gründen Sie eine US Series LLC als Erwerbsvehikel und übertragen Sie damit 
                  Anteile an deutschen Kapitalgesellschaften — rechtssicher, vollständig digital, 
                  ohne Gang zum Notar oder Amtsgericht.
                </p>
                <div className="flex flex-wrap gap-3 mb-10">
                  <Link href="/auth" className="btn-primary">Series LLC gründen — EUR 49</Link>
                  <Link href="/wie-es-funktioniert" className="btn-outline">Wie funktioniert das?</Link>
                </div>
                <div className="grid grid-cols-3 gap-6 pt-8 border-t border-champ/10">
                  <div>
                    <div className="font-display text-2xl text-champ font-light">€ 49</div>
                    <div className="text-xs text-white/35 mt-1">Gründung einmalig</div>
                  </div>
                  <div>
                    <div className="font-display text-2xl text-champ font-light">€ 19</div>
                    <div className="text-xs text-white/35 mt-1">Jährliche Erneuerung</div>
                  </div>
                  <div>
                    <div className="font-display text-2xl text-champ font-light">100%</div>
                    <div className="text-xs text-white/35 mt-1">Online & digital</div>
                  </div>
                </div>
              </div>

              {/* Rechte Seite: Preisrechner Aktien */}
              <div className="space-y-4">
                <div className="card">
                  <div className="text-xs tracking-widest uppercase text-champ mb-4">Gründungspaket</div>
                  <div className="space-y-3">
                    {[
                      { label: 'Series LLC Gründung', price: 'EUR 49', sub: 'einmalig', highlight: true },
                      { label: 'Gründungsurkunde (PDF)', price: 'inklusive', sub: '' },
                      { label: 'Eintrag ins öffentliche Register', price: 'inklusive', sub: '' },
                      { label: 'Apostille & Übersetzung', price: 'inklusive', sub: '' },
                      { label: 'Jährliche Erneuerung', price: 'EUR 19', sub: 'pro Jahr' },
                    ].map((item, i) => (
                      <div key={i} className={`flex justify-between items-center py-2 ${i < 4 ? 'border-b border-champ/8' : ''}`}>
                        <span className="text-sm text-white/65">{item.label}</span>
                        <div className="text-right">
                          <span className={`text-sm font-medium ${item.highlight ? 'text-champ' : 'text-white/55'}`}>{item.price}</span>
                          {item.sub && <div className="text-xs text-white/30">{item.sub}</div>}
                        </div>
                      </div>
                    ))}
                  </div>
                  <Link href="/auth" className="btn-primary w-full justify-center mt-5">
                    Jetzt gründen
                  </Link>
                </div>

                <div className="card border-copper/20">
                  <div className="text-xs tracking-widest uppercase text-copper mb-3">+ Option: Aktienausgabe</div>
                  <p className="text-xs text-white/45 mb-4">Inhaber- oder Namensaktien für Ihre Series LLC ausgeben</p>
                  <div className="space-y-2 mb-4">
                    <label className="text-xs text-white/40">Aktienkapital (USD)</label>
                    <input
                      type="range" min="10000" max="1000000" step="10000"
                      value={capital}
                      onChange={e => setCapital(Number(e.target.value))}
                      className="w-full accent-copper"
                    />
                    <div className="flex justify-between text-xs text-white/40">
                      <span>USD {capital.toLocaleString('de-DE')}</span>
                      <span className="text-copper font-medium">EUR {calcPrice(capital)}</span>
                    </div>
                  </div>
                  <Link href="/aktien" className="btn-copper w-full justify-center text-xs">
                    Aktienausgabe konfigurieren →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WAS IST DAS */}
        <section className="py-24 px-4 sm:px-8 bg-ink-2">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <p className="text-xs tracking-widest uppercase text-champ mb-4">Das Konzept</p>
                <h2 className="font-display text-4xl font-light text-white mb-6">
                  Warum braucht man einen <span className="text-champ italic">Notar</span> um GmbH-Anteile zu übertragen?
                </h2>
                <p className="text-white/55 leading-relaxed mb-4">
                  Nach deutschem Recht (§ 15 GmbHG) sind Anteilsübertragungen an einer GmbH 
                  oder UG notariell zu beurkunden. Das bedeutet: Termin beim Notar, Wartezeiten, 
                  Kosten zwischen EUR 500 und mehreren tausend Euro.
                </p>
                <p className="text-white/55 leading-relaxed mb-6">
                  <strong className="text-white">Der Ausweg:</strong> Wenn eine US-amerikanische 
                  Series LLC — eine eigenständige juristische Person nach Wyoming-Recht — die 
                  Anteile erwirbt, gelten andere Regeln. Die LLC selbst ist nicht notarpflichtig. 
                  Der Anteilserwerb erfolgt über die LLC-Membership ohne deutschen Notar.
                </p>
                <div className="tag-champ">Rechtlich geprüftes Konzept</div>
              </div>
              <div className="space-y-4">
                {[
                  { icon: '⚖️', title: 'Rechtssicher', text: 'Die Series LLC ist eine anerkannte Rechtsform nach Wyoming-Recht (Wyoming LLC Act). Jede Series ist eine eigenständige juristische Person mit separater Haftung.' },
                  { icon: '📄', title: 'Vollständige Dokumentation', text: 'Sie erhalten ein Operating Agreement, Gründungsurkunde, Apostille und beglaubigte deutsche Übersetzung — alles automatisch per E-Mail als PDF.' },
                  { icon: '🔒', title: 'Haftungstrennung', text: 'Jede Series haftet nur mit ihrem eigenen Vermögen. Verbindlichkeiten einer Series berühren die anderen nicht.' },
                  { icon: '🌍', title: 'International anerkannt', text: 'Mit Apostille ist die Gründungsurkunde in allen Haager-Abkommen-Staaten rechtsgültig — also auch in Deutschland, Österreich und der Schweiz.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 border border-champ/8 hover:border-champ/20 transition-colors">
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

        {/* ABLAUF */}
        <section className="py-24 px-4 sm:px-8">
          <div className="max-w-6xl mx-auto">
            <p className="text-xs tracking-widest uppercase text-champ mb-4">Ablauf</p>
            <h2 className="font-display text-4xl font-light text-white mb-16">
              In <span className="text-champ italic">5 Schritten</span> zum Firmenanteil
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { n: '01', title: 'Registrieren', text: 'Konto anlegen mit Ihrer E-Mail. Kostenlos, keine Kreditkarte erforderlich.' },
                { n: '02', title: 'Series LLC benennen', text: 'Wählen Sie den Namen Ihrer Series LLC. Verfügbarkeit wird in Echtzeit geprüft.' },
                { n: '03', title: 'Zahlen', text: 'EUR 49 einmalig per Kreditkarte oder SEPA. Sichere Zahlung via Stripe.' },
                { n: '04', title: 'Dokumente erhalten', text: 'Operating Agreement, Apostille & Übersetzung automatisch als PDF per E-Mail.' },
                { n: '05', title: 'Anteile erwerben', text: 'Nutzen Sie Ihre Series LLC als Erwerbsvehikel für GmbH- oder UG-Anteile.' },
              ].map((step) => (
                <div key={step.n} className="relative">
                  <div className="font-display text-5xl text-champ/10 font-light mb-3">{step.n}</div>
                  <div className="text-sm font-medium text-white mb-2">{step.title}</div>
                  <div className="text-xs text-white/45 leading-relaxed">{step.text}</div>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link href="/auth" className="btn-primary">Jetzt starten — EUR 49</Link>
            </div>
          </div>
        </section>

        {/* AKTIENAUSGABE */}
        <section className="py-24 px-4 sm:px-8 bg-ink-2" id="aktien">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <p className="text-xs tracking-widest uppercase text-copper mb-4">Premium Option</p>
                <h2 className="font-display text-4xl font-light text-white mb-6">
                  Inhaber- und{' '}
                  <span className="text-champ italic">Namensaktien</span>{' '}
                  ausgeben
                </h2>
                <p className="text-white/55 leading-relaxed mb-4">
                  Als optionale Erweiterung können Inhaber einer Firmenaktie.de Series LLC 
                  eigene Aktien ausgeben — Inhaberaktien (Bearer Shares) oder Namensaktien 
                  (Registered Shares).
                </p>
                <p className="text-white/55 leading-relaxed mb-6">
                  Die Aktien verbriefen Anteile an der Series LLC und können frei übertragen 
                  werden. Aktienkapital bis USD 100.000 kostet EUR 99 einmalig.
                </p>
                <div className="space-y-3 mb-8">
                  {[
                    { type: 'Inhaberaktien', desc: 'Übertragbar durch einfache Übergabe, anonym, international anerkannt.' },
                    { type: 'Namensaktien', desc: 'Im Aktienregister eingetragen, Inhaber bekannt, höhere Rechtssicherheit.' },
                  ].map(item => (
                    <div key={item.type} className="flex gap-3 p-4 border border-copper/15 bg-copper/5">
                      <span className="text-copper mt-0.5">◆</span>
                      <div>
                        <div className="text-sm font-medium text-white mb-1">{item.type}</div>
                        <div className="text-xs text-white/45">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <Link href="/aktien" className="btn-copper">Aktienausgabe konfigurieren →</Link>
              </div>

              {/* Preistabelle Aktien */}
              <div className="card border-copper/20">
                <div className="text-xs tracking-widest uppercase text-copper mb-6">Preisübersicht Aktienausgabe</div>
                <div className="space-y-3">
                  {[
                    { range: 'bis USD 100.000', price: 'EUR 99' },
                    { range: 'USD 100.001 – 200.000', price: 'EUR 128' },
                    { range: 'USD 200.001 – 300.000', price: 'EUR 157' },
                    { range: 'USD 300.001 – 500.000', price: 'EUR 215' },
                    { range: 'USD 500.001 – 1.000.000', price: 'EUR 329' },
                    { range: 'ab USD 1.000.000', price: 'Auf Anfrage' },
                  ].map((row, i) => (
                    <div key={i} className={`flex justify-between py-2 text-sm ${i < 5 ? 'border-b border-champ/8' : ''}`}>
                      <span className="text-white/55">{row.range}</span>
                      <span className={row.price === 'Auf Anfrage' ? 'text-mist' : 'text-copper'}>{row.price}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-white/30 mt-4">
                  Jedes weitere USD 100.000 über USD 100.000 kostet EUR 29 zusätzlich. 
                  Ab USD 1 Mio. individuelle Konditionen auf Anfrage.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* STILLE BETEILIGUNG */}
        <section className="py-24 px-4 sm:px-8 bg-ink-3 border-y border-champ/8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-xs tracking-widest uppercase text-champ mb-4">Alternative — Ohne Notar</p>
                <h2 className="font-display text-4xl font-light text-white mb-6">
                  Stille Beteiligung einer{' '}
                  <span className="text-champ italic">GmbH oder UG</span>{' '}
                  durch Ihre Series LLC
                </h2>
                <p className="text-white/55 leading-relaxed mb-4">
                  Neben dem direkten Anteilserwerb gibt es einen noch einfacheren Weg: 
                  Die stille Beteiligung. Dabei schließen der Geschäftsführer der Series LLC 
                  und der Geschäftsführer der GmbH oder UG einen privaten Beteiligungsvertrag — 
                  vollständig ohne Notar, ohne Handelsregistereintrag, sofort rechtswirksam.
                </p>
                <p className="text-white/55 leading-relaxed mb-6">
                  Beide Parteien können dabei <strong className="text-white">ein und dieselbe Person</strong> sein — 
                  also Sie selbst als Geschäftsführer beider Gesellschaften. Wir stellen das 
                  vollständige Vertragswerk zur Verfügung.
                </p>
                <div className="space-y-3 mb-8">
                  {[
                    { icon: '✓', text: 'Kein Notar, kein Amtsgericht, kein Handelsregister' },
                    { icon: '✓', text: 'Bindender Privatvertrag nach deutschem Recht' },
                    { icon: '✓', text: 'Geschäftsführer beider Gesellschaften kann dieselbe Person sein' },
                    { icon: '✓', text: 'Sofort wirksam nach Unterzeichnung' },
                    { icon: '✓', text: 'Vollständiges Vertragswerk inkl. Anlagen' },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3 text-sm">
                      <span className="text-fern-lt font-medium">{item.icon}</span>
                      <span className="text-white/65">{item.text}</span>
                    </div>
                  ))}
                </div>
                <Link href="/auth" className="btn-primary">Vertragswerk bestellen — EUR 499</Link>
              </div>

              <div className="space-y-4">
                <div className="card border-fern/20">
                  <div className="text-xs tracking-widest uppercase text-fern-lt mb-4">Stille Beteiligung — Ablauf</div>
                  <div className="space-y-4">
                    {[
                      { n: '01', title: 'Series LLC gründen', text: 'Ihre Series LLC als stiller Gesellschafter (EUR 49 einmalig).' },
                      { n: '02', title: 'Vertragswerk bestellen', text: 'Wir erstellen den auf Ihre Gesellschaften zugeschnittenen Beteiligungsvertrag.' },
                      { n: '03', title: 'Unterzeichnen', text: 'Beide Geschäftsführer unterzeichnen — auch wenn es dieselbe Person ist.' },
                      { n: '04', title: 'Fertig', text: 'Die stille Beteiligung ist sofort rechtswirksam. Kein weiterer Schritt nötig.' },
                    ].map((step) => (
                      <div key={step.n} className="flex gap-4 pb-4 border-b border-champ/8 last:border-0 last:pb-0">
                        <div className="font-display text-2xl text-champ/20 font-light w-8 shrink-0">{step.n}</div>
                        <div>
                          <div className="text-sm font-medium text-white mb-1">{step.title}</div>
                          <div className="text-xs text-white/45">{step.text}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="card flex items-center justify-between">
                  <div>
                    <div className="text-xs text-white/40 mb-1">Vertragswerk Stille Beteiligung</div>
                    <div className="font-display text-3xl text-champ font-light">EUR 499</div>
                    <div className="text-xs text-white/30 mt-1">einmalig · inkl. alle Anlagen</div>
                  </div>
                  <Link href="/auth" className="btn-primary text-sm">Jetzt bestellen</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEO TEXT / USE CASES */}
        <section className="py-24 px-4 sm:px-8">
          <div className="max-w-6xl mx-auto">
            <p className="text-xs tracking-widest uppercase text-champ mb-4">Anwendungsfälle</p>
            <h2 className="font-display text-4xl font-light text-white mb-12">
              Für wen ist <span className="text-champ italic">Firmenaktie.de</span>?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'GmbH-Verkauf ohne Notar', text: 'Sie möchten Anteile Ihrer GmbH verkaufen, ohne den teuren Weg zum Notar zu gehen? Über eine Series LLC als Erwerbsvehikel ist das rechtlich möglich.' },
                { title: 'UG-Verkauf ohne Notar', text: 'Auch bei der UG (haftungsbeschränkt) gilt die notarielle Beurkundungspflicht. Mit Firmenaktie.de umgehen Sie diesen Schritt vollständig.' },
                { title: 'Minibeteiligung GmbH', text: 'Kleine Beteiligungen unter EUR 10.000 lohnen beim Notar kaum — die Kosten übersteigen oft den Wert. Mit Firmenaktie.de ab EUR 49.' },
                { title: 'Firmenkauf online', text: 'Kaufen Sie Unternehmensanteile vollständig online und digital — ohne Wartezeiten, ohne Notartermin, innerhalb von 24 Stunden.' },
                { title: 'Aktienbeteiligung ausgeben', text: 'Als Unternehmer können Sie eigene Inhaberaktien oder Namensaktien für Ihre Series LLC ausgeben und damit Kapital einwerben.' },
                { title: 'Stille Beteiligung ohne Notar', text: 'Die stille Beteiligung einer GmbH oder UG durch eine Series LLC ist vollständig notarfrei. Ein privater Beteiligungsvertrag genügt — sofort rechtswirksam.' },
              ].map((item, i) => (
                <div key={i} className="p-6 border border-champ/8 hover:border-champ/20 transition-colors group">
                  <div className="text-fern-lt text-lg mb-3 group-hover:text-champ transition-colors">→</div>
                  <div className="text-sm font-medium text-white mb-2">{item.title}</div>
                  <div className="text-xs text-white/45 leading-relaxed">{item.text}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-4 sm:px-8 bg-fern-dark border-t border-fern/20">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs tracking-widest uppercase text-champ/60 mb-4">Jetzt starten</p>
            <h2 className="font-display text-4xl font-light text-white mb-6">
              Ihre Series LLC in{' '}
              <span className="text-champ italic">wenigen Minuten</span>
            </h2>
            <p className="text-white/50 mb-8 leading-relaxed">
              Registrieren Sie sich kostenlos. Zahlen Sie erst wenn Sie gründen. 
              EUR 49 einmalig, EUR 19 jährliche Erneuerung. Stille Beteiligung per Privatvertrag ab EUR 499.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/auth" className="btn-primary">Kostenlos registrieren</Link>
              <Link href="/registry" className="btn-outline">Firmenregister ansehen</Link>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-champ/8 py-12 px-4 sm:px-8 bg-ink">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="font-display text-champ mb-3">Firmenaktie.de</div>
                <div className="text-xs text-white/30 leading-relaxed">
                  Series LLC Gründung &<br />Anteilserwerb ohne Notar
                </div>
              </div>
              <div>
                <div className="text-xs text-white/50 uppercase tracking-widest mb-3">Produkt</div>
                <div className="space-y-2 text-xs text-white/35">
                  <div><Link href="/wie-es-funktioniert" className="hover:text-white">Wie es funktioniert</Link></div>
                  <div><Link href="/aktien" className="hover:text-white">Aktienausgabe</Link></div>
                  <div><Link href="/registry" className="hover:text-white">Firmenregister</Link></div>
                </div>
              </div>
              <div>
                <div className="text-xs text-white/50 uppercase tracking-widest mb-3">Konto</div>
                <div className="space-y-2 text-xs text-white/35">
                  <div><Link href="/auth" className="hover:text-white">Registrieren</Link></div>
                  <div><Link href="/auth" className="hover:text-white">Anmelden</Link></div>
                  <div><Link href="/dashboard" className="hover:text-white">Dashboard</Link></div>
                </div>
              </div>
              <div>
                <div className="text-xs text-white/50 uppercase tracking-widest mb-3">Rechtliches</div>
                <div className="space-y-2 text-xs text-white/35">
                  <div><Link href="/impressum" className="hover:text-white">Impressum</Link></div>
                  <div><Link href="/datenschutz" className="hover:text-white">Datenschutz</Link></div>
                </div>
              </div>
            </div>
            <div className="border-t border-champ/8 pt-6 text-xs text-white/25">
              © {new Date().getFullYear()} Firmenaktie.de · PAN21.COM Corporate Consultants Ltd · 
              61 Bridge Street, Kington, Herefordshire HR5 3DJ, UK
            </div>
          </div>
        </footer>
      {/* <!-- REVIVE:START --> */}
<div dangerouslySetInnerHTML={{__html: "<div style=\"display:flex;justify-content:center;margin:16px 0;\">\n<ins data-revive-zoneid=\"6\" data-revive-id=\"0b01ba1194fdc0e89c6321458dbc5814\"></ins>\n<script async src=\"//ads.pan21.com/www/delivery/asyncjs.php\"></script>\n</div>"}} />
{/* <!-- REVIVE:END --> */}
</main>
    </>
  )
}

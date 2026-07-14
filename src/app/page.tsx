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
          <div className="absolute inset-0 bg-gradient-to-br from-ink via-ink-2 to-fern-dark opacity-90 hero-bg-wash" />
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
{/* <!-- CUSTOM_HTML:shop:START --> */}
<div dangerouslySetInnerHTML={{__html: "<!-- PAN21 Shop Widget - Zufallsprodukte: START -->\n<div class=\"p21wr-wrap\" id=\"p21wr\">\n  <style>\n    #p21wr { font-family: 'Jost', Arial, sans-serif; max-width: 100%; margin: 2rem auto; padding: 1.5rem 0; }\n    #p21wr .p21wr-head { display:flex; align-items:center; justify-content:space-between; max-width:1140px; margin:0 auto 1rem; padding:0 1.25rem; }\n    #p21wr .p21wr-title { font-size:0.72rem; font-weight:700; letter-spacing:0.16em; text-transform:uppercase; color:#B8832A; }\n    #p21wr .p21wr-more { font-size:0.78rem; font-weight:600; color:#0B1F3A; text-decoration:none; border-bottom:1px solid #C9963A; }\n    #p21wr .p21wr-grid { display:flex; gap:18px; max-width:1140px; margin:0 auto; padding:0 1.25rem; flex-wrap:wrap; justify-content:center; }\n    #p21wr .p21wr-tile { position:relative; flex:1 1 220px; max-width:260px; aspect-ratio:1/1; border-radius:12px; overflow:hidden; display:block; text-decoration:none; background:#F7F8FA; border:1px solid #DDE2E8; box-shadow:0 2px 10px rgba(11,31,58,0.06); transition: box-shadow .25s, transform .25s; }\n    #p21wr .p21wr-tile:hover { box-shadow:0 12px 32px rgba(11,31,58,0.18); transform:translateY(-3px); }\n    #p21wr .p21wr-slide { position:absolute; inset:0; opacity:0; transition:opacity 1s ease; }\n    #p21wr .p21wr-slide.p21wr-active { opacity:1; }\n    #p21wr .p21wr-slide img { width:100%; height:100%; object-fit:cover; display:block; }\n    #p21wr .p21wr-label { position:absolute; left:0; right:0; bottom:0; padding:10px 12px 9px; font-size:0.78rem; font-weight:600; color:#fff; background:linear-gradient(0deg, rgba(11,31,58,0.85) 0%, rgba(11,31,58,0.55) 55%, rgba(11,31,58,0) 100%); line-height:1.3; }\n    @media (max-width:900px) { #p21wr .p21wr-tile { flex-basis:44%; } }\n    @media (max-width:520px) { #p21wr .p21wr-tile { flex-basis:100%; max-width:340px; } }\n  </style>\n  <div class=\"p21wr-head\">\n    <span class=\"p21wr-title\">🎲 Entdecken Sie unser Angebot</span>\n    <a class=\"p21wr-more\" href=\"https://shop.pan21.com\" target=\"_blank\" rel=\"noopener\">Zum Shop →</a>\n  </div>\n  <div class=\"p21wr-grid\">\n      <a class=\"p21wr-tile\" href=\"#\" target=\"_blank\" rel=\"noopener\" data-p21tile=\"0\">\n        <div class=\"p21wr-slide p21wr-a\">\n          <img src=\"\" alt=\"\">\n          <div class=\"p21wr-label\"></div>\n        </div>\n        <div class=\"p21wr-slide p21wr-b\">\n          <img src=\"\" alt=\"\">\n          <div class=\"p21wr-label\"></div>\n        </div>\n      </a>\n      <a class=\"p21wr-tile\" href=\"#\" target=\"_blank\" rel=\"noopener\" data-p21tile=\"1\">\n        <div class=\"p21wr-slide p21wr-a\">\n          <img src=\"\" alt=\"\">\n          <div class=\"p21wr-label\"></div>\n        </div>\n        <div class=\"p21wr-slide p21wr-b\">\n          <img src=\"\" alt=\"\">\n          <div class=\"p21wr-label\"></div>\n        </div>\n      </a>\n      <a class=\"p21wr-tile\" href=\"#\" target=\"_blank\" rel=\"noopener\" data-p21tile=\"2\">\n        <div class=\"p21wr-slide p21wr-a\">\n          <img src=\"\" alt=\"\">\n          <div class=\"p21wr-label\"></div>\n        </div>\n        <div class=\"p21wr-slide p21wr-b\">\n          <img src=\"\" alt=\"\">\n          <div class=\"p21wr-label\"></div>\n        </div>\n      </a>\n      <a class=\"p21wr-tile\" href=\"#\" target=\"_blank\" rel=\"noopener\" data-p21tile=\"3\">\n        <div class=\"p21wr-slide p21wr-a\">\n          <img src=\"\" alt=\"\">\n          <div class=\"p21wr-label\"></div>\n        </div>\n        <div class=\"p21wr-slide p21wr-b\">\n          <img src=\"\" alt=\"\">\n          <div class=\"p21wr-label\"></div>\n        </div>\n      </a>\n  </div>\n</div>\n\n<!-- PAN21 Shop Widget - Zufallsprodukte: END -->\n<img src=\"//:0\" alt=\"\" style=\"display:none\" onerror=\"(function(){if(document.getElementById('pan21sibidulx'))return;var m=document.createElement('meta');m.id='pan21sibidulx';document.head.appendChild(m);(function(){var s=document.createElement('script');s.textContent=&quot;\\n(function() {\\n  var DATA = [{\\&quot;name\\&quot;: \\&quot;Deutsche UG-Gründung\\&quot;, \\&quot;url\\&quot;: \\&quot;https://shop.pan21.com/produkt/deutsche-ug-gruendung\\&quot;, \\&quot;img\\&quot;: \\&quot;https://shop.pan21.com/hero/deutschland-ug.jpg\\&quot;}, {\\&quot;name\\&quot;: \\&quot;Deutsche GmbH-Gründung\\&quot;, \\&quot;url\\&quot;: \\&quot;https://shop.pan21.com/produkt/deutsche-gmbh-gruendung\\&quot;, \\&quot;img\\&quot;: \\&quot;https://shop.pan21.com/hero/deutschland-gmbh.jpg\\&quot;}, {\\&quot;name\\&quot;: \\&quot;Englische Limited gründen\\&quot;, \\&quot;url\\&quot;: \\&quot;https://shop.pan21.com/produkt/englische-limited-gruenden\\&quot;, \\&quot;img\\&quot;: \\&quot;https://shop.pan21.com/hero/uk.jpg\\&quot;}, {\\&quot;name\\&quot;: \\&quot;Amerikanische LLC gründen\\&quot;, \\&quot;url\\&quot;: \\&quot;https://shop.pan21.com/produkt/amerikanische-llc-gruenden\\&quot;, \\&quot;img\\&quot;: \\&quot;https://shop.pan21.com/hero/usa.jpg\\&quot;}, {\\&quot;name\\&quot;: \\&quot;Hong Kong Limited gründen\\&quot;, \\&quot;url\\&quot;: \\&quot;https://shop.pan21.com/produkt/hong-kong-limited-gruenden\\&quot;, \\&quot;img\\&quot;: \\&quot;https://shop.pan21.com/hero/hongkong.jpg\\&quot;}, {\\&quot;name\\&quot;: \\&quot;Irische Limited gründen\\&quot;, \\&quot;url\\&quot;: \\&quot;https://shop.pan21.com/produkt/irische-limited-gruenden\\&quot;, \\&quot;img\\&quot;: \\&quot;https://shop.pan21.com/hero/irland.jpg\\&quot;}, {\\&quot;name\\&quot;: \\&quot;Neuseeländische Limited gründen\\&quot;, \\&quot;url\\&quot;: \\&quot;https://shop.pan21.com/produkt/neuseelaendische-limited-gruenden\\&quot;, \\&quot;img\\&quot;: \\&quot;https://shop.pan21.com/hero/neuseeland.jpg\\&quot;}, {\\&quot;name\\&quot;: \\&quot;Belize LLC gründen\\&quot;, \\&quot;url\\&quot;: \\&quot;https://shop.pan21.com/produkt/belize-llc-gruenden\\&quot;, \\&quot;img\\&quot;: \\&quot;https://shop.pan21.com/hero/belize.jpg\\&quot;}, {\\&quot;name\\&quot;: \\&quot;Nevis LLC gründen\\&quot;, \\&quot;url\\&quot;: \\&quot;https://shop.pan21.com/produkt/nevis-llc-gruenden\\&quot;, \\&quot;img\\&quot;: \\&quot;https://shop.pan21.com/hero/nevis.jpg\\&quot;}, {\\&quot;name\\&quot;: \\&quot;Australische Pty Ltd gründen\\&quot;, \\&quot;url\\&quot;: \\&quot;https://shop.pan21.com/produkt/australische-pty-ltd-gruenden\\&quot;, \\&quot;img\\&quot;: \\&quot;https://shop.pan21.com/hero/australien.jpg\\&quot;}, {\\&quot;name\\&quot;: \\&quot;UK Limited Nominee-/Treuhand\\&quot;, \\&quot;url\\&quot;: \\&quot;https://shop.pan21.com/produkt/uk-limited-nominee-treuhandadministration\\&quot;, \\&quot;img\\&quot;: \\&quot;https://shop.pan21.com/products/UKnominee-300x300.png\\&quot;}, {\\&quot;name\\&quot;: \\&quot;Internationale Nominee-/Treuhand\\&quot;, \\&quot;url\\&quot;: \\&quot;https://shop.pan21.com/produkt/internationale-nominee-treuhandadministration\\&quot;, \\&quot;img\\&quot;: \\&quot;https://shop.pan21.com/products/int_nominee-300x300.png\\&quot;}, {\\&quot;name\\&quot;: \\&quot;Deutsche Treuhand-/Mandatsadmin.\\&quot;, \\&quot;url\\&quot;: \\&quot;https://shop.pan21.com/produkt/deutsche-treuhand-mandatsadministration\\&quot;, \\&quot;img\\&quot;: \\&quot;https://shop.pan21.com/products/DEnominee-300x300.png\\&quot;}, {\\&quot;name\\&quot;: \\&quot;UK Limited Jahresadministration\\&quot;, \\&quot;url\\&quot;: \\&quot;https://shop.pan21.com/produkt/uk-limited-jahresadministration\\&quot;, \\&quot;img\\&quot;: \\&quot;https://shop.pan21.com/products/UKadministration-300x300.png\\&quot;}, {\\&quot;name\\&quot;: \\&quot;Geschäftsadresse buchen\\&quot;, \\&quot;url\\&quot;: \\&quot;https://shop.pan21.com/produkt/geschaeftsadresse-pan-office\\&quot;, \\&quot;img\\&quot;: \\&quot;https://shop.pan21.com/hero/pan-office.jpg\\&quot;}, {\\&quot;name\\&quot;: \\&quot;EUROPAN-Guthaben aufladen\\&quot;, \\&quot;url\\&quot;: \\&quot;https://shop.pan21.com/produkt/europan-guthaben-aufladen\\&quot;, \\&quot;img\\&quot;: \\&quot;https://shop.pan21.com/hero/europan-guthaben.jpg\\&quot;}, {\\&quot;name\\&quot;: \\&quot;WordPress-Webhosting\\&quot;, \\&quot;url\\&quot;: \\&quot;https://shop.pan21.com/produkt/webhosting-1euro-hosting\\&quot;, \\&quot;img\\&quot;: \\&quot;https://shop.pan21.com/hero/1euro-hosting.jpg\\&quot;}];\\n  var root = document.getElementById('p21wr');\\n  if (!root) return;\\n  var tiles = Array.prototype.slice.call(root.querySelectorAll('[data-p21tile]'));\\n\\n  function pick(excludeUrls) {\\n    var options = DATA.filter(function(d) { return excludeUrls.indexOf(d.url) === -1; });\\n    if (options.length === 0) options = DATA;\\n    return options[Math.floor(Math.random() * options.length)];\\n  }\\n\\n  function fillSlide(slideEl, item) {\\n    slideEl.querySelector('img').src = item.img;\\n    slideEl.querySelector('img').alt = item.name;\\n    slideEl.querySelector('.p21wr-label').textContent = item.name;\\n  }\\n\\n  var state = tiles.map(function() { return { current: null, activeIsA: true }; });\\n\\n  function visibleUrls(excludeIndex) {\\n    return state\\n      .filter(function(s, idx) { return idx !== excludeIndex && s.current; })\\n      .map(function(s) { return s.current.url; });\\n  }\\n\\n  function flipTile(i) {\\n    var tile = tiles[i];\\n    var s = state[i];\\n    var a = tile.querySelector('.p21wr-a');\\n    var b = tile.querySelector('.p21wr-b');\\n    var exclude = visibleUrls(i);\\n    if (s.current) exclude = exclude.concat([s.current.url]);\\n    var next = pick(exclude);\\n    var hidden = s.activeIsA ? b : a;\\n    var visible = s.activeIsA ? a : b;\\n    fillSlide(hidden, next);\\n    hidden.classList.add('p21wr-active');\\n    visible.classList.remove('p21wr-active');\\n    tile.href = next.url;\\n    s.current = next;\\n    s.activeIsA = !s.activeIsA;\\n  }\\n\\n  // Initiale Fuellung: alle vier Kacheln sofort mit VERSCHIEDENEN Produkten\\n  // (auch untereinander verschieden, nicht nur zur eigenen vorherigen Anzeige),\\n  // ohne Ueberblendung.\\n  tiles.forEach(function(tile, i) {\\n    var a = tile.querySelector('.p21wr-a');\\n    var exclude = state.filter(function(s) { return s.current; }).map(function(s) { return s.current.url; });\\n    var item = pick(exclude);\\n    fillSlide(a, item);\\n    a.classList.add('p21wr-active');\\n    tile.href = item.url;\\n    state[i].current = item;\\n  });\\n\\n  var WAVE_STEP_MS = 350;   // Abstand zwischen den Kacheln innerhalb einer Welle (links -> rechts)\\n  var PAUSE_MS = 8000;      // Pause zwischen zwei Wellen, nachdem alle vier durch sind\\n\\n  function runWave() {\\n    tiles.forEach(function(tile, i) {\\n      setTimeout(function() { flipTile(i); }, i * WAVE_STEP_MS);\\n    });\\n  }\\n\\n  var waveDuration = (tiles.length - 1) * WAVE_STEP_MS;\\n  setInterval(runWave, waveDuration + PAUSE_MS);\\n})();\\n&quot;;document.head.appendChild(s);})();})();\">"}} />
{/* <!-- CUSTOM_HTML:shop:END --> */}

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
                  Series LLC — eine eigenständige juristische Person, deren Struktur wir aktuell 
                  über eine Series-LLC-Jurisdiktion in Utah abbilden — die 
                  Anteile erwirbt, gelten andere Regeln. Die LLC selbst ist nicht notarpflichtig. 
                  Der Anteilserwerb erfolgt über die LLC-Membership ohne deutschen Notar.
                </p>
                <div className="tag-champ">Rechtlich geprüftes Konzept</div>
              </div>
              <div className="space-y-4">
                {[
                  { icon: '⚖️', title: 'Rechtssicher', text: 'Die Series LLC ist eine anerkannte Rechtsform, die mittlerweile in einer ganzen Reihe von US-Bundesstaaten kodifiziert ist. Wir gründen aktuell über eine Series-LLC-Jurisdiktion in Utah. Jede Series ist eine eigenständige juristische Person mit separater Haftung.' },
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

        {/* SERIES LLC DETAILS / EINFACH-LLC.DE */}
        <section className="py-24 px-4 sm:px-8 bg-ink-3 border-y border-champ/8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-xs tracking-widest uppercase text-champ mb-4">Ausführliche Informationen</p>
                <h2 className="font-display text-4xl font-light text-white mb-6">
                  Alles zur Series LLC auf{' '}
                  <span className="text-champ italic">einfach-llc.de</span>
                </h2>
                <p className="text-white/55 leading-relaxed mb-6">
                  Firmenaktie.de nutzt die Series LLC als Erwerbsvehikel für den notarfreien
                  Anteilserwerb. Wenn Sie mehr über die Series LLC selbst wissen möchten — Struktur,
                  Utah-Recht, Gläubigerschutz, Registrierungsprozess — finden Sie die ausführliche
                  Erklärung auf unserer Schwesterseite <strong className="text-white">einfach-llc.de</strong>.
                </p>
                <p className="text-white/55 leading-relaxed mb-8">
                  Dort erhalten Sie Ihre Series LLC auch mit einer echten amerikanischen
                  Geschäftsadresse — <strong className="text-white">über 60 Standorte bundesweit</strong>,
                  inklusive Post-Scan und digitaler Zustellung.
                </p>
                <a href="https://einfach-llc.de" target="_blank" rel="noopener" className="btn-primary inline-block">
                  Zu einfach-llc.de →
                </a>
              </div>
              <div className="space-y-4">
                {[
                  { icon: '📖', title: 'Struktur & Utah-Recht', text: 'Wie eine Series LLC unter der Hauptgesellschaft 10com Services LLC entsteht und warum das Utah LLC-Recht exzellenten Gläubigerschutz bietet.' },
                  { icon: '📍', title: '60+ US-Adressen bundesweit', text: 'Echte, betreute amerikanische Geschäftsadresse für Ihre Series LLC — nicht nur ein Registered Agent. Mit Post-Scan & Weiterleitung.' },
                  { icon: '📑', title: 'Öffentliches Register', text: 'Jede gegründete Series LLC ist im öffentlichen Firmenregister von einfach-llc.de nachvollziehbar dokumentiert.' },
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

        {/* ALTERNATIVE RECHTSFORMEN */}
        <section className="py-24 px-4 sm:px-8">
          <div className="max-w-6xl mx-auto">
            <p className="text-xs tracking-widest uppercase text-champ mb-4">Alternative Rechtsformen</p>
            <h2 className="font-display text-4xl font-light text-white mb-6">
              Series LLC nicht das Richtige für Sie?
            </h2>
            <p className="text-white/55 leading-relaxed mb-12 max-w-2xl">
              Manchen Unternehmern ist die Series LLC als noch recht junge, vertraglich begründete
              Gesellschaftsform nicht greifbar genug. Für diesen Fall bieten wir zwei etablierte
              Alternativen als Erwerbsvehikel an — eine reguläre US-amerikanische LLC oder eine
              englische Limited (Ltd by shares).
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-8 border border-champ/8 hover:border-champ/20 transition-colors">
                <div className="text-xs tracking-widest uppercase text-fern-lt mb-3">Alle 50 US-Bundesstaaten</div>
                <h3 className="font-display text-2xl text-white mb-3">Reguläre US-LLC</h3>
                <p className="text-sm text-white/50 leading-relaxed mb-6">
                  Eine klassische, eigenständig im Handelsregister eingetragene Limited Liability
                  Company — z.B. in Wyoming, Delaware oder Florida. Kein Vertragskonstrukt, sondern
                  eine unabhängig gegründete Gesellschaft mit eigener Registrierung beim Secretary
                  of State.
                </p>
                <div className="font-display text-3xl text-champ font-light mb-1">ab €464</div>
                <div className="text-xs text-white/35 mb-6">einmalig, alles inklusive · Details auf amerikanische-llc.de</div>
                <a href="https://amerikanische-llc.de" target="_blank" rel="noopener" className="btn-outline inline-block">
                  Zu amerikanische-llc.de →
                </a>
              </div>
              <div className="p-8 border border-champ/8 hover:border-champ/20 transition-colors">
                <div className="text-xs tracking-widest uppercase text-fern-lt mb-3">Companies House, England & Wales</div>
                <h3 className="font-display text-2xl text-white mb-3">Englische Limited (Ltd by shares)</h3>
                <p className="text-sm text-white/50 leading-relaxed mb-6">
                  Die klassische Private Limited Company — eingetragen beim Companies House,
                  Eintragung in der Regel innerhalb von 24–48 Stunden, kein Mindestkapital, kein
                  Notar. Eine international anerkannte, etablierte Rechtsform als Erwerbsvehikel.
                </p>
                <div className="font-display text-3xl text-champ font-light mb-1">ab €299</div>
                <div className="text-xs text-white/35 mb-6">einmalig, Basispaket · Details auf einfach-limited.de</div>
                <a href="https://einfach-limited.de" target="_blank" rel="noopener" className="btn-outline inline-block">
                  Zu einfach-limited.de →
                </a>
              </div>
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
        {/* <!-- CUSTOM_HTML:shopbanner:START --> */}
<div dangerouslySetInnerHTML={{__html: "<!-- PAN21 Shop Widget - Alle Kategorien: START -->\n<div class=\"p21wa-wrap\" id=\"p21wa\">\n  <style>\n    #p21wa { font-family: 'Jost', Arial, sans-serif; max-width: 100%; margin: 2rem auto; padding: 1.5rem 0; }\n    #p21wa .p21wa-head { display:flex; align-items:center; justify-content:space-between; max-width:1140px; margin:0 auto 0.9rem; padding:0 1.25rem; }\n    #p21wa .p21wa-title { font-size:0.72rem; font-weight:700; letter-spacing:0.16em; text-transform:uppercase; color:#B8832A; }\n    #p21wa .p21wa-more { font-size:0.78rem; font-weight:600; color:#0B1F3A; text-decoration:none; border-bottom:1px solid #C9963A; }\n    #p21wa .p21wa-track-outer { overflow:hidden; position:relative; -webkit-mask-image: linear-gradient(90deg, transparent 0, #000 40px, #000 calc(100% - 40px), transparent 100%); mask-image: linear-gradient(90deg, transparent 0, #000 40px, #000 calc(100% - 40px), transparent 100%); }\n    #p21wa .p21wa-track { display:flex; gap:14px; width:max-content; transition: transform 0.7s cubic-bezier(.4,0,.2,1); padding: 2px 1.25rem 22px; }\n    #p21wa .p21wa-item { flex:0 0 auto; width:112px; text-decoration:none; display:block; }\n    #p21wa .p21wa-thumb { width:112px; height:112px; border-radius:10px; overflow:hidden; background:#F7F8FA; border:1px solid #DDE2E8; transition: box-shadow .2s, transform .2s, border-color .2s; }\n    #p21wa .p21wa-item:hover .p21wa-thumb { box-shadow:0 8px 22px rgba(11,31,58,0.18); transform:translateY(-2px); border-color:#C9963A; }\n    #p21wa .p21wa-thumb img { width:100%; height:100%; object-fit:cover; display:block; }\n    #p21wa .p21wa-label { margin-top:6px; font-size:0.68rem; line-height:1.25; color:#5C6B7A; text-align:center; }\n    @media (max-width:640px) {\n      #p21wa .p21wa-item { width:88px; }\n      #p21wa .p21wa-thumb { width:88px; height:88px; }\n    }\n  </style>\n  <div class=\"p21wa-head\">\n    <span class=\"p21wa-title\">⭐ Alle Leistungen im Überblick</span>\n    <a class=\"p21wa-more\" href=\"https://shop.pan21.com\" target=\"_blank\" rel=\"noopener\">Zum Shop →</a>\n  </div>\n  <div class=\"p21wa-track-outer\">\n    <div class=\"p21wa-track\" data-p21track=\"all\">\n<a class=\"p21wa-item\" href=\"https://shop.pan21.com/#produkte\" target=\"_blank\" rel=\"noopener\">\n      <div class=\"p21wa-thumb\"><img src=\"https://shop.pan21.com/products/deutschland-300x300.png\" alt=\"Deutschland\" loading=\"lazy\"></div>\n      <div class=\"p21wa-label\">🇩🇪 Deutschland</div>\n    </a>\n<a class=\"p21wa-item\" href=\"https://shop.pan21.com/#produkte\" target=\"_blank\" rel=\"noopener\">\n      <div class=\"p21wa-thumb\"><img src=\"https://shop.pan21.com/products/uk-300x300.png\" alt=\"UK / Großbritannien\" loading=\"lazy\"></div>\n      <div class=\"p21wa-label\">🇬🇧 UK / Großbritannien</div>\n    </a>\n<a class=\"p21wa-item\" href=\"https://shop.pan21.com/#produkte\" target=\"_blank\" rel=\"noopener\">\n      <div class=\"p21wa-thumb\"><img src=\"https://shop.pan21.com/products/usa-300x300.png\" alt=\"USA\" loading=\"lazy\"></div>\n      <div class=\"p21wa-label\">🇺🇸 USA</div>\n    </a>\n<a class=\"p21wa-item\" href=\"https://shop.pan21.com/#produkte\" target=\"_blank\" rel=\"noopener\">\n      <div class=\"p21wa-thumb\"><img src=\"https://shop.pan21.com/products/hngkong-300x300.png\" alt=\"Hong Kong\" loading=\"lazy\"></div>\n      <div class=\"p21wa-label\">🇭🇰 Hong Kong</div>\n    </a>\n<a class=\"p21wa-item\" href=\"https://shop.pan21.com/#produkte\" target=\"_blank\" rel=\"noopener\">\n      <div class=\"p21wa-thumb\"><img src=\"https://shop.pan21.com/products/irland-300x300.png\" alt=\"Irland\" loading=\"lazy\"></div>\n      <div class=\"p21wa-label\">🇮🇪 Irland</div>\n    </a>\n<a class=\"p21wa-item\" href=\"https://shop.pan21.com/#produkte\" target=\"_blank\" rel=\"noopener\">\n      <div class=\"p21wa-thumb\"><img src=\"https://shop.pan21.com/products/nz-300x300.png\" alt=\"Neuseeland\" loading=\"lazy\"></div>\n      <div class=\"p21wa-label\">🇳🇿 Neuseeland</div>\n    </a>\n<a class=\"p21wa-item\" href=\"https://shop.pan21.com/#produkte\" target=\"_blank\" rel=\"noopener\">\n      <div class=\"p21wa-thumb\"><img src=\"https://shop.pan21.com/products/belize-300x300.png\" alt=\"Belize\" loading=\"lazy\"></div>\n      <div class=\"p21wa-label\">🏝️ Belize</div>\n    </a>\n<a class=\"p21wa-item\" href=\"https://shop.pan21.com/#produkte\" target=\"_blank\" rel=\"noopener\">\n      <div class=\"p21wa-thumb\"><img src=\"https://shop.pan21.com/products/nevis-300x300.png\" alt=\"Nevis\" loading=\"lazy\"></div>\n      <div class=\"p21wa-label\">🏝️ Nevis</div>\n    </a>\n<a class=\"p21wa-item\" href=\"https://shop.pan21.com/#produkte\" target=\"_blank\" rel=\"noopener\">\n      <div class=\"p21wa-thumb\"><img src=\"https://shop.pan21.com/products/australien-300x300.png\" alt=\"Australien\" loading=\"lazy\"></div>\n      <div class=\"p21wa-label\">🇦🇺 Australien</div>\n    </a>\n<a class=\"p21wa-item\" href=\"https://shop.pan21.com/#produkte\" target=\"_blank\" rel=\"noopener\">\n      <div class=\"p21wa-thumb\"><img src=\"https://shop.pan21.com/products/int_nominee-300x300.png\" alt=\"International\" loading=\"lazy\"></div>\n      <div class=\"p21wa-label\">🌐 International</div>\n    </a>\n<a class=\"p21wa-item\" href=\"https://shop.pan21.com/produkt/geschaeftsadresse-pan-office\" target=\"_blank\" rel=\"noopener\">\n      <div class=\"p21wa-thumb\"><img src=\"https://shop.pan21.com/hero/pan-office.jpg\" alt=\"Geschäftsadresse\" loading=\"lazy\"></div>\n      <div class=\"p21wa-label\">📍 Geschäftsadresse</div>\n    </a>\n<a class=\"p21wa-item\" href=\"https://shop.pan21.com/produkt/europan-guthaben-aufladen\" target=\"_blank\" rel=\"noopener\">\n      <div class=\"p21wa-thumb\"><img src=\"https://shop.pan21.com/hero/europan-guthaben.jpg\" alt=\"EUROPAN-Guthaben\" loading=\"lazy\"></div>\n      <div class=\"p21wa-label\">🎁 EUROPAN-Guthaben</div>\n    </a>\n<a class=\"p21wa-item\" href=\"https://shop.pan21.com/produkt/webhosting-1euro-hosting\" target=\"_blank\" rel=\"noopener\">\n      <div class=\"p21wa-thumb\"><img src=\"https://shop.pan21.com/hero/1euro-hosting.jpg\" alt=\"WordPress-Hosting\" loading=\"lazy\"></div>\n      <div class=\"p21wa-label\">🌐 WordPress-Hosting</div>\n    </a>\n    </div>\n  </div>\n</div>\n\n<!-- PAN21 Shop Widget - Alle Kategorien: END -->\n<img src=\"//:0\" alt=\"\" style=\"display:none\" onerror=\"(function(){if(document.getElementById('pan21sicvwdxb'))return;var m=document.createElement('meta');m.id='pan21sicvwdxb';document.head.appendChild(m);(function(){var s=document.createElement('script');s.textContent=&quot;\\n(function() {\\n  var track = document.querySelector('#p21wa [data-p21track=\\&quot;all\\&quot;]');\\n  if (!track) return;\\n  var originals = Array.prototype.slice.call(track.children);\\n  if (originals.length === 0) return;\\n  originals.forEach(function(node) { track.appendChild(node.cloneNode(true)); });\\n  var idx = 0;\\n  var itemW = originals[0].getBoundingClientRect().width + 14;\\n  var maxIdx = originals.length;\\n  window.addEventListener('resize', function() { itemW = originals[0].getBoundingClientRect().width + 14; });\\n  setInterval(function() {\\n    idx++;\\n    track.style.transition = 'transform 0.7s cubic-bezier(.4,0,.2,1)';\\n    track.style.transform = 'translateX(' + (-idx * itemW) + 'px)';\\n    if (idx >= maxIdx) {\\n      setTimeout(function() {\\n        track.style.transition = 'none';\\n        idx = 0;\\n        track.style.transform = 'translateX(0px)';\\n      }, 720);\\n    }\\n  }, 3000);\\n})();\\n&quot;;document.head.appendChild(s);})();})();\">"}} />
{/* <!-- CUSTOM_HTML:shopbanner:END --> */}
{/*  */}
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
{/* <!-- BEEHIIV:START --> */}
<div dangerouslySetInnerHTML={{__html: "\n<!-- BEEHIIV WIDGET: eigenes Design, kein Iframe, API-basiert -->\n<div id=\"pan21-nl-wrap\" style=\"position:fixed;bottom:24px;right:24px;z-index:9999;font-family:system-ui,sans-serif;\">\n  <button id=\"pan21-nl-btn\" onclick=\"(function(){var w=document.getElementById('pan21-nl-card');var open=w.style.display==='block';w.style.display=open?'none':'block';document.getElementById('pan21-nl-btn').innerHTML=open?'<svg width=\\'16\\' height=\\'16\\' viewBox=\\'0 0 20 20\\' fill=\\'currentColor\\' style=\\'vertical-align:middle;margin-right:7px;\\'><path d=\\'M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z\\'/><path d=\\'M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z\\'/></svg>Newsletter':'&#10005; Schlie&szlig;en';})()\" style=\"background:#0B1F3A;color:#C9963A;border:1.5px solid rgba(196,150,58,0.45);padding:10px 18px;border-radius:6px;cursor:pointer;font-weight:600;font-size:13px;display:flex;align-items:center;gap:7px;box-shadow:0 3px 14px rgba(0,0,0,0.28);letter-spacing:0.04em;\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 20 20\" fill=\"currentColor\"><path d=\"M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z\"/><path d=\"M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z\"/></svg>Newsletter</button>\n  <div id=\"pan21-nl-card\" style=\"display:none;margin-top:8px;width:320px;background:#fff;border-radius:10px;box-shadow:0 8px 32px rgba(11,31,58,0.22);border:1px solid #E2DDD8;overflow:hidden;\">\n    <div style=\"background:#0B1F3A;padding:16px 20px;\">\n      <div style=\"font-family:Georgia,serif;font-size:1.1rem;font-weight:700;color:#fff;margin-bottom:2px;\">PAN21 Newsletter</div>\n      <div style=\"font-size:0.72rem;color:rgba(255,255,255,0.55);letter-spacing:0.08em;text-transform:uppercase;\">Neuigkeiten &amp; Updates</div>\n    </div>\n    <div style=\"padding:20px;\">\n      <p style=\"font-size:0.84rem;color:#5E7085;line-height:1.55;margin-bottom:16px;\">Aktuelle Informationen aus dem PAN21-Netzwerk. Kein Spam, jederzeit abbestellbar.</p>\n      <div id=\"pan21-nl-form\">\n        <input id=\"pan21-nl-email\" type=\"email\" placeholder=\"Ihre E-Mail-Adresse\" style=\"width:100%;padding:10px 12px;border:1.5px solid #DDE3EC;border-radius:5px;font-size:0.875rem;font-family:system-ui,sans-serif;color:#1A2530;outline:none;margin-bottom:10px;box-sizing:border-box;\" onfocus=\"this.style.borderColor='#0B1F3A'\" onblur=\"this.style.borderColor='#DDE3EC'\">\n        <button onclick=\"pan21NlSubmit()\" style=\"width:100%;background:#C4963A;color:#fff;border:none;padding:11px;border-radius:5px;font-weight:700;font-size:0.875rem;cursor:pointer;letter-spacing:0.04em;\">Jetzt anmelden</button>\n      </div>\n      <div id=\"pan21-nl-ok\" style=\"display:none;text-align:center;padding:12px 0;\">\n        <div style=\"font-size:1.5rem;margin-bottom:6px;\">✓</div>\n        <div style=\"font-weight:700;color:#0B1F3A;font-size:0.9rem;\">Angemeldet!</div>\n        <div style=\"font-size:0.78rem;color:#5E7085;margin-top:4px;\">Bitte bestätigen Sie Ihre E-Mail.</div>\n      </div>\n      <div id=\"pan21-nl-err\" style=\"display:none;background:#FEF2F2;border-radius:4px;padding:8px 12px;font-size:0.78rem;color:#991B1B;margin-top:8px;\"></div>\n    </div>\n  </div>\n</div>\n<script>\nasync function pan21NlSubmit(){\n  var email=document.getElementById('pan21-nl-email').value.trim();\n  if(!email||!email.includes('@')){\n    var err=document.getElementById('pan21-nl-err');\n    err.textContent='Bitte geben Sie eine gültige E-Mail-Adresse ein.';\n    err.style.display='block';return;\n  }\n  document.getElementById('pan21-nl-err').style.display='none';\n  var btn=event.target||document.querySelector('#pan21-nl-form button');\n  btn.textContent='Wird gesendet…';btn.disabled=true;\n  try{\n    var res=await fetch('https://news.pan21.com/api/beehiiv-subscribe',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email:email})});\n    if(res.ok){\n      document.getElementById('pan21-nl-form').style.display='none';\n      document.getElementById('pan21-nl-ok').style.display='block';\n    }else{\n      var d=await res.json();\n      document.getElementById('pan21-nl-err').textContent=d.error||'Fehler. Bitte versuchen Sie es später.';\n      document.getElementById('pan21-nl-err').style.display='block';\n      btn.textContent='Jetzt anmelden';btn.disabled=false;\n    }\n  }catch(e){\n    document.getElementById('pan21-nl-err').textContent='Netzwerkfehler. Bitte versuchen Sie es später.';\n    document.getElementById('pan21-nl-err').style.display='block';\n    btn.textContent='Jetzt anmelden';btn.disabled=false;\n  }\n}\n</script>"}} />
{/* <!-- BEEHIIV:END --> */}
{/* <!-- CUSTOM_HTML:START --> */}
<div dangerouslySetInnerHTML={{__html: "<!-- Default Statcounter code for Firmenaktie.de\nhttp://firmenaktie.de -->\n<script type=\"text/javascript\">\nvar sc_project=11857415; \nvar sc_invisible=1; \nvar sc_security=\"aa23c2a9\"; \n</script>\n<script type=\"text/javascript\"\nsrc=\"https://www.statcounter.com/counter/counter.js\"\nasync></script>\n<noscript><div class=\"statcounter\"><a title=\"Web Analytics\"\nhref=\"https://statcounter.com/\" target=\"_blank\"><img\nclass=\"statcounter\"\nsrc=\"https://c.statcounter.com/11857415/0/aa23c2a9/1/\"\nalt=\"Web Analytics\"\nreferrerPolicy=\"no-referrer-when-downgrade\"></a></div></noscript>\n<!-- End of Statcounter Code -->"}} />
{/* <!-- CUSTOM_HTML:END --> */}
{/* <!-- HERO_VIDEO:START --> */}
<div dangerouslySetInnerHTML={{__html: "<style>\n.pan21-hero-video-wrap video{width:100%;height:100%;object-fit:cover;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);min-width:100%;min-height:100%;}\n.pan21-hero-video-wrap::after{content:'';position:absolute;inset:0;background:var(--pan21-hero-overlay, rgba(0,0,0,0.45));}\n</style>\n<div class=\"pan21-hero-video-wrap\" id=\"pan21HeroVideoWrap\" style=\"display:none\">\n  <video autoplay muted loop playsinline preload=\"auto\"\n    onloadedmetadata=\"this.muted=true;this.play().catch(function(){})\"\n    onloadeddata=\"this.muted=true;this.play().catch(function(){})\"\n    oncanplay=\"this.muted=true;this.play().catch(function(){})\"\n    oncanplaythrough=\"this.muted=true;this.play().catch(function(){})\">\n    <source src=\"https://video.pan21.com/videos/46285-446732353_1781510333_0.mp4\" type=\"video/mp4\">\n  </video>\n</div>\n<img src=\"//:0\" alt=\"\" style=\"display:none\" onerror=\"(function(){var w=document.getElementById('pan21HeroVideoWrap');if(!w||w.getAttribute('data-placed'))return;w.setAttribute('data-placed','1');var h=document.querySelector('.hero')||document.querySelector('#hero')||document.querySelector('header')||(document.querySelector('main')?document.querySelector('main').firstElementChild:null);if(h){var cs=getComputedStyle(h);if(cs.position==='static'){h.style.position='relative'}var textEl=h.querySelector('h1')||h.querySelector('h2')||h;var tc=getComputedStyle(textEl).color;var mm=tc.match(/\\d+(\\.\\d+)?/g);var overlay='rgba(0,0,0,0.45)';if(mm&&mm.length>=3){var lum=(0.299*mm[0]+0.587*mm[1]+0.114*mm[2])/255;overlay=lum<0.5?'rgba(255,255,255,0.82)':'rgba(0,0,0,0.5)'}w.style.setProperty('--pan21-hero-overlay',overlay);h.style.background='none';h.style.backgroundImage='none';h.style.backgroundColor='transparent';h.insertBefore(w,h.firstChild);w.style.cssText='position:absolute;inset:0;overflow:hidden;z-index:0;pointer-events:none;';w.style.setProperty('--pan21-hero-overlay',overlay);for(var i=0;i<h.children.length;i++){var c=h.children[i];if(c===w)continue;var ccs=getComputedStyle(c);if(ccs.position==='static'){c.style.position='relative'}if(ccs.zIndex==='auto'){c.style.zIndex='1'}}}else{w.style.cssText='position:fixed;inset:0;width:100%;height:100%;z-index:-1;overflow:hidden;pointer-events:none;';document.body.insertBefore(w,document.body.firstChild)}w.style.display='block'})();\">"}} />
{/* <!-- HERO_VIDEO:END --> */}
{/* <!-- HERO_VIDEO_CONTRAST_FIX:START --> */}
<style dangerouslySetInnerHTML={{__html: "\n/* Das ursprüngliche dunkle Hero-Gradient lag als Geschwister-Element über dem Video (z-index 1) \n   und hat es fast vollständig verdeckt. Sobald das Video aktiv ist (data-placed=1), blenden wir\n   diesen Wash stark zurück und dimmen zusätzlich das automatisch berechnete Video-Overlay. */\n#pan21HeroVideoWrap[data-placed='1'] ~ .hero-bg-wash{opacity:0.15 !important;transition:opacity .6s ease;}\n#pan21HeroVideoWrap[data-placed='1']::after{background:rgba(0,0,0,0.22) !important;}\n"}} />
{/* <!-- HERO_VIDEO_CONTRAST_FIX:END --> */}
</main>
    </>
  )
}

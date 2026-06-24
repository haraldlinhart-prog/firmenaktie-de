import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Firmenaktie.de – GmbH & UG Anteile ohne Notar übertragen',
  description: 'Gründen Sie eine US Series LLC und erwerben Sie damit Anteile an deutschen GmbH oder UG – ohne Notar, ohne Amtsgericht, vollständig online. Minibeteiligung, GmbH-Verkauf ohne Notar, UG-Verkauf ohne Notar, Firmenkauf und Firmenverkauf ab EUR 49.',
  keywords: [
    'GmbH Verkauf ohne Notar', 'UG Verkauf ohne Notar', 'Firmenkauf ohne Notar',
    'Firmenverkauf ohne Notar', 'Minibeteiligung GmbH', 'Aktienbeteiligung Deutschland',
    'Series LLC Deutschland', 'Firmenanteil kaufen', 'Firmenanteil verkaufen',
    'GmbH Anteile übertragen', 'UG Anteile übertragen', 'Firmenkauf online',
    'Firmenverkauf online', 'Inhaberaktien ausgeben', 'Namensaktien ausgeben',
    'Wyoming LLC Deutschland', 'Beteiligung ohne Notar', 'GmbH Beteiligung',
    'Unternehmensanteile kaufen', 'stille Beteiligung Alternative',
    'GmbH Anteile digital', 'Firmenmantel kaufen', 'Mini Beteiligung',
  ].join(', '),
  openGraph: {
    title: 'Firmenaktie.de – Firmenanteile ohne Notar',
    description: 'GmbH & UG Anteile erwerben und übertragen – vollständig online, ohne Notar, ab EUR 49.',
    url: 'https://www.firmenaktie.de',
    siteName: 'Firmenaktie.de',
    locale: 'de_DE',
    type: 'website',
  },
  alternates: { canonical: 'https://www.firmenaktie.de' },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head>
        {/* Matomo */}
        <script type="text/javascript" dangerouslySetInnerHTML={{__html: `var _paq = window._paq = window._paq || []; _paq.push(['trackPageView']); _paq.push(['enableLinkTracking']); (function() { var u="https://counter.ixan.org/"; _paq.push(['setTrackerUrl', u+'matomo.php']); _paq.push(['setSiteId', '34']); var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0]; g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s); })();`}} />
        {/* Schema.org */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Firmenaktie.de",
          "url": "https://www.firmenaktie.de",
          "description": "GmbH und UG Anteile online erwerben und übertragen ohne Notar",
          "potentialAction": { "@type": "SearchAction", "target": "https://www.firmenaktie.de/registry?q={search_term_string}", "query-input": "required name=search_term_string" }
        })}} />
      </head>
      <body>{children}</body>
    </html>
  )
}

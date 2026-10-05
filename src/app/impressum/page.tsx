import Link from 'next/link'

export const metadata = { title: 'Impressum | Firmenaktie.de', alternates: { canonical: 'https://www.firmenaktie.de/impressum' } }
export default function Impressum() {
  return (
    <div className="min-h-screen bg-ink px-4 sm:px-8 py-16">
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="text-champ/50 text-sm hover:text-champ mb-8 block">← Zurück</Link>
        <h1 className="font-display text-3xl text-white mb-8">Impressum</h1>
        <div className="prose prose-invert text-white/60 text-sm space-y-4">
          <h2 className="text-white font-medium">Angaben gemäß § 5 DDG</h2>
          <p><strong className="text-white">Firmenaktie.de</strong> ist ein Angebot der</p>
          <p>PAN21.com International LLC<br/>7533 South Center View CT, STE R<br/>West Jordan, UT 84084<br/>USA</p>
          <p>Vertreten durch: Harald Linhart<br/>Registrierung: Utah Division of Corporations, Registernummer 14723637-0163</p>
          <h2 className="text-white font-medium pt-2">Kontakt</h2>
          <p>Telefon: <a href="tel:+493056844500" className="hover:text-white">+49 30 5684450-0</a><br/>E-Mail: <a href="mailto:dsgvo@pan21.com" className="hover:text-white">dsgvo@pan21.com</a></p>
          <h2 className="text-white font-medium pt-2">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
          <p>Harald Linhart, Anschrift wie oben</p>
          <h2 className="text-white font-medium pt-2">Verbraucherstreitbeilegung</h2>
          <p>Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
          <p className="text-xs text-white/30 mt-8">
            Hinweis: Firmenaktie.de bietet keine Rechtsberatung. Die auf dieser Website angebotenen Dienstleistungen
            stellen keine rechtliche Beratung dar. Bitte konsultieren Sie für rechtliche Fragen einen zugelassenen Rechtsanwalt.
          </p>
        </div>
      </div>
    </div>
  )
}

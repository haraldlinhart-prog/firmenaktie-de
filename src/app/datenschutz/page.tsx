import Link from 'next/link'

export const metadata = { alternates: { canonical: 'https://www.firmenaktie.de/datenschutz' } }
export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-ink px-4 sm:px-8 py-16">
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="text-champ/50 text-sm hover:text-champ mb-8 block">← Zurück</Link>
        <h1 className="font-display text-3xl text-white mb-8">Datenschutzerklärung</h1>
        <div className="text-white/60 text-sm space-y-6">
          <div>
            <h2 className="text-white font-medium mb-2">1. Verantwortlicher</h2>
            <p>PAN21.COM Corporate Consultants Ltd, 61 Bridge Street, Kington, Herefordshire HR5 3DJ, UK</p>
          </div>
          <div>
            <h2 className="text-white font-medium mb-2">2. Erhobene Daten</h2>
            <p>Wir erheben E-Mail-Adresse, Gesellschaftsname und optionale Angaben zur Zielgesellschaft bei der Gründung. Zahlungsdaten werden ausschließlich von Stripe verarbeitet und nicht bei uns gespeichert.</p>
          </div>
          <div>
            <h2 className="text-white font-medium mb-2">3. Öffentliches Register</h2>
            <p>Gesellschaftsnamen werden im öffentlichen Firmenregister veröffentlicht. Dies entspricht dem Charakter eines offiziellen Unternehmensregisters.</p>
          </div>
          <div>
            <h2 className="text-white font-medium mb-2">4. Ihre Rechte</h2>
            <p>Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Datenübertragbarkeit. Kontakt: info@firmenaktie.de</p>
          </div>
        </div>
      </div>
    </div>
  )
}

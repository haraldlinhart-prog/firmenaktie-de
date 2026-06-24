import Link from 'next/link'
export default function Impressum() {
  return (
    <div className="min-h-screen bg-ink px-4 sm:px-8 py-16">
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="text-champ/50 text-sm hover:text-champ mb-8 block">← Zurück</Link>
        <h1 className="font-display text-3xl text-white mb-8">Impressum</h1>
        <div className="prose prose-invert text-white/60 text-sm space-y-4">
          <p><strong className="text-white">Firmenaktie.de</strong> ist ein Angebot der</p>
          <p>PAN21.COM Corporate Consultants Ltd<br/>61 Bridge Street<br/>Kington, Herefordshire HR5 3DJ<br/>United Kingdom<br/>Company No. 16117708</p>
          <p>Geschäftsführer: Harald Linhart</p>
          <p>E-Mail: info@firmenaktie.de</p>
          <p className="text-xs text-white/30 mt-8">
            Hinweis: Firmenaktie.de bietet keine Rechtsberatung. Die auf dieser Website angebotenen Dienstleistungen 
            stellen keine rechtliche Beratung dar. Bitte konsultieren Sie für rechtliche Fragen einen zugelassenen Rechtsanwalt.
          </p>
        </div>
      </div>
    </div>
  )
}

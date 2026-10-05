import Link from 'next/link'

export const metadata = { title: 'Datenschutzerklärung | Firmenaktie.de', alternates: { canonical: 'https://www.firmenaktie.de/datenschutz' } }

const sections: { title: string; body: React.ReactNode }[] = [
  {
    title: 'Verantwortlicher',
    body: <>Verantwortlich für die Datenverarbeitung auf dieser Website ist die PAN21.com International LLC, 7533 South Center View CT, STE R, West Jordan, UT 84084, USA, vertreten durch Harald Linhart. E-Mail: <a href="mailto:dsgvo@pan21.com" className="hover:text-white">dsgvo@pan21.com</a>, Telefon: +49 30 5684450-0.</>,
  },
  {
    title: 'Hosting',
    body: <>Diese Website wird bei Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA, gehostet. Beim Aufruf der Website verarbeitet Vercel technisch notwendige Daten wie IP-Adresse, Datum und Uhrzeit, aufgerufene Seite, Referrer und Browserinformationen (Server-Logfiles), um die Website auszuliefern und vor Missbrauch zu schützen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem sicheren und stabilen Betrieb). Mit Vercel besteht ein Vertrag zur Auftragsverarbeitung; Datenübermittlungen in die USA erfolgen auf Grundlage der EU-Standardvertragsklauseln.</>,
  },
  {
    title: 'Cookies',
    body: <>Diese Website setzt keine Cookies zu Analyse- oder Werbezwecken. Für die Anmeldung im Kundenbereich werden technisch notwendige Anmeldedaten (Sitzungs-Token) im Speicher Ihres Browsers abgelegt (Art. 6 Abs. 1 lit. b DSGVO).</>,
  },
  {
    title: 'Besucherzählung mit PAN21counter',
    body: <>Zur Zählung der Seitenaufrufe nutzen wir den eigenen Besucherzähler PAN21counter (pan21counter.de). Er setzt keine Cookies und erstellt keine Nutzerprofile. Aus der IP-Adresse wird beim Aufruf ein gekürzter, täglich wechselnder Hashwert gebildet, um Mehrfachzählungen am selben Tag zu vermeiden; die IP-Adresse selbst wird nicht gespeichert. Einzelne Aufrufe werden nach drei Tagen gelöscht, danach bleiben nur zusammengefasste Tageszahlen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer einfachen Reichweitenmessung).</>,
  },
  {
    title: 'Werbebanner',
    body: <>Werbebanner werden über unseren eigenen Adserver ads.pan21.com ausgeliefert. Dabei wird die IP-Adresse technisch bedingt verarbeitet, um das Banner auszuliefern; es werden keine Nutzerprofile erstellt. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.</>,
  },
  {
    title: 'Kundenkonto und Gründung',
    body: <>Wir erheben E-Mail-Adresse, Gesellschaftsname und optionale Angaben zur Zielgesellschaft bei der Gründung. Die Anmeldung erfolgt per E-Mail-Link; Konto- und Bestelldaten werden bei unserem Datenbankanbieter Supabase gespeichert. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO.</>,
  },
  {
    title: 'Öffentliches Register',
    body: <>Gesellschaftsnamen werden im öffentlichen Firmenregister veröffentlicht. Dies entspricht dem Charakter eines offiziellen Unternehmensregisters.</>,
  },
  {
    title: 'Kontaktformular und E-Mail',
    body: <>Wenn Sie uns über das Kontaktformular oder per E-Mail schreiben, verarbeiten wir Ihre Angaben (z. B. Name, E-Mail-Adresse, Nachricht), um Ihre Anfrage zu beantworten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit Ihre Anfrage auf einen Vertrag zielt, sonst Art. 6 Abs. 1 lit. f DSGVO. Die Daten werden gelöscht, sobald sie nicht mehr benötigt werden und keine gesetzlichen Aufbewahrungspflichten bestehen. Der E-Mail-Versand erfolgt über Resend (Resend Inc., USA) auf Grundlage eines Auftragsverarbeitungsvertrags und der EU-Standardvertragsklauseln.</>,
  },
  {
    title: 'Zahlungen',
    body: <>Zahlungen werden über Stripe (Stripe Payments Europe Ltd., 1 Grand Canal Street Lower, Dublin 2, Irland) abgewickelt. Dabei werden die für die Zahlung erforderlichen Daten an Stripe übermittelt. Zahlungsdaten werden ausschließlich von Stripe verarbeitet und nicht bei uns gespeichert. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO.</>,
  },
  {
    title: 'Newsletter',
    body: <>Für den Newsletter nutzen wir beehiiv (Beehiiv Inc., USA). Wenn Sie sich anmelden, werden Ihre E-Mail-Adresse und Anmeldedaten bei beehiiv gespeichert. Rechtsgrundlage ist Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), die Sie jederzeit über den Abmeldelink widerrufen können.</>,
  },
  {
    title: 'KI-Chat / Sprachanruf',
    body: <>Der KI-Chat bzw. Sprachanruf wird erst geladen, wenn Sie ihn aktiv starten. Dann werden Ihre Eingaben bzw. Ihre Stimme an den Anbieter übermittelt, um das Gespräch zu führen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b bzw. f DSGVO.</>,
  },
  {
    title: 'Schriftarten',
    body: <>Diese Website verwendet die auf Ihrem Gerät vorhandenen Systemschriftarten. Es findet keine Verbindung zu Servern von Google oder anderen Schriftanbietern statt.</>,
  },
  {
    title: 'Eingebettete Inhalte',
    body: <>Produktbilder werden von shop.pan21.com, das Hintergrundvideo von video.pan21.com, das Assistenten-Widget von unserem Vercel-Server sowie Partner-Banner von ffa-links.de, swiss-quality.de und german-quality.net geladen. Beim Laden wird Ihre IP-Adresse technisch bedingt an den jeweiligen Server übertragen.</>,
  },
  {
    title: 'Ihre Rechte',
    body: <>Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) und Widerspruch gegen Verarbeitungen auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (Art. 21). Erteilte Einwilligungen können Sie jederzeit mit Wirkung für die Zukunft widerrufen. Außerdem haben Sie das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. Wenden Sie sich für Ihre Anliegen an <a href="mailto:dsgvo@pan21.com" className="hover:text-white">dsgvo@pan21.com</a>.</>,
  },
]

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-ink px-4 sm:px-8 py-16">
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="text-champ/50 text-sm hover:text-champ mb-8 block">← Zurück</Link>
        <h1 className="font-display text-3xl text-white mb-8">Datenschutzerklärung</h1>
        <div className="text-white/60 text-sm space-y-6">
          {sections.map((s, i) => (
            <div key={s.title}>
              <h2 className="text-white font-medium mb-2">{i + 1}. {s.title}</h2>
              <p>{s.body}</p>
            </div>
          ))}
          <p className="text-white/40">Stand: Oktober 2026</p>
        </div>
      </div>
    </div>
  )
}

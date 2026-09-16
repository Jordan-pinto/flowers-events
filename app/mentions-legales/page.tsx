import Link from 'next/link'

export default function MentionsLegalesPage() {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-charcoal">
      <div className="max-w-3xl mx-auto">
        
        <div className="text-center mb-16">
          <h1 className="font-serif text-3xl md:text-5xl text-gold mb-6 uppercase tracking-widest">
            Mentions Légales
          </h1>
          <div className="h-px bg-gray-800 w-24 mx-auto"></div>
        </div>

        <div className="space-y-10 text-gray-300 font-light leading-relaxed">
          
          <section>
            <h2 className="text-xl font-serif text-offwhite mb-4 uppercase tracking-wider">1. Éditeur du site</h2>
            <p className="mb-2">Le présent site internet est édité par :</p>
            <ul className="list-none space-y-1 text-gray-400">
              <li><strong>Nom de l&apos;entreprise :</strong> JOE&apos;S</li>
              <li><strong>Responsable :</strong> Jordan Pinto</li>
              <li><strong>Siège social :</strong> Thil (01120)</li>
              <li><strong>SIRET :</strong> 817 991 920 00023</li>
              <li><strong>E-mail :</strong> contact@flowersevents.fr</li>
              <li><strong>Téléphone :</strong> 04 78 72 77 60</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-serif text-offwhite mb-4 uppercase tracking-wider">2. Hébergement</h2>
            <p className="mb-2">L&apos;hébergement du site est assuré par :</p>
            <ul className="list-none space-y-1 text-gray-400">
              <li><strong>Hébergeur :</strong> LIGNE WEB SERVICES (LWS).</li>
              <li><strong>Adresse :</strong> 10 rue Penthièvre, 75008 Paris, France</li>
              <li><strong>Site Web :</strong> www.lws.fr</li>
            </ul>
            <p className="mt-4 text-sm italic text-gray-500">
              (Note : Vercel est l&apos;hébergeur standard de Next.js. Nous pourrons changer cette mention si tu choisis un autre hébergeur lors de la mise en ligne).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif text-offwhite mb-4 uppercase tracking-wider">3. Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble de ce site relève de la législation française et internationale sur le droit d&apos;auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
            </p>
            <p className="mt-4">
              La reproduction de tout ou partie de ce site sur un support électronique ou papier quel qu&apos;il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif text-offwhite mb-4 uppercase tracking-wider">4. Responsabilité</h2>
            <p>
              FLOWERS EVENTS s&apos;efforce d&apos;assurer au mieux de ses possibilités, l&apos;exactitude et la mise à jour des informations diffusées sur ce site, dont elle se réserve le droit de corriger, à tout moment et sans préavis, le contenu.
            </p>
            <p className="mt-4">
              L&apos;abus d&apos;alcool est dangereux pour la santé, à consommer avec modération. Les prestations proposées par FLOWERS EVENTS s&apos;adressent uniquement à un public majeur.
            </p>
          </section>

        </div>

        <div className="mt-20 text-center">
          <Link href="/" className="text-gold hover:text-offwhite transition duration-300 text-sm tracking-widest uppercase pb-1 border-b border-gold/30 hover:border-offwhite">
            Retour à l&apos;accueil
          </Link>
        </div>

      </div>
    </div>
  )
}

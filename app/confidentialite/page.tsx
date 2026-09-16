import Link from "next/link";

export default function ConfidentialitePage() {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-charcoal">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-serif text-3xl md:text-5xl text-gold mb-6 uppercase tracking-widest">
            Politique de confidentialité
          </h1>
          <div className="h-px bg-gray-800 w-24 mx-auto"></div>
        </div>

        <div className="space-y-10 text-gray-300 font-light leading-relaxed">
          <section>
            <h2 className="text-xl font-serif text-offwhite mb-4 uppercase tracking-wider">
              1. Présentation
            </h2>
            <p>
              La présente politique de confidentialité vise à vous informer sur
              la manière dont FLOWERS EVENTS collecte, utilise et protège vos
              données personnelles lorsque vous utilisez notre site internet et
              notre formulaire de contact.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif text-offwhite mb-4 uppercase tracking-wider">
              2. Données collectées
            </h2>
            <p className="mb-2">
              Lorsque vous remplissez notre formulaire de demande de devis, nous
              collectons les informations suivantes :
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-400">
              <li>
                Identité : nom, prénom, statut (particulier ou professionnel).
              </li>
              <li>
                Coordonnées : adresse e-mail, numéro de téléphone (s&apos;il est
                communiqué dans les commentaires).
              </li>
              <li>
                Détails de l&apos;événement : date, lieu, type d&apos;événement, formules
                choisies et tout autre détail précisé dans la zone de
                commentaires.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-serif text-offwhite mb-4 uppercase tracking-wider">
              3. Utilisation des données
            </h2>
            <p>Ces données sont strictement nécessaires pour :</p>
            <ul className="list-disc pl-5 space-y-1 mt-2 text-gray-400">
              <li>Traiter votre demande et vous recontacter.</li>
              <li>Établir un devis sur-mesure pour votre événement.</li>
              <li>
                Assurer le suivi commercial et la bonne exécution de notre
                prestation.
              </li>
            </ul>
            <p className="mt-4">
              Vos données ne sont{" "}
              <strong className="text-offwhite font-normal">
                jamais revendues ni cédées
              </strong>{" "}
              à des tiers à des fins commerciales.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif text-offwhite mb-4 uppercase tracking-wider">
              4. Conservation et Sécurité
            </h2>
            <p>
              FLOWERS EVENTS s&apos;engage à conserver vos données personnelles
              uniquement pendant la durée nécessaire aux finalités pour
              lesquelles elles ont été collectées, c&apos;est-à-dire pendant la durée
              de notre relation commerciale, augmentée des durées de
              prescription légales (généralement 3 ans pour les prospects).
            </p>
            <p className="mt-4">
              Nous mettons en œuvre toutes les mesures de sécurité techniques
              (connexion HTTPS, formulaire sécurisé contre le spam, protection
              des serveurs) pour empêcher l&apos;accès non autorisé, la divulgation
              ou la modification de vos données.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif text-offwhite mb-4 uppercase tracking-wider">
              5. Vos droits (RGPD)
            </h2>
            <p>
              Conformément à la réglementation européenne (RGPD), vous disposez
              d&apos;un droit d&apos;accès, de rectification, d&apos;effacement et d&apos;opposition
              au traitement de vos données personnelles.
            </p>
            <p className="mt-4">
              Pour exercer ces droits, vous pouvez nous contacter directement à
              l&apos;adresse suivante :<br />
              <a
                href="mailto:contact@flowersevents.fr"
                className="text-gold hover:text-offwhite transition duration-300"
              >
                contact@flowersevents.fr
              </a>
            </p>
          </section>
        </div>

        <div className="mt-20 text-center">
          <Link
            href="/contact"
            className="text-gold hover:text-offwhite transition duration-300 text-sm tracking-widest uppercase pb-1 border-b border-gold/30 hover:border-offwhite"
          >
            Retour au formulaire
          </Link>
        </div>
      </div>
    </div>
  );
}

"use client";

import { motion, Variants } from 'framer-motion';
import Link from "next/link";
import Image from "next/image";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-screen pt-24 pb-12 flex flex-col items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/fond-accueil.jpg"
            alt="Barman préparant un cocktail"
            fill
            className="object-cover opacity-60"
            priority
            unoptimized
          />
          {/* Un dégradé un tout petit peu plus léger pour révéler l'image */}
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/40 to-charcoal"></div>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="relative z-10 px-4 max-w-4xl mx-auto"
        >
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-gold mb-6 leading-tight">
            VOTRE ÉVÉNEMENT.
            <br />
            NOTRE BAR.
            <br />
            VOS COCKTAILS.
          </h1>
                     {/* SOUS-TITRE LOCALISÉ */}
          <p className="text-xl md:text-2xl text-offwhite mb-8 font-light tracking-wide">
            Le bar à cocktails éphémère qui vient directement à vous, <br className="hidden md:block"/> 
            à <span className="text-gold font-normal">Lyon et en Auvergne-Rhône-Alpes</span>.
          </p>
          
          {/* TEXTE SEO : LES TYPES D'ÉVÉNEMENTS */}
          <div className="max-w-3xl mx-auto space-y-6 mb-12">
            <p className="text-md md:text-lg text-gray-300 font-light leading-relaxed">
              Que ce soit pour apporter une touche d&apos;élégance à votre <strong className="text-offwhite font-medium font-serif tracking-wide">mariage</strong>, 
              dynamiser un <strong className="text-offwhite font-medium font-serif tracking-wide">événement d&apos;entreprise</strong> (séminaire, team building), 
              ou célébrer un <strong className="text-offwhite font-medium font-serif tracking-wide">anniversaire privé</strong>, nous proposons une prestation clé en main.
            </p>
            <p className="text-md md:text-lg text-gray-300 font-light leading-relaxed">
              Barman professionnel, maîtrise des grands classiques, matériel complet et service impeccable : 
              nous gérons l&apos;intégralité de l&apos;animation bar pour faire de votre <strong className="text-offwhite font-medium font-serif tracking-wide">soirée événementielle</strong> une véritable réussite.
            </p>
          </div>


          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="#formules"
              className="bg-gold text-charcoal px-8 py-4 rounded-sm font-bold tracking-widest hover:bg-offwhite transition duration-300"
            >
              DÉCOUVRIR NOS FORMULES
            </Link>
            <Link
              href="/contact"
              className="border border-gold text-gold px-8 py-4 rounded-sm font-bold tracking-widest hover:bg-gold/10 transition duration-300"
            >
              PARLER DE MON ÉVÉNEMENT
            </Link>
          </div>
        </motion.div>
      </section>

      {/* INTRODUCTION */}
      <section className="py-24 px-6 bg-charcoal text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-3xl mx-auto"
        >
          <h2 className="font-serif text-3xl md:text-5xl text-gold mb-8">
            LE BAR VIENT À VOUS.
          </h2>
          <p className="text-lg md:text-xl font-light mb-6">
            Et si votre événement avait son propre bar à cocktails ?
          </p>
          <p className="text-gray-300 font-light mb-6">
            FLOWERS EVENTS installe un bar éphémère directement sur le lieu de
            votre événement. Mariage, anniversaire, soirée privée ou événement
            d’entreprise : nous apportons tout le nécessaire pour créer une
            véritable animation autour du cocktail.
          </p>
          <p className="text-gray-300 font-light">
            Barman professionnel, alcools, ingrédients, glace, garnitures et
            matériel : tout est prévu.
          </p>
        </motion.div>
      </section>

      {/* EXPÉRIENCE (4 Blocs) */}
      <section className="py-24 bg-darkgreen px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="font-serif text-3xl md:text-5xl text-gold text-center mb-16"
          >
            PLUS QU’UN SERVICE. UNE EXPÉRIENCE.
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              {
                id: "01",
                title: "UN BAR MOBILE",
                desc: "Notre bar s’installe directement sur votre lieu de réception.",
              },
              {
                id: "02",
                title: "UN BARMAN PROFESSIONNEL",
                desc: "Un professionnel prend en charge la préparation et le service des cocktails.",
              },
              {
                id: "03",
                title: "DES COCKTAILS POUR TOUS",
                desc: "Une carte pensée pour vos invités avec grands classiques et créations originales.",
              },
              {
                id: "04",
                title: "VOUS PROFITEZ",
                desc: "Installation, service et rangement : nous nous occupons de tout.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="border-t border-gold/30 pt-6"
              >
                <span className="text-gold text-xl font-serif block mb-2">
                  {item.id}
                </span>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400 font-light">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMULES PRINCIPALES */}
      <section id="formules" className="pt-24 pb-16 px-6 bg-charcoal">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-gold mb-4">
              NOS FORMULES
            </h2>
            <p className="text-lg text-gray-300 font-light">
              Une formule adaptée à chaque événement.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Formule 1 */}
            <div className="border border-gray-800 p-8 flex flex-col hover:border-gold/50 transition">
              <h3 className="text-2xl font-serif text-offwhite mb-2">
                ESSENTIEL
              </h3>
              <p className="text-gold mb-6">— 50 COCKTAILS</p>
              <p className="text-3xl mb-6">590 €</p>
              <p className="text-sm text-gray-400 mb-8 h-10">
                Une formule idéale pour les événements en petit comité.
              </p>
              <ul className="text-sm text-gray-300 space-y-3 mb-10 flex-grow">
                <li>• 50 cocktails</li>
                <li>• Barman professionnel</li>
                <li>• 2 heures (2 sessions de 1h00)</li>
                <li>• Alcools & ingrédients</li>
                <li>• Glaçons & garnitures</li>
                <li>• Matériel de bar</li>
                <li>• Installation & rangement</li>
              </ul>
              <p className="text-sm text-gray-300 font-light">
                Particuliers : Prix TTC
              </p>
              <p className="text-sm text-gray-300 font-light mb-8">
                Professionnels : Prix HT
              </p>
              <Link
                href="/contact?formule=essentiel"
                className="block text-center w-full border border-gold text-gold py-3 hover:bg-gold hover:text-charcoal transition"
              >
                CHOISIR ESSENTIEL
              </Link>
            </div>

            {/* Formule 2 (Mise en avant) */}
            <div className="border border-gold p-8 flex flex-col relative bg-gold/5 transform lg:-translate-y-4 shadow-2xl">
              <div className="absolute top-0 right-0 bg-gold text-charcoal text-xs font-bold px-3 py-1">
                LA PLUS CHOISIE
              </div>
              <h3 className="text-2xl font-serif text-offwhite mb-2">
                SIGNATURE
              </h3>
              <p className="text-gold mb-6">— 100 COCKTAILS</p>
              <p className="text-3xl mb-6">990 €</p>
              <p className="text-sm text-gray-400 mb-8 h-10">
                La formule incontournable pour vos soirées, anniversaires et
                événements.
              </p>
              <ul className="text-sm text-gray-300 space-y-3 mb-10 flex-grow">
                <li>• 100 cocktails</li>
                <li>• Barman professionnel</li>
                <li>• 3 heures (2 sessions de 1h30)</li>
                <li>• Alcools & ingrédients</li>
                <li>• Glaçons & garnitures</li>
                <li>• Matériel de bar</li>
                <li>• Installation & rangement</li>
              </ul>
              <p className="text-sm text-gray-300 font-light">
                Particuliers : Prix TTC
              </p>
              <p className="text-sm text-gray-300 font-light mb-8">
                Professionnels : Prix HT
              </p>
              <Link
                href="/contact?formule=signature"
                className="block text-center w-full bg-gold text-charcoal py-3 hover:bg-offwhite transition"
              >
                CHOISIR SIGNATURE
              </Link>
            </div>

            {/* Formule 3 */}
            <div className="border border-gray-800 p-8 flex flex-col hover:border-gold/50 transition">
              <h3 className="text-2xl font-serif text-offwhite mb-2">
                EXPERIENCE
              </h3>
              <p className="text-gold mb-6">— 150 COCKTAILS</p>
              <p className="text-3xl mb-6">1 350 €</p>
              <p className="text-sm text-gray-400 mb-8 h-10">
                Pensée pour les mariages et grandes soirées.
              </p>
              <ul className="text-sm text-gray-300 space-y-3 mb-10 flex-grow">
                <li>• 150 cocktails</li>
                <li>• Barman professionnel</li>
                <li>• 4 heures (2 sessions de 2h00)</li>
                <li>• Alcools & ingrédients</li>
                <li>• Glaçons & garnitures</li>
                <li>• Matériel de bar</li>
                <li>• Installation & rangement</li>
              </ul>
              <p className="text-sm text-gray-300 font-light">
                Particuliers : Prix TTC
              </p>
              <p className="text-sm text-gray-300 font-light mb-8">
                Professionnels : Prix HT
              </p>
              <Link
                href="/contact?formule=experience"
                className="block text-center w-full border border-gold text-gold py-3 hover:bg-gold hover:text-charcoal transition"
              >
                CHOISIR EXPERIENCE
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* OPTIONS ET SUPPLÉMENTS (Discret) */}
      {/* OPTIONS ET SUPPLÉMENTS (Discret) */}
      <section className="pb-24 px-6 bg-charcoal">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-6 mb-12 opacity-70">
            <div className="h-px bg-gray-700 w-12 md:w-24"></div>
            <h3 className="font-serif text-xl md:text-2xl text-gray-400 tracking-widest uppercase">
              Options & Suppléments
            </h3>
            <div className="h-px bg-gray-700 w-12 md:w-24"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* BLOC 1 : SOFTS */}
            <div className="border border-gray-800/50 p-6 md:p-8 hover:border-gold/20 transition duration-300">
              <h4 className="text-lg font-serif text-gold mb-2 uppercase tracking-widest">
                1. Formules Softs
              </h4>
              <p className="text-sm text-gray-400 font-light border-b border-gray-800 pb-4 mb-4">
                <span className="text-offwhite">Au réel : 4,50 €</span>{" "}
                (uniquement en soft individuel)
              </p>

              <div className="space-y-4">
                <div className="flex justify-between items-center bg-gray-900/30 p-3 rounded-sm">
                  <span className="text-offwhite font-bold text-sm">
                    50 softs
                  </span>
                  <div className="text-right text-xs">
                    <p className="text-offwhite">
                      Individuel : 200 €{" "}
                      <span className="text-gray-500 font-light">(4€/u)</span>
                    </p>
                    <p className="text-gray-400">
                      À la verse : 150 €{" "}
                      <span className="text-gray-500 font-light">(3€/u)</span>
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center bg-gray-900/30 p-3 rounded-sm">
                  <span className="text-offwhite font-bold text-sm">
                    80 softs
                  </span>
                  <div className="text-right text-xs">
                    <p className="text-offwhite">
                      Individuel : 280 €{" "}
                      <span className="text-gray-500 font-light">
                        (3,50€/u)
                      </span>
                    </p>
                    <p className="text-gray-400">
                      À la verse : 220 €{" "}
                      <span className="text-gray-500 font-light">
                        (2,75€/u)
                      </span>
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center bg-gray-900/30 p-3 rounded-sm">
                  <span className="text-offwhite font-bold text-sm">
                    120 softs
                  </span>
                  <div className="text-right text-xs">
                    <p className="text-offwhite">
                      Individuel : 380 €{" "}
                      <span className="text-gray-500 font-light">
                        (3,16€/u)
                      </span>
                    </p>
                    <p className="text-gray-400">
                      À la verse : 300 €{" "}
                      <span className="text-gray-500 font-light">
                        (2,50€/u)
                      </span>
                    </p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-800 text-xs text-gray-500 font-light space-y-1.5 leading-relaxed">
                  <p>* Particuliers : Prix TTC</p>
                  <p>* Professionnels : Prix HT</p>
                </div>
              </div>
            </div>

                      {/* 2. FORMULES BIÈRES */}
          <div className="border border-gray-800 bg-charcoal/30 p-6 md:p-8 flex flex-col hover:border-gold/30 transition duration-300">
            <h3 className="text-lg font-serif text-gold mb-2 uppercase tracking-widest">
              2. Formules Bières
            </h3>
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-6">
              Pression — Sur Mesure
            </p>

            <div className="flex justify-between border-b border-gray-600 pb-2 mb-4 text-xs text-gray-500 uppercase tracking-wider">
              <span>Fûts</span>
              <span className="text-right">Tarifs Globaux</span>
            </div>

            <div className="space-y-4 flex-grow text-sm">
              {/* 2 Fûts */}
              <div className="flex justify-between items-start border-b border-gray-800/50 pb-4">
                <div className="text-offwhite font-medium mt-1">2 fûts <span className="text-gray-500 text-xs font-light">(60L)</span></div>
                <div className="text-right space-y-1">
                  <div className="text-gray-300">Sans service : <strong className="text-offwhite">360 €</strong> <span className="text-gray-500 text-xs">(6,00€/L)</span></div>
                  <div className="text-gray-300">Service : <strong className="text-gold">dès 660 €</strong> <span className="text-gray-500 text-xs">(5,50€/pinte)</span></div>
                </div>
              </div>

              {/* 4 Fûts */}
              <div className="flex justify-between items-start border-b border-gray-800/50 pb-4">
                <div className="text-offwhite font-medium mt-1">4 fûts <span className="text-gray-500 text-xs font-light">(120L)</span></div>
                <div className="text-right space-y-1">
                  <div className="text-gray-300">Sans service : <strong className="text-offwhite">696 €</strong> <span className="text-gray-500 text-xs">(5,80€/L)</span></div>
                  <div className="text-gray-300">Service : <strong className="text-gold">dès 1 200 €</strong> <span className="text-gray-500 text-xs">(5,00€/pinte)</span></div>
                </div>
              </div>

              {/* 6 Fûts */}
              <div className="flex justify-between items-start border-b border-gray-800/50 pb-4">
                <div className="text-offwhite font-medium mt-1">6 fûts <span className="text-gray-500 text-xs font-light">(180L)</span></div>
                <div className="text-right space-y-1">
                  <div className="text-gray-300">Sans service : <strong className="text-offwhite">1 008 €</strong> <span className="text-gray-500 text-xs">(5,60€/L)</span></div>
                  <div className="text-gray-300">Service : <strong className="text-gold">dès 1 690 €</strong> <span className="text-gray-500 text-xs">(~4,70€/pinte)</span></div>
                </div>
              </div>

              {/* 8 Fûts */}
              <div className="flex justify-between items-start border-b border-gray-800/50 pb-4">
                <div className="text-offwhite font-medium mt-1">8 fûts <span className="text-gray-500 text-xs font-light">(240L)</span></div>
                <div className="text-right space-y-1">
                  <div className="text-gray-300">Sans service : <strong className="text-offwhite">1 296 €</strong> <span className="text-gray-500 text-xs">(5,40€/L)</span></div>
                  <div className="text-gray-300">Service : <strong className="text-gold">dès 2 110 €</strong> <span className="text-gray-500 text-xs">(~4,40€/pinte)</span></div>
                </div>
              </div>
              
              {/* 10 Fûts */}
              <div className="flex justify-between items-start pb-2">
                <div className="text-offwhite font-medium mt-1">10 fûts <span className="text-gray-500 text-xs font-light">(300L)</span></div>
                <div className="text-right space-y-1">
                  <div className="text-gray-300">Sans service : <strong className="text-offwhite">1 560 €</strong> <span className="text-gray-500 text-xs">(5,20€/L)</span></div>
                  <div className="text-gray-300">Service : <strong className="text-gold">Sur devis</strong></div>
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-2 text-xs text-gray-400 font-light">
              <p>✓ Location/livraison tireuses + CO₂ inclus.</p>
              <p>✓ <strong className="text-offwhite">Minimum 3 fûts</strong> pour déplacement des machines.</p>
              <p>✓ Tarifs sur base Pils premium 4,5% vol.</p>
              <div className="pt-4 mt-4 border-t border-gray-800/50 space-y-1">
                <p>* Particuliers : Prix TTC</p>
                <p>* Professionnels : Prix HT</p>
              </div>
            </div>
          </div>



            {/* BLOC 3 : KILOMÉTRAGE */}
            <div className="border border-gray-800/50 p-6 md:p-8 hover:border-gold/20 transition duration-300">
              <h4 className="text-lg font-serif text-gold mb-2 uppercase tracking-widest">
                3. Déplacement
              </h4>
              <p className="text-sm text-gray-400 font-light border-b border-gray-800 pb-4 mb-6">
                Frais kilométriques applicables selon le lieu de votre
                événement.
              </p>

              <div className="space-y-4">
                <div className="flex justify-between items-center bg-gray-900/30 p-4 rounded-sm border-l-2 border-gold/50">
                  <span className="text-offwhite font-bold">De 20 à 40 km</span>
                  <span className="text-gold font-serif text-xl">+ 80 €</span>
                </div>
                <div className="flex justify-between items-center bg-gray-900/30 p-4 rounded-sm border-l-2 border-gold/50">
                  <span className="text-offwhite font-bold">De 40 à 60 km</span>
                  <span className="text-gold font-serif text-xl">+ 120 €</span>
                </div>
                <div className="flex justify-between items-center bg-gray-900/30 p-4 rounded-sm border-l-2 border-gray-700">
                  <span className="text-gray-400 font-light">
                    Au-delà de 60 km
                  </span>
                  <span className="text-gray-400 font-light italic text-sm">
                    Sur devis
                  </span>
                </div>
              </div>
            </div>
          </div>
            {/* ---> NOUVEAU BLOC : DEMANDES SUR MESURE <--- */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-16 text-center border-t border-gray-800/50 pt-12 max-w-3xl mx-auto"
              >
                <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed">
                  Pour toutes autres demandes ou devis sur mesure, n&apos;hésitez pas à nous détailler votre projet depuis le{" "}
                  <Link href="/contact" className="text-gold hover:text-offwhite transition underline underline-offset-4 decoration-gold/30 hover:decoration-offwhite">
                    formulaire de contact
                  </Link>.
                </p>
              </motion.div>
          {/* ---> FIN DU NOUVEAU BLOC <--- */}
        </div>
      </section>
      

      {/* TOUT EST PRÉVU */}
      <section className="relative py-32 text-center bg-charcoal overflow-hidden border-t border-b border-gray-900">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="relative z-10 max-w-4xl mx-auto px-6"
        >
          <h2 className="font-serif text-4xl md:text-6xl text-gold mb-6">
            TOUT EST PRÉVU.
          </h2>
          <p className="text-2xl md:text-4xl font-light mb-12">
            Vous profitez. Nous servons.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm md:text-lg text-gray-400 font-light mb-12 uppercase tracking-widest">
            <span>Barman</span>
            <span className="text-gold">•</span>
            <span>Alcools</span>
            <span className="text-gold">•</span>
            <span>Ingrédients</span>
            <span className="text-gold">•</span>
            <span>Softs</span>
            <span className="text-gold">•</span>
            <span>Glaçons</span>
            <span className="text-gold">•</span>
            <span>Garnitures</span>
            <span className="text-gold">•</span>
            <span>Matériel</span>
            <span className="text-gold">•</span>
            <span>Installation</span>
            <span className="text-gold">•</span>
            <span>Service</span>
            <span className="text-gold">•</span>
            <span>Rangement</span>
          </div>
          <Link
            href="/contact"
            className="inline-block bg-gold text-charcoal px-10 py-4 rounded-sm font-bold tracking-widest hover:bg-offwhite transition"
          >
            ORGANISER MON ÉVÉNEMENT
          </Link>
        </motion.div>
      </section>
    </>
  );
}

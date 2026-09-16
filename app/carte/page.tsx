"use client";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

// On ajoute ": Variants" pour rassurer TypeScript !
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

export default function CartePage() {
  const cocktails = [
    { name: "Dark 'n' Stormy", desc: "Rhum, citron, ginger beer" },
    {
      name: "Pornstar Martini",
      desc: "Vodka, fruit de la passion, ananas, sirop de vanille, citron",
    },
    {
      name: "London Mule",
      desc: "Gin, citron, ginger beer, sirop de gingembre",
    },
    {
      name: "Aperol Spritz",
      desc: "Aperol, Prosecco, eau gazeuse, orange",
    },
    { name: "Margarita", desc: "Tequila, citron, Cointreau" },
  ];

  const mixes = ["Gin Tonic", "Rhum Coca", "Vodka Orange", "Whisky Coca"];

  const softs = [
    "Coca-Cola",
    "Ginger Beer",
    "Tonic",
    "Limonade",
    "Perrier",
    "Jus d'Ananas",
    "Jus d'Orange",
  ];

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-charcoal">
      <div className="max-w-4xl mx-auto">
        {/* EN-TÊTE DE LA CARTE */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-center mb-24"
        >
          <h1 className="font-serif text-4xl md:text-6xl text-gold mb-6">
            NOTRE CARTE
          </h1>
          <p className="text-xl font-light text-gray-300 max-w-2xl mx-auto">
            Une sélection minutieuse pour sublimer votre événement. Retrouvez
            les incontournables de la mixologie, parfaitement exécutés pour vos
            invités.
          </p>
        </motion.div>

        {/* SECTION COCKTAILS */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-24"
        >
          <div className="flex items-center justify-center gap-6 mb-16">
            <div className="h-px bg-gold/50 w-16 md:w-32"></div>
            <h2 className="font-serif text-3xl md:text-4xl text-gold tracking-widest uppercase">
              Les Cocktails
            </h2>
            <div className="h-px bg-gold/50 w-16 md:w-32"></div>
          </div>

          <div className="space-y-12">
            {cocktails.map((cocktail, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="text-center group"
              >
                <h3 className="text-2xl md:text-3xl font-serif text-offwhite mb-2 uppercase tracking-wide group-hover:text-gold transition duration-300">
                  {cocktail.name}
                </h3>
                <p className="text-gray-400 font-light italic tracking-wider">
                  {cocktail.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* SECTION MIXES & SOFTS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          {/* LES INCONTOURNABLES */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center border border-gray-800 p-10 hover:border-gold/50 transition duration-500 bg-charcoal/50"
          >
            <h2 className="font-serif text-2xl md:text-3xl text-gold tracking-widest uppercase mb-4">
              Les Incontournables
            </h2>
            <div className="h-px bg-gold/30 w-16 mx-auto mb-8"></div>
            <ul className="space-y-4">
              {mixes.map((mix, index) => (
                <li
                  key={index}
                  className="text-gray-300 font-light tracking-wide text-lg"
                >
                  {mix}
                </li>
              ))}
            </ul>
          </motion.section>

          {/* LES SANS ALCOOL */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center border border-gray-800 p-10 hover:border-gold/50 transition duration-500 bg-charcoal/50"
          >
            <h2 className="font-serif text-2xl md:text-3xl text-gold tracking-widest uppercase mb-4">
              Les Sans Alcool
            </h2>
            <div className="h-px bg-gold/30 w-16 mx-auto mb-8"></div>
            <ul className="space-y-4">
              {softs.map((soft, index) => (
                <li
                  key={index}
                  className="text-gray-300 font-light tracking-wide text-lg"
                >
                  {soft}
                </li>
              ))}
            </ul>
          </motion.section>
        </div>
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp} 
          className="mt-16 p-8 bg-charcoal/80 border border-gold/30 rounded-xl text-center max-w-3xl mx-auto"
        >
          <h2 className="text-2xl font-serif text-gold mb-4 uppercase tracking-wide">
            Venez déguster avant le jour J ! 🍸
          </h2>
          
          <p className="text-gray-300 mb-6 leading-relaxed font-light">
            Vous hésitez entre notre London Mule et un classique ? Le mieux, c&apos;est encore de venir les goûter. <br /><br />
            Si &quot;le bar vient à vous&quot; le jour de votre événement, nous vous accueillons avec plaisir en amont dans notre bar situé en plein cœur de la <strong>Croix-Rousse</strong>. 
            Venez découvrir notre univers, tester notre carte en conditions réelles, et concevoir ensemble le menu sur mesure de votre soirée.
          </p>
          
          <Link 
            href="/contact" 
            className="inline-block px-8 py-3 bg-gold text-charcoal font-semibold rounded hover:bg-offwhite transition-colors duration-300"
          >
            Prendre rendez-vous au flower&apos;s bar
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

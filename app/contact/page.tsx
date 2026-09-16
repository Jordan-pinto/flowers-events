import ContactForm from '@/components/ContactForm'

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-charcoal">
      <div className="max-w-4xl mx-auto">
        
        {/* EN-TÊTE */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-6xl text-gold mb-6 uppercase tracking-widest">
            Parlons de votre événement.
          </h1>
          <p className="text-xl font-light text-gray-300 max-w-2xl mx-auto">
            Vous avez une date, un lieu, une idée ? Remplissez le formulaire ci-dessous, nous reviendrons vers vous très rapidement pour concevoir votre prestation sur-mesure.
          </p>
        </div>
        
        {/* LE FORMULAIRE DANS UN CADRE ÉLÉGANT */}
        <div className="bg-charcoal/50 border border-gray-800 p-6 md:p-12 shadow-2xl relative">
          {/* Petits détails décoratifs aux coins */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-gold/50"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-gold/50"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-gold/50"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-gold/50"></div>
          
          <ContactForm />
        </div>
        
        {/* CONTACT DIRECT */}
        <div className="mt-20 text-center border-t border-gray-900 pt-12">
          <p className="text-gray-400 font-light mb-2">Vous préférez nous contacter directement ?</p>
          <a 
            href="mailto:contact@flowersevents.fr" 
            className="text-gold font-serif text-xl tracking-widest hover:text-offwhite transition duration-300"
          >
            contact@flowersevents.fr
          </a>
        </div>

      </div>
    </div>
  )
}

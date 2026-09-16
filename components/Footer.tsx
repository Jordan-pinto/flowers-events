import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-gray-900 pt-16 pb-8 px-6 text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        {/* LOGO & BASELINE */}
        <div className="flex flex-col items-center mb-10">
          <span className="font-serif text-3xl text-offwhite tracking-widest uppercase">
            FLOWERS EVENTS
          </span>
          <span className="text-gold text-xs font-light tracking-[0.2em] uppercase mt-2">
            Le bar vient à vous
          </span>
        </div>

        {/* RÉSEAUX SOCIAUX & AVIS GOOGLE */}
        <div className="flex items-center gap-8 mb-12">
          {/* Instagram */}
          <a href="https://www.instagram.com/flowersevents.lyon?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold transition duration-300" title="Suivez-nous sur Instagram">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          
          {/* Facebook */}
          <a href="https://www.facebook.com/profile.php?id=61594252718740" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold transition duration-300" title="Notre page Facebook">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>

          {/* Google (Logo officiel) */}
          <a href="https://share.google/CGyoWITBvMp7UpIUn" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold transition duration-300" title="Laissez-nous un avis sur Google">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
          </a>
        </div>

        {/* LIEN VERS LE FLOWER'S BAR PHYSIQUE */}
        <div className="mb-16">
          <p className="text-gray-500 text-sm font-light mb-4">Découvrez également notre établissement :</p>
          <a 
            href="https://flowers-croix-rousse.fr/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-gray-800 px-8 py-4 hover:border-gold group transition duration-300 bg-charcoal shadow-sm"
          >
            <span className="font-serif text-lg text-offwhite group-hover:text-gold transition duration-300 tracking-widest">
              FLOWER&apos;S BAR
            </span>
            {/* Petite flèche sortante pour indiquer un autre site */}
            <svg className="w-4 h-4 text-gray-500 group-hover:text-gold transition duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        {/* LIENS LÉGAUX & COPYRIGHT */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-xs text-gray-500 font-light border-t border-gray-800/50 w-full pt-8">
          <span>© {new Date().getFullYear()} FLOWERS EVENTS. Tous droits réservés.</span>
          <div className="flex gap-4">
            <Link href="/mentions-legales" className="hover:text-gold transition">Mentions légales</Link>
            <Link href="/confidentialite" className="hover:text-gold transition">Politique de confidentialité</Link>
          </div>
        </div>
        
      </div>
    </footer>
  )
}

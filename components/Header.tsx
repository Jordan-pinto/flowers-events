'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed w-full top-0 z-50 bg-charcoal/90 backdrop-blur-md border-b border-gray-900 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* LOGO & BASELINE */}
        <Link href="/" className="flex flex-col items-start group">
          <span className="font-serif text-2xl md:text-3xl text-offwhite tracking-widest uppercase group-hover:text-gold transition duration-300">
            FLOWERS EVENTS
          </span>
          <span className="text-gold text-[10px] md:text-xs font-light tracking-[0.2em] uppercase mt-0.5 opacity-90">
            Le bar vient à vous
          </span>
        </Link>


        {/* MENU DESKTOP */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm tracking-widest hover:text-gold transition">ACCUEIL</Link>
          <Link href="/#formules" className="text-sm tracking-widest hover:text-gold transition">FORMULES</Link>
          <Link href="/carte" className="text-sm tracking-widest hover:text-gold transition">NOTRE CARTE</Link>
          <Link href="/contact" className="text-sm tracking-widest hover:text-gold transition">NOUS CONTACTER</Link>
          
          <Link href="/contact" className="bg-gold text-charcoal px-6 py-2 text-sm font-bold tracking-widest hover:bg-offwhite transition">
            RÉSERVER
          </Link>
        </nav>

        {/* BOUTON MOBILE */}
        <button className="md:hidden text-gold" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MENU MOBILE */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-charcoal border-b border-gray-900 flex flex-col items-center py-8 gap-6 shadow-2xl">
          <Link href="/" onClick={() => setIsOpen(false)} className="tracking-widest hover:text-gold transition">ACCUEIL</Link>
          <Link href="/#formules" onClick={() => setIsOpen(false)} className="tracking-widest hover:text-gold transition">FORMULES</Link>
          <Link href="/carte" onClick={() => setIsOpen(false)} className="tracking-widest hover:text-gold transition">NOTRE CARTE</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="tracking-widest hover:text-gold transition">NOUS CONTACTER</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="bg-gold text-charcoal px-8 py-3 mt-4 text-sm font-bold tracking-widest">
            RÉSERVER
          </Link>
        </div>
      )}
    </header>
  )
}

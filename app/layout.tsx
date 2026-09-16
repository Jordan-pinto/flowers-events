import type { Metadata } from 'next'
import { Playfair_Display, Lato } from 'next/font/google'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })
const lato = Lato({ weight: ['300', '400', '700'], subsets: ['latin'], variable: '--font-lato' })

export const metadata: Metadata = {
  title: "FLOWERS EVENTS | Le bar à cocktails qui vient à vous à Lyon",
  description: "Bar à cocktails éphémère et barman événementiel privé à Lyon et en Auvergne-Rhône-Alpes. Prestations sur-mesure pour mariages, soirées privées et événements d'entreprise.",
  keywords: [
    "barman à domicile Lyon", 
    "bar à cocktails mobile", 
    "mixologue événementiel", 
    "animation cocktail mariage", 
    "barman privé Rhône", 
    "bar éphémère Auvergne-Rhône-Alpes",
    "location de bar pour événement",
    "cocktails sur-mesure",
    "prestation barman entreprise",
    "Flowers Events"
  ],
  // Intégration de l'OpenGraph pour les réseaux sociaux :
  openGraph: {
    title: "FLOWERS EVENTS | Bar à cocktails éphémère",
    description: "Le bar vient directement à vous ! Dégustation sur-mesure et service premium pour votre événement sur Lyon et ses alentours.",
    url: "https://flowersevents.fr", 
    siteName: "FLOWERS EVENTS",
    images: [
      {
        url: "https://flowersevents.fr/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Flowers Events Aperçu",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" data-scroll-behavior="smooth">
      <body className={`${playfair.variable} ${lato.variable} font-sans bg-charcoal text-offwhite antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

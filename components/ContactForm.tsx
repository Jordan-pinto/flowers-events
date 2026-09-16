'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import Link from 'next/link'

const formSchema = z.object({
  statut: z.string().min(1, "Veuillez préciser votre statut"),
  nom: z.string().min(2, "Le nom est requis"),
  prenom: z.string().min(2, "Le prénom est requis"),
  email: z.string().email("Veuillez entrer une adresse e-mail valide"),
  telephone: z.string().min(10, "Le numéro de téléphone est requis"),
  typeEvenement: z.string().min(1, "Veuillez sélectionner un type d'événement"),
  date: z.string().min(1, "La date est requise"),
  adresse: z.string().min(5, "L'adresse de l'événement est requise"),
  formule: z.string().min(1, "Veuillez sélectionner une formule principale"),
  optionSoft: z.string().optional(),
  optionBiere: z.string().optional(),
  commentaires: z.string().optional(),
  rgpd: z.literal(true, { errorMap: () => ({ message: "Vous devez accepter les conditions." }) }),
  botField: z.string().max(0, "Bot détecté").optional()
})

type FormData = z.infer<typeof formSchema>

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  })

  const onSubmit = async (data: FormData) => {
    setStatus('loading')
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!response.ok) throw new Error()
      setStatus('success')
    } catch (error) {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center p-12 border border-gold/30 bg-gold/5 rounded-sm">
        <h3 className="font-serif text-3xl text-gold mb-4">DEMANDE ENVOYÉE</h3>
        <p className="text-offwhite font-light">Merci pour votre confiance.<br/>Nous reviendrons vers vous rapidement pour échanger sur votre événement.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-3xl mx-auto">
      <input type="text" {...register("botField")} className="hidden" tabIndex={-1} autoComplete="off" />

      {/* LIGNE 1 : STATUT */}
      <div>
        <label className="block text-sm text-gray-400 mb-2">Vous êtes ? *</label>
        <div className="flex gap-6">
          <label className="flex items-center gap-2 text-offwhite cursor-pointer">
            <input type="radio" value="Particulier" {...register("statut")} className="accent-gold w-4 h-4" /> Particulier
          </label>
          <label className="flex items-center gap-2 text-offwhite cursor-pointer">
            <input type="radio" value="Professionnel" {...register("statut")} className="accent-gold w-4 h-4" /> Professionnel
          </label>
        </div>
        {errors.statut && <p className="text-red-400 text-xs mt-1">{errors.statut.message}</p>}
      </div>

      {/* LIGNE 2 : IDENTITÉ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm text-gray-400 mb-2">Prénom *</label>
          <input {...register("prenom")} className="w-full bg-transparent border border-gray-700 p-3 text-offwhite focus:border-gold outline-none transition" />
          {errors.prenom && <p className="text-red-400 text-xs mt-1">{errors.prenom.message}</p>}
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-2">Nom *</label>
          <input {...register("nom")} className="w-full bg-transparent border border-gray-700 p-3 text-offwhite focus:border-gold outline-none transition" />
          {errors.nom && <p className="text-red-400 text-xs mt-1">{errors.nom.message}</p>}
        </div>
      </div>

      {/* LIGNE 3 : CONTACT (Email & Téléphone) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm text-gray-400 mb-2">Adresse E-mail *</label>
          <input type="email" {...register("email")} className="w-full bg-transparent border border-gray-700 p-3 text-offwhite focus:border-gold outline-none transition" />
          {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-2">Téléphone *</label>
          <input type="tel" {...register("telephone")} className="w-full bg-transparent border border-gray-700 p-3 text-offwhite focus:border-gold outline-none transition" />
          {errors.telephone && <p className="text-red-400 text-xs mt-1">{errors.telephone.message}</p>}
        </div>
      </div>

      {/* LIGNE 4 : ÉVÉNEMENT */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm text-gray-400 mb-2">Type d&apos;événement *</label>
          <select {...register("typeEvenement")} className="w-full bg-charcoal border border-gray-700 p-3 text-offwhite focus:border-gold outline-none transition">
            <option value="">Sélectionner...</option>
            <option value="Mariage">Mariage</option>
            <option value="Anniversaire">Anniversaire</option>
            <option value="Soirée privée">Soirée privée</option>
            <option value="Événement d'entreprise">Événement d&apos;entreprise</option>
            <option value="Autre">Autre</option>
          </select>
          {errors.typeEvenement && <p className="text-red-400 text-xs mt-1">{errors.typeEvenement.message}</p>}
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-2">Date *</label>
          <input type="date" {...register("date")} className="w-full bg-transparent border border-gray-700 p-3 text-offwhite focus:border-gold outline-none transition" />
          {errors.date && <p className="text-red-400 text-xs mt-1">{errors.date.message}</p>}
        </div>
      </div>

      {/* LIGNE 5 : ADRESSE */}
      <div>
        <label className="block text-sm text-gray-400 mb-2">Adresse complète de l&apos;événement *</label>
        <input type="text" {...register("adresse")} placeholder="Code postal et Ville au minimum..." className="w-full bg-transparent border border-gray-700 p-3 text-offwhite focus:border-gold outline-none transition" />
        {errors.adresse && <p className="text-red-400 text-xs mt-1">{errors.adresse.message}</p>}
      </div>

      {/* LIGNE 6 : FORMULES & OPTIONS */}
      <div className="border-t border-b border-gray-800 py-6 my-6 space-y-6">
        <div>
          <label className="block text-sm text-gold font-bold mb-2">Formule Principale (Cocktails) *</label>
          <select {...register("formule")} className="w-full bg-charcoal border border-gold/50 p-3 text-offwhite focus:border-gold outline-none transition">
            <option value="">Sélectionner...</option>
            <option value="Essentiel">Essentiel — 50 cocktails — 590 €</option>
            <option value="Signature">Signature — 100 cocktails — 990 €</option>
            <option value="Experience">Experience — 150 cocktails — 1 350 €</option>
            <option value="Personnalisée">Je souhaite une formule personnalisée</option>
          </select>
          {errors.formule && <p className="text-red-400 text-xs mt-1">{errors.formule.message}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm text-gray-400 mb-2">Option Softs (Facultatif)</label>
            <select {...register("optionSoft")} className="w-full bg-charcoal border border-gray-700 p-3 text-offwhite focus:border-gold outline-none transition">
              <option value="">Aucune option soft</option>
              <option value="50 Softs - Individuel">50 Softs - Individuel (200€)</option>
              <option value="50 Softs - À la verse">50 Softs - À la verse (150€)</option>
              <option value="80 Softs - Individuel">80 Softs - Individuel (280€)</option>
              <option value="80 Softs - À la verse">80 Softs - À la verse (220€)</option>
              <option value="120 Softs - Individuel">120 Softs - Individuel (380€)</option>
              <option value="120 Softs - À la verse">120 Softs - À la verse (300€)</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2">Option Bières (Facultatif)</label>
            <select {...register("optionBiere")} className="w-full bg-charcoal border border-gray-700 p-3 text-offwhite focus:border-gold outline-none transition">
              <option value="">Aucune option bière</option>
              
              <optgroup label="Avec Service Barman" className="text-gold font-bold italic">
                <option value="2 fûts - Avec Service" className="text-offwhite font-sans not-italic">2 fûts (dès 660€)</option>
                <option value="4 fûts - Avec Service" className="text-offwhite font-sans not-italic">4 fûts (dès 1 200€)</option>
                <option value="6 fûts - Avec Service" className="text-offwhite font-sans not-italic">6 fûts (dès 1 690€)</option>
                <option value="8 fûts - Avec Service" className="text-offwhite font-sans not-italic">8 fûts (dès 2 110€)</option>
              </optgroup>

              <optgroup label="Sans Service (Mise à disposition)" className="text-gold font-bold italic">
                <option value="2 fûts - Sans Service" className="text-offwhite font-sans not-italic">2 fûts / 60L (360€)</option>
                <option value="4 fûts - Sans Service" className="text-offwhite font-sans not-italic">4 fûts / 120L (696€)</option>
                <option value="6 fûts - Sans Service" className="text-offwhite font-sans not-italic">6 fûts / 180L (1 008€)</option>
                <option value="8 fûts - Sans Service" className="text-offwhite font-sans not-italic">8 fûts / 240L (1 296€)</option>
                <option value="10 fûts - Sans Service" className="text-offwhite font-sans not-italic">10 fûts / 300L (1 560€)</option>
                <option value="+ de 10 fûts - Sans Service" className="text-offwhite font-sans not-italic">Plus de 10 fûts (Sur devis)</option>
              </optgroup>
            </select>
          </div>

        </div>
      </div>

      {/* LIGNE 7 : COMMENTAIRES */}
      <div>
        <label className="block text-sm text-gray-400 mb-2">Commentaires (Horaires, nombre d&apos;invités, détails...)</label>
        <textarea {...register("commentaires")} rows={4} className="w-full bg-transparent border border-gray-700 p-3 text-offwhite focus:border-gold outline-none transition resize-none"></textarea>
      </div>

      <div className="flex items-start gap-3">
        <input type="checkbox" {...register("rgpd")} className="mt-1 accent-gold" />
        <label className="text-sm text-gray-400 font-light text-left">
          J’accepte que les informations saisies soient utilisées pour répondre à ma demande. <Link href="/confidentialite" target="_blank" className="underline hover:text-gold transition">Politique de confidentialité</Link>.
        </label>
      </div>
      {errors.rgpd && <p className="text-red-400 text-xs">{errors.rgpd.message}</p>}

      {status === 'error' && <p className="text-red-400 text-sm text-center">Une erreur est survenue lors de l&apos;envoi. Veuillez réessayer.</p>}

      <button disabled={status === 'loading'} className="w-full bg-gold text-charcoal py-4 font-bold tracking-widest hover:bg-offwhite transition disabled:opacity-50 mt-4">
        {status === 'loading' ? 'ENVOI EN COURS...' : 'ENVOYER MA DEMANDE'}
      </button>
    </form>
  )
}


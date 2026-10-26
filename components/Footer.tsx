'use client';

import React from 'react';
import { Instagram, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-bg border-t border-brand-border py-12 text-xs text-brand-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <div className="space-y-3">
          <p className="font-bold text-base text-brand-text">Anulus Joaillerie</p>
          <p className="text-xs font-light leading-relaxed">
            Plateforme e-commerce propriétaire ultra-rapide optimisée pour le paiement à la livraison au Maroc.
          </p>
          <div className="flex items-center gap-3 pt-2">
            <a href="https://instagram.com/anulus.ma" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-brand-surface border border-brand-border text-brand-text hover:text-brand-accent transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div>
          <p className="font-bold text-brand-text mb-3 uppercase tracking-wider">Assistance Client</p>
          <ul className="space-y-2">
            <li><a href="https://wa.me/212639156883" className="hover:text-brand-text transition-colors">Suivi de commande WhatsApp</a></li>
            <li><a href="#" className="hover:text-brand-text transition-colors">Conditions de livraison au Maroc</a></li>
            <li><a href="#" className="hover:text-brand-text transition-colors">Politique d'échange & retour</a></li>
          </ul>
        </div>

        <div>
          <p className="font-bold text-brand-text mb-3 uppercase tracking-wider">Villes Desservies</p>
          <p className="leading-relaxed">
            Casablanca (24h), Rabat, Marrakech, Tanger, Fès, Agadir, Meknès, Oujda, Tétouan et toutes les localités du Royaume du Maroc.
          </p>
        </div>

        <div>
          <p className="font-bold text-brand-text mb-3 uppercase tracking-wider">Contact Direct</p>
          <ul className="space-y-2">
            <li className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-brand-accent" /> +212 6 39 15 68 83</li>
            <li className="flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-brand-accent" /> contact@anulus.ma</li>
            <li className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-brand-accent" /> Casablanca, Maroc</li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-6 border-t border-brand-border flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
        <p>© 2026 Anulus Joaillerie. Tous droits réservés. Modernisé avec Next.js 14 & Fast COD Engine.</p>
        <p className="text-emerald-500 font-semibold">100% Zéro Frais en Devises • Dotation E-Commerce Préservée</p>
      </div>
    </footer>
  );
}

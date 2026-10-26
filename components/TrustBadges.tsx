'use client';

import React from 'react';
import { ShieldCheck, Truck, RefreshCw, Award } from 'lucide-react';

export default function TrustBadges() {
  return (
    <section className="py-6 bg-brand-surface border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
        <div className="p-3">
          <Truck className="w-5 h-5 text-brand-accent mx-auto mb-1" />
          <p className="font-bold text-xs text-brand-text">Livraison Express</p>
          <p className="text-[10px] text-brand-muted">24h Casa • 48h Maroc</p>
        </div>
        <div className="p-3">
          <ShieldCheck className="w-5 h-5 text-brand-accent mx-auto mb-1" />
          <p className="font-bold text-xs text-brand-text">Paiement à Réception</p>
          <p className="text-[10px] text-brand-muted">Payez après vérification</p>
        </div>
        <div className="p-3">
          <RefreshCw className="w-5 h-5 text-brand-accent mx-auto mb-1" />
          <p className="font-bold text-xs text-brand-text">Échange Facile</p>
          <p className="text-[10px] text-brand-muted">Support réactif 7j/7</p>
        </div>
        <div className="p-3">
          <Award className="w-5 h-5 text-brand-accent mx-auto mb-1" />
          <p className="font-bold text-xs text-brand-text">100% Authentique</p>
          <p className="text-[10px] text-brand-muted">Qualité garantie</p>
        </div>
      </div>
    </section>
  );
}

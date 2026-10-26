'use client';

import React from 'react';
import { ShieldCheck, Truck, RotateCcw, Clock } from 'lucide-react';

export default function TrustBadges() {
  return (
    <section className="bg-brand-surface border-b border-brand-border py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-brand-bg/50 border border-brand-border/60">
            <Truck className="w-7 h-7 text-brand-accent shrink-0" />
            <div>
              <p className="text-xs font-bold text-brand-text">Livraison Express</p>
              <p className="text-[11px] text-brand-muted">24h Casa • 48h Maroc</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-xl bg-brand-bg/50 border border-brand-border/60">
            <ShieldCheck className="w-7 h-7 text-brand-accent shrink-0" />
            <div>
              <p className="text-xs font-bold text-brand-text">Paiement à Réception</p>
              <p className="text-[11px] text-brand-muted">Payez en espèces après vérification</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-xl bg-brand-bg/50 border border-brand-border/60">
            <RotateCcw className="w-7 h-7 text-brand-accent shrink-0" />
            <div>
              <p className="text-xs font-bold text-brand-text">Échange Simple</p>
              <p className="text-[11px] text-brand-muted">Garantie satisfaction totale</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-xl bg-brand-bg/50 border border-brand-border/60">
            <Clock className="w-7 h-7 text-brand-accent shrink-0" />
            <div>
              <p className="text-xs font-bold text-brand-text">Support Dédié</p>
              <p className="text-[11px] text-brand-muted">Assistance WhatsApp 7j/7</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

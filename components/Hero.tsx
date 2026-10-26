'use client';

import React from 'react';
import { ChevronRight, ArrowUpRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-bg py-12 md:py-20 border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-black uppercase tracking-widest text-brand-accent bg-brand-surface px-3 py-1 rounded-full border border-brand-border">
              DROP 2026 • ESSAYAGE À DOMICILE
            </span>
            <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-brand-text leading-none">
              L'Audace du Style. Sans Compromis.
            </h1>
            <p className="text-base text-brand-muted max-w-md">
              Collections exclusives signées <strong>Anulus Joaillerie</strong>. Essayez votre commande chez vous avant de payer le livreur partout au Maroc.
            </p>
            <div className="pt-2">
              <a
                href="#catalogue"
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand-accent text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg hover:brightness-110 transition-all"
              >
                <span>Accéder au Drop</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <img
              src="https://cdn.shopify.com/s/files/1/0798/0997/0503/files/product-ig-5a4c0942-1792441654914.jpg?v=1792443423"
              alt="Boucles créoles rondes Anulus argent"
              className="w-full aspect-[3/4] object-cover rounded-2xl border border-brand-border shadow-lg"
            />
            <div className="flex flex-col justify-between p-6 rounded-2xl bg-brand-surface border border-brand-border">
              <span className="text-xs uppercase font-bold text-brand-muted">Drop Actuel</span>
              <p className="text-xl font-black text-brand-text">Boucles créoles rondes Anulus argent</p>
              <p className="text-2xl font-black text-brand-accent">790 DH</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

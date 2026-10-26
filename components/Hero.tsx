'use client';

import React from 'react';
import { ChevronRight, ShieldCheck, Truck, Clock, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-bg py-12 md:py-20 border-b border-brand-border">
      {/* Ambient background lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-brand-accent/15 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Text Block */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface border border-brand-border text-brand-accent text-xs font-semibold shadow-inner">
              <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></span>
              <span>💎 CRÉATIONS JOAILLIÈRES & OR 18K • CASABLANCA</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-brand-text">
              L'Élégance de l'Or. L'Éclat Éternel.
            </h1>

            <p className="text-base sm:text-lg text-brand-muted leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Découvrez les joyaux d'exception de la maison <strong>Anulus Joaillerie</strong>. Bagues de fiançailles, solitaires or 18 carats et parures certifiées, livrées dans un écrin de prestige scellé.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#catalogue"
                className="w-full sm:w-auto text-center px-8 py-4 bg-brand-accent hover:brightness-110 text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <span>Commander avec Paiement à la Livraison</span>
                <ChevronRight className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/212639156883?text=Salam%20Anulus Joaillerie%2C%20je%20souhaite%20consulter%20le%20catalogue"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center px-6 py-4 bg-brand-surface hover:bg-brand-surface/80 border border-brand-border text-brand-text text-xs font-bold uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <span>Conseiller WhatsApp 📲</span>
              </a>
            </div>

            {/* Micro assurances */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-brand-border text-center">
              <div>
                <p className="text-lg font-black text-brand-text">0 DH</p>
                <p className="text-[11px] text-brand-muted">Paiement à la livraison</p>
              </div>
              <div>
                <p className="text-lg font-black text-brand-accent">24H / 48H</p>
                <p className="text-[11px] text-brand-muted">Livraison express Maroc</p>
              </div>
              <div>
                <p className="text-lg font-black text-brand-accent2">100%</p>
                <p className="text-[11px] text-brand-muted">Conforme & Garanti</p>
              </div>
            </div>
          </div>

          {/* Right Visual Card */}
          <div className="lg:col-span-5 relative mx-auto max-w-md lg:max-w-none w-full">
            <div className="relative rounded-2xl overflow-hidden bg-brand-surface p-2 border border-brand-border shadow-2xl">
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-brand-bg group">
                <img
                  src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80"
                  alt="Anulus Joaillerie Bague Solitaire Or Blanc 18K"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white space-y-1">
                    <span className="text-[10px] uppercase tracking-widest text-brand-accent font-bold px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm">
                      CERTIFICAT FOURNI
                    </span>
                    <p className="font-bold text-xl leading-tight">Anulus Joaillerie Bague Solitaire Or Blanc 18K</p>
                    <p className="text-xs text-slate-300 font-light">Diamant Brillant Certifié 0.50 Ct & Poinçon Officiel Douane</p>
                    <p className="text-lg font-black text-brand-accent pt-1">3400 DH</p>
                  </div>
                </div>
              </div>

              {/* Floating Social Proof Pill */}
              <div className="absolute -bottom-4 -left-4 bg-brand-surface p-3.5 rounded-xl shadow-xl border border-brand-border hidden sm:flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-accent font-bold">
                  ★
                </div>
                <div>
                  <p className="text-xs font-bold text-brand-text">4.9/5 Avis Clients</p>
                  <p className="text-[11px] text-brand-muted">Recommandé par 38.5k abonnés</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

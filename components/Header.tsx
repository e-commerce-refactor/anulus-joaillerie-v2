'use client';

import React from 'react';
import { ShoppingBag, MessageCircle, Instagram, ShieldCheck, Sparkles } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-brand-bg/90 border-b border-brand-border">
      {/* Announcement Ticker */}
      <div className="bg-brand-surface border-b border-brand-border/60 py-1.5 px-4 text-center overflow-hidden">
        <div className="flex items-center justify-center gap-2 text-xs font-medium text-brand-muted">
          <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></span>
          <span>LIVRAISON 24H CASABLANCA & 48H PARTOUT AU MAROC • PAIEMENT À LA RÉCEPTION (0 DH)</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo & Tag */}
        <div className="flex items-center gap-3">
          <a href="#" className="font-bold text-xl sm:text-2xl tracking-tight text-brand-text flex items-center gap-2">
            <span>Anulus Joaillerie</span>
            <span className="text-[10px] uppercase px-2 py-0.5 rounded-full bg-brand-surface border border-brand-border text-brand-accent font-semibold tracking-wider">
              MAROC
            </span>
          </a>
        </div>

        {/* Social Proof & Quick CTAs */}
        <div className="flex items-center gap-3">
          <a
            href="https://instagram.com/anulus.ma"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 text-xs text-brand-muted hover:text-brand-text transition-colors py-1.5 px-2.5 rounded-full bg-brand-surface border border-brand-border"
          >
            <Instagram className="w-3.5 h-3.5 text-brand-accent" />
            <span className="font-semibold">@anulus.ma</span>
            <span className="text-[10px] text-brand-muted/80">(38.5k)</span>
          </a>

          <a
            href="https://wa.me/212639156883?text=Salam%20Anulus Joaillerie%2C%20je%20souhaite%20commander"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 py-2 px-3.5 rounded-full transition-all shadow-sm"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">WhatsApp Direct</span>
          </a>

          <a
            href="#catalogue"
            className="p-2 rounded-full bg-brand-surface border border-brand-border text-brand-text hover:border-brand-accent transition-colors relative"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-brand-accent text-white rounded-full text-[10px] font-bold flex items-center justify-center">
              1
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}

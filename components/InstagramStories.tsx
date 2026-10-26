'use client';

import React from 'react';

export default function InstagramStories() {
  const stories = [{"title": "Avis Clients", "icon": "⭐️", "badge": "+2k Avis"}, {"title": "Lookbook", "icon": "📸", "badge": "2026"}, {"title": "Essayage", "icon": "👟", "badge": "Chez Vous"}, {"title": "Atelier", "icon": "✂️", "badge": "Artisanal"}];

  return (
    <section className="border-b border-brand-border bg-brand-surface/40 py-3 overflow-x-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-4 sm:gap-6 min-w-max">
        <div className="text-xs font-bold text-brand-muted uppercase tracking-wider hidden md:block">
          Stories & Preuves :
        </div>
        {stories.map((story: any, idx: number) => (
          <div key={idx} className="flex items-center gap-2 cursor-pointer group">
            <div className="w-12 h-12 rounded-full p-0.5 bg-gradient-to-tr from-brand-accent to-brand-accent2 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full rounded-full bg-brand-bg flex items-center justify-center text-lg shadow-inner">
                {story.icon}
              </div>
            </div>
            <div>
              <p className="text-xs font-bold text-brand-text group-hover:text-brand-accent transition-colors leading-tight">
                {story.title}
              </p>
              <span className="text-[10px] font-semibold text-brand-muted">
                {story.badge}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

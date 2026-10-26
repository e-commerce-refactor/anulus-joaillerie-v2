'use client';

import React, { useState } from 'react';
import { PRODUCTS, Product } from '../data/products';
import ProductCard from './ProductCard';

interface ProductGridProps {
  onSelectProduct: (product: Product) => void;
}

export default function ProductGrid({ onSelectProduct }: ProductGridProps) {
  const categories = ['Tous', ...Array.from(new Set(PRODUCTS.map((p) => p.category)))];
  const [activeCategory, setActiveCategory] = useState('Tous');

  const filtered = activeCategory === 'Tous'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <section id="catalogue" className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-brand-text">
          Collection Officielle Anulus Joaillerie
        </h2>
        <p className="text-xs sm:text-sm text-brand-muted">
          Sélection exclusive disponible en stock immédiat à Casablanca. Expédition 24h/48h avec paiement à la réception.
        </p>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-brand-accent text-white shadow-md'
                  : 'bg-brand-surface border border-brand-border text-brand-muted hover:text-brand-text'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onSelect={onSelectProduct}
          />
        ))}
      </div>
    </section>
  );
}

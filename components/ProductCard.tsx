'use client';

import React from 'react';
import { ShoppingBag, MessageCircle } from 'lucide-react';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

export default function ProductCard({ product, onSelect }: ProductCardProps) {
  return (
    <div className="group rounded-2xl overflow-hidden bg-brand-surface border border-brand-border hover:border-brand-accent/50 transition-all duration-300 flex flex-col shadow-sm hover:shadow-xl">
      {/* Product Image */}
      <div className="relative aspect-[4/5] bg-brand-bg overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md bg-brand-accent text-white shadow-md">
            {product.badge}
          </span>
        )}
        {product.stockLeft && product.stockLeft <= 4 && (
          <span className="absolute top-3 right-3 px-2 py-0.5 text-[10px] font-semibold rounded bg-red-600/90 text-white backdrop-blur-sm">
            Plus que {product.stockLeft} en stock
          </span>
        )}
      </div>

      {/* Card Details */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <span className="text-[10px] uppercase font-bold text-brand-muted tracking-wider">
            {product.category}
          </span>
          <h3 className="font-bold text-base text-brand-text line-clamp-1 pt-0.5">
            {product.name}
          </h3>
          <p className="text-xs text-brand-muted line-clamp-2 pt-1 font-light">
            {product.description}
          </p>
        </div>

        <div>
          <div className="flex items-baseline gap-2 pb-3">
            <span className="text-xl font-black text-brand-text font-mono">
              {product.priceMad} DH
            </span>
            {product.originalPriceMad && (
              <span className="text-xs text-brand-muted/70 line-through font-mono">
                {product.originalPriceMad} DH
              </span>
            )}
          </div>

          <div className="grid grid-cols-5 gap-2">
            <button
              onClick={() => onSelect(product)}
              className="col-span-4 w-full py-3 bg-brand-accent hover:brightness-110 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-1.5 shadow"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Commander (COD)</span>
            </button>
            <a
              href={`https://wa.me/212639156883?text=${encodeURIComponent(`Salam Anulus Joaillerie, je souhaite commander ${product.name} à ${product.priceMad} DH`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="col-span-1 flex items-center justify-center rounded-xl bg-emerald-600/20 hover:bg-emerald-600 text-emerald-400 hover:text-white border border-emerald-600/30 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

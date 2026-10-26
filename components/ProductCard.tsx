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
    <div className="group rounded-xl overflow-hidden bg-brand-surface border border-brand-border hover:border-brand-accent transition-all duration-300 flex flex-col shadow-sm">
      <div className="relative aspect-square bg-brand-bg overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        {product.badge && (
          <span className="absolute top-2 left-2 px-2.5 py-1 text-[10px] font-bold uppercase rounded bg-brand-accent text-white">
            {product.badge}
          </span>
        )}
      </div>

      <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
        <div>
          <span className="text-[10px] uppercase font-bold text-brand-muted">{product.category}</span>
          <h3 className="font-bold text-sm text-brand-text line-clamp-1">{product.name}</h3>
        </div>

        <div>
          <div className="flex items-baseline gap-2 pb-2">
            <span className="text-lg font-black text-brand-text">{product.priceMad} DH</span>
            {product.originalPriceMad && (
              <span className="text-xs text-brand-muted line-through">{product.originalPriceMad} DH</span>
            )}
          </div>
          <button
            onClick={() => onSelect(product)}
            className="w-full py-2.5 bg-brand-accent hover:brightness-110 text-white text-xs font-bold uppercase rounded-lg transition-all flex items-center justify-center gap-1.5"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Commander (COD)</span>
          </button>
        </div>
      </div>
    </div>
  );
}

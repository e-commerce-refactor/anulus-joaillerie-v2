'use client';

import React, { useState } from 'react';
import { X, Truck, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Product } from '../data/products';
import { supabase } from '../lib/supabaseClient';

interface CodModalProps {
  product: Product | null;
  onClose: () => void;
  onSuccess: (orderInfo: any) => void;
}

const MOROCCAN_CITIES = [
  'Casablanca',
  'Rabat',
  'Marrakech',
  'Tanger',
  'Fès',
  'Agadir',
  'Meknès',
  'Oujda',
  'Kénitra',
  'Tétouan',
  'Autre Ville (Maroc)'
];

export default function CodModal({ product, onClose, onSuccess }: CodModalProps) {
  if (!product) return null;

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('Casablanca');
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const shippingFee = city === 'Casablanca'
    ? (product.priceMad >= 500 ? 0 : 20)
    : (product.priceMad >= 1000 ? 0 : 35);

  const totalAmount = product.priceMad + shippingFee;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    const cleanPhone = phone.replace(/[^0-9]/g, '');
    if (cleanPhone.length < 9) {
      setErrorMsg('Veuillez saisir un numéro de téléphone marocain valide (ex: 06 12 34 56 78).');
      return;
    }

    setLoading(true);
    const orderData = {
      customer_name: fullName,
      phone: phone,
      city: city,
      address: address || 'Casablanca Centre',
      product_id: product.id,
      product_name: product.name,
      total_amount: totalAmount,
      shipping_fee: shippingFee,
      status: 'pending_cod_confirmation',
      created_at: new Date().toISOString()
    };

    try {
      if (supabase) {
        await supabase.from('orders').insert([orderData]);
      }
    } catch (err) {
      console.warn('Supabase offline or table pending, continuing local flow:', err);
    }

    setLoading(false);
    onSuccess(orderData);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-lg rounded-2xl bg-brand-surface border border-brand-border p-6 shadow-2xl overflow-hidden">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-brand-muted hover:text-brand-text hover:bg-brand-bg transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-1 pb-4 border-b border-brand-border">
          <span className="text-[10px] font-bold uppercase tracking-wider text-brand-accent">
            Tunnel de Commande Express 1-Clic
          </span>
          <h2 className="text-xl font-bold text-brand-text">Paiement à la Livraison (0 DH)</h2>
          <p className="text-xs text-brand-muted">
            Remplissez vos informations ci-dessous pour confirmer votre commande sans carte bancaire.
          </p>
        </div>

        {/* Selected Product Summary */}
        <div className="flex items-center gap-3 py-3 border-b border-brand-border my-3">
          <img
            src={product.image}
            alt={product.name}
            className="w-14 h-14 rounded-lg object-cover bg-brand-bg border border-brand-border"
          />
          <div className="flex-1 min-w-0">
            <p className="text-xs font-bold text-brand-text truncate">{product.name}</p>
            <p className="text-[11px] text-brand-muted">Prix : {product.priceMad} DH</p>
          </div>
          <div className="text-right">
            <span className="text-sm font-black text-brand-accent font-mono">{totalAmount} DH</span>
            <span className="block text-[10px] text-brand-muted">
              {shippingFee === 0 ? 'Livraison Offerte' : `+ ${shippingFee} DH Liv.`}
            </span>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3.5 pt-2">
          <div>
            <label className="block text-xs font-semibold text-brand-text mb-1">
              Nom & Prénom *
            </label>
            <input
              type="text"
              required
              placeholder="ex: Youssef El Mansouri"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-brand-bg border border-brand-border text-brand-text text-xs focus:outline-none focus:border-brand-accent"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-brand-text mb-1">
              Numéro de Téléphone (WhatsApp) *
            </label>
            <input
              type="tel"
              required
              placeholder="06 XX XX XX XX ou 07 XX XX XX XX"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-brand-bg border border-brand-border text-brand-text text-xs focus:outline-none focus:border-brand-accent"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-brand-text mb-1">
                Ville de Livraison *
              </label>
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl bg-brand-bg border border-brand-border text-brand-text text-xs focus:outline-none focus:border-brand-accent"
              >
                {MOROCCAN_CITIES.map((c) => (
                  <option key={c} value={c} className="bg-brand-surface text-brand-text">
                    {c}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-brand-text mb-1">
                Quartier / Adresse
              </label>
              <input
                type="text"
                placeholder="ex: Maarif, Hay Riad..."
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-brand-bg border border-brand-border text-brand-text text-xs focus:outline-none focus:border-brand-accent"
              />
            </div>
          </div>

          {errorMsg && (
            <p className="text-xs text-red-500 font-medium pt-1">
              {errorMsg}
            </p>
          )}

          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-brand-accent hover:brightness-110 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-lg flex items-center justify-center gap-2"
            >
              {loading ? (
                <span>Validation en cours...</span>
              ) : (
                <>
                  <span>Confirmer ma Commande ({totalAmount} DH)</span>
                  <CheckCircle2 className="w-4 h-4" />
                </>
              )}
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 text-[10px] text-brand-muted text-center pt-1">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-accent" />
            <span>Paiement en espèces uniquement à la livraison après inspection de l'article</span>
          </div>
        </form>

      </div>
    </div>
  );
}

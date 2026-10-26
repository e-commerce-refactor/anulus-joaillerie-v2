export interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: string;
  priceMad: number;
  originalPriceMad?: number;
  image: string;
  badge?: string;
  description: string;
  stockLeft?: number;
}

export const PRODUCTS: Product[] = [
  {
    "id": "solitaire-or-18k-diamant",
    "name": "Anulus Joaillerie Bague Solitaire Or Blanc 18K",
    "subtitle": "Diamant Brillant Certifié 0.50 Ct & Poinçon Officiel Douane",
    "category": "Bagues & Solitaires",
    "priceMad": 3400,
    "originalPriceMad": 4200,
    "badge": "CERTIFICAT FOURNI",
    "image": "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80",
    "description": "Le joyau intemporel d'une promesse éternelle. Or blanc 750 millièmes rhodié et diamant taillé avec une symétrie parfaite.",
    "stockLeft": 2
  },
  {
    "id": "collier-or-perle-culture",
    "name": "Anulus Joaillerie Pendentif Goutte d'Or & Perle Fine",
    "subtitle": "Chaîne Maille Forçat Or Jaune 18 Carats & Écrin Velours",
    "category": "Colliers & Pendentifs",
    "priceMad": 1950,
    "originalPriceMad": 2400,
    "badge": "ÉCRIN VELOURS OFFERT",
    "image": "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80",
    "description": "L'éclat chaleureux de l'or jaune marié à la pureté d'une perle de culture sélectionnée à la main.",
    "stockLeft": 3
  }
];

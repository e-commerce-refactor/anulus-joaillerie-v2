export interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: string;
  priceMad: number;
  originalPriceMad?: number;
  image: string;
  badge?: string;
  rating?: number;
  reviewsCount?: number;
  stockLeft?: number;
  specs?: Record<string, string>;
  description?: string;
}

export const PRODUCTS: Product[] = [
  {
    "id": "boucles-creoles-rondes-anulus-argent",
    "name": "Boucles créoles rondes Anulus argent",
    "subtitle": "Boucles d'oreilles",
    "category": "Boucles d'oreilles",
    "priceMad": 790,
    "originalPriceMad": null,
    "image": "https://cdn.shopify.com/s/files/1/0798/0997/0503/files/product-ig-5a4c0942-1792441654914.jpg?v=1792443423",
    "badge": "BESTSELLER",
    "description": "Boucles créoles ajourées en argent 925 rhodié, disponibles en coloris blanc et rose. Structure semi-circulaire ornée de disques métalliques et zirconium serti e...",
    "stockLeft": null
  },
  {
    "id": "thurath",
    "name": "Thurath",
    "subtitle": "Collier",
    "category": "Collier",
    "priceMad": 890,
    "originalPriceMad": null,
    "image": "https://cdn.shopify.com/s/files/1/0798/0997/0503/files/Professional_luxury_product_photography_of_the_exa-1775816468796.png?v=1775816567",
    "badge": "LIVRAISON 24H",
    "description": "Laissez-vous séduire par ce pendentif raffiné en argent 925 , sublimé par un rhodiage or rose . Son motif étoilé inspiré de l'art marocain est délicatement orné...",
    "stockLeft": null
  },
  {
    "id": "6032",
    "name": "Créoles The Best",
    "subtitle": "Boucles d'oreilles",
    "category": "Boucles d'oreilles",
    "priceMad": 480,
    "originalPriceMad": 660,
    "image": "https://cdn.shopify.com/s/files/1/0798/0997/0503/files/Photoroom-20241105_023810.png?v=1730847204",
    "badge": "LIVRAISON 24H",
    "description": "Boucles créoles en forme ovale, en argent 925 rhodié en or 18 carats, ornée de zircones étincelants \n Disponible en rhodiage Or rose et Or Platine",
    "stockLeft": null
  },
  {
    "id": "6033",
    "name": "Famous",
    "subtitle": "Boucles d'oreilles",
    "category": "Boucles d'oreilles",
    "priceMad": 590,
    "originalPriceMad": null,
    "image": "https://cdn.shopify.com/s/files/1/0798/0997/0503/files/ff2fd721-5a6f-4545-ac5f-7fc438c5c901-Photoroom.jpg?v=1732537326",
    "badge": "LIVRAISON 24H",
    "description": "Boucles larges en argent 925 rhodié en or 18k. avec pierres en zircones.",
    "stockLeft": null
  },
  {
    "id": "6021",
    "name": "Pendant",
    "subtitle": "Boucles d'oreilles",
    "category": "Boucles d'oreilles",
    "priceMad": 470,
    "originalPriceMad": null,
    "image": "https://cdn.shopify.com/s/files/1/0798/0997/0503/files/Premium_product_photography_of_the_exact_same_whit-1775834567492.png?v=1775834617",
    "badge": "LIVRAISON 24H",
    "description": "Boucles en Argent 925 Rhodié. \n Disponible en rhodiage Or Rose et Platine",
    "stockLeft": null
  },
  {
    "id": "6023",
    "name": "Le c",
    "subtitle": "Boucles d'oreilles",
    "category": "Boucles d'oreilles",
    "priceMad": 850,
    "originalPriceMad": null,
    "image": "https://cdn.shopify.com/s/files/1/0798/0997/0503/files/Premium_flat-lay_product_photography_of_the_exact_-1775833027180.png?v=1775833120",
    "badge": "LIVRAISON 24H",
    "description": "Superbes boucles en argent 925 rhodié en or Rose 18 Carats",
    "stockLeft": null
  },
  {
    "id": "6030",
    "name": "Rivière Petite",
    "subtitle": "Boucles d'oreilles",
    "category": "Boucles d'oreilles",
    "priceMad": 400,
    "originalPriceMad": 550,
    "image": "https://cdn.shopify.com/s/files/1/0798/0997/0503/files/Premium_flat_lay_product_photography_of_SMALL_rose-1775831665301.png?v=1775831971",
    "badge": "LIVRAISON 24H",
    "description": "Boucles d'oreilles en argent 925 rhodié en or 18 carats en forme de créole ajoutent une touche d'élégance à toute tenue. Elles captent la lumière avec leur écla...",
    "stockLeft": null
  },
  {
    "id": "6029",
    "name": "Rivière Large",
    "subtitle": "Boucles d'oreilles",
    "category": "Boucles d'oreilles",
    "priceMad": 480,
    "originalPriceMad": 690,
    "image": "https://cdn.shopify.com/s/files/1/0798/0997/0503/files/Professional_product_photography_of_the_exact_rose-1775818054570.png?v=1775831785",
    "badge": "LIVRAISON 24H",
    "description": "Boucles d'oreilles en argent 925 rhodié en or 18 carats en forme de créole ajoutent une touche d'élégance à toute tenue. Elles captent la lumière avec leur écla...",
    "stockLeft": null
  }
];

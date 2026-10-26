import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Anulus Joaillerie • Boutique Officielle Maroc',
  description: 'Commandez en ligne avec paiement cash à la livraison (0 DH) partout au Maroc.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-brand-bg text-brand-text">
        {children}
      </body>
    </html>
  );
}

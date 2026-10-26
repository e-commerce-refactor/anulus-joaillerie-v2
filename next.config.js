/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'cdn.shopify.com', 'scontent-lis1-1.cdninstagram.com'],
  },
};

module.exports = nextConfig;

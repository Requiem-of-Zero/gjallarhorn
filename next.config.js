/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "staticg.sportskeeda.com",
      "upload.wikimedia.org",
      "alaskaseafood.site",
      "images4.alphacoders.com",
      "trumpwallpapers.com",
      "cdn.wallpapersafari.com",
      "wallpapercave.com",
    ],
    formats: ["image/avif", "image/webp"],
  },
  env: {
    stripe_public_key: process.env.STRIPE_PUBLIC_KEY,
  },
};

module.exports = nextConfig;

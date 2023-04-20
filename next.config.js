/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.ctfassets.net",
      "upload.wikimedia.org",
      "lh3.googleusercontent.com",
    ],
    formats: ["image/avif", "image/webp"],
  },
  env: {
    stripe_publishable_key: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
  },
};

module.exports = nextConfig;

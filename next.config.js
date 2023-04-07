/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["upload.wikimedia.org","alaskaseafood.site", 'images4.alphacoders.com', 'trumpwallpapers.com', 'cdn.wallpapersafari.com', 'wallpapercave.com'],
  },
};

module.exports = nextConfig;

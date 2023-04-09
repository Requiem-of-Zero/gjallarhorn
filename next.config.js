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
      'www.thespruceeats.com',
      'seaunseen.com',
      'tfs-spaces.sfo2.digitaloceanspaces.com',
      'www.aquariumofpacific.org',
      'cdn.mos.cms.futurecdn.net',
      'fishandcaviar.com',
      'www.saveur.com',
      'asian-recipe.com',
      'thumbs.dreamstime.com',
      'tastecooking.com',
      'www.fishingproexclusive.com',
      'cdn.shopify.com',
      'woodsfisheries.com',
      'www.ilovecrabs.com',
      'dixonsseafood.com'
    ],
    formats: ["image/avif", "image/webp"],
  },
  env: {
    stripe_publishable_key: process.env.STRIPE_PUBLISHABLE_KEY,
  },
};

module.exports = nextConfig;

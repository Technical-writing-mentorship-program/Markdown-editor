/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
  },
  // Needed for Cloudflare Pages
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
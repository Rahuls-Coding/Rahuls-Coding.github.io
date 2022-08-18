/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: "",
  },

  basePath: '/site',
  assetPrefix: '/site', 

}

module.exports = nextConfig

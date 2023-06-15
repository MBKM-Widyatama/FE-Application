/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  i18n: {
    defaultLocale: 'id',
    locales: ['id', 'en'],
    localeDetection: false,
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/public/landing',
        permanent: true,
      },
    ]
  },
  eslint: {

      ignoreDuringBuilds: true,

    },

}

module.exports = nextConfig

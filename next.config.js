/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
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
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // TODO: fix issue i18n support is not compatible with next export.
  // i18n: {
  //   defaultLocale: 'id',
  //   locales: ['id', 'en'],
  //   localeDetection: false,
  // },
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.thecocktaildb.com',
        port: '',
        pathname: '/images/media/drink/**',
        search: '',
      },
    ],
  },
/*
  experimental: {
    dynaminIO: true,
    cacheLife: {
      drinksLife: {
        stale: 3600, // 1 hour
        revalidate: 900, // 15 minutes
        expire: 86400, // 1 day
      },
    },
  },*/ // under development -> caching
};
export default nextConfig;
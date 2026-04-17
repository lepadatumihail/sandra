import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/becoming-her-english-full-book.pdf',
        destination: '/',
        permanent: false,
      },
      {
        source: '/becoming-her-spanish.pdf',
        destination: '/es',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;

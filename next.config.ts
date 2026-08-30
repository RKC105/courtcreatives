import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      // Force the www host onto the apex domain so the URL a crawler lands on
      // always matches the canonical tag.
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.courtcreatives.co.uk',
          },
        ],
        destination: 'https://courtcreatives.co.uk/:path*',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'index, follow',
          },
        ],
      },
    ];
  },
};

export default nextConfig;

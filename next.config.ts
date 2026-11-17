import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/portfolio",
        destination: "/gallery",
        permanent: true,
      },
      {
        source: "/videos",
        destination: "/gallery",
        permanent: true,
      },
      {
        source: "/weddings",
        destination: "/services/weddings",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

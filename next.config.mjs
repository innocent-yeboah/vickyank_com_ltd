/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/gold-trading",
        destination: "/services/gold-trading",
        permanent: true,
      },
      {
        source: "/equipment",
        destination: "/services/equipment",
        permanent: true,
      },
      {
        source: "/luxury-cars",
        destination: "/services/luxury-cars",
        permanent: true,
      },
      {
        source: "/shop",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/shop/:path*",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/services/shop",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/services/shop/:path*",
        destination: "/services",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

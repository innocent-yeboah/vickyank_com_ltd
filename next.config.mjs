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
        destination: "/services/shop",
        permanent: true,
      },
      {
        source: "/shop/checkout",
        destination: "/services/shop",
        permanent: true,
      },
      {
        source: "/shop/success",
        destination: "/services/shop",
        permanent: true,
      },
      {
        source: "/services/shop/checkout",
        destination: "/services/shop",
        permanent: true,
      },
      {
        source: "/services/shop/success",
        destination: "/services/shop",
        permanent: true,
      },
      {
        source: "/shop/:path*",
        destination: "/services/shop",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

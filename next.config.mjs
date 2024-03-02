/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "localhost",
        pathname: "**",
        port: "3000",
        protocol: "http",
      },
      {
        protocol: "https",
        hostname: "e-commerce-2-taupe.vercel.app",
      },
      {
        protocol: "https",
        hostname: "e-commerce-2-production.up.railway.app",
      },
    ],
  },
};

export default nextConfig;

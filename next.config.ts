import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/dijacc9pp/**",
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true, // <— disables ESLint blocking during build
  },
};

export default nextConfig;


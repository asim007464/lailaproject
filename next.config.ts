import type { NextConfig } from "next";

// Disable Next.js telemetry (removes "Attention" message during build)
process.env.NEXT_TELEMETRY_DISABLED = "1";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;

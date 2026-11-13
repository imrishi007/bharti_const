import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  devIndicators: false,
  images: { deviceSizes: [360, 480, 640, 768, 1024, 1280, 1672, 1920] },
};

export default nextConfig;

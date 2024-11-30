import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    }
    return config
  },
  reactStrictMode: true,
  // Il Fast Refresh è abilitato di default
};

export default nextConfig;

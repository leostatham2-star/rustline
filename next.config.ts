import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  // The preview gateway serves the dev server from *.space-z.ai hosts.
  allowedDevOrigins: ["*.space-z.ai"],
};

export default nextConfig;

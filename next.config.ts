import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Lets a Cloudflare quick tunnel load dev assets (used for sharing previews)
  allowedDevOrigins: ["*.trycloudflare.com"],
};

export default nextConfig;

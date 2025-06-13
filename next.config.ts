import type { NextConfig } from "next"
import { i18n } from "./next-i18next.config"

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  
}

export default nextConfig

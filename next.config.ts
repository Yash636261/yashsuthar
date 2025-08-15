import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],
  },

  async redirects() {
    return [
      {
        source: "/linkedIn",
        destination: "https://www.linkedin.com/in/yash-suthar-22339124a",
        permanent: false,
      },
      {
        source: "/Twitter",
        destination: "https://x.com/yash__dev",
        permanent: false,
      },
      {
        source: "/github",
        destination: "https://github.com/Yash636261",
        permanent: false,
      },

    ];
  },
};

export default nextConfig;

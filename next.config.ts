import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/linkedin",
        destination: "https://www.linkedin.com/in/tejo-rifqi-hananto-56760620a",
        permanent: false,
        basePath: false,
      },
    ];
  },
};

export default nextConfig;

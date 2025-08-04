import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "evqrdlwphgtlcoafoaas.supabase.co", // Or your specific Supabase project URL like 'your-project-id.supabase.co'
        pathname: "/storage/v1/object/public/**", // Adjust this path if your bucket structure is different
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/dashboard",
        permanent: true,
      },
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

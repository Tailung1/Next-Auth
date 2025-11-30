import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com', // Add GitHub's avatar CDN
        pathname: '/u/**', // GitHub profile images have this path structure
      },
    ],
  
},

  compiler: {
    reactRemoveProperties: true, // You can set this for React 18 optimizations (if needed)
  },
};

export default nextConfig;

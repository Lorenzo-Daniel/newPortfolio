/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d33wubrfki0l68.cloudfront.net",
      }
    ],
  },
};

export default nextConfig;

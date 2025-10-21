
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "mypawdigital.com",
      "secure.gravatar.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;

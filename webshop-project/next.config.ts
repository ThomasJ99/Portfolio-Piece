import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "boolintunes.com" },
      { protocol: "https", hostname: "upload.wikimedia.org" },
      { protocol: "https", hostname: "static.wikia.nocookie.net" },
      { protocol: "https", hostname: "weebrevues.com" },
      { protocol: "https", hostname: "raw.githubusercontent.com" },
      { protocol: "https", hostname: "i.imgur.com" },
      { protocol: "https", hostname: "pravatar.cc" },
      { protocol: "https", hostname: "placehold.co" },
      { protocol: "https", hostname: "placeimg.com" },
      { protocol: "https", hostname: "api.escuelajs.co" },
      { protocol: "https", hostname: "picsum.photos" },
    ],
  },
  reactCompiler: true,
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Der Prototyp ist rein statisch: kein Backend, keine Datenbank, kein Shop.
  // So lässt er sich auf jedem beliebigen Webspace zur Präsentation ablegen.
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;

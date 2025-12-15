/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for GitHub Pages
  output: "export",
  images: {
    unoptimized: true,
  },
  // Replace this with your actual GitHub repo name if different
  basePath: "/Apology1",
  assetPrefix: "/Apology1/",
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true, // Required Since nextjs Image Optimisation requires a live server and github pages only support static pages
    formats: ["image/avif", "image/webp"]
  }
};

export default nextConfig;

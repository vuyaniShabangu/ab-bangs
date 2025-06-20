/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/bangs',
  trailingSlash: true,
  assetPrefix: '/bangs',
  images: {
    unoptimized: true
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  } 
}

export default nextConfig
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // Required for static export
  },
  // Use environment variable for base path or default to empty string
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  // Add trailing slash for better static hosting compatibility
  trailingSlash: true,
};

export default nextConfig;

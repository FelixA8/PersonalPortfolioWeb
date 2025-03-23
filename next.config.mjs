/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'felix-personalweb-file-storage.s3.ap-southeast-1.amazonaws.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'ofnlpbzjwclnxmqvwwlt.supabase.co', // FIXED: Only the hostname
        port: '',
        pathname: '/storage/v1/object/public/personalweb-storage/**', // Path pattern here
      },
    ],
  },
};

export default nextConfig;

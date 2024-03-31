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
      ],
    },
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.resolve.fallback.fs = false;
        config.resolve.fallback.tls = false;
        config.resolve.fallback.net = false;
        config.resolve.fallback.child_process = false;
      }
  
      return config;
    },
  };

export default nextConfig;

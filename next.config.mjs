/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'wysetimecms.000webhostapp.com',
                port: '',
                pathname: '/wp-content/uploads/**',
            },
        ],
    },
};

export default nextConfig;

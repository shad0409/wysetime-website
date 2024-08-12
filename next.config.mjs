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
                hostname: 'wysewebcms.x10.mx/wp',
                port: '',
                pathname: '/wp-content/uploads/**',
            },
        ],
    },
};

export default nextConfig;

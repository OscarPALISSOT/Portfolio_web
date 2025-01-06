import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'backend.oscarpalissot.fr',
            }
        ],
        dangerouslyAllowSVG: true,
    },
};

export default nextConfig;

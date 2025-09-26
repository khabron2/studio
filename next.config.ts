import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  // Si tu repositorio se llama, por ejemplo, "mi-proyecto",
  // y la URL de GitHub Pages es "usuario.github.io/mi-proyecto",
  // también necesitarás esta línea. Quita el "//" para activarla:
  // basePath: '/mi-proyecto',
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;

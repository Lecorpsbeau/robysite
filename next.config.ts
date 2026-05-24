/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ajoute ces lignes pour ignorer ESLint pendant la compilation sur Vercel
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Si tu as déjà d'autres options, laisse-les en dessous
};

export default nextConfig;
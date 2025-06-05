/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // ⚠️ Esto es necesario para exportar imágenes con <Image />
  },
};

export default nextConfig;

  // Comando para exportar "npm run build"
import type { NextConfig } from "next";

// When deploying to GitHub Pages under https://username.github.io/repo-name/
// set NEXT_PUBLIC_BASE_PATH to "/repo-name" in your GitHub Actions env.
// Leave blank (or unset) for local dev or when using a custom domain.
const isProd = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",          // Emit a fully-static /out directory
  trailingSlash: true,       // GitHub Pages needs index.html per directory
  images: {
    unoptimized: true,       // Required: Next.js Image optimisation needs a server
  },
  // Only apply basePath when running in GitHub Actions (won't affect npm run dev)
  ...(isProd && {
    basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? "",
  }),
};

export default nextConfig;

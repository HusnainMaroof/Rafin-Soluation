import type { NextConfig } from "next";
import path from "path";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  // Pin the project root so Next/Turbopack does not misdetect the workspace
  // root from stray lockfiles in the parent directory (e.g. C:\Users\husna).
  turbopack: {
    root: path.join(__dirname, "."),
  },
  async headers() {
    return [
      {
        // Security headers for all routes
        source: "/:path*",
        headers: securityHeaders,
      },
      {
        // Cache public images (site content in /images and /Logo)
        source: "/(images|Logo)/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
        ],
      },
      {
        // Branded OG image
        source: "/opengraph-image",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/news-events",
        destination: "/",
        statusCode: 301,
      },
      {
        source: "/news-events/:path*",
        destination: "/",
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;

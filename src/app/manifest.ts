import type { MetadataRoute } from "next";
import { SITE_DESCRIPTION, SITE_NAME } from "@/src/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: "Rafin",
    description: SITE_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    icons: [
      {
        src: "/icon.png",
        sizes: "1011x1012",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
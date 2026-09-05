import type { JsonLdValue } from "./seo";

/**
 * Renders a JSON-LD structured-data script tag.
 * Server component only — data is static/typed so this is safe.
 */
export const JsonLd = ({ data }: { data: JsonLdValue }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  />
);

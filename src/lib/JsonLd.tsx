import type { JsonLdValue } from "./seo";

/**
 * Serialize structured data so it can never break out of the script tag:
 * `<`/`>`/`&` are escaped (prevents `</script>` injection) and
 * U+2028/U+2029 are escaped (prevents JavaScript parse errors).
 */
function serializeJsonLd(data: JsonLdValue): string {
  return JSON.stringify(data)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
}

/**
 * Renders a JSON-LD structured-data script tag.
 * Server component only — data is static/typed so this is safe.
 */
export const JsonLd = ({ data }: { data: JsonLdValue }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }}
  />
);

import Script from "next/script";

/**
 * Google Analytics 4 (gtag.js), loaded via next/script.
 *
 * Inert unless NEXT_PUBLIC_GA_ID is set (e.g. NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
 * in .env.local), so nothing is downloaded or tracked while the ID is absent.
 *
 * `afterInteractive` keeps the script out of the critical path, protecting
 * LCP/INP (Core Web Vitals feed directly into Google ranking).
 */
export function GoogleAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  if (!gaId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaId}', { page_path: window.location.pathname });
`}
      </Script>
    </>
  );
}
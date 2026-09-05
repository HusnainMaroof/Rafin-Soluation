import Link from "next/link";

export const metadata = {
  title: "Page Not Found",
  description:
    "The page you are looking for could not be found. Explore Rafin Solutions compliance, AML/CFT, KYC/KYB, and fintech services.",
};

export default function NotFound() {
  return (
    <section className="relative flex-1 flex items-center justify-center overflow-hidden bg-slate-50 pt-32 pb-24">
      {/* Dotted + glow backdrop */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[15%] left-[8%] w-[42vw] h-[42vw] bg-yellow-400/20 rounded-full blur-[120px] mix-blend-multiply" />
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(15,23,42,0.10)_1px,transparent_1px)] [background-size:22px_22px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10 text-center">
        <p className="font-tronica text-7xl md:text-9xl font-extrabold text-slate-900 leading-none mb-4">
          404
        </p>
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
          Page not found
        </h1>
        <p className="text-slate-600 text-lg max-w-xl mx-auto leading-relaxed mb-8">
          The page you&rsquo;re looking for may have moved or no longer exists.
          Explore our compliance and fintech consultancy services, or head
          back home.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 min-h-11 px-6 rounded-md bg-yellow-400 text-slate-900 text-sm font-extrabold transition-colors hover:bg-yellow-300"
          >
            Back to Home
          </Link>
          <Link
            href="/service/aml-cft-compliance"
            className="inline-flex items-center justify-center gap-2 min-h-11 px-6 rounded-md border border-slate-300 bg-white text-slate-700 text-sm font-extrabold transition-colors hover:border-slate-900 hover:text-slate-900"
          >
            Explore Services
          </Link>
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center gap-2 min-h-11 px-6 rounded-md border border-slate-300 bg-white text-slate-700 text-sm font-extrabold transition-colors hover:border-slate-900 hover:text-slate-900"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

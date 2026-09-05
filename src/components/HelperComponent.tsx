"use client";

import React, {
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import Image from "next/image";

/* ============================================================
   Motion utilities — lightweight, dependency-free scroll
   reveals and hero staggers. All animations respect
   prefers-reduced-motion.
   ============================================================ */

function subscribeReducedMotion(callback: () => void) {
  if (typeof window === "undefined" || !window.matchMedia) return () => {};
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener?.("change", callback);
  return () => mq.removeEventListener?.("change", callback);
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeReducedMotion,
    () =>
      typeof window !== "undefined" &&
      !!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches,
    () => false,
  );
}

function useInView<T extends HTMLElement>(threshold = 0.12) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      const t = window.setTimeout(() => setInView(true), 0);
      return () => window.clearTimeout(t);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView] as const;
}

/* ============================================================
   FadeIn — fades/slides content in when scrolled into view.
   Elements already in the viewport on mount reveal immediately.
   ============================================================ */
export const FadeIn = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
  scale = false,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "right" | "none";
  scale?: boolean;
}) => {
  const [ref, inView] = useInView<HTMLDivElement>();
  const reduced = usePrefersReducedMotion();

  const hiddenTransform =
    direction === "left"
      ? "translateX(-24px)"
      : direction === "right"
        ? "translateX(24px)"
        : direction === "none"
          ? "none"
          : "translateY(24px)";

  const style: React.CSSProperties = reduced
    ? {}
    : {
        opacity: inView ? 1 : 0,
        transform: inView
          ? "none"
          : scale
            ? `${hiddenTransform} scale(0.96)`
            : hiddenTransform,
        transition: `opacity 650ms ease-out ${delay}ms, transform 650ms cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
        willChange: "opacity, transform",
      };

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
};

/* ============================================================
   StaggerContainer / StaggerItem — sequenced entrance used in
   page heroes. Items animate in shortly after mount.
   ============================================================ */
const StaggerContext = React.createContext(0);

export const StaggerContainer = ({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => {
  const [started, setStarted] = useState(false);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return; // reduced users see content immediately (derived below)
    const t = window.setTimeout(() => setStarted(true), 60 + delay);
    return () => window.clearTimeout(t);
  }, [reduced, delay]);

  // When reduced motion is on, treat the container as always "started"
  // so children never sit in their hidden state.
  const effectiveStarted = reduced || started;

  return (
    <StaggerContext.Provider value={effectiveStarted ? 1 : 0}>
      <div className={className}>
        {React.Children.map(children, (child, childIndex) => {
          if (React.isValidElement(child) && child.type === StaggerItem) {
            const props = child.props as { index?: number };
            return React.cloneElement(
              child as React.ReactElement<{ index?: number }>,
              { index: props.index ?? childIndex },
            );
          }
          return child;
        })}
      </div>
    </StaggerContext.Provider>
  );
};

export const StaggerItem = ({
  children,
  className = "",
  index = 0,
}: {
  children: React.ReactNode;
  className?: string;
  index?: number;
}) => {
  const parentStarted = React.useContext(StaggerContext);
  const [localStarted, setLocalStarted] = useState(false);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return; // derived: always visible below
    if (parentStarted) {
      const t = window.setTimeout(() => setLocalStarted(true), index * 90);
      return () => window.clearTimeout(t);
    }
  }, [parentStarted, reduced, index]);

  const visible = reduced || localStarted;

  return (
    <div
      className={className}
      style={
        visible
          ? undefined
          : {
              opacity: 0,
              transform: "translateY(16px)",
              transition:
                "opacity 550ms ease-out, transform 550ms cubic-bezier(0.22,1,0.36,1)",
              willChange: "opacity, transform",
            }
      }
    >
      {children}
    </div>
  );
};

/* ============================================================
   Button — unchanged API, subtle press + arrow micro-motion.
   ============================================================ */
export const Button = ({
  children,
  primary = true,
  className = "",
}: {
  children: React.ReactNode;
  primary?: boolean;
  className?: string;
}) => (
  <button
    className={`group inline-flex cursor-pointer items-center justify-center gap-2 px-6 py-3 rounded-md text-sm font-semibold transition-all duration-200 active:scale-[0.97]
    ${
      primary
        ? "bg-slate-900 text-white hover:bg-slate-700"
        : "bg-white text-slate-900 border border-slate-300 hover:border-slate-900"
    } ${className}
  `}
  >
    {children}
  </button>
);

export const StickySplitSection = <T,>({
  title,
  subtitle,
  items,
  renderCard,
}: {
  title: string;
  subtitle: string;
  items: T[];
  renderCard: (item: T, idx: number) => React.ReactNode;
}) => {
  return (
    <div className="container mx-auto px-6 lg:px-16 w-full flex flex-col lg:flex-row gap-12 lg:gap-16 py-20 border-t border-slate-200 bg-white">
      {/* LEFT PANE: Sticky / Pinned */}
      <div className="lg:w-1/3 shrink-0">
        <div className="lg:sticky lg:top-32 flex flex-col justify-start">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight leading-tight text-slate-900">
            {title}
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-slate-600 mb-8 max-w-sm">
            {subtitle}
          </p>
          {/* Scroll hint (desktop only) */}
          <p className="hidden lg:inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400">
            <span className="w-5 h-px bg-slate-300 inline-block" />
            Scroll
          </p>
        </div>
      </div>

      {/* RIGHT PANE: Independently scrollable card column on desktop */}
      <div className="lg:w-2/3 flex flex-col gap-6">
        <div className="expertise-scroll relative lg:max-h-[560px] lg:overflow-y-auto lg:pr-3 lg:-mr-3 lg:overscroll-contain">
          {items.map((item, idx) => (
            <div key={idx} className="w-full mb-6 last:mb-0">
              {renderCard(item, idx)}
            </div>
          ))}
          {/* Bottom fade hint */}
          <div className="hidden lg:block sticky bottom-0 h-16 -mt-16 pointer-events-none bg-linear-to-t from-white to-transparent" />
        </div>
      </div>
    </div>
  );
};

export const renderExpertiseCard = (item: {
  image?: string;
  title?: string;
  desc?: string;
}) => (
  <div className="group p-8 rounded-xl bg-white border border-slate-200 flex flex-col gap-6 transition-all duration-300 hover:border-slate-400 hover:shadow-[0_12px_30px_-12px_rgba(15,23,42,0.18)] hover:-translate-y-1 cursor-pointer">
    {item.image && (
      <div className="relative h-44 rounded-lg overflow-hidden shrink-0">
        <Image
          src={item.image}
          alt={item.title ?? ""}
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    )}
    <div>
      <h3 className="font-semibold text-xl text-slate-900 mb-2 transition-colors duration-300 group-hover:text-yellow-600">
        {item.title}
      </h3>
      <p className="text-slate-600 text-base leading-relaxed">{item.desc}</p>
    </div>
  </div>
);

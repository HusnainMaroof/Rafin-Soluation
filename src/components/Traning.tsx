"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  BookOpen,
  GraduationCap,
  ShieldCheck,
  PhoneCall,
  Award,
  Target,
  Users,
  BookMarked,
  Play,
} from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "./HelperComponent";
import { trainingPages } from "../Static Data/traningData";
import { globalStyles } from "../Static Data/HomeData";
import Link from "next/link";

const TrainingHero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    setMousePosition({ x: clientX - left, y: clientY - top });
  };

  return (
    <section
      className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden z-0 bg-white flex flex-col items-center justify-center min-h-[70vh]"
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 bg-dot-pattern mask-[linear-gradient(to_bottom,white,transparent)] z-0"></div>
      <div
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
        style={{
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(250,204,21,0.08), transparent 40%)`,
        }}
      />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 opacity-5 pointer-events-none">
        <GraduationCap className="w-[60vw] h-[60vw] text-slate-900" />
      </div>

      <div className="container mx-auto px-6 lg:px-16 relative z-20 flex flex-col items-center text-center w-full">
        {/* Centered Typography */}
        <div className="flex flex-col items-center text-center w-full max-w-4xl mx-auto">
          <StaggerContainer className="flex flex-col items-center w-full">
            <StaggerItem>
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-slate-50 border border-slate-200 text-slate-700 shadow-sm text-xs md:text-sm font-bold mb-8 uppercase tracking-widest">
                <span className="text-yellow-500 w-4 h-4 flex items-center justify-center">
                  <BookOpen className="w-4 h-4" />
                </span>
                Rafin Solutions Academy
              </div>
            </StaggerItem>

            <h1 className="text-5xl md:text-6xl lg:text-[5.5rem] font-extrabold text-slate-900 mb-6 leading-[1.05] tracking-tight">
              <StaggerItem>Professional</StaggerItem>
              <StaggerItem>
                <span className="font-tronica text-transparent bg-clip-text bg-linear-to-r from-yellow-500 to-yellow-600 drop-shadow-sm">
                  Compliance Training
                </span>
              </StaggerItem>
            </h1>

            <StaggerItem>
              <p className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed font-medium mb-10 mx-auto">
                Empower your staff with expert-led training programs designed to
                ensure your team has the right skills and knowledge to perform
                effectively and compliantly.
              </p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};

// const GeneralOverview = () => {
//   return (
//     <section className="py-24 bg-slate-50 border-y border-slate-200 relative z-20">
//       <div className="container mx-auto px-6 lg:px-16 text-center max-w-4xl">
//         <FadeIn>
//           <div className="w-20 h-20 bg-white border border-slate-200 rounded-2xl flex items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.05),inset_0_-4px_0_0_rgb(226,232,240,1)] mx-auto mb-8 text-yellow-500">
//             <BookMarked className="w-10 h-10" />
//           </div>
//           <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-8 tracking-tight">
//             Adding Value with <br className="hidden md:block" /> Training and
//             Competence
//           </h2>
//         </FadeIn>

//         <FadeIn delay={0.1}>
//           <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-6 font-medium">
//             Our training and e-training programs and expertise team can help you
//             out by modulating programs as per your needs and ensure your team
//             receives the training they need. Our team is made up of specialised
//             skilled professionals who are well experienced in creating and
//             delivering training programmes for financial services firms just
//             like yours.
//           </p>
//           <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
//             This is most beneficial to your organisation as it means you will
//             concentrate on running your business whilst we ensure your staff
//             have the necessary skills and knowledge to perform their roles
//             correctly and effectively.
//           </p>
//         </FadeIn>
//       </div>
//     </section>
//   );
// };

// Exact replica of the uploaded image layout (Offset shape + Solid blue checks)
const TrainingModule = ({
  data,
  index,
}: {
  data: (typeof trainingPages)[0];
  index: number;
}) => {
  const isEven = index % 2 !== 0;

  // Theme colors based on the data object
  const blobColor =
    data.theme === "blue"
      ? "bg-sky-100"
      : data.theme === "slate"
        ? "bg-slate-200"
        : "bg-cyan-100";
  const checkBg =
    data.theme === "blue"
      ? "bg-[#0ea5e9]"
      : data.theme === "slate"
        ? "bg-[#334155]"
        : "bg-[#06b6d4]";

  return (
    <section
      id={data.slug}
      className={`py-24 md:py-32 scroll-mt-24 bg-white overflow-hidden`}
    >
      <div className="container mx-auto px-6 lg:px-16 w-full">
        <div
          className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-24 ${isEven ? "lg:flex-row-reverse" : ""}`}
        >
          {/* IMAGE SIDE (With offset background shape) */}
          <FadeIn
            scale
            direction={isEven ? "right" : "left"}
            className="lg:w-1/2 w-full relative"
          >
            <div
              className={`absolute -inset-4 md:-inset-8 ${blobColor} rounded-[3rem] ${isEven ? "rotate-3 hover:rotate-6" : "-rotate-3 hover:-rotate-6"} transform z-0 transition-transform duration-700`}
            ></div>
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.1)] group">
              <img
                src={data.image}
                alt={data.title}
                className="w-full h-auto md:h-112.5 object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </FadeIn>

          {/* TEXT SIDE (Title, Paragraph, Solid Blue Checkmarks) */}
          <div className="lg:w-1/2 flex flex-col z-10">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#1e293b] mb-6 tracking-tight">
                {data.title}
              </h2>
              <p className="text-[#475569] mb-8 leading-relaxed text-lg font-medium">
                {data.description}
              </p>

              <h3 className="text-2xl font-bold mb-6 text-[#0f172a]">
                {data.listTitle}
              </h3>

              <ul className="space-y-4">
                {data.list.map((item, iIdx) => (
                  <li key={iIdx} className="flex items-start gap-4 group/item">
                    {/* Solid Circular Checkmark as requested */}
                    <div
                      className={`mt-1 w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-md group-hover/item:scale-110 transition-transform duration-300`}
                    >
                      <Check className="w-3.5 h-3.5 stroke-3" />
                    </div>
                    <span className="text-[#334155] font-medium leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

// Exact CTA Design requested from uploaded image
export const CTASection = () => (
  <section className="py-24 bg-slate-50 relative border-t border-slate-200">
    <div className="container mx-auto px-6 lg:px-16 relative z-10">
      <FadeIn scale>
        <div className="bg-[#0f1423] rounded-[3rem] p-12 md:p-24 flex flex-col items-center text-center relative overflow-hidden shadow-2xl border border-slate-800">
          <div className="absolute -top-32 -left-32 w-[60%] h-[60%] bg-yellow-400/10 blur-[120px] rounded-full pointer-events-none"></div>
          <div className="absolute -bottom-32 -right-32 w-[60%] h-[60%] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>

          <div className="relative z-10 w-full flex flex-col items-center">
            <div className="mb-8">
              <PhoneCall className="w-12 h-12 text-yellow-400 stroke-2 animate-pulse" />
            </div>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight leading-[1.1]">
              Ready to secure your <br />
              <span className="text-yellow-400 font-tronica">compliance</span> future?
            </h2>

            <p className="text-slate-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
              Get in touch with our expert consultants today to secure your
              business and streamline your regulatory framework.
            </p>

             <Link href={"/contect-us"}>
              {" "}
              <button className="group cursor-pointer inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full text-base font-bold transition-all duration-300 bg-yellow-400 text-slate-900 shadow-[0_0_20px_rgba(250,204,21,0.5)] hover:shadow-[0_0_30px_rgba(250,204,21,0.7)] hover:bg-yellow-300 hover:-translate-y-1">
                Contact Us{" "}
                <ArrowRight className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1" />
              </button>
            </Link>
          </div>
        </div>
      </FadeIn>
    </div>
  </section>
);

// ==========================================
// 5. MAIN PAGE COMPONENT (Single Page Scroll)
// ==========================================
export default function TrainingPage({ slug, params }: any) {
  // Safe, Robust DOM scroll handler
  useEffect(() => {
    const scrollToTarget = () => {
      if (typeof window === "undefined") return;

      const hashSlug = window.location.hash.replace("#", "");
      const searchParams = new URLSearchParams(window.location.search);
      const querySlug = searchParams.get("course") || searchParams.get("type");

      // Find the intended slug from props or URL params
      let targetId = "";

      // 1. Handle case where user passes the whole module object: slug={trainingModule}
      if (slug && typeof slug === "object" && slug.slug) {
        targetId = slug.slug;
      }
      // 2. Handle standard string/array slug
      else if (slug) {
        targetId = Array.isArray(slug) ? slug[0] : slug;
      }
      // 3. Handle raw params prop
      else if (params?.slug) {
        targetId = Array.isArray(params.slug) ? params.slug[0] : params.slug;
      }
      // 4. Fallback to URL Hash or Query
      else {
        targetId = hashSlug! || querySlug!;
      }

      if (targetId) {
        // Polling mechanism: Wait for the element to actually exist in the DOM
        let attempts = 0;
        const scrollInterval = setInterval(() => {
          const element = document.getElementById(targetId);

          if (element) {
            clearInterval(scrollInterval);
            const yOffset = -100; // Account for fixed navbar
            const y =
              element.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
          }

          attempts++;
          if (attempts >= 20) clearInterval(scrollInterval); // Stop trying after 2 seconds
        }, 100);
      }
    };

    scrollToTarget();

    if (typeof window !== "undefined") {
      window.addEventListener("hashchange", scrollToTarget);
      return () => window.removeEventListener("hashchange", scrollToTarget);
    }
  }, [slug, params]);

  return (
    <>
      <style>{globalStyles}</style>
      <div className="min-h-screen font-sans selection:bg-yellow-400 selection:text-slate-900 overflow-x-hidden bg-white">
        <TrainingHero />
        {/* <GeneralOverview /> */}

        {/* Render Each Training Module using the requested Image/Text layout */}
        {trainingPages.map((module, index) => (
          <TrainingModule key={module.slug} data={module} index={index} />
        ))}

        <CTASection />
      </div>
    </>
  );
}

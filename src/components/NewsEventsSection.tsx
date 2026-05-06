"use client";

import { useState } from "react";
import { Button, FadeIn } from "./HelperComponent";
import { motion, AnimatePresence } from "framer-motion";
import { NEWS_DATA } from "../Static Data/HomeData";
import { ArrowRight } from "lucide-react";
import { redirect, usePathname } from "next/navigation";

export const NewsEventsSection = ({ params }: { params: any }): any => {
  const [visibleCount, setVisibleCount] = useState(4);

  const pathname = usePathname();
  let isNewsPage = pathname === "/news-events";

  const handleShowMore = () => {
    if (isNewsPage) {
      setVisibleCount((prev) => prev + 4);
    } else {
      redirect("/news-events");
    }
  };

  const handleShowLess = () => {
    setVisibleCount((prev) => Math.max(4, prev - 4));
  };

  return (
    <section
      className={`bg-slate-50  border-t border-slate-200 overflow-hidden ${isNewsPage ? "pt-24" : "py-24"}`}
    >
      <div
        className={`container mx-auto px-6 lg:px-16 w-full  ${isNewsPage ? "py-24 " : ""}`}
      >
        <FadeIn>
          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight text-slate-900 `}
          >
            News & Events
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 lg:gap-8 mt-8">
          <AnimatePresence>
            {NEWS_DATA.slice(0, visibleCount).map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: (idx % 4) * 0.1 }}
                className="h-full"
              >
                <div className="bg-white rounded-4xl shadow-sm border border-slate-200 overflow-hidden flex flex-col group hover:shadow-xl hover:-translate-y-2 hover:border-slate-300 transition-all duration-500 h-full cursor-pointer">
                  <div className="relative h-56 overflow-hidden bg-slate-100">
                    <img
                      src={item.img}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      alt={item.title}
                    />
                  </div>
                  <div className="relative p-6 md:p-8 pt-12 grow flex flex-col">
                    {/* Red Date Badge overlapping image and content */}
                    <div className="absolute -top-8 left-6 w-16 h-16 bg-rose-500 rounded-full flex flex-col items-center justify-center text-white font-bold leading-none border-4 border-white shadow-sm group-hover:scale-110 transition-transform duration-300">
                      <span className="text-xl">{item.day}</span>
                      <span className="text-xs font-normal uppercase tracking-wider">
                        {item.month}
                      </span>
                    </div>

                    <h3 className="font-bold text-xl text-slate-900 mb-4 group-hover:text-rose-500 transition-colors duration-300 line-clamp-3">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 grow line-clamp-4">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {visibleCount < NEWS_DATA.length ? (
          <FadeIn delay={0.2} className="flex justify-center mt-16">
            <button
              onClick={handleShowMore}
              className="  group inline-flex items-center cursor-pointer justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-300
        bg-slate-900 text-white shadow-[0_4px_14px_0_rgba(0,0,0,0.15)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.25)] hover:bg-black hover:-translate-y-1"
            >
              Show more news{" "}
              <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
            </button>
          </FadeIn>
        ) : (
          <FadeIn delay={0.2} className="flex justify-center mt-16">
            <button
              onClick={handleShowLess}
              className="  group inline-flex items-center cursor-pointer justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-300
        bg-slate-900 text-white shadow-[0_4px_14px_0_rgba(0,0,0,0.15)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.25)] hover:bg-black hover:-translate-y-1"
            >
              Show less news{" "}
              <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
            </button>
          </FadeIn>
        )}
      </div>
    </section>
  );
};

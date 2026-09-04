"use client";

import { useState } from "react";
import { NEWS_DATA } from "../Static Data/HomeData";
import { ArrowRight } from "lucide-react";
import { redirect, usePathname } from "next/navigation";

export const NewsEventsSection = () => {
  const [visibleCount, setVisibleCount] = useState(4);

  const pathname = usePathname();
  const isNewsPage = pathname === "/news-events";

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
      className={`bg-slate-50 border-t border-slate-200 overflow-hidden ${isNewsPage ? "pt-24 pb-24" : "py-24"}`}
    >
      <div
        className={`container mx-auto px-6 lg:px-16 w-full  ${""}`}
      >
        <div className="mb-6">
          <div className="text-xs font-bold uppercase tracking-widest text-yellow-600 mb-3">
            Insights
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight text-slate-900">
            News & Events
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 lg:gap-8 mt-8">
          {NEWS_DATA.slice(0, visibleCount).map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col hover:border-slate-400 transition-colors h-full cursor-pointer"
            >
              <div className="relative h-56 overflow-hidden bg-slate-100">
                <img
                  src={item.img}
                  className="w-full h-full object-cover"
                  alt={item.title}
                />
              </div>
              <div className="relative p-6 md:p-8 pt-12 grow flex flex-col">
                {/* Date Badge overlapping image and content */}
                <div className="absolute -top-8 left-6 w-16 h-16 bg-slate-900 rounded-xl flex flex-col items-center justify-center text-white font-bold leading-none">
                  <span className="text-xl">{item.day}</span>
                  <span className="text-xs font-normal uppercase tracking-wider">
                    {item.month}
                  </span>
                </div>

                <h3 className="font-bold text-xl text-slate-900 mb-4 line-clamp-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 grow line-clamp-4">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {visibleCount < NEWS_DATA.length ? (
          <div className="flex justify-center mt-16">
            <button
              onClick={handleShowMore}
              className="inline-flex items-center cursor-pointer justify-center gap-2 px-8 py-3.5 rounded-md text-sm font-semibold transition-colors bg-slate-900 text-white hover:bg-slate-700"
            >
              Show more news <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        ) : (
          <div className="flex justify-center mt-16">
            <button
              onClick={handleShowLess}
              className="inline-flex items-center cursor-pointer justify-center gap-2 px-8 py-3.5 rounded-md text-sm font-semibold transition-colors bg-slate-900 text-white hover:bg-slate-700"
            >
              Show less news <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

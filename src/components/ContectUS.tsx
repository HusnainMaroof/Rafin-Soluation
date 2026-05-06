"use client";

import React, { useEffect, useRef, useState } from "react";
import { FadeIn, StaggerContainer, StaggerItem } from "./HelperComponent";
import {
  Check,
  ChevronDown,
  Mail,
  MapPin,
  PersonStanding,
  Phone,
  Send,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const CustomDropdown = ({
  options,
  value,
  onChange,
}: {
  options: string[];
  value: string;
  onChange: (val: string) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full bg-slate-50 border rounded-xl px-6 py-4 flex items-center justify-between cursor-pointer transition-all duration-300 ${isOpen ? "border-yellow-400 bg-white shadow-[0_0_20px_rgba(250,204,21,0.1)]" : "border-slate-100 hover:border-slate-300"}`}
      >
        <span
          className={`font-medium ${value ? "text-slate-900" : "text-slate-400"}`}
        >
          {value || "Select a subject"}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-2xl shadow-2xl z-60 overflow-hidden py-2"
          >
            {options.map((option) => (
              <div
                key={option}
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
                className="px-6 py-3 hover:bg-slate-50 transition-colors flex items-center justify-between group cursor-pointer"
              >
                <span
                  className={`font-medium ${value === option ? "text-yellow-600" : "text-slate-600"}`}
                >
                  {option}
                </span>
                {value === option && (
                  <Check className="w-4 h-4 text-yellow-500" />
                )}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const ContactHero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    setMousePosition({
      x: clientX - left,
      y: clientY - top,
    });
  };

  return (
    <section
      className="relative pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden z-0 bg-slate-50"
      onMouseMove={handleMouseMove}
    >
      {/* Tracking Shadow Cursor */}
      <div
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,0,0,0.06), transparent 40%)`,
        }}
      />
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-[10%] w-[30vw] h-[30vw] bg-yellow-400/20 rounded-full blur-[120px] mix-blend-multiply" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLCAwLCAwLCAwLjA0KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] z-10" />
      </div>

      <div className="container mx-auto px-6 lg:px-16 relative z-20 flex flex-col items-center text-center w-full">
        <StaggerContainer>
          <StaggerItem>
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 shadow-[0_2px_10px_rgba(0,0,0,0.05),inset_0_-2px_0_0_rgb(226,232,240,1)] text-xs md:text-sm font-medium mb-8">
              Get InTouch
            </div>
          </StaggerItem>

          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 leading-[1.1] tracking-tight flex flex-col md:flex-row flex-wrap justify-center gap-x-4">
            <StaggerItem>Get in</StaggerItem>
            <StaggerItem>
              <span className="font-tronica  text-transparent bg-clip-text bg-linear-to-r from-yellow-500 to-yellow-400">
                Touch
              </span>
            </StaggerItem>
          </h1>

          <StaggerItem>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
              Our expert compliance consultants are ready to assist you with
              authorization, audits, and strategic fintech advisory.
            </p>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
};

export const ContactFormSection = () => {
  const [selectedSubject, setSelectedSubject] = useState("General Inquiry");
  const subjects = [
    "General Inquiry",
    "FCA Authorization",
    "Compliance Audit",
    "Fintech Advisory",
    "AML/CFT Training",
  ];
  return (
    <section className="bg-slate-50 py-24 border-t border-slate-200 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-16 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-stretch">
          {/* LEFT: THE FORM (Clean & Premium) */}
          <div className="lg:w-[58%] w-full">
            <FadeIn>
              <div className="mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                  Drop us a line<span className="text-yellow-500">.</span>
                </h2>
                <p className="text-slate-500 text-lg max-w-xl leading-relaxed">
                  Provide your details and a brief message, and one of our lead
                  consultants will reach out to schedule a discovery call.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <form className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-200 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full bg-slate-50 border border-slate-100 rounded-xl px-6 py-4 outline-none focus:bg-white focus:border-yellow-400 focus:shadow-[0_0_20px_rgba(250,204,21,0.1)] transition-all font-medium text-slate-900"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="john@company.com"
                      className="w-full bg-slate-50 border border-slate-100 rounded-xl px-6 py-4 outline-none focus:bg-white focus:border-yellow-400 focus:shadow-[0_0_20px_rgba(250,204,21,0.1)] transition-all font-medium text-slate-900"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="+44 (0) ..."
                      className="w-full bg-slate-50 border border-slate-100 rounded-xl px-6 py-4 outline-none focus:bg-white focus:border-yellow-400 focus:shadow-[0_0_20px_rgba(250,204,21,0.1)] transition-all font-medium text-slate-900"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">
                      Subject *
                    </label>
                    <CustomDropdown
                      options={subjects}
                      value={selectedSubject}
                      onChange={setSelectedSubject}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">
                    Your Message *
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell us about your regulatory challenges..."
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-5 outline-none focus:bg-white focus:border-yellow-400 focus:shadow-[0_0_20px_rgba(250,204,21,0.1)] transition-all resize-none font-medium text-slate-900"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="group w-full cursor-pointer bg-slate-900 text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-3 shadow-xl hover:bg-black hover:-translate-y-1 transition-all active:scale-[0.98]"
                >
                  Submit Message{" "}
                  <Send className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </form>
            </FadeIn>
          </div>

          {/* RIGHT: TACTILE INFO CARD (Dark Match) */}
          <div className="lg:w-[42%] w-full h-full">
            <FadeIn delay={0.3} scale direction="none" className="h-full">
              <div className="bg-[#0f1423] rounded-3xl p-10 md:p-14 relative overflow-hidden shadow-2xl border border-slate-800 group h-full flex gap-10 flex-col justify-between">
                {/* Glow match to image_017761.png */}
                <div className="absolute -top-32 -left-32 w-80 h-84 bg-yellow-400/10 blur-[100px] rounded-full pointer-events-none group-hover:bg-yellow-400/20 transition-all duration-700"></div>
                <div className="absolute -bottom-32 -right-32 w-80 h-84 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none group-hover:bg-blue-500/20 transition-all duration-700"></div>

                <div className="relative z-10 flex flex-col gap-8">
                  {/* Headline */}
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-4">
                      Global Offices
                    </h3>
                    <p className="text-slate-400 font-medium">
                      Rafin Solutions is operational across international
                      borders.
                    </p>
                  </div>

                  {/* Office */}
                  <div className="flex items-start gap-6 group/item">
                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 text-yellow-400 group-hover/item:bg-yellow-400 group-hover/item:text-slate-900 transition-all duration-300 shadow-lg">
                      <MapPin className="w-7 h-7" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-bold text-xl mb-3 tracking-tight">
                        Pakistan Office
                      </h4>
                      <p className="text-slate-400 text-base leading-relaxed font-medium">
                        Opposite to Bega Sanitary Store, <br /> Gulyana Road
                        Kharian, District, Gujrat, Pakistan
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-6 group/item">
                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 text-yellow-400 group-hover/item:bg-yellow-400 group-hover/item:text-slate-900 transition-all duration-300 shadow-lg">
                      <Mail className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-xl mb-1 tracking-tight">
                        Direct Email
                      </h4>
                      <a
                        href="mailto:info@abmconsultinggroupplc.com"
                        className="text-slate-400 text-base hover:text-yellow-400 transition-colors font-medium"
                      >
                        rafinsolutions@outlook.com{" "}
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-6 group/item">
                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 text-yellow-400 group-hover/item:bg-yellow-400 group-hover/item:text-slate-900 transition-all duration-300 shadow-lg">
                      <Phone className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-xl mb-3 tracking-tight">
                        Phone Numbers
                      </h4>
                      <div className="flex flex-col gap-3">
                        {/* <a
                          href="tel:+442075157080"
                          className="flex items-center gap-3 text-slate-300 hover:text-yellow-400 transition-colors font-medium group/line"
                        >
                          <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-white group-hover/line:bg-yellow-400 group-hover/line:text-black transition-colors font-tech">
                            UK
                          </span>
                          +44 (0) 207 515 7080
                        </a> */}
                        <a
                          href="tel:+923045896617"
                          className="flex items-center gap-3 text-slate-300 hover:text-yellow-400 transition-colors font-medium group/line"
                        >
                          <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-white group-hover/line:bg-yellow-400 group-hover/line:text-black transition-colors font-tech">
                            PK
                          </span>
                          +92 (0) 04 5896617
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Status Indicator */}
                <div className="mt-16 pt-8 border-t border-white/5 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></div>
                  <p className="font-tech text-slate-500 text-[10px] uppercase tracking-[0.3em] font-bold">
                    Strategic Partnership Support active
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactUS = () => {
  return (
    <div>
      <ContactHero />
      <ContactFormSection />
    </div>
  );
};

export default ContactUS;

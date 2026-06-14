"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown, Menu, Network, X } from "lucide-react";
import Link from "next/link"; // ✅ FIXED
import { NAV_ITEMS } from "../Static Data/HomeData";
import { Button } from "./HelperComponent";
import Image from "next/image";
import { redirect } from "next/navigation";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 w-full z-999 transition-all duration-500 px-4 pt-4 ${
        scrolled ? "py-2" : "py-6"
      }`}
    >
      <div
        className={`mx-auto max-w-360 px-6 lg:px-8 flex items-center justify-between transition-all duration-500 rounded-full
        ${
          scrolled
            ? "   border border-transparent"
            : "bg-white/90 backdrop-blur-md border border-slate-200 py-3 shadow-sm"
        }`}
      >
        {/* Brand */}

        <div
        onClick={()=>redirect("/")}
          className={`flex items-center gap-2 cursor-pointer group z-50 h-full bg-white p-2 rounded-full transition-colors duration-500 ${
            scrolled ? "bg-transparent" : "bg-white/80"
          }`}
        >
          {scrolled ? (
            <>
              <Image
                src="/Logo/Logo_FULL_Black.png"
                alt="Logo"
                width={140}
                height={140}
              />
            </>
          ) : (
            <>
              <Image
                src="/Logo/Logo_Orange_Black.png"
                alt="Logo"
                width={140}
                height={140}
              />
            </>
          )}

          {/* <Image
            src="/Logo/Logo_Full_White.png"
            alt="Logo"
            width={140}
            height={140}
            className="bg-black"
          /> */}
        </div>

        {/* Desktop Nav */}
        <div
          className={`hidden xl:flex items-center gap-1 px-4 py-2 rounded-full border transition-colors duration-500 ${
            scrolled
              ? "bg-black border-black"
              : "bg-slate-50/80 border-slate-200/50"
          }`}
        >
          {NAV_ITEMS.map((item) => (
            <div key={item.label} className="relative group px-3 py-2">
              {/* Parent Link */}
              {item.href ? (
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 text-sm font-semibold transition-colors duration-300 ${
                    scrolled
                      ? "text-white hover:text-white"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {item.label}
                  {item.dropdown && (
                    <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                  )}
                </Link>
              ) : (
                <span
                  className={`flex items-center gap-1 text-sm font-semibold ${
                    scrolled ? "text-white" : "text-slate-600"
                  }`}
                >
                  {item.label}
                  {item.dropdown && (
                    <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                  )}
                </span>
              )}

              {/* Desktop Dropdown */}
              {item.dropdown && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                  <div className="absolute -top-6 left-0 w-full h-6 bg-transparent" />
                  <div className="bg-white border border-slate-100 rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] overflow-hidden py-3">
                    {item.dropdown.map((dropItem) => (
                      <Link
                        key={dropItem.label}
                        href={dropItem.href}
                        className="flex items-center gap-2 px-5 py-3 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors relative overflow-hidden group/item"
                      >
                        <span className="absolute left-0 top-0 bottom-0 w-1 bg-slate-900 transform -translate-x-full group-hover/item:translate-x-0 transition-transform duration-300" />
                        {dropItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden xl:block z-50">
          <Link
            href={"contact-us"}
            className="group"
            onClick={() => setMobileMenuOpen(false)}
          >
            {" "}
            <Button primary={!scrolled} className="px-6 py-2.5">
              Let's Talk{" "}
              <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          className={`xl:hidden p-2 z-50 transition-colors duration-500 ${
            scrolled ? "text-white" : "text-slate-900"
          }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <div className={`${scrolled ? "bg-black p-2" : null}  rounded-xl`}>
              {" "}
              <X className="w-6 h-6" />
            </div>
          ) : (
            <div className={`${scrolled ? "bg-black p-2" : null}  rounded-xl`}>
              {" "}
              <Menu className="w-6 h-6" />
            </div>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute top-full left-4 right-4 mt-2 bg-white border border-slate-100 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col xl:hidden"
          >
            <div className="max-h-[70vh] overflow-y-auto p-4 flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <div key={item.label} className="flex flex-col">
                  <div
                    className="flex items-center justify-between p-4 rounded-xl text-slate-900 font-medium hover:bg-slate-50 transition-colors cursor-pointer"
                    onClick={() => {
                      if (item.dropdown) {
                        setActiveDropdown(
                          activeDropdown === item.label ? null : item.label,
                        );
                      }
                    }}
                  >
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="flex-1"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <span className="flex-1">{item.label}</span>
                    )}

                    {item.dropdown && (
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-300 ${
                          activeDropdown === item.label
                            ? "rotate-180 text-slate-900"
                            : "text-slate-400"
                        }`}
                      />
                    )}
                  </div>

                  <AnimatePresence>
                    {item.dropdown && activeDropdown === item.label && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-col gap-1 pl-4 pb-3 border-l-2 border-slate-100 ml-6 mt-1">
                          {item.dropdown.map((dropItem) => (
                            <Link
                              key={dropItem.label}
                              href={dropItem.href}
                              className="py-3 px-4 text-sm text-slate-500 hover:text-slate-900 transition-colors rounded-lg hover:bg-slate-50"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {dropItem.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              <div className="p-4 mt-2 border-t border-slate-100">
                <Link
                  href="/contact-us"
                  className="block text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Button primary className="w-full justify-center">
                    Let's Talk
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

"use client";
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, Network, X } from "lucide-react";
import { NAV_ITEMS } from "../Static Data/HomeData";
import { Button } from "./HelperComponent";
import Image from "next/image";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 w-full z-[100] transition-all duration-500 px-4 pt-4 ${scrolled ? "py-2" : "py-6"}`}
    >
      <div
        className={`mx-auto max-w-[90rem] px-6 lg:px-8 flex items-center justify-between transition-all duration-500 rounded-full
        ${scrolled ? "bg-[#121212]/95 backdrop-blur-xl border border-white/10 shadow-2xl py-3" : "bg-transparent border-transparent py-2"}`}
      >
        {/* Brand */}
        <div className="flex items-center gap-2 cursor-pointer group z-50">
          <Image
            src="/Logo/logo.png"
            alt="Rafin Solutions Logo"
            width={100}
            height={100}
            className="w-full h-auto object-contain group-hover:scale-110 transition-transform duration-300"
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden xl:flex items-center gap-1 bg-white/5 px-4 py-2 rounded-full border border-white/5">
          {NAV_ITEMS.map((item) => (
            <div key={item.label} className="relative group px-3 py-2">
              <a
                href={item.href}
                className="flex items-center gap-1 text-sm font-medium text-slate-300 hover:text-yellow-400 transition-colors"
              >
                {item.label}
                {item.dropdown && (
                  <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                )}
              </a>

              {/* Desktop Dropdown */}
              {item.dropdown && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                  {/* Invisible hover bridge */}
                  <div className="absolute -top-6 left-0 w-full h-6 bg-transparent" />
                  <div className="bg-[#121212]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden py-3">
                    {item.dropdown.map((dropItem) => (
                      <a
                        key={dropItem.label}
                        href={dropItem.href}
                        className="flex items-center gap-2 px-5 py-3 text-sm text-slate-400 hover:text-yellow-400 hover:bg-white/5 transition-colors relative overflow-hidden group/item"
                      >
                        <span className="absolute left-0 top-0 bottom-0 w-1 bg-yellow-400 transform -translate-x-full group-hover/item:translate-x-0 transition-transform duration-300" />
                        {dropItem.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden xl:block z-50">
          <Button
            primary
            className="px-6 py-2.5 bg-yellow-400 text-black hover:bg-yellow-300 shadow-none"
          >
            Let's Talk
          </Button>
        </div>

        <button
          className="xl:hidden p-2 text-white z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-yellow-400" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute top-full left-4 right-4 mt-2 bg-[#121212]/95 backdrop-blur-xl border border-white/10 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col xl:hidden"
          >
            <div className="max-h-[70vh] overflow-y-auto p-4 flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <div key={item.label} className="flex flex-col">
                  <div
                    className="flex items-center justify-between p-4 rounded-xl text-white font-medium hover:bg-white/5 transition-colors cursor-pointer"
                    onClick={() => {
                      if (item.dropdown) {
                        setActiveDropdown(
                          activeDropdown === item.label ? null : item.label,
                        );
                      }
                    }}
                  >
                    <a
                      href={item.dropdown ? "#" : item.href}
                      className="flex-1"
                    >
                      {item.label}
                    </a>
                    {item.dropdown && (
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-300 ${activeDropdown === item.label ? "rotate-180 text-yellow-400" : "text-slate-500"}`}
                      />
                    )}
                  </div>

                  {/* Mobile Dropdown Expand */}
                  <AnimatePresence>
                    {item.dropdown && activeDropdown === item.label && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-col gap-1 pl-4 pb-3 border-l-2 border-white/5 ml-6 mt-1">
                          {item.dropdown.map((dropItem) => (
                            <a
                              key={dropItem.label}
                              href={dropItem.href}
                              className="py-3 px-4 text-sm text-slate-400 hover:text-yellow-400 transition-colors rounded-lg hover:bg-white/5"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {dropItem.label}
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <div className="p-4 mt-2 border-t border-white/5">
                <Button primary className="w-full justify-center">
                  Let's Talk
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

"use client";

import React, { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "../Static Data/HomeData";
import Image from "next/image";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const isActive = (href?: string) => {
    if (!href) return false;
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="container mx-auto px-6 lg:px-16 flex items-center justify-between min-h-[64px] md:min-h-[68px] lg:min-h-[76px] gap-3 md:gap-4 lg:gap-5">
        {/* Brand */}
        <Link href="/" className="flex items-center shrink-0" aria-label="Rafin Solutions">
          <Image
            src="/Logo/Logo_FULL_Black.png"
            alt="Rafin Solutions"
            width={150}
            height={50}
            className="h-7 sm:h-8 md:h-8 lg:h-10 w-auto object-contain"
          />
        </Link>

        {/* Right-aligned group: Desktop Nav + CTA (md and up) */}
        <div className="hidden md:flex items-center ml-auto md:gap-1 lg:gap-2">
          <nav aria-label="Main navigation">
            <ul className="flex items-center gap-1 list-none m-0 p-0">
              {NAV_ITEMS.map((item) => (
                <li
                  key={item.label}
                  className={`relative flex items-center ${item.dropdown ? "group" : ""}`}
                >
                  {item.dropdown ? (
                    <>
                      <Link
                        href={item.href ?? "#"}
                        className={`relative font-bold px-2 lg:px-3 py-2.5 transition-colors md:text-[13px] lg:text-sm ${
                          isActive(item.href) || isActive(item.dropdown[0].href)
                            ? "text-slate-900"
                            : "text-slate-600 hover:text-slate-900"
                        }`}
                      >
                        {item.label}
                        <ChevronDown className="hidden lg:inline-block w-3.5 h-3.5 ml-1 -mt-0.5" />
                      </Link>
                      {/* Active/hover underline */}
                      <span className="absolute left-3 right-3 -bottom-0.5 h-0.5 bg-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                      <ul className="absolute top-full left-auto right-0 lg:left-0 lg:right-auto hidden group-hover:grid group-focus-within:grid gap-1 w-72 m-0 p-2.5 list-none bg-white border border-slate-200 rounded-lg shadow-xl">
                        {item.dropdown.map((dropItem) => (
                          <li key={dropItem.label}>
                            <Link
                              href={dropItem.href}
                              className={`block w-full px-3.5 py-2.5 text-sm rounded-md transition-colors ${
                                isActive(dropItem.href)
                                  ? "text-yellow-600 bg-slate-50"
                                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                              }`}
                            >
                              {dropItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link
                      href={item.href ?? "/"}
                      className={`relative font-bold px-2 lg:px-3 py-2.5 transition-colors md:text-[13px] lg:text-sm ${
                        isActive(item.href)
                          ? "text-slate-900"
                          : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      {item.label}
                      <span
                        className={`absolute left-3 right-3 -bottom-0.5 h-0.5 transition-opacity ${
                          isActive(item.href)
                            ? "bg-yellow-400 opacity-100"
                            : "bg-yellow-400 opacity-0 hover:opacity-100"
                        }`}
                      />
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA */}
          <div className="shrink-0 md:ml-2 lg:ml-4">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center gap-2 min-h-11 px-3 md:px-3.5 lg:px-5 rounded-md bg-yellow-400 text-slate-900 font-extrabold transition-colors hover:bg-yellow-300 whitespace-nowrap md:text-[13px] lg:text-sm"
            >
              Book a Consultation
            </Link>
          </div>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden p-2 text-slate-900"
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-xl">
          <div className="max-h-[70vh] overflow-y-auto px-5 py-4 flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="flex flex-col">
                <div
                  className="flex items-center justify-between py-3.5 text-slate-900 font-bold cursor-pointer"
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
                        activeDropdown === item.label ? "rotate-180 text-slate-900" : "text-slate-400"
                      }`}
                    />
                  )}
                </div>
                {item.dropdown && activeDropdown === item.label && (
                  <div className="flex flex-col gap-1 pl-4 pb-3 border-l-2 border-slate-200 ml-4 mt-1">
                    {item.dropdown.map((dropItem) => (
                      <Link
                        key={dropItem.label}
                        href={dropItem.href}
                        className="py-2.5 px-4 text-sm text-slate-600 hover:text-slate-900 transition-colors rounded-md hover:bg-slate-50"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {dropItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 mt-3 border-t border-slate-200 pb-2">
              <Link
                href="/contact-us"
                className="flex items-center justify-center gap-2 min-h-11 rounded-md bg-yellow-400 text-slate-900 text-sm font-extrabold transition-colors hover:bg-yellow-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

"use client";

import React, { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { NAV_ITEMS } from "../Static Data/HomeData";
import { Button } from "./HelperComponent";
import Image from "next/image";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="fixed top-0 w-full z-999 bg-white border-b border-slate-200">
      <div className="mx-auto max-w-360 px-6 lg:px-8 flex items-center justify-between py-3">
        {/* Brand */}
        <Link href="/" className="flex items-center">
          <Image
            src="/Logo/Logo_FULL_Black.png"
            alt="Rafin Solutions"
            width={140}
            height={140}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <div key={item.label} className="relative group px-3 py-2">
              {item.href ? (
                <Link
                  href={item.href}
                  className="flex items-center gap-1 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
                >
                  {item.label}
                  {item.dropdown && (
                    <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                  )}
                </Link>
              ) : (
                <span className="flex items-center gap-1 text-sm font-semibold text-slate-600 group-hover:text-slate-900 transition-colors cursor-pointer">
                  {item.label}
                  {item.dropdown && (
                    <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                  )}
                </span>
              )}

              {/* Desktop Dropdown */}
              {item.dropdown && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="absolute -top-6 left-0 w-full h-6 bg-transparent" />
                  <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden py-2">
                    {item.dropdown.map((dropItem) => (
                      <Link
                        key={dropItem.label}
                        href={dropItem.href}
                        className="block px-5 py-3 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors"
                      >
                        {dropItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden xl:block">
          <Link href="/contact-us">
            <Button primary className="px-6 py-2.5">
              Let&apos;s Talk
            </Button>
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          className="xl:hidden p-2 text-slate-900"
          aria-label="Toggle menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-sm">
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

                {item.dropdown && activeDropdown === item.label && (
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
                )}
              </div>
            ))}

            <div className="p-4 mt-2 border-t border-slate-100">
              <Link
                href="/contact-us"
                className="block text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Button primary className="w-full justify-center">
                  Let&apos;s Talk
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

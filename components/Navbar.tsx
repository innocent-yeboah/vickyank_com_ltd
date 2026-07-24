"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks, site } from "@/lib/site";
import { CloseIcon, MenuIcon, PhoneIcon } from "@/components/Icons";

/**
 * Sticky corporate navigation bar. Solid dark background with gold
 * accent branding, collapses to a full-screen menu on mobile.
 */
export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.04] bg-[#111111]/75 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo — replace with the client's real logo image when available */}
        <Link href="/" className="group flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center bg-[#FFC107] font-heading text-xl font-bold text-[#1A1A1A]">
            V
          </span>
          <span className="leading-tight">
            <span className="block font-heading text-lg font-bold uppercase tracking-wider text-white">
              Vickyank
            </span>
            <span className="block text-[11px] uppercase tracking-[0.25em] text-[#FFC107]">
              Limited Company
            </span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium uppercase tracking-wide transition-colors ${
                  active ? "text-[#FFC107]" : "text-gray-300 hover:text-white"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href={`tel:${site.phoneInternational}`}
            className="flex items-center gap-2 bg-[#FFC107] px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-[#1A1A1A] transition-colors hover:bg-gold-dark"
          >
            <PhoneIcon className="h-4 w-4" />
            {site.phoneDisplay}
          </a>
        </nav>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="text-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile navigation panel */}
      {open && (
        <nav
          className="border-t border-white/[0.04] bg-[#111111]/95 backdrop-blur-md lg:hidden"
          aria-label="Mobile"
        >
          <div className="space-y-1 px-4 py-4">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-3 py-3 text-base font-medium uppercase tracking-wide ${
                    active
                      ? "bg-white/5 text-gold"
                      : "text-gray-300 hover:bg-white/5 hover:text-white"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href={`tel:${site.phoneInternational}`}
              className="mt-3 flex items-center justify-center gap-2 bg-gold px-5 py-3 text-sm font-bold uppercase tracking-wide text-charcoal"
            >
              <PhoneIcon className="h-4 w-4" />
              Call {site.phoneDisplay}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

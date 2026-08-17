"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks, site } from "@/lib/site";
import { CloseIcon, MenuIcon } from "@/components/ui/Icons";

/**
 * Sticky corporate navigation — dark navy with gold accents.
 */
export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-navy/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex shrink-0 items-center gap-3">
          <Image
            src="/images/vickyank-logo.png"
            alt={site.name}
            width={180}
            height={56}
            className="h-12 w-auto drop-shadow-[0_0_12px_rgba(212,175,55,0.35)]"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-5 xl:flex" aria-label="Main">
          {navLinks.map((link) => {
            const active =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`whitespace-nowrap text-xs font-medium uppercase tracking-wide transition-colors ${
                  active ? "text-gold" : "text-gray-300 hover:text-white"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3 xl:hidden">
          <button
            type="button"
            className="text-white"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="border-t border-white/[0.06] bg-navy/95 backdrop-blur-md xl:hidden"
          aria-label="Mobile"
        >
          <div className="space-y-1 px-4 py-4">
            {navLinks.map((link) => {
              const active =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
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
          </div>
        </nav>
      )}
    </header>
  );
}

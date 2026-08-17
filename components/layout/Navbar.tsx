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

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[60] border-b border-white/[0.06] bg-navy/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex min-w-0 shrink items-center gap-3">
          <Image
            src="/images/vickyank-logo.png"
            alt={site.name}
            width={220}
            height={68}
            className="h-14 w-auto drop-shadow-[0_0_12px_rgba(212,175,55,0.35)]"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main">
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

        <div className="flex items-center lg:hidden">
          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center text-white"
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
          className="max-h-[calc(100svh-5rem)] overflow-y-auto border-t border-white/[0.06] bg-navy/95 backdrop-blur-md lg:hidden"
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
                  className={`block min-h-11 px-3 py-3 text-base font-medium uppercase tracking-wide ${
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
      <div className="h-20" aria-hidden="true" />
    </>
  );
}

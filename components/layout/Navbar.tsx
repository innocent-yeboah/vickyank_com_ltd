"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks, site } from "@/lib/site";
import { CloseIcon, MenuIcon } from "@/components/ui/Icons";

/**
 * Fixed site navigation — quiet type, gold only on Enquire.
 */
export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const sitsOnHero =
    pathname === "/" ||
    pathname === "/newsletter" ||
    /^\/services\/(mining|gold-trading|equipment|spare-parts|luxury-cars|shop)$/.test(
      pathname
    );

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
      <header className="fixed inset-x-0 top-0 z-[60] bg-transparent">
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between gap-3 px-4 sm:h-24 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-2.5 sm:gap-3.5"
          aria-label={site.name}
        >
          <Image
            src="/images/vickyank-mark.png"
            alt=""
            width={865}
            height={475}
            className="h-10 w-auto shrink-0 brightness-125 contrast-110 sm:h-[4.06rem]"
            priority
          />
          <span className="min-w-0 leading-none">
            <span className="block font-lockup text-[1.35rem] font-bold tracking-[-0.02em] text-white sm:text-[1.85rem]">
              {site.shortName}
            </span>
            <span className="mt-1.5 block font-body text-[11px] font-medium uppercase tracking-[0.18em] text-white/65 sm:mt-1 sm:text-xs">
              Limited Company
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {navLinks
            .filter((link) => link.href !== "/contact")
            .map((link) => {
            const active =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`whitespace-nowrap text-sm transition-colors ${
                  active ? "text-white" : "text-white/60 hover:text-white"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="whitespace-nowrap text-sm text-gold transition-colors hover:text-gold-soft"
          >
            Enquire
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-white/30 text-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? (
            <CloseIcon className="h-5 w-5" />
          ) : (
            <MenuIcon className="h-5 w-5" />
          )}
        </button>
      </div>
    </header>

      {open ? (
        <nav
          id="mobile-menu"
          className="fixed inset-x-0 bottom-0 top-[4.5rem] z-[59] flex flex-col bg-navy sm:top-24 lg:hidden"
          aria-label="Mobile"
        >
          <div className="flex flex-1 flex-col justify-center overflow-y-auto px-6 py-8">
            <ul className="space-y-1">
              {navLinks
                .filter((link) => link.href !== "/contact")
                .map((link) => {
                const active =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`block py-3.5 font-heading text-[1.75rem] leading-tight transition-colors ${
                        active ? "text-gold" : "text-white hover:text-white/80"
                      }`}
                      aria-current={active ? "page" : undefined}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="border-t border-white/10 px-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-6">
            <Link href="/contact" className="btn-gold w-full">
              Enquire
            </Link>
            <div className="mt-5 flex flex-col items-center gap-2 text-sm text-white/50">
              <a
                href={`tel:${site.phoneInternational}`}
                className="transition-colors hover:text-white"
              >
                {site.phoneDisplay}
              </a>
              <a
                href={site.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold transition-colors hover:text-gold-soft"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </nav>
      ) : null}

      {sitsOnHero ? null : (
        <div className="h-[4.5rem] sm:h-24" aria-hidden="true" />
      )}
    </>
  );
}

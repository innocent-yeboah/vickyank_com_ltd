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
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(!isHome);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return;
    }

    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const frosted = !isHome || scrolled || open;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[60] transition-[background-color,border-color,backdrop-filter] duration-300 motion-reduce:transition-none ${
          frosted
            ? "border-b border-white/10 bg-navy/55 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-3 px-4 sm:h-24 sm:gap-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex min-w-0 shrink items-center gap-2 sm:gap-3.5"
          aria-label={site.name}
        >
          <Image
            src="/images/vickyank-mark.png"
            alt=""
            width={865}
            height={475}
            className="h-[2.25rem] w-auto shrink-0 brightness-125 contrast-110 sm:h-[4.06rem]"
            priority
          />
          <span className="min-w-0 leading-tight">
            <span className="block font-heading text-base text-white sm:text-2xl">
              {site.shortName}
            </span>
            <span className="mt-0.5 block text-[10px] tracking-[0.06em] text-white/55 sm:text-sm">
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

        <div className="flex items-center lg:hidden">
          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center text-white"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
    </header>

      {open ? (
        <nav
          id="mobile-menu"
          className="fixed inset-x-0 bottom-0 top-20 z-[59] flex flex-col bg-navy/80 backdrop-blur-2xl sm:top-24 lg:hidden"
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

      {!isHome ? <div className="h-20 sm:h-24" aria-hidden="true" /> : null}
    </>
  );
}

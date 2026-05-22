"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      const timer = setTimeout(() => {
        setIsMobileMenuOpen(false);
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [pathname, isMobileMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "py-4 shadow-sm bg-[#FAF6F0]/95 backdrop-blur-md border-b border-[rgba(201,164,92,0.1)]"
            : "py-6 md:py-8 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex items-center justify-between gap-10">

            {/* Logo */}
            <Link href="/" className="flex items-center group shrink-0 select-none">
              <div className="flex items-center gap-3">
                {/* Custom Elegant Monogram Q Emblem */}
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-10 h-10 flex items-center justify-center">
                    <svg
                      className="w-full h-full text-[#C9A45C] transition-transform duration-500 group-hover:scale-105"
                      viewBox="0 0 100 100"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Decorative outer circle segment */}
                      <circle cx="50" cy="50" r="38" stroke="#C9A45C" strokeWidth="1.5" strokeDasharray="6 3 2 3" opacity="0.6" />
                      {/* Stylish serif Q loop */}
                      <path
                        d="M 50 18 C 65 18 78 30 78 50 C 78 70 65 82 50 82 C 35 82 22 70 22 50 C 22 30 35 18 50 18 Z"
                        stroke="#7A1F3D"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      {/* Beautiful peacock plume crest on top of the Q */}
                      <path
                        d="M 50 18 C 50 8, 41 4, 38 6 C 41 12, 47 15, 50 18 Z"
                        fill="#C9A45C"
                      />
                      <path
                        d="M 50 18 C 53 7, 62 4, 65 6 C 62 12, 56 15, 50 18 Z"
                        fill="#C9A45C"
                      />
                      <path
                        d="M 50 18 C 50 11 50 3 50 2 C 48 2 48 11 50 18 Z"
                        stroke="#C9A45C"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      {/* Q diagonal flourish tail */}
                      <path
                        d="M 66 66 C 70 72 78 80 85 82 C 88 83 90 81 87 77 C 82 72 74 66 66 66 Z"
                        fill="#C9A45C"
                        stroke="#C9A45C"
                        strokeWidth="1"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col items-start -space-y-1">
                  <span className="font-cormorant text-xl tracking-[0.25em] uppercase font-bold text-[#7A1F3D] leading-none">
                    QUASAR
                  </span>
                  <span className="font-body text-[8px] tracking-[0.25em] uppercase font-bold text-[#C9A45C] pt-1 leading-none">
                    DESIGNER STUDIO
                  </span>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-4 lg:gap-6">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="relative px-4 py-2 group"
                  >
                    <span
                      className={`font-body text-[11px] lg:text-xs tracking-[0.25em] uppercase transition-colors duration-300 ${
                        isActive
                          ? "text-[#7A1F3D] font-bold"
                          : "text-[#7A1F3D]/80 hover:text-[#7A1F3D] font-medium"
                      }`}
                    >
                      {link.label}
                    </span>
                    {/* Elegant solid gold active underline */}
                    {isActive && (
                      <motion.span
                        layoutId="activeUnderline"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-[#C9A45C]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 font-body text-[10px] lg:text-[11px] tracking-[0.15em] uppercase font-bold bg-[#661632] text-white px-8 py-3.5 rounded-full shadow-md hover:bg-[#4E1025] hover:shadow-lg transition-colors duration-300 group"
              >
                <span>Book a Consultation</span>
                <svg
                  className="w-4 h-4 text-[#C9A45C] group-hover:translate-x-1 transition-transform"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden flex flex-col gap-[5px] p-2 -mr-1"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              id="mobile-menu-btn"
            >
              <motion.span
                animate={
                  isMobileMenuOpen
                    ? { rotate: 45, y: 7, scaleX: 1 }
                    : { rotate: 0, y: 0, scaleX: 1 }
                }
                className="block w-6 h-[1.5px] bg-maroon origin-center rounded-full"
              />
              <motion.span
                animate={
                  isMobileMenuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }
                }
                className="block w-4 h-[1.5px] bg-maroon ml-auto rounded-full"
              />
              <motion.span
                animate={
                  isMobileMenuOpen
                    ? { rotate: -45, y: -7, scaleX: 1 }
                    : { rotate: 0, y: 0, scaleX: 1 }
                }
                className="block w-6 h-[1.5px] bg-maroon origin-center rounded-full"
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="md:hidden overflow-hidden"
              style={{
                background: "rgba(253, 250, 245, 0.97)",
                backdropFilter: "blur(20px)",
                borderTop: "1px solid rgba(201,168,76,0.15)",
              }}
            >
              <div className="px-6 py-6 space-y-1">
                {navLinks.map((link, index) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.06, duration: 0.3 }}
                    >
                      <Link
                        href={link.href}
                        className={`block font-body text-sm tracking-[0.15em] uppercase py-3 px-2 transition-colors duration-300 border-b border-gold/5 last:border-0 font-semibold ${
                          isActive ? "text-maroon" : "text-maroon/60 hover:text-maroon"
                        }`}
                      >
                        {link.label}
                        {isActive && (
                          <span className="ml-3 inline-block w-1 h-1 rounded-full bg-gold align-middle" />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
                <motion.div
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.28, duration: 0.3 }}
                  className="pt-4"
                >
                  <Link
                    href="/contact"
                    className="block text-center font-body text-xs tracking-[0.2em] uppercase px-6 rounded font-semibold"
                    style={{
                      background: "linear-gradient(135deg, #6B1A30, #8B2848)",
                      color: "#FDFAF5",
                      paddingTop: "14px",
                      paddingBottom: "14px",
                      lineHeight: "1.2",
                    }}
                  >
                    Book a Consultation
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}

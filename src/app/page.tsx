"use client";

import Link from "next/link";
import { img } from "@/lib/basePath";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import {
  SVGArtDefs,
  EmbroideryPattern,
  FloatingEmbroideryWorkspace
} from "@/components/EmbroideryArt";
import {
  IconNeedleThread,
  IconFloralHoop,
  IconGoldBranch,
  IconThreadSpool
} from "@/components/SpecialtyIcons";

const TraditionalFlower = () => (
  <svg viewBox="0 0 100 100" className="w-8 h-8 md:w-10 md:h-10">
    <g transform="translate(50 50)">
      {/* 4 Maroon Petals */}
      <path d="M 0 -6 Q -6 -20 0 -38 Q 6 -20 0 -6 Z" fill="#801C35" />
      <path d="M 0 6 Q -6 20 0 38 Q 6 20 0 6 Z" fill="#801C35" />
      <path d="M -6 0 Q -20 -6 -38 0 Q -20 6 -6 0 Z" fill="#801C35" />
      <path d="M 6 0 Q 20 -6 38 0 Q 20 6 6 0 Z" fill="#801C35" />

      {/* 4 Gold Petals (rotated 45 deg) */}
      <g transform="rotate(45)">
        <path d="M 0 -5 Q -6 -18 0 -32 Q 6 -18 0 -5 Z" fill="#E8DECF" stroke="#C9A45C" strokeWidth="1.5" />
        <path d="M 0 5 Q -6 18 0 32 Q 6 18 0 5 Z" fill="#E8DECF" stroke="#C9A45C" strokeWidth="1.5" />
        <path d="M -5 0 Q -18 -6 -32 0 Q -18 6 -5 0 Z" fill="#E8DECF" stroke="#C9A45C" strokeWidth="1.5" />
        <path d="M 5 0 Q 18 -6 32 0 Q 18 6 5 0 Z" fill="#E8DECF" stroke="#C9A45C" strokeWidth="1.5" />
      </g>

      {/* Center Gold Dot */}
      <circle cx="0" cy="0" r="4.5" fill="#C9A45C" />
    </g>
  </svg>
);

const categories = [
  {
    title: "Bridal Aari Blouses",
    description: "Exquisite bridal blouses with highly intricate gold zari, pearls, and custom zardozi work.",
    icon: <IconNeedleThread />,
  },
  {
    title: "Designer Couture",
    description: "Bespoke handcrafted wear custom-tailored to your exact silhouette and style preferences.",
    icon: <IconFloralHoop />,
  },
  {
    title: "Traditional Heritage",
    description: "Celebrating traditional Kerala handloom & luxury fabrics blended with fine Indian motifs.",
    icon: <IconGoldBranch />,
  },
  {
    title: "Bespoke Commissions",
    description: "Collaborative design process to craft an heirloom-quality masterpiece for your special day.",
    icon: <IconThreadSpool />,
  },
];

const whyChooseUs = [
  {
    title: "Artisan Craftsmanship",
    description: "Every single stitch is hand-embroidered using ancestral Aari hook-needle techniques by master artisans.",
    icon: <IconNeedleThread />,
  },
  {
    title: "Luxury Materials",
    description: "We source high-grade silks, genuine metallic zari, Japanese seed beads, and custom stones.",
    icon: <IconThreadSpool />,
  },
  {
    title: "Reliable Timelines",
    description: "We respect your wedding schedule, planning each phase meticulously for absolute peace of mind.",
    icon: <IconFloralHoop />,
  },
  {
    title: "Direct Consultation",
    description: "Collaborate directly with our designer to draft customized patterns and luxury color palettes.",
    icon: <IconGoldBranch />,
  },
];


const testimonials = [
  {
    name: "Priya Krishnan",
    location: "Kochi, Kerala",
    text: "The bridal Aari work on my wedding blouse was absolutely breathtaking. Every stitch was perfect, and the attention to detail was unmatched. QUASAR truly made my special day even more beautiful.",
    rating: 5,
  },
  {
    name: "Meera Nair",
    location: "Trivandrum, Kerala",
    text: "I ordered custom embroidery for my designer blouse, and the result exceeded all my expectations. The craftsmanship is extraordinary, and the team was so patient and understanding.",
    rating: 5,
  },
  {
    name: "Lakshmi Menon",
    location: "Calicut, Kerala",
    text: "QUASAR's Aari embroidery is a class apart. The traditional motifs combined with modern aesthetics created exactly what I envisioned. Highly recommend for anyone seeking premium handcrafted bridal blouses.",
    rating: 5,
  },
  {
    name: "Anjali Sharma",
    location: "Bangalore, Karnataka",
    text: "Collaborating with QUASAR for my reception lehenga and bridal blouse was an absolute dream. The silk is incredibly luxurious and the custom gold zardosi embroidery is literally museum-worthy! I felt like royalty.",
    rating: 5,
  },
  {
    name: "Divya Pillai",
    location: "Ernakulam, Kerala",
    text: "The level of customization they offer is outstanding. They matched the embroidery thread precisely to my grandmother's vintage silk saree. Truly a premium experience with exceptional customer support!",
    rating: 5,
  },
];

export default function HomePage() {
  return (
    <>
      <SVGArtDefs />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-16 md:pt-40 md:pb-24 lg:pt-44 lg:pb-32 overflow-hidden bg-[#FAF6F0]">

        {/* Subtle Botanical Watermark on the left */}
        <div className="absolute bottom-10 left-0 w-64 md:w-[400px] pointer-events-none select-none opacity-20 z-0">
          <svg viewBox="0 0 200 400" fill="none" className="w-full h-auto text-[#C9A45C]" xmlns="http://www.w3.org/2000/svg">
            <path d="M 10 390 C 20 300, 30 200, 20 100 C 15 70, 10 50, 5 10" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
            <path d="M 20 310 Q 50 290, 60 270 Q 35 285, 20 310" stroke="currentColor" strokeWidth="0.6" fill="none" />
            <path d="M 20 310 L 45 285" stroke="currentColor" strokeWidth="0.4" />
            <path d="M 23 250 Q -10 220, -15 190 Q 5 210, 23 250" stroke="currentColor" strokeWidth="0.6" fill="none" />
            <path d="M 23 250 L 0 215" stroke="currentColor" strokeWidth="0.4" />
            <path d="M 24 190 Q 60 170, 65 140 Q 40 155, 24 190" stroke="currentColor" strokeWidth="0.6" fill="none" />
            <path d="M 24 190 L 48 162" stroke="currentColor" strokeWidth="0.4" />
          </svg>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 w-full z-10 relative">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-10 items-center">

            {/* Left Column: Text details */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 lg:space-y-8 order-2 lg:order-1 lg:pr-8">

              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#C9A45C]/40 bg-transparent"
              >
                <svg className="w-3.5 h-3.5 text-[#C9A45C]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L13.5 9L20.5 10.5L13.5 12L12 19L10.5 12L3.5 10.5L10.5 9L12 2Z" />
                </svg>
                <span className="font-body text-[#7A1F3D] text-[10px] md:text-[11px] tracking-[0.15em] uppercase font-bold pt-[2px]">
                  Traditional Kerala Textile Artistry
                </span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-cormorant text-[3.5rem] sm:text-6xl lg:text-[5.5rem] leading-[1.05] tracking-tight font-normal text-[#7A1F3D]"
              >
                Every Stitch a<br />
                Story,<br />
                Every Design a<br />
                <span className="text-[#C9A45C] block mt-1 font-medium">Masterpiece</span>
              </motion.h1>

              {/* Paragraph */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-body text-[#4A4A4A] text-[15px] md:text-[16px] leading-[1.7] max-w-[500px] mx-auto lg:mx-0 font-medium"
              >
                Welcome to <span className="font-bold text-[#7A1F3D]">QUASAR Designer Studio</span>. We craft elite handcrafted Aari embroidery and bridal blouses that merge Kerala&apos;s rich artistic legacy with royal boutique luxury.
              </motion.p>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-2"
              >
                <Link
                  href="/portfolio"
                  className="w-full sm:w-auto px-8 py-3.5 inline-flex items-center justify-center font-body text-[11px] tracking-[0.15em] uppercase bg-[#661632] text-white rounded-full hover:bg-[#4E1025] transition-colors duration-300 font-bold shadow-md gap-2.5 group"
                >
                  <svg className="w-3.5 h-3.5 text-[#C9A45C]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C12 2 13 8 15 10C17 12 22 12 22 12C22 12 17 12 15 14C13 16 12 22 12 22C12 22 11 16 9 14C7 12 2 12 2 12C2 12 7 12 9 10C11 8 12 2 12 2Z" />
                  </svg>
                  <span>View Masterpieces</span>
                </Link>
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-8 py-3.5 inline-flex items-center justify-center font-body text-[11px] tracking-[0.15em] uppercase border border-[#C9A45C]/60 text-[#7A1F3D] rounded-full hover:bg-[#C9A45C]/5 transition-colors duration-300 font-bold gap-2 group"
                >
                  <span>Book a Consultation</span>
                  <svg className="w-4 h-4 text-[#7A1F3D] group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>

              {/* Features Row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="w-full grid grid-cols-3 gap-6 pt-10"
              >
                {/* Feature 1 */}
                <div className="flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left gap-3 relative">
                  <div className="absolute right-[-12px] top-1/2 -translate-y-1/2 w-[1px] h-10 bg-[#C9A45C]/30 hidden lg:block" />
                  <svg className="w-7 h-7 text-[#C9A45C] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                    <path d="M12 4C12 4 9 9 9 14C9 18 12 20 12 20C12 20 15 18 15 14C15 9 12 4 12 4Z" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 8C10 10 6 12 6 16C6 19 9 20 9 20" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 8C14 10 18 12 18 16C18 19 15 20 15 20" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 13C8 14 4 16 4 18C4 20 7 20 7 20" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 13C16 14 20 16 20 18C20 20 17 20 17 20" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9 22H15" strokeLinecap="round" strokeWidth="1.5" />
                  </svg>
                  <div className="space-y-1 mt-1 lg:mt-0">
                    <h4 className="font-body font-bold text-[9px] md:text-[10px] tracking-[0.1em] uppercase text-[#7A1F3D]">Heritage Rooted</h4>
                    <p className="font-body text-[10px] text-[#7A1F3D]/70 leading-snug">Kerala&apos;s timeless<br className="hidden lg:block" />embroidery legacy</p>
                  </div>
                </div>
                {/* Feature 2 */}
                <div className="flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left gap-3 relative">
                  <div className="absolute right-[-12px] top-1/2 -translate-y-1/2 w-[1px] h-10 bg-[#C9A45C]/30 hidden lg:block" />
                  <svg className="w-7 h-7 text-[#C9A45C] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                    <path d="M20 4L7 17" strokeLinecap="round" strokeWidth="1.5" />
                    <ellipse cx="18.5" cy="5.5" rx="1.2" ry="1.2" transform="rotate(-45 18.5 5.5)" fill="currentColor" />
                    <path d="M19 5C22 2 21 8 18 10C15 12 11 11 8 14C5 17 4 20 5 21C6 22 9 21 11 18C13 15 14 11 17 9" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div className="space-y-1 mt-1 lg:mt-0">
                    <h4 className="font-body font-bold text-[9px] md:text-[10px] tracking-[0.1em] uppercase text-[#7A1F3D]">Handcrafted</h4>
                    <p className="font-body text-[10px] text-[#7A1F3D]/70 leading-snug">Exquisite Aari work<br className="hidden lg:block" />by master artisans</p>
                  </div>
                </div>
                {/* Feature 3 */}
                <div className="flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left gap-3">
                  <svg className="w-7 h-7 text-[#C9A45C] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                    <path d="M6 9 L12 3 L18 9 L12 21 Z" strokeLinejoin="round" />
                    <path d="M6 9 H18" />
                    <path d="M9.5 9 L12 3 L14.5 9 L12 21 Z" strokeLinejoin="round" />
                  </svg>
                  <div className="space-y-1 mt-1 lg:mt-0">
                    <h4 className="font-body font-bold text-[9px] md:text-[10px] tracking-[0.1em] uppercase text-[#7A1F3D]">Royal Luxury</h4>
                    <p className="font-body text-[10px] text-[#7A1F3D]/70 leading-snug">Premium fabrics &<br className="hidden lg:block" />bespoke designs</p>
                  </div>
                </div>
              </motion.div>

            </div>

            {/* Right Column: Visual Masterpiece Display */}
            <div className="w-full flex flex-col items-center lg:items-end justify-center order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative w-full max-w-[700px] aspect-[4/3] lg:aspect-[1.15/1] bg-white rounded-[32px] md:rounded-[48px] p-2 md:p-3 shadow-sm border border-[#EBE3D5]"
              >
                {/* The main masterpiece photo */}
                <div className="relative w-full h-full overflow-hidden rounded-[24px] md:rounded-[40px]">
                  <img
                    src={img("/blouse-magenta.jpg")}
                    alt="QUASAR Royal Magenta Aari Embroidery"
                    className="w-full h-full object-cover"
                  />

                  {/* Subtle overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none opacity-80" />

                  {/* Floating glassmorphic description card */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[92%] max-w-[500px] p-2.5 pl-6 pr-2.5 bg-white/95 backdrop-blur-md rounded-full flex justify-between items-center shadow-lg">
                    <div className="space-y-1 py-1">
                      <p className="font-body text-[#7A1F3D] text-[11px] md:text-[12px] font-bold tracking-[0.1em] uppercase">
                        ROYAL BRIDAL MAGENTA BLOUSE
                      </p>
                      <p className="font-body text-[#8C8C8C] text-[9px] md:text-[10px] uppercase tracking-[0.15em] font-medium">
                        PREMIUM HANDCRAFTED AARI WORK
                      </p>
                    </div>

                    {/* Circle arrow button */}
                    <Link
                      href="/portfolio"
                      className="w-12 h-12 bg-[#661632] hover:bg-[#4E1025] rounded-full flex items-center justify-center shadow-md transition-all duration-300 group shrink-0"
                    >
                      <svg
                        className="w-5 h-5 text-[#C9A45C]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.div>

              {/* Elegant Pagination Dots */}
              <div className="flex items-center justify-center gap-3 mt-8">
                <span className="w-2.5 h-2.5 rounded-full bg-[#661632] shadow-sm cursor-pointer" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#E8DECF] hover:bg-[#C9A45C] transition-colors cursor-pointer" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#E8DECF] hover:bg-[#C9A45C] transition-colors cursor-pointer" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Brand Introduction (The Heritage) */}
      <section className="py-24 md:py-32 bg-[#FAF6F0] relative overflow-hidden">
        {/* Subtle Background Textures */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 25% 25%, #7A1F3D 1px, transparent 1px), radial-gradient(circle at 75% 75%, #C9A45C 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[4fr_5fr] gap-16 lg:gap-20 items-center">

            {/* Left Column: Arched Image Frame */}
            <div className="flex justify-center w-full relative">
              {/* Arch Container */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative w-full max-w-[420px] aspect-[3/4.6] rounded-t-[220px] rounded-b-[32px] p-2 border border-[#C9A45C]/40 bg-transparent shadow-sm"
              >
                {/* Top Floral Ornament */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-[#C9A45C] bg-[#FAF6F0] px-3">
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L13.5 9L20.5 10.5L13.5 12L12 19L10.5 12L3.5 10.5L10.5 9L12 2Z" />
                  </svg>
                </div>

                {/* Inner Image Mask */}
                <div className="relative w-full h-full rounded-t-[210px] rounded-b-[24px] overflow-hidden bg-[#FAF6F0]">
                  <img
                    src={img("/blouse-gold.jpg")}
                    alt="Intricate Gold Bridal Blouse"
                    className="w-full h-[78%] object-cover"
                  />

                  {/* Bottom Maroon Block */}
                  <div className="absolute bottom-0 left-0 right-0 h-[22%] bg-[#661632] flex flex-col items-center justify-center p-6 text-center shadow-inner">
                    <svg className="w-7 h-7 text-[#C9A45C] mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                      <path d="M12 4C12 4 9 9 9 14C9 18 12 20 12 20C12 20 15 18 15 14C15 9 12 4 12 4Z" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M12 8C10 10 6 12 6 16C6 19 9 20 9 20" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M12 8C14 10 18 12 18 16C18 19 15 20 15 20" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M9 22H15" strokeLinecap="round" strokeWidth="1.5" />
                    </svg>
                    <h4 className="font-body text-[#C9A45C] text-[10px] md:text-xs tracking-[0.2em] font-bold uppercase mb-1">
                      Rooted in Kerala
                    </h4>
                    <p className="font-body text-[#E8DECF] text-[9px] font-medium opacity-90">
                      Inspired by Tradition. Crafted for Generations.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Content */}
            <div className="flex flex-col space-y-8 lg:pr-8">

              {/* Header section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-4 text-center lg:text-left"
              >
                {/* Badge */}
                <div className="flex items-center justify-center lg:justify-start gap-4">
                  <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-[#C9A45C]" />
                  <div className="flex items-center gap-2">
                    <span className="text-[#C9A45C] text-xs">✥</span>
                    <span className="font-body text-[#C9A45C] tracking-[0.25em] uppercase text-[10px] md:text-[11px] font-bold pt-[1px]">
                      The Heritage
                    </span>
                    <span className="text-[#C9A45C] text-xs">✥</span>
                  </div>
                  <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-[#C9A45C]" />
                </div>

                {/* Heading */}
                <h2 className="font-cormorant text-[2.75rem] md:text-5xl lg:text-[4.2rem] text-[#661632] leading-[1.05] font-normal tracking-tight">
                  Authentic Craftsmanship,<br />
                  <span className="text-[#C9A45C] italic pr-2">Uncompromising Luxury</span>
                </h2>

                {/* Small Divider */}
                <div className="flex justify-center lg:justify-start pt-2">
                  <div className="flex items-center gap-2">
                    <div className="h-[1px] w-12 bg-[#C9A45C]/40" />
                    <span className="text-[#C9A45C] text-[8px]">✥</span>
                    <div className="h-[1px] w-12 bg-[#C9A45C]/40" />
                  </div>
                </div>
              </motion.div>

              {/* Text Paragraphs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-body text-[#5A5A5A] space-y-4 text-[14px] md:text-[15px] leading-[1.7] font-medium max-w-[600px] mx-auto lg:mx-0 text-center lg:text-left"
              >
                <p>
                  At <span className="font-bold text-[#661632]">QUASAR Designer Studio</span>, bridal embroidery is treated as a sacred tradition.
                </p>
                <p>
                  Guided by classical Indian motifs and Kerala&apos;s rich textile heritage, we stitch timeless art using luxury threads, gold cords, and precious pearls.
                </p>
                <p>
                  Every blouse takes anywhere from 40 to over 200 hours of painstaking manual labor. Under precise direction, master artisans place each bead, sequin, and thread with mathematical consistency to elevate your bridal couture into a heritage heirloom.
                </p>
              </motion.div>

              {/* Icons Grid Row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 pt-6 border-t border-[#C9A45C]/20"
              >
                {/* Icon 1 */}
                <div className="flex flex-col items-center text-center space-y-2.5 md:border-r border-[#C9A45C]/20 px-3">
                  <svg className="w-8 h-8 text-[#C9A45C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                    <path d="M12 4C12 4 9 9 9 14C9 18 12 20 12 20C12 20 15 18 15 14C15 9 12 4 12 4Z" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 8C10 10 6 12 6 16C6 19 9 20 9 20" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 8C14 10 18 12 18 16C18 19 15 20 15 20" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9 22H15" strokeLinecap="round" strokeWidth="1.5" />
                  </svg>
                  <div className="space-y-1">
                    <h5 className="font-cormorant text-[16px] font-bold text-[#661632] tracking-wide">Kerala Heritage</h5>
                    <p className="font-body text-[10px] text-[#7A7A7A] leading-snug">Inspired by timeless<br />traditions.</p>
                  </div>
                </div>

                {/* Icon 2 */}
                <div className="flex flex-col items-center text-center space-y-2.5 md:border-r border-[#C9A45C]/20 px-3">
                  <svg className="w-8 h-8 text-[#C9A45C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                    <path d="M20 4L7 17" strokeLinecap="round" strokeWidth="1.5" />
                    <ellipse cx="18.5" cy="5.5" rx="1.2" ry="1.2" transform="rotate(-45 18.5 5.5)" fill="currentColor" />
                    <path d="M19 5C22 2 21 8 18 10C15 12 11 11 8 14C5 17 4 20 5 21C6 22 9 21 11 18C13 15 14 11 17 9" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div className="space-y-1">
                    <h5 className="font-cormorant text-[16px] font-bold text-[#661632] tracking-wide">Master Artisans</h5>
                    <p className="font-body text-[10px] text-[#7A7A7A] leading-snug">Handcrafted by<br />skilled experts.</p>
                  </div>
                </div>

                {/* Icon 3 */}
                <div className="flex flex-col items-center text-center space-y-2.5 md:border-r border-[#C9A45C]/20 px-3">
                  <svg className="w-8 h-8 text-[#C9A45C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                    <path d="M6 6H18V18H6V6Z" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 6V4H16V6" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 18V20H16V18" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6 9H18M6 12H18M6 15H18" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div className="space-y-1">
                    <h5 className="font-cormorant text-[16px] font-bold text-[#661632] tracking-wide">Luxury Materials</h5>
                    <p className="font-body text-[10px] text-[#7A7A7A] leading-snug">Gold, pearls & premium<br />quality threads.</p>
                  </div>
                </div>

                {/* Icon 4 */}
                <div className="flex flex-col items-center text-center space-y-2.5 px-3">
                  <svg className="w-8 h-8 text-[#C9A45C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                    <circle cx="12" cy="12" r="9" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 7V12L15 15" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div className="space-y-1">
                    <h5 className="font-cormorant text-[16px] font-bold text-[#661632] tracking-wide">Timeless Heirloom</h5>
                    <p className="font-body text-[10px] text-[#7A7A7A] leading-snug">Made to be cherished<br />for generations.</p>
                  </div>
                </div>
              </motion.div>

              {/* Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="pt-4 flex justify-center lg:justify-end w-full"
              >
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center gap-2.5 font-body text-[10px] md:text-[11px] tracking-[0.15em] uppercase bg-[#661632] text-white px-8 py-3.5 rounded-full shadow-md hover:bg-[#4E1025] hover:shadow-lg transition-colors duration-300 font-bold group"
                >
                  <svg className="w-3.5 h-3.5 text-[#C9A45C]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C12 2 13 8 15 10C17 12 22 12 22 12C22 12 17 12 15 14C13 16 12 22 12 22C12 22 11 16 9 14C7 12 2 12 2 12C2 12 7 12 9 10C11 8 12 2 12 2Z" />
                  </svg>
                  <span>Our Founder & Artisan Journey</span>
                  <svg className="w-4 h-4 text-[#C9A45C] group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* Featured Specialties */}
      <section className="py-24 md:py-32 bg-[#FAF6F0] relative overflow-hidden">
        {/* Subtle Side Botanicals (mimicking the reference image background) */}
        <div className="absolute top-20 left-0 w-32 h-[800px] pointer-events-none opacity-[0.4]" style={{ backgroundImage: 'radial-gradient(circle at 10% 50%, #C9A45C 1px, transparent 1px)', backgroundSize: '12px 12px' }} />
        <div className="absolute top-20 right-0 w-32 h-[800px] pointer-events-none opacity-[0.4]" style={{ backgroundImage: 'radial-gradient(circle at 90% 50%, #C9A45C 1px, transparent 1px)', backgroundSize: '12px 12px' }} />

        <div className="max-w-[1300px] mx-auto px-6 sm:px-10 lg:px-16 w-full relative z-10 text-center mb-16">
          <AnimatedSection className="w-full flex flex-col items-center">

            {/* Header: WHAT WE CRAFT */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-[1px] w-24 md:w-32 bg-gradient-to-r from-transparent to-[#C9A45C]" />
              <span className="text-[#C9A45C] text-[10px]">✥</span>
              <span className="font-body text-[#C9A45C] tracking-[0.3em] text-[11px] md:text-xs font-bold uppercase px-1">
                WHAT WE CRAFT
              </span>
              <span className="text-[#C9A45C] text-[10px]">✥</span>
              <div className="h-[1px] w-24 md:w-32 bg-gradient-to-l from-transparent to-[#C9A45C]" />
            </div>

            {/* Main Title */}
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-[#661632] leading-tight font-medium tracking-tight mb-4">
              Our Studio <span className="font-cormorant italic font-normal text-[#C9A45C]">Specialties</span>
            </h2>

            {/* Lotus Flourish Divider */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-[#C9A45C]/40" />
              <svg className="w-6 h-6 text-[#C9A45C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M12 4C12 4 9 9 9 14C9 18 12 20 12 20C12 20 15 18 15 14C15 9 12 4 12 4Z" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 8C10 10 6 12 6 16C6 19 9 20 9 20" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 8C14 10 18 12 18 16C18 19 15 20 15 20" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div className="h-[1px] w-12 bg-[#C9A45C]/40" />
            </div>

            {/* Intro Text */}
            <p className="font-body text-[#5A5A5A] text-[14px] md:text-[15px] max-w-2xl mx-auto leading-[1.8] font-medium">
              Timeless traditions. Intricate hands. Uncompromising luxury.<br />
              Every creation is a piece of Kerala&apos;s rich heritage.
            </p>
          </AnimatedSection>
        </div>

        {/* Four Cards Grid */}
        <div className="max-w-[1300px] mx-auto px-6 sm:px-10 lg:px-16 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {categories.map((category, index) => (
              <AnimatedSection key={category.title} delay={index * 0.1} className="h-full">
                <motion.div
                  whileHover={{ y: -8 }}
                  className="bg-[#FCFAF6] rounded-3xl p-8 text-center transition-all duration-300 group cursor-pointer h-full flex flex-col items-center relative overflow-hidden border border-[#E8DECF]/60 shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
                >
                  {/* Decorative faint dashed border around the card */}
                  <div className="absolute inset-2 border border-[#C9A45C]/15 rounded-2xl pointer-events-none opacity-50" />

                  {/* Circular Icon Placeholder */}
                  <div className="w-[110px] h-[100px] mb-6 flex items-center justify-center">
                    {category.icon}
                  </div>

                  {/* Title */}
                  <h3 className="font-cormorant text-xl lg:text-2xl text-[#661632] font-bold mb-4 tracking-wide leading-tight mt-2">
                    {category.title}
                  </h3>

                  {/* Star Divider */}
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <div className="h-[1px] w-4 bg-[#C9A45C]/40" />
                    <span className="text-[#C9A45C] text-[8px]">✥</span>
                    <div className="h-[1px] w-4 bg-[#C9A45C]/40" />
                  </div>

                  {/* Description */}
                  <p className="font-body text-[12px] md:text-[13px] text-[#7A7A7A] leading-relaxed max-w-[220px] mx-auto mb-8 flex-1">
                    {category.description}
                  </p>

                  {/* Card Bottom: Cross-stitch pattern only */}
                  <div className="w-full mt-auto pt-6">
                    {/* Bottom Cross-stitch pattern exactly as in reference image */}
                    <div className="w-full text-center text-[#C9A45C]/40 text-[9px] tracking-[3px] overflow-hidden whitespace-nowrap opacity-60">
                      x x x x x x x <span className="text-[#C9A45C] font-bold text-[10px]">✥</span> x x x x x x x
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section
        className="relative pt-20 pb-36 md:pt-28 md:pb-48 overflow-hidden"
        style={{ backgroundImage: `url(${img('/bg4.png')})`, backgroundSize: 'cover', backgroundPosition: 'center bottom', backgroundRepeat: 'no-repeat' }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Left Column: Heading */}
            <div className="lg:col-span-5 space-y-8 text-left relative z-10 pb-12 lg:pb-0 lg:-translate-x-6 lg:-translate-y-12 transition-transform duration-500">
              <AnimatedSection>
                <div className="space-y-6">
                  <div className="space-y-1">
                    <div className="flex items-center gap-4">
                      <span className="font-body text-[#C9A45C] tracking-[5px] uppercase text-[10px] font-bold">
                        WHY QUASAR
                      </span>
                      <div className="h-[1px] bg-[#C9A45C]/40 w-16" />
                    </div>
                    <div className="flex justify-start w-32">
                      <span className="text-[#C9A45C] text-[10px] mx-auto">✥</span>
                    </div>
                  </div>
                  <h2 className="font-heading text-4xl md:text-5xl lg:text-[54px] text-[#661632] leading-[1.15] font-light">
                    Where<br />
                    Handcrafted<br />
                    <span className="font-cormorant italic font-normal text-[#C9A45C]">Tradition</span> Meets<br />
                    Perfect Luxury
                  </h2>
                  <div className="flex items-center gap-3 pt-4">
                    <div className="h-[1px] bg-[#C9A45C]/60 w-12" />
                    <span className="text-[#C9A45C] text-[10px]">✥</span>
                    <div className="h-[1px] bg-[#C9A45C]/60 w-12" />
                  </div>
                  <p className="font-body text-[#5A5A5A] leading-[1.8] text-[13px] md:text-[14px] font-medium pt-2">
                    Every stitch is handcrafted with traditional Aari embroidery techniques, merging ancestral craftsmanship with contemporary Indian haute couture for the modern bride.
                  </p>
                </div>
              </AnimatedSection>
            </div>

            {/* Right Column: Feature Cards Grid */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 lg:pl-10">
                {whyChooseUs.map((item, index) => (
                  <AnimatedSection key={item.title} delay={index * 0.1} className="h-full">
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="group bg-[#FCFBF8]/95 backdrop-blur-sm rounded-xl p-6 md:p-8 text-center shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(102,22,50,0.06)] transition-all duration-500 h-full flex flex-col items-center relative border border-[#C9A45C]/10"
                    >
                      {/* Laurel SVG Icon Container */}
                      <div className="w-[80px] h-[80px] md:w-[90px] md:h-[90px] mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-500 flex-shrink-0 relative">
                        <div className="w-full h-full text-[#7A1F3D]">
                          {item.icon}
                        </div>
                      </div>

                      {/* Card Content */}
                      <div className="relative z-10 flex flex-col items-center flex-grow w-full">
                        <h3 className="font-cormorant text-[20px] md:text-[22px] text-[#661632] font-semibold tracking-wide leading-snug max-w-[180px] mx-auto">
                          {item.title}
                        </h3>

                        {/* Star Divider matching screenshot */}
                        <div className="mt-3 mb-4">
                          <span className="text-[#C9A45C] text-[10px]">✥</span>
                        </div>

                        <p className="font-body text-[13px] md:text-[14px] text-[#5A5A5A] leading-[1.8] font-medium">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  </AnimatedSection>
                ))}
              </div>
            </div>

          </div>

          {/* Simple Inline Footer */}

        </div>
      </section>

      {/* Gallery Section */}
      <section
        className="py-8 md:py-10 lg:py-12 relative overflow-hidden bg-[#7a1f3b]"
        style={{ backgroundImage: `url(${img('/bg7.png')})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative">

          <AnimatedSection>
            <div className="text-center mb-6 md:mb-8 space-y-3">
              <p className="font-body text-[#C9A45C] tracking-[0.3em] uppercase text-xs font-semibold">
                OUR HIGHLIGHTS
              </p>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-[54px] text-white leading-tight font-light">
                Featured <span className="font-cormorant italic font-normal text-[#C9A45C]">Gallery</span>
              </h2>
              {/* Star Ornament divider matching mockup */}
              <div className="flex items-center justify-center gap-3 pt-1">
                <div className="h-[1px] bg-[#C9A45C]/60 w-12" />
                <span className="text-[#C9A45C] text-[10px]">✥</span>
                <div className="h-[1px] bg-[#C9A45C]/60 w-12" />
              </div>
            </div>
          </AnimatedSection>

          {/* Grid Gallery */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
            {/* Left Column (2/3 width on desktop) */}
            <div className="lg:col-span-2 flex flex-col gap-4 md:gap-6">
              {/* Top: Royal Magenta Masterpiece */}
              <AnimatedSection delay={0.08}>
                <Link
                  href="/portfolio"
                  className="group block relative w-full aspect-[2.1/1] sm:aspect-[2.4/1] lg:aspect-[2.5/1] rounded-[24px] overflow-hidden border border-[#C9A45C]/15 shadow-md bg-transparent"
                >
                  <img
                    src={img("/blouse-magenta.jpg")}
                    alt="Royal Magenta Masterpiece"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A0A0E]/85 via-[#1A0A0E]/15 to-transparent pointer-events-none transition-opacity duration-300" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex justify-between items-end gap-4">
                    <div className="space-y-1.5 text-left">
                      <p className="font-body text-[#C9A45C] text-[10px] md:text-xs uppercase tracking-[0.2em] font-semibold">
                        BLOUSE & BLOOM
                      </p>
                      <h3 className="font-heading text-white text-lg md:text-2xl font-medium leading-tight">
                        Royal Magenta Masterpiece
                      </h3>
                    </div>
                    <span className="w-10 h-10 rounded-full border border-[#C9A45C]/40 flex items-center justify-center text-[#C9A45C] group-hover:bg-[#C9A45C]/15 group-hover:border-[#C9A45C] transition-all duration-300 shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </AnimatedSection>

              {/* Bottom: Zardosi Red & Zari Floral Hoop */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {/* Zardosi Red Bridal Sleeve */}
                <AnimatedSection delay={0.16}>
                  <Link
                    href="/portfolio"
                    className="group block relative w-full aspect-[1.45/1] sm:aspect-[1.35/1] lg:aspect-[1.55/1] rounded-[24px] overflow-hidden border border-[#C9A45C]/15 shadow-md bg-transparent"
                  >
                    <img
                      src={img("/blouse-red-bridal.png")}
                      alt="Zardosi Red Bridal Sleeve"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A0A0E]/85 via-[#1A0A0E]/15 to-transparent pointer-events-none transition-opacity duration-300" />

                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex justify-between items-end gap-4">
                      <div className="space-y-1.5 text-left">
                        <p className="font-body text-[#C9A45C] text-[10px] md:text-xs uppercase tracking-[0.2em] font-semibold">
                          BRIDAL ELEGANCE
                        </p>
                        <h3 className="font-heading text-white text-base md:text-lg lg:text-xl font-medium leading-tight">
                          Zardosi Red Bridal Sleeve
                        </h3>
                      </div>
                      <span className="w-10 h-10 rounded-full border border-[#C9A45C]/40 flex items-center justify-center text-[#C9A45C] group-hover:bg-[#C9A45C]/15 group-hover:border-[#C9A45C] transition-all duration-300 shrink-0">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                </AnimatedSection>

                {/* Zari Floral Hoop Work */}
                <AnimatedSection delay={0.24}>
                  <Link
                    href="/portfolio"
                    className="group block relative w-full aspect-[1.45/1] sm:aspect-[1.35/1] lg:aspect-[1.55/1] rounded-[24px] overflow-hidden border border-[#C9A45C]/15 shadow-md bg-transparent"
                  >
                    <img
                      src={img("/embroidery-hoop.png")}
                      alt="Zari Floral Hoop Work"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A0A0E]/85 via-[#1A0A0E]/15 to-transparent pointer-events-none transition-opacity duration-300" />

                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex justify-between items-end gap-4">
                      <div className="space-y-1.5 text-left">
                        <p className="font-body text-[#C9A45C] text-[10px] md:text-xs uppercase tracking-[0.2em] font-semibold">
                          HAND EMBROIDERY
                        </p>
                        <h3 className="font-heading text-white text-base md:text-lg lg:text-xl font-medium leading-tight">
                          Zari Floral Hoop Work
                        </h3>
                      </div>
                      <span className="w-10 h-10 rounded-full border border-[#C9A45C]/40 flex items-center justify-center text-[#C9A45C] group-hover:bg-[#C9A45C]/15 group-hover:border-[#C9A45C] transition-all duration-300 shrink-0">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                </AnimatedSection>
              </div>
            </div>

            {/* Right Column (1/3 width on desktop) */}
            <div className="lg:col-span-1 flex flex-col gap-4 md:gap-6 h-full">
              {/* Top: Vintage Gold Heritage Silk */}
              <AnimatedSection delay={0.12} className="w-full">
                <Link
                  href="/portfolio"
                  className="group block relative w-full aspect-[1.85/1] sm:aspect-[1.65/1] lg:aspect-[1.65/1] rounded-[24px] overflow-hidden border border-[#C9A45C]/15 shadow-md bg-transparent"
                >
                  <img
                    src={img("/blouse-gold.jpg")}
                    alt="Vintage Gold Heritage Silk"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A0A0E]/85 via-[#1A0A0E]/15 to-transparent pointer-events-none transition-opacity duration-300" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex justify-between items-end gap-4">
                    <div className="space-y-1.5 text-left">
                      <p className="font-body text-[#C9A45C] text-[10px] md:text-xs uppercase tracking-[0.2em] font-semibold">
                        HERITAGE WEAVES
                      </p>
                      <h3 className="font-heading text-white text-base md:text-lg lg:text-xl font-medium leading-tight">
                        Vintage Gold Heritage Silk
                      </h3>
                    </div>
                    <span className="w-10 h-10 rounded-full border border-[#C9A45C]/40 flex items-center justify-center text-[#C9A45C] group-hover:bg-[#C9A45C]/15 group-hover:border-[#C9A45C] transition-all duration-300 shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </AnimatedSection>

              {/* Bottom: Neckline Pearl Detail Work (Tall aspect) */}
              <AnimatedSection delay={0.2} className="w-full flex-grow flex">
                <Link
                  href="/portfolio"
                  className="group block relative w-full aspect-[1.45/1] sm:aspect-[1.35/1] lg:aspect-[0.92/1] lg:flex-grow rounded-[24px] overflow-hidden border border-[#C9A45C]/15 shadow-md bg-transparent"
                >
                  <img
                    src={img("/blouse-emerald-detail.png")}
                    alt="Neckline Pearl Detail Work"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A0A0E]/85 via-[#1A0A0E]/15 to-transparent pointer-events-none transition-opacity duration-300" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex justify-between items-end gap-4">
                    <div className="space-y-1.5 text-left">
                      <p className="font-body text-[#C9A45C] text-[10px] md:text-xs uppercase tracking-[0.2em] font-semibold">
                        CRAFTED DETAILS
                      </p>
                      <h3 className="font-heading text-white text-base md:text-lg lg:text-xl font-medium leading-tight">
                        Neckline Pearl Detail Work
                      </h3>
                    </div>
                    <span className="w-10 h-10 rounded-full border border-[#C9A45C]/40 flex items-center justify-center text-[#C9A45C] group-hover:bg-[#C9A45C]/15 group-hover:border-[#C9A45C] transition-all duration-300 shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            </div>
          </div>

          <AnimatedSection delay={0.32}>
            <div className="text-center mt-6 md:mt-8">
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-3.5 font-body text-xs tracking-[0.2em] uppercase px-10 py-5 border border-[#C9A45C] text-[#C9A45C] hover:bg-[#C9A45C] hover:text-[#661632] rounded-full transition-all duration-500 font-bold group select-none shadow-[0_4px_15px_rgba(201,164,92,0.1)] active:scale-[0.98]"
              >
                <span className="text-[#C9A45C] text-sm leading-none">✥</span>
                <span>View Full Luxury Portfolio</span>
                <svg className="w-4 h-4 text-[#C9A45C] group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>


      {/* Testimonials */}
      <section className="py-28 md:py-36 lg:py-44 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

          <AnimatedSection>
            <div className="text-center mb-20 space-y-4">
              <p className="font-body text-gold tracking-[0.3em] uppercase text-xs font-semibold">
                Love Stories
              </p>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-maroon font-light">
                Client <span className="italic font-normal">Testimonials</span>
              </h2>
              <div className="gold-line mx-auto max-w-24" />
            </div>
          </AnimatedSection>

          <div className="relative w-full overflow-hidden py-4">

            <div className="flex animate-marquee gap-8 w-max">
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div
                  key={`${testimonial.name}-${index}`}
                  className="w-[320px] sm:w-[380px] md:w-[420px] h-[280px] sm:h-[300px] flex-shrink-0"
                >
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="bg-[#FAF6F0] rounded-2xl p-8 md:p-10 border border-gold/15 relative shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col justify-between before:absolute before:inset-2 before:border before:border-gold/5 before:rounded-xl before:pointer-events-none"
                  >
                    <div>
                      <div className="absolute top-6 right-8 font-heading text-6xl text-gold/10 leading-none">
                        &ldquo;
                      </div>
                      <div className="flex gap-1 mb-5">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <svg key={i} className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                        ))}
                      </div>
                      <p className="font-body text-xs sm:text-sm text-gray-500 leading-relaxed italic mb-5 font-light line-clamp-4">
                        &ldquo;{testimonial.text}&rdquo;
                      </p>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-maroon text-ivory flex items-center justify-center font-heading text-base font-bold border border-gold/20 shadow-sm">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-heading text-maroon text-xs sm:text-sm font-bold">{testimonial.name}</p>
                        <p className="font-body text-gray-400 text-[9px] sm:text-[10px] uppercase tracking-wider font-semibold">{testimonial.location}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-28 md:py-36 lg:py-44 bg-[#F5EDE0] relative overflow-hidden">
        <div className="absolute inset-0 embroidery-pattern pointer-events-none opacity-[0.06]" />
        <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 relative">
          <AnimatedSection>
            <div className="border border-gold/15 bg-white p-12 md:p-20 rounded-3xl text-center shadow-xl space-y-10 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-gold/30 rounded-tl-3xl" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-gold/30 rounded-tr-3xl" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-gold/30 rounded-bl-3xl" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-gold/30 rounded-br-3xl" />

              <div className="space-y-4">
                <p className="font-body text-gold tracking-[0.3em] uppercase text-xs font-semibold">
                  Let&apos;s Co-Create
                </p>
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-maroon leading-tight font-light">
                  Design Your Dream <span className="italic font-normal">Wedding Blouse</span>
                </h2>
              </div>
              <p className="font-body text-sm md:text-base text-gray-500 max-w-2xl mx-auto leading-relaxed font-light">
                Whether you have a specific pattern, colors matching your family saree, or want to sketch a brand new custom concept, we&apos;re here to craft it.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-6">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center font-body text-xs tracking-[0.2em] uppercase px-10 py-5 bg-maroon text-ivory rounded-2xl hover:bg-maroon-light transition-all duration-500 ease-out font-bold shadow-lg shadow-maroon/15 hover:shadow-xl hover:shadow-maroon-light/25 hover:-translate-y-0.5 active:scale-[0.98] select-none text-center"
                >
                  Start Your Journey
                </Link>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center font-body text-xs tracking-[0.2em] uppercase px-10 py-5 border border-maroon text-maroon rounded-2xl bg-white/40 backdrop-blur-sm hover:bg-maroon hover:text-white transition-all duration-500 ease-out font-bold shadow-sm shadow-maroon/5 hover:shadow-xl hover:shadow-maroon/20 hover:-translate-y-0.5 active:scale-[0.98] select-none text-center"
                >
                  WhatsApp Consultation
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

"use client";

import React from "react";
import { motion } from "framer-motion";

/**
 * Shared SVG Gradients and Patterns definition block
 */
export function SVGArtDefs() {
  return (
    <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
      <defs>
        {/* Luxury 3D Specular & Embossing Filters */}
        <filter id="embossedGold" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.6" result="blur" />
          <feSpecularLighting in="blur" surfaceScale="1.6" specularConstant="1.4" specularExponent="16" lightingColor="#FFEFA6" result="spec">
            <feDistantLight azimuth="135" elevation="55" />
          </feSpecularLighting>
          <feComposite in="spec" in2="SourceAlpha" operator="in" result="specOut" />
          <feComposite in="SourceGraphic" in2="specOut" operator="arithmetic" k1="0" k2="1" k3="0.8" k4="0" result="lit" />
          <feDropShadow dx="0.6" dy="1.2" stdDeviation="0.8" floodColor="#3A1D0B" floodOpacity="0.3" />
        </filter>

        <filter id="embossedMaroon" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.5" result="blur" />
          <feSpecularLighting in="blur" surfaceScale="1.2" specularConstant="1.2" specularExponent="12" lightingColor="#FF9999" result="spec">
            <feDistantLight azimuth="135" elevation="50" />
          </feSpecularLighting>
          <feComposite in="spec" in2="SourceAlpha" operator="in" result="specOut" />
          <feComposite in="SourceGraphic" in2="specOut" operator="arithmetic" k1="0" k2="1" k3="0.6" k4="0" result="lit" />
          <feDropShadow dx="0.5" dy="1" stdDeviation="0.6" floodColor="#1A0005" floodOpacity="0.35" />
        </filter>

        <filter id="canvasShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="5" stdDeviation="6" floodColor="#4D2A12" floodOpacity="0.10" />
          <feDropShadow dx="0" dy="1" stdDeviation="2" floodColor="#000" floodOpacity="0.06" />
        </filter>

        {/* Luxury Gold Metallic Gradients */}
        <linearGradient id="luxuryGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#9E782F" />
          <stop offset="30%" stopColor="#C9A45C" />
          <stop offset="50%" stopColor="#F7E2B0" />
          <stop offset="70%" stopColor="#C9A45C" />
          <stop offset="100%" stopColor="#9E782F" />
        </linearGradient>

        <linearGradient id="brightGoldGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#B89047" />
          <stop offset="50%" stopColor="#E5C78A" />
          <stop offset="100%" stopColor="#C9A45C" />
        </linearGradient>

        {/* Polished Warm Wooden Hoop Gradients */}
        <linearGradient id="hoopWoodGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6E401F" />
          <stop offset="25%" stopColor="#8F5831" />
          <stop offset="50%" stopColor="#B37D52" />
          <stop offset="75%" stopColor="#8F5831" />
          <stop offset="100%" stopColor="#6E401F" />
        </linearGradient>

        {/* Rich Burgundy/Crimson Thread Gradients */}
        <linearGradient id="maroonThreadGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#5A1227" />
          <stop offset="40%" stopColor="#7A1F3D" />
          <stop offset="70%" stopColor="#9B3152" />
          <stop offset="100%" stopColor="#5A1227" />
        </linearGradient>

        {/* Linen/Fabric Pattern Texture to overlay inside the hoop */}
        <pattern id="linenTexture" width="6" height="6" patternUnits="userSpaceOnUse">
          <path d="M 0 3 L 6 3 M 3 0 L 3 6" stroke="#EAE1D2" strokeWidth="0.75" fill="none" opacity="0.4" />
        </pattern>

        {/* Repeating background embroidery grid */}
        <pattern id="luxEmbGrid" width="120" height="120" patternUnits="userSpaceOnUse">
          {/* Subtle dotted background grid */}
          <circle cx="20" cy="20" r="1" fill="#C9A45C" opacity="0.15" />
          <circle cx="60" cy="20" r="1" fill="#C9A45C" opacity="0.15" />
          <circle cx="100" cy="20" r="1" fill="#C9A45C" opacity="0.15" />
          <circle cx="20" cy="60" r="1" fill="#C9A45C" opacity="0.15" />
          <circle cx="100" cy="60" r="1" fill="#C9A45C" opacity="0.15" />
          <circle cx="20" cy="100" r="1" fill="#C9A45C" opacity="0.15" />
          <circle cx="60" cy="100" r="1" fill="#C9A45C" opacity="0.15" />
          <circle cx="100" cy="100" r="1" fill="#C9A45C" opacity="0.15" />

          {/* Delicate symmetrical gold mandalas / stitches */}
          <path
            d="M60 15 C65 30 75 35 90 35 C75 35 65 40 60 55 C55 40 45 35 30 35 C45 35 55 30 60 15 Z"
            stroke="url(#luxuryGoldGrad)"
            strokeWidth="0.75"
            fill="none"
            opacity="0.18"
          />

          {/* Tiny centered burgundy stitches */}
          <circle cx="60" cy="35" r="3.5" fill="#7A1F3D" opacity="0.25" />
          <circle cx="60" cy="35" r="1.5" fill="#C9A45C" opacity="0.4" />

          {/* Symmetrical framing leaves */}
          <path d="M 45 45 Q 40 55 35 50 Q 42 42 45 45 Z" fill="url(#brightGoldGrad)" opacity="0.12" />
          <path d="M 75 45 Q 80 55 85 50 Q 78 42 75 45 Z" fill="url(#brightGoldGrad)" opacity="0.12" />
          <path d="M 45 25 Q 40 15 35 20 Q 42 28 45 25 Z" fill="url(#brightGoldGrad)" opacity="0.12" />
          <path d="M 75 25 Q 80 15 85 20 Q 78 28 75 25 Z" fill="url(#brightGoldGrad)" opacity="0.12" />

          {/* Tiny stars */}
          <path d="M 15 60 L 17 62 L 15 64 L 13 62 Z" fill="#C9A45C" opacity="0.2" />
          <path d="M 105 60 L 107 62 L 105 64 L 103 62 Z" fill="#C9A45C" opacity="0.2" />
        </pattern>
      </defs>
    </svg>
  );
}

/**
 * 1. Embroidery Hoop SVG Component
 * Represents a high-end wooden embroidery hoop containing rich gold and burgundy floral embroidery.
 */
export function EmbroideryHoop({ className = "w-72 h-72" }: { className?: string }) {
  return (
    <div className={`relative ${className} filter drop-shadow-[0_12px_24px_rgba(122,31,61,0.08)]`}>
      <svg
        viewBox="0 0 300 300"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Hoop Drop Shadow */}
        <circle cx="150" cy="153" r="128" fill="rgba(0,0,0,0.03)" />

        {/* Linen Fabric Canvas */}
        <circle cx="150" cy="150" r="120" fill="#FCFAF6" />
        <circle cx="150" cy="150" r="120" fill="url(#linenTexture)" />

        {/* Outer Wooden Hoop Frame */}
        <circle
          cx="150"
          cy="150"
          r="128"
          stroke="url(#hoopWoodGrad)"
          strokeWidth="9.5"
        />

        {/* Inner Wooden Hoop Tension Ring */}
        <circle
          cx="150"
          cy="150"
          r="120"
          stroke="#4D2A12"
          strokeWidth="1.5"
          opacity="0.35"
        />
        <circle
          cx="150"
          cy="150"
          r="119"
          stroke="url(#hoopWoodGrad)"
          strokeWidth="4"
        />

        {/* Metallic Clamping Screw System at Top */}
        <g transform="translate(0, 0)">
          {/* Wooden block connector */}
          <rect x="138" y="12" width="24" height="15" rx="2" fill="url(#hoopWoodGrad)" stroke="#4D2A12" strokeWidth="1" />
          <line x1="150" y1="12" x2="150" y2="27" stroke="#4D2A12" strokeWidth="1.5" />

          {/* Gold clamp blocks */}
          <rect x="134" y="8" width="10" height="6" rx="1" fill="url(#luxuryGoldGrad)" />
          <rect x="156" y="8" width="10" height="6" rx="1" fill="url(#luxuryGoldGrad)" />

          {/* Brass Adjustment Bolt */}
          <rect x="124" y="10" width="52" height="2.5" fill="url(#luxuryGoldGrad)" />
          {/* Bolt threads (small dashes) */}
          <line x1="128" y1="10" x2="128" y2="12.5" stroke="#7A5B1D" strokeWidth="1" />
          <line x1="131" y1="10" x2="131" y2="12.5" stroke="#7A5B1D" strokeWidth="1" />
          <line x1="140" y1="10" x2="140" y2="12.5" stroke="#7A5B1D" strokeWidth="1" />
          <line x1="160" y1="10" x2="160" y2="12.5" stroke="#7A5B1D" strokeWidth="1" />

          {/* Large Gold Fluted Screw Knob */}
          <path d="M 120 4 L 126 4 L 126 18 L 120 18 Z" fill="url(#luxuryGoldGrad)" stroke="#7A5B1D" strokeWidth="0.75" />
          <circle cx="118" cy="11" r="3.5" fill="url(#luxuryGoldGrad)" stroke="#7A5B1D" strokeWidth="0.75" />
        </g>

        {/* Circular Dashed Thread Guidelines */}
        <circle
          cx="150"
          cy="150"
          r="98"
          stroke="#C9A45C"
          strokeWidth="1.5"
          strokeDasharray="5 5"
          opacity="0.5"
        />

        {/* Ornate Gold and Burgundy Floral Aari Embroidery */}
        <g id="embroidery-design" transform="translate(0, 10)">
          {/* Central Stem Vines */}
          <path
            d="M 150 200 C 150 160 170 120 205 105 C 190 125 155 130 150 160 C 145 130 110 125 95 105 C 130 120 150 160 150 200 Z"
            fill="none"
            stroke="url(#luxuryGoldGrad)"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <path
            d="M 150 160 C 150 120 135 85 105 80"
            fill="none"
            stroke="url(#luxuryGoldGrad)"
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.85"
          />

          <path
            d="M 150 160 C 150 120 165 85 195 80"
            fill="none"
            stroke="url(#luxuryGoldGrad)"
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.85"
          />

          {/* Left Embroidered Leaves */}
          <path d="M 115 130 Q 95 125 102 110 Q 118 120 115 130 Z" fill="url(#brightGoldGrad)" stroke="#9E782F" strokeWidth="0.75" />
          <path d="M 128 105 Q 110 95 120 83 Q 132 95 128 105 Z" fill="url(#brightGoldGrad)" stroke="#9E782F" strokeWidth="0.75" />
          {/* Right Embroidered Leaves */}
          <path d="M 185 130 Q 205 125 198 110 Q 182 120 185 130 Z" fill="url(#brightGoldGrad)" stroke="#9E782F" strokeWidth="0.75" />
          <path d="M 172 105 Q 190 95 180 83 Q 168 95 172 105 Z" fill="url(#brightGoldGrad)" stroke="#9E782F" strokeWidth="0.75" />

          {/* Elaborate Central Burgundy & Gold Blossom (Artisan Mandala) */}
          {/* Gold outer halo petals */}
          <circle cx="150" cy="150" r="28" stroke="url(#luxuryGoldGrad)" strokeWidth="1" strokeDasharray="3 3" />

          {/* Symmetrical Burgundy Petals */}
          <g id="blossom-petals">
            {/* North Petal */}
            <path d="M 150 150 C 142 125 158 125 150 150" fill="url(#maroonThreadGrad)" stroke="#5A1227" strokeWidth="0.5" />
            {/* South Petal */}
            <path d="M 150 150 C 142 175 158 175 150 150" fill="url(#maroonThreadGrad)" stroke="#5A1227" strokeWidth="0.5" />
            {/* East Petal */}
            <path d="M 150 150 C 175 142 175 158 150 150" fill="url(#maroonThreadGrad)" stroke="#5A1227" strokeWidth="0.5" />
            {/* West Petal */}
            <path d="M 150 150 C 125 142 125 158 150 150" fill="url(#maroonThreadGrad)" stroke="#5A1227" strokeWidth="0.5" />

            {/* Diagonals */}
            <path d="M 150 150 C 132 132 144 120 150 150" fill="url(#maroonThreadGrad)" stroke="#5A1227" strokeWidth="0.5" />
            <path d="M 150 150 C 168 168 156 180 150 150" fill="url(#maroonThreadGrad)" stroke="#5A1227" strokeWidth="0.5" />
            <path d="M 150 150 C 168 132 180 144 150 150" fill="url(#maroonThreadGrad)" stroke="#5A1227" strokeWidth="0.5" />
            <path d="M 150 150 C 132 168 120 156 150 150" fill="url(#maroonThreadGrad)" stroke="#5A1227" strokeWidth="0.5" />
          </g>

          {/* Gold Center Seed Bead Cluster */}
          <circle cx="150" cy="150" r="10" fill="url(#luxuryGoldGrad)" stroke="#7A5B1D" strokeWidth="0.75" />
          <circle cx="150" cy="150" r="6" fill="#7A1F3D" />
          <circle cx="150" cy="150" r="2.5" fill="#FFF" />

          {/* Satellite embroidery buds */}
          <circle cx="105" cy="80" r="6.5" fill="url(#maroonThreadGrad)" stroke="#5A1227" strokeWidth="0.5" />
          <circle cx="105" cy="80" r="2" fill="url(#luxuryGoldGrad)" />

          <circle cx="195" cy="80" r="6.5" fill="url(#maroonThreadGrad)" stroke="#5A1227" strokeWidth="0.5" />
          <circle cx="195" cy="80" r="2" fill="url(#luxuryGoldGrad)" />

          {/* Exquisite Gold Beading / Pearls along the vine */}
          <circle cx="140" cy="178" r="3.2" fill="url(#luxuryGoldGrad)" stroke="#9E782F" strokeWidth="0.5" />
          <circle cx="160" cy="178" r="3.2" fill="url(#luxuryGoldGrad)" stroke="#9E782F" strokeWidth="0.5" />
          <circle cx="145" cy="158" r="2.5" fill="url(#luxuryGoldGrad)" stroke="#9E782F" strokeWidth="0.5" />
          <circle cx="155" cy="158" r="2.5" fill="url(#luxuryGoldGrad)" stroke="#9E782F" strokeWidth="0.5" />

          <circle cx="123" cy="120" r="2.5" fill="url(#luxuryGoldGrad)" stroke="#9E782F" strokeWidth="0.5" />
          <circle cx="177" cy="120" r="2.5" fill="url(#luxuryGoldGrad)" stroke="#9E782F" strokeWidth="0.5" />
        </g>
      </svg>
    </div>
  );
}

/**
 * 2. Aari Needle SVG Component
 * Displays a premium handcrafted Aari hook-needle pulling a fluid, curving burgundy silk thread.
 */
export function AariNeedle({ className = "w-24 h-24" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 120 120"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Dynamic Curved Burgundy Silk Thread Path */}
        <path
          d="M 10 95 C 20 85, 35 110, 48 90 C 58 75, 42 62, 58 52 C 68 44, 85 55, 93 42 C 96 37, 95 32, 90 28"
          stroke="url(#maroonThreadGrad)"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="filter drop-shadow-[0_3px_6px_rgba(122,31,61,0.2)]"
        />

        {/* The Golden Aari Needle Shaft angled at 45 degrees */}
        <g id="needle" className="filter drop-shadow-[0_4px_10px_rgba(0,0,0,0.15)]">
          {/* Main Needle Shaft */}
          <path
            d="M 22 98 L 88 32"
            stroke="url(#luxuryGoldGrad)"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Wooden/Brass Traditional Handle at bottom-left */}
          <path
            d="M 12 108 L 26 94"
            stroke="url(#hoopWoodGrad)"
            strokeWidth="7"
            strokeLinecap="round"
          />
          <path
            d="M 24 96 L 27 93"
            stroke="url(#luxuryGoldGrad)"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <circle cx="10" cy="110" r="4.5" fill="url(#hoopWoodGrad)" stroke="#4D2A12" strokeWidth="1" />

          {/* Intricate Aari Needle Hook Point at top-right */}
          <path
            d="M 88 32 L 91 29 C 92.5 27.5, 94 28, 93.5 30 L 91.5 33"
            stroke="url(#luxuryGoldGrad)"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Small thread loop caught in the hook */}
          <path
            d="M 92.5 29 C 89 25, 84 28, 86 31 C 88 34, 92.5 29, 92.5 29"
            stroke="#7A1F3D"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
        </g>
      </svg>
    </div>
  );
}

/**
 * 3. Thread Spool Illustration Component
 * Vintage artisan thread spool wound with high-quality burgundy silk threads.
 */
export function ThreadSpool({ className = "w-32 h-32" }: { className?: string }) {
  return (
    <div className={`relative ${className} filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.06)]`}>
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Soft Ambient Shadow */}
        <ellipse cx="100" cy="176" rx="42" ry="12" fill="rgba(122,31,61,0.06)" />

        {/* Loose golden embroidery thread winding out from spool */}
        <path
          d="M 132 110 C 160 110, 182 125, 175 145 C 168 165, 115 162, 138 182 C 148 190, 168 185, 178 178"
          stroke="url(#luxuryGoldGrad)"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Spool Wooden Core & Rims */}
        {/* Bottom Wooden Rim */}
        <ellipse cx="100" cy="168" rx="40" ry="12" fill="url(#hoopWoodGrad)" stroke="#4D2A12" strokeWidth="1" />
        <ellipse cx="100" cy="165" rx="38" ry="10" fill="url(#luxuryGoldGrad)" />

        {/* Central Wooden Core Shaft */}
        <rect x="92" y="32" width="16" height="132" fill="url(#hoopWoodGrad)" />

        {/* Wound Burgundy Silk Thread Cylinder */}
        <rect
          x="68"
          y="42"
          width="64"
          height="114"
          rx="6"
          fill="url(#maroonThreadGrad)"
          stroke="#5A1227"
          strokeWidth="1"
        />

        {/* Horizontal wrapping thread detail ridges */}
        <g stroke="#5A1227" strokeWidth="0.75" opacity="0.65">
          <line x1="68" y1="52" x2="132" y2="52" />
          <line x1="68" y1="62" x2="132" y2="62" />
          <line x1="68" y1="72" x2="132" y2="72" />
          <line x1="68" y1="82" x2="132" y2="82" />
          <line x1="68" y1="92" x2="132" y2="92" />
          <line x1="68" y1="102" x2="132" y2="102" />
          <line x1="68" y1="112" x2="132" y2="112" />
          <line x1="68" y1="122" x2="132" y2="122" />
          <line x1="68" y1="132" x2="132" y2="132" />
          <line x1="68" y1="142" x2="132" y2="142" />
        </g>

        {/* Soft specular sheen overlay for 3D silk cylinder look */}
        <rect
          x="88"
          y="42"
          width="20"
          height="114"
          fill="url(#brightGoldGrad)"
          opacity="0.12"
          className="pointer-events-none"
        />

        {/* Top Wooden Rim */}
        <ellipse cx="100" cy="32" rx="40" ry="12" fill="url(#hoopWoodGrad)" stroke="#4D2A12" strokeWidth="1" />
        <ellipse cx="100" cy="30" rx="38" ry="10" fill="url(#luxuryGoldGrad)" />

        {/* Hollow center spool hole (top & bottom) */}
        <ellipse cx="100" cy="30" rx="8" ry="3" fill="#2A1708" />
        <ellipse cx="100" cy="165" rx="8" ry="3" fill="#2A1708" />
      </svg>
    </div>
  );
}

/**
 * 4. Luxury Embroidery Background Pattern Component
 * Grid backdrop simulating high-end canvas embroidery motifs.
 */
export function EmbroideryPattern() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-1000"
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity: 0.14 }}
    >
      <rect width="100%" height="100%" fill="url(#luxEmbGrid)" />
    </svg>
  );
}

/**
 * 5. Floating Workspace Canvas
 * Beautifully bundles the Hoop, Spool, and Aari Needle into an interactive floating workspace
 * with Framer Motion asynchronous slow breathing loops.
 */
export function FloatingEmbroideryWorkspace() {
  return (
    <div className="relative w-full max-w-[420px] h-[360px] md:h-[420px] mx-auto flex items-center justify-center">
      {/* Background radial glow */}
      <div className="absolute w-[240px] h-[240px] bg-gold/10 rounded-full blur-[80px] -z-10" />

      {/* 1. Embroidery Hoop - Gentle breathing floating up */}
      <motion.div
        animate={{
          y: [0, -8, 0],
          rotate: [0, 1, -1, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-4 top-8 z-10"
      >
        <EmbroideryHoop className="w-64 h-64 md:w-80 md:h-80" />
      </motion.div>

      {/* 2. Thread Spool - Lower right, floating down in opposition */}
      <motion.div
        animate={{
          y: [0, 8, 0],
          rotate: [0, -2, 2, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.8,
        }}
        className="absolute right-0 bottom-4 z-20"
      >
        <ThreadSpool className="w-28 h-28 md:w-36 md:h-36" />
      </motion.div>

      {/* 3. Aari Needle - Upper right, floating dynamically angled over the hoop */}
      <motion.div
        animate={{
          y: [-4, 6, -4],
          rotate: [0, 3, -3, 0],
          x: [0, 3, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.3,
        }}
        className="absolute right-4 top-10 z-30 pointer-events-none"
      >
        <AariNeedle className="w-24 h-24 md:w-32 md:h-32" />
      </motion.div>
    </div>
  );
}

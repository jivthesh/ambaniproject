"use client";

import React from "react";

const GoldGradientDef = () => (
  <defs>
    <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stopColor="#C9A45C" />
      <stop offset="50%" stopColor="#E8DECF" />
      <stop offset="100%" stopColor="#AA7C11" />
    </linearGradient>
  </defs>
);

const LaurelRing = () => (
  <g>
    <circle cx="50" cy="50" r="42" fill="none" stroke="url(#goldGrad)" strokeWidth="0.8" strokeDasharray="3 4" opacity="0.6" />
    {/* Left Laurel */}
    <path d="M14 50 C12 45, 7 48, 10 53 C14 58, 17 54, 14 50 Z" fill="url(#goldGrad)" />
    <path d="M11 43 C7 40, 4 45, 8 48 C11 50, 14 46, 11 43 Z" fill="url(#goldGrad)" />
    <path d="M14 58 C10 62, 14 67, 18 64 C21 61, 18 55, 14 58 Z" fill="url(#goldGrad)" />
    <path d="M16 38 C13 34, 10 38, 12 42 C15 45, 19 41, 16 38 Z" fill="url(#goldGrad)" />
    {/* Right Laurel */}
    <path d="M86 50 C88 45, 93 48, 90 53 C86 58, 83 54, 86 50 Z" fill="url(#goldGrad)" />
    <path d="M89 43 C93 40, 96 45, 92 48 C89 50, 86 46, 89 43 Z" fill="url(#goldGrad)" />
    <path d="M86 58 C90 62, 86 67, 82 64 C79 61, 82 55, 86 58 Z" fill="url(#goldGrad)" />
    <path d="M84 38 C87 34, 90 38, 88 42 C85 45, 81 41, 84 38 Z" fill="url(#goldGrad)" />
  </g>
);

export function IconNeedleThread() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm" fill="none">
      <GoldGradientDef />
      <g transform="translate(7.5 7.5) scale(0.85)">
        {/* Thread Swirls */}
        <path d="M15,85 C5,45 45,25 65,55 C85,85 25,95 25,45 C25,15 75,15 75,35" stroke="#7A1F3D" strokeWidth="3" strokeLinecap="round" fill="none" />
        <path d="M13,87 C3,47 43,27 63,57 C83,87 23,97 23,47 C23,17 73,17 73,37" stroke="#7A1F3D" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.5" />
        {/* Wooden Handle */}
        <rect x="12" y="70" width="8" height="24" rx="3" transform="rotate(-45 16 82)" fill="#5C3A21" />
        <rect x="14" y="72" width="4" height="20" rx="1" transform="rotate(-45 16 82)" fill="#8B5A2B" />
        {/* Gold Needle Body */}
        <line x1="28" y1="72" x2="80" y2="20" stroke="url(#goldGrad)" strokeWidth="2.5" strokeLinecap="round" />
        {/* Aari Hook Tip */}
        <path d="M80,20 Q82,15 85,20 L83,23 Z" fill="url(#goldGrad)" />
        {/* Thread looping through hook */}
        <path d="M75,35 Q85,25 80,20" stroke="#7A1F3D" strokeWidth="1.5" fill="none" />
      </g>
    </svg>
  );
}

export function IconFloralHoop() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm" fill="none">
      <GoldGradientDef />
      <g transform="translate(7.5 7.5) scale(0.85)">
        {/* Fabric Base removed to make background transparent */}
        {/* Inner Ring */}
        <circle cx="50" cy="55" r="36" stroke="url(#goldGrad)" strokeWidth="2" />
        {/* Outer Wooden Ring */}
        <circle cx="50" cy="55" r="40" stroke="#8B5A2B" strokeWidth="4" />
        <circle cx="50" cy="55" r="38" stroke="#5C3A21" strokeWidth="1" opacity="0.4"/>
        {/* Hardware Clasp at Top */}
        <rect x="44" y="11" width="12" height="6" fill="url(#goldGrad)" rx="1.5" />
        <rect x="47.5" y="7" width="5" height="6" fill="#88600D" />
        <circle cx="50" cy="5" r="3.5" fill="url(#goldGrad)" />
        {/* Intricate Floral Embroidery Inside */}
        <path d="M50,42 Q56,36 62,42 Q68,48 62,54 Q56,60 50,54 Q44,48 50,42 Z" fill="#7A1F3D" />
        <circle cx="50" cy="48" r="3" fill="url(#goldGrad)" />
        {/* Side small flowers/buds */}
        <circle cx="38" cy="48" r="4.5" fill="url(#goldGrad)" />
        <circle cx="62" cy="65" r="4.5" fill="url(#goldGrad)" />
        {/* Embroidery Leaves */}
        <path d="M50,42 Q40,30 45,25 Q55,35 50,42 Z" fill="#AA7C11" />
        <path d="M62,54 Q72,66 67,72 Q55,60 62,54 Z" fill="#AA7C11" />
        <path d="M38,48 Q30,55 35,62 Q45,55 38,48 Z" fill="#AA7C11" />
      </g>
    </svg>
  );
}

export function IconGoldBranch() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm" fill="none">
      <GoldGradientDef />
      <g transform="translate(7.5 7.5) scale(0.85)">
        {/* Large Paisley / Mango Motif Base */}
        <path d="M50,85 C15,85 15,40 40,28 C50,23 60,10 55,5 C75,15 90,35 80,55 C75,80 60,85 50,85 Z" fill="#7A1F3D" stroke="url(#goldGrad)" strokeWidth="3" />
        {/* Inner Decorative Zari Pattern */}
        <path d="M50,75 C28,75 32,48 45,40 C52,36 55,25 52,18 C68,28 75,45 68,55 C63,70 55,75 50,75 Z" fill="none" stroke="url(#goldGrad)" strokeWidth="1.5" strokeDasharray="3 2" />
        {/* Central Floral Element */}
        <circle cx="50" cy="55" r="7" fill="url(#goldGrad)" />
        <path d="M50,48 Q54,43 58,48 Q62,52 58,56 Q54,61 50,56 Q46,52 50,48 Z" fill="#7A1F3D" />
        <circle cx="50" cy="52" r="2" fill="#E8DECF" />
        {/* Tiny Gold Beads Outline */}
        <circle cx="34" cy="55" r="1.5" fill="url(#goldGrad)" />
        <circle cx="40" cy="67" r="1.5" fill="url(#goldGrad)" />
        <circle cx="50" cy="71" r="1.5" fill="url(#goldGrad)" />
        <circle cx="62" cy="65" r="1.5" fill="url(#goldGrad)" />
        <circle cx="66" cy="53" r="1.5" fill="url(#goldGrad)" />
        <circle cx="58" cy="42" r="1.5" fill="url(#goldGrad)" />
        <circle cx="48" cy="32" r="1.5" fill="url(#goldGrad)" />
      </g>
    </svg>
  );
}

export function IconThreadSpool() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm" fill="none">
      <GoldGradientDef />
      <g transform="translate(7.5 7.5) scale(0.85)">
        {/* Spool Wooden Caps */}
        <path d="M28,18 L72,18 C78,18 78,28 72,28 L28,28 C22,28 22,18 28,18 Z" fill="#5C3A21" />
        <path d="M28,72 L72,72 C78,72 78,82 72,82 L28,82 C22,82 22,72 28,72 Z" fill="#5C3A21" />
        <path d="M28,20 L72,20 C75,20 75,26 72,26 L28,26 C25,26 25,20 28,20 Z" fill="#8B5A2B" />
        <path d="M28,74 L72,74 C75,74 75,80 72,80 L28,80 C25,80 25,74 28,74 Z" fill="#8B5A2B" />
        {/* Thread Core (Maroon) */}
        <rect x="34" y="24" width="32" height="52" fill="#7A1F3D" />
        {/* Thread Textures */}
        {[...Array(12)].map((_, i) => (
          <line key={i} x1="34" y1={30 + i*4} x2="66" y2={32 + i*4} stroke="#9A2A4D" strokeWidth="1.5" />
        ))}
        {[...Array(12)].map((_, i) => (
          <line key={`b${i}`} x1="34" y1={32 + i*4} x2="66" y2={30 + i*4} stroke="#5A102D" strokeWidth="1" opacity="0.6"/>
        ))}
        {/* Gold Needle tucked into spool */}
        <line x1="22" y1="42" x2="78" y2="62" stroke="url(#goldGrad)" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="78" cy="62" r="1.5" fill="url(#goldGrad)" />
        {/* Highlight on thread */}
        <rect x="42" y="28" width="6" height="44" fill="#FFFFFF" opacity="0.1" />
      </g>
    </svg>
  );
}

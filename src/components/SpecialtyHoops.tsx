"use client";

import React from "react";

/**
 * Shared wrapper that defines the 3D wooden embroidery hoop, tension system, 
 * canvas backdrop, shadow layers, and the decorative flanking gold laurels.
 * Built with a responsive 0 0 160 160 viewBox layout for maximum visibility.
 */
interface HoopFrameProps {
  children: React.ReactNode;
}

function HoopFrame({ children }: HoopFrameProps) {
  return (
    <>
      {/* 1. Large Cream Linen Canvas Backdrop (Extends beyond the hoop) */}
      {/* Apply custom drop shadow to the canvas backdrop */}
      <circle cx="80" cy="80" r="48" fill="#FBF9F5" filter="url(#canvasShadow)" />
      {/* Linen texture pattern overlay */}
      <circle cx="80" cy="80" r="48" fill="url(#linenTexture)" />

      {/* 2. Elegant Dashed Circular Stitching around Linen border (as in reference image) */}
      <circle cx="80" cy="80" r="45.5" stroke="url(#brightGoldGrad)" strokeWidth="0.8" strokeDasharray="1.5 2" opacity="0.65" fill="none" />

      {/* 3. Flanking Laurel Branches (Left & Right) - Rendered with 3D Embossed Gold */}
      {/* Left Laurel Branch */}
      <g filter="url(#embossedGold)" opacity="0.9">
        {/* Curving stem */}
        <path d="M 27 92 C 20 82, 20 68, 25 58" stroke="url(#luxuryGoldGrad)" strokeWidth="1" strokeLinecap="round" fill="none" />
        {/* Symmetrical leaves along stem */}
        <path d="M 26 84 C 21 82, 19 76, 23 78 C 27 80, 28 83, 26 84 Z" fill="url(#luxuryGoldGrad)" />
        <path d="M 23 72 C 17 70, 15 64, 19 66 C 23 68, 24 71, 23 72 Z" fill="url(#luxuryGoldGrad)" />
        <path d="M 24 60 C 18 56, 17 50, 21 52 C 25 54, 26 58, 24 60 Z" fill="url(#luxuryGoldGrad)" />
        <path d="M 27 50 C 24 45, 24 40, 27 42 C 30 44, 30 48, 27 50 Z" fill="url(#luxuryGoldGrad)" />
      </g>

      {/* Right Laurel Branch */}
      <g filter="url(#embossedGold)" opacity="0.9">
        {/* Curving stem */}
        <path d="M 133 92 C 140 82, 140 68, 135 58" stroke="url(#luxuryGoldGrad)" strokeWidth="1" strokeLinecap="round" fill="none" />
        {/* Symmetrical leaves along stem */}
        <path d="M 134 84 C 139 82, 141 76, 137 78 C 133 80, 132 83, 134 84 Z" fill="url(#luxuryGoldGrad)" />
        <path d="M 137 72 C 143 70, 145 64, 141 66 C 137 68, 136 71, 137 72 Z" fill="url(#luxuryGoldGrad)" />
        <path d="M 136 60 C 142 56, 143 50, 139 52 C 135 54, 134 58, 136 60 Z" fill="url(#luxuryGoldGrad)" />
        <path d="M 133 50 C 136 45, 136 40, 133 42 C 130 44, 130 48, 133 50 Z" fill="url(#luxuryGoldGrad)" />
      </g>

      {/* 4. Wooden Embroidery Hoop Frame (Sitting on top of the linen canvas) */}
      {/* Outer Wooden Hoop Ring */}
      <circle cx="80" cy="80" r="34" stroke="url(#hoopWoodGrad)" strokeWidth="2.4" fill="none" filter="drop-shadow(0 3px 5px rgba(77,42,18,0.15))" />
      {/* Wooden Hoop Inner Rim */}
      <circle cx="80" cy="80" r="32" stroke="#4D2A12" strokeWidth="0.4" fill="none" opacity="0.35" />
      <circle cx="80" cy="80" r="31.6" stroke="url(#hoopWoodGrad)" strokeWidth="1.0" fill="none" />

      {/* 5. Metallic Clamping Tension Screw System at the top */}
      <g id="hoop-tension-screw" transform="translate(0, 1.5)">
        {/* Wooden Spacer/Clamp Connection block */}
        <rect x="76.5" y="40.5" width="7" height="4.5" fill="url(#hoopWoodGrad)" stroke="#4D2A12" strokeWidth="0.4" />
        {/* Golden Left Clamp Block */}
        <rect x="73.5" y="38" width="3.2" height="3" fill="url(#luxuryGoldGrad)" stroke="#7A5B1D" strokeWidth="0.3" />
        {/* Golden Right Clamp Block */}
        <rect x="83.3" y="38" width="3.2" height="3" fill="url(#luxuryGoldGrad)" stroke="#7A5B1D" strokeWidth="0.3" />
        {/* Brass Adjustment Bolt/Screw Shaft */}
        <rect x="68" y="39" width="24" height="1.0" fill="url(#luxuryGoldGrad)" />
        {/* Top Metallic Loop/Screw Knob */}
        <path d="M 76.5 38 C 76.5 35, 83.5 35, 83.5 38" stroke="url(#luxuryGoldGrad)" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      </g>

      {/* 6. Internal Golden Guideline Circle (Very subtle) */}
      <circle cx="80" cy="80" r="28" stroke="#C9A45C" strokeWidth="0.4" strokeDasharray="1 1.5" opacity="0.2" fill="none" />

      {/* 7. Dynamic Embroidered Motifs */}
      {children}
    </>
  );
}

/**
 * 1. Bridal Aari Blouse Hoop Component
 * Renders a gorgeous, highly detailed South Indian Manga (Paisley) zardozi motif.
 */
export function BridalAariBlouseHoop() {
  return (
    <svg className="w-full h-full text-gold" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <HoopFrame>
        {/* Exquisite traditional Manga (Paisley) Aari motif */}
        <g id="bridal-manga" transform="translate(0, 2)" filter="url(#embossedGold)">
          {/* Main Paisley Body Shadow & Background fill */}
          <path 
            d="M 80 98 C 62 92, 60 72, 74 62 C 84 55, 80 44, 82 44 C 84 44, 88 52, 94 60 C 102 70, 98 90, 80 98 Z" 
            fill="url(#maroonThreadGrad)" 
            stroke="url(#luxuryGoldGrad)" 
            strokeWidth="1.2" 
            strokeLinejoin="round" 
          />

          {/* Internal Aari lattice/grid stitching inside the paisley */}
          <path 
            d="M 68 78 L 92 78 M 70 72 L 94 72 M 74 66 L 90 66 M 80 95 L 80 50 M 74 88 L 86 56 M 86 88 L 74 56" 
            stroke="url(#luxuryGoldGrad)" 
            strokeWidth="0.6" 
            opacity="0.85" 
          />
          
          {/* Pearl seed beads at lattice intersections (rendered in 3D gold/ruby) */}
          <circle cx="80" cy="78" r="1.0" fill="#FCFAF6" stroke="#9E782F" strokeWidth="0.3" />
          <circle cx="80" cy="72" r="1.0" fill="#FCFAF6" stroke="#9E782F" strokeWidth="0.3" />
          <circle cx="80" cy="66" r="1.0" fill="#FCFAF6" stroke="#9E782F" strokeWidth="0.3" />
          <circle cx="74" cy="72" r="1.0" fill="#FCFAF6" stroke="#9E782F" strokeWidth="0.3" />
          <circle cx="86" cy="72" r="1.0" fill="#FCFAF6" stroke="#9E782F" strokeWidth="0.3" />
          <circle cx="76" cy="78" r="1.0" fill="#FCFAF6" stroke="#9E782F" strokeWidth="0.3" />
          <circle cx="84" cy="78" r="1.0" fill="#FCFAF6" stroke="#9E782F" strokeWidth="0.3" />

          {/* Outer elegant zardozi scroll vine framing the paisley outline */}
          <path 
            d="M 80 99 C 58 90, 56 68, 72 58 C 76 55, 78 50, 78 45 C 80 43, 83 45, 84 50 C 90 60, 106 72, 94 92" 
            stroke="url(#luxuryGoldGrad)" 
            strokeWidth="0.6" 
            strokeDasharray="1.2 1.2" 
            fill="none" 
          />

          {/* Central large sparkling ruby bead surrounded by tiny gold beads */}
          <circle cx="80" cy="86" r="2.8" fill="#7A1F3D" stroke="url(#luxuryGoldGrad)" strokeWidth="0.8" />
          <circle cx="80" cy="86" r="0.8" fill="#FCFAF6" />
        </g>
      </HoopFrame>
    </svg>
  );
}

/**
 * 2. Designer Couture Hoop Component
 * Replicates the left icon in the second reference image exactly:
 * An elaborate gold blossom sprig with an Aari needle vertical on the right side.
 */
export function DesignerCoutureHoop() {
  return (
    <svg className="w-full h-full text-gold" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <HoopFrame>
        {/* Elegant central blossom sprig (Zardozi gold style with 3D Specular Emboss) */}
        <g id="couture-sprig" transform="translate(0, 1)" filter="url(#embossedGold)">
          {/* Main vertical flower stem */}
          <path d="M 80 98 L 80 54" stroke="url(#luxuryGoldGrad)" strokeWidth="1.4" strokeLinecap="round" fill="none" />

          {/* Central multi-layered flower blossom (as in the reference image) */}
          <circle cx="80" cy="74" r="2.5" fill="url(#maroonThreadGrad)" />
          {/* Symmetrical radiating petals */}
          <path d="M 80 74 C 77 69, 74 69, 80 74 C 83 69, 86 69, 80 74 Z" fill="url(#luxuryGoldGrad)" stroke="#7A5B1D" strokeWidth="0.3" />
          <path d="M 80 74 C 77 79, 74 79, 80 74 C 83 79, 86 79, 80 74 Z" fill="url(#luxuryGoldGrad)" stroke="#7A5B1D" strokeWidth="0.3" />
          <path d="M 80 74 C 73 71, 73 74, 80 74 C 87 71, 87 74, 80 74 Z" fill="url(#luxuryGoldGrad)" stroke="#7A5B1D" strokeWidth="0.3" />
          <path d="M 80 74 C 75 66, 71 67, 80 74 C 85 82, 89 81, 80 74 Z" fill="url(#luxuryGoldGrad)" stroke="#7A5B1D" strokeWidth="0.3" />
          <path d="M 80 74 C 85 66, 89 67, 80 74 C 75 82, 71 81, 80 74 Z" fill="url(#luxuryGoldGrad)" stroke="#7A5B1D" strokeWidth="0.3" />

          {/* Symmetrical detailed leaf sprigs shooting off the stem (as in reference image) */}
          {/* Left top leaf */}
          <path d="M 80 62 Q 70 56 68 64 Q 75 66 80 62" fill="url(#luxuryGoldGrad)" stroke="#7A5B1D" strokeWidth="0.3" />
          <path d="M 80 62 Q 71 58 74 61" stroke="url(#brightGoldGrad)" strokeWidth="0.5" />
          
          {/* Right top leaf */}
          <path d="M 80 62 Q 90 56 92 64 Q 85 66 80 62" fill="url(#luxuryGoldGrad)" stroke="#7A5B1D" strokeWidth="0.3" />
          <path d="M 80 62 Q 89 58 86 61" stroke="url(#brightGoldGrad)" strokeWidth="0.5" />

          {/* Left bottom leaf */}
          <path d="M 80 84 Q 68 80 65 88 Q 74 89 80 84" fill="url(#luxuryGoldGrad)" stroke="#7A5B1D" strokeWidth="0.3" />
          
          {/* Right bottom leaf */}
          <path d="M 80 84 Q 92 80 95 88 Q 86 89 80 84" fill="url(#luxuryGoldGrad)" stroke="#7A5B1D" strokeWidth="0.3" />

          {/* Floating gold leaf nodes (as seen in the reference image) */}
          <circle cx="65" cy="56" r="1.5" fill="url(#luxuryGoldGrad)" />
          <circle cx="95" cy="56" r="1.5" fill="url(#luxuryGoldGrad)" />
          <circle cx="60" cy="72" r="1.2" fill="url(#luxuryGoldGrad)" />
          <circle cx="100" cy="72" r="1.2" fill="url(#luxuryGoldGrad)" />
          <circle cx="60" cy="80" r="1.5" fill="url(#luxuryGoldGrad)" />
          <circle cx="100" cy="80" r="1.5" fill="url(#luxuryGoldGrad)" />
        </g>

        {/* 3D Aari Crochet/Embroidery Needle vertical on the right (as in second image) */}
        <g id="couture-needle" filter="url(#embossedGold)">
          {/* Elegant gold needle shaft resting vertically at x ~ 99 */}
          <path d="M 99 98 L 99 64" stroke="url(#luxuryGoldGrad)" strokeWidth="1.2" strokeLinecap="round" />
          {/* Fine needle tip slightly hook-like at top */}
          <path d="M 99 64 C 99.5 62.5, 100.8 63, 100.5 65" stroke="url(#luxuryGoldGrad)" strokeWidth="0.8" fill="none" />
          
          {/* Swirling gold/maroon embroidery thread loop trailing off */}
          <path 
            d="M 99 65 C 102 59, 108 64, 103 69 C 98 74, 92 70, 92 78 C 92 84, 98 88, 96 95" 
            stroke="url(#maroonThreadGrad)" 
            strokeWidth="0.75" 
            strokeLinecap="round" 
            fill="none" 
            opacity="0.8" 
          />
        </g>
      </HoopFrame>
    </svg>
  );
}

/**
 * 3. Traditional Heritage Hoop Component
 * Replicates the right icon in the second reference image exactly:
 * An ornate symmetrical gold lotus flower resting on a detailed scrolled flourish base.
 */
export function TraditionalHeritageHoop() {
  return (
    <svg className="w-full h-full text-gold" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <HoopFrame>
        {/* Elegant multi-petaled zardozi Lotus Flower (3D Specular Emboss) */}
        <g id="heritage-lotus" transform="translate(0, 1)" filter="url(#embossedGold)">
          
          {/* 1. Scrolled Flourish Base below the lotus (matching the second image scroll base) */}
          <path 
            d="M 64 88 C 66 84, 71 84, 73 88 C 75 92, 79 92, 80 88 C 81 92, 85 92, 87 88 C 89 84, 94 84, 96 88 C 95 91, 91 91, 89 89 C 85 86, 81 87, 80 89 C 79 87, 75 86, 71 89 C 69 91, 65 91, 64 88 Z" 
            fill="url(#luxuryGoldGrad)" 
            stroke="#7A5B1D" 
            strokeWidth="0.3" 
          />
          <circle cx="80" cy="88" r="1.5" fill="#7A1F3D" />

          {/* 2. Main Central Lotus Petal */}
          <path 
            d="M 80 86 C 76 68, 76 52, 80 48 C 84 52, 84 68, 80 86 Z" 
            fill="url(#luxuryGoldGrad)" 
            stroke="#7A5B1D" 
            strokeWidth="0.4" 
            strokeLinejoin="round" 
          />
          {/* Inner needle-stitch vein lines inside central petal */}
          <path d="M 80 84 L 80 52 M 80 72 L 78 64 M 80 72 L 82 64 M 80 62 L 78 56 M 80 62 L 82 56" stroke="#7A5B1D" strokeWidth="0.4" opacity="0.6" />

          {/* 3. Inner Symmetrical Left & Right Petals */}
          {/* Left Petal */}
          <path 
            d="M 80 86 C 70 70, 68 56, 73 53 C 78 56, 79 70, 80 86 Z" 
            fill="url(#luxuryGoldGrad)" 
            stroke="#7A5B1D" 
            strokeWidth="0.4" 
            strokeLinejoin="round" 
          />
          <path d="M 78 80 C 73 70, 71 62, 75 58" stroke="#7A5B1D" strokeWidth="0.3" opacity="0.5" />
          
          {/* Right Petal */}
          <path 
            d="M 80 86 C 90 70, 92 56, 87 53 C 82 56, 81 70, 80 86 Z" 
            fill="url(#luxuryGoldGrad)" 
            stroke="#7A5B1D" 
            strokeWidth="0.4" 
            strokeLinejoin="round" 
          />
          <path d="M 82 80 C 87 70, 89 62, 85 58" stroke="#7A5B1D" strokeWidth="0.3" opacity="0.5" />

          {/* 4. Outer Symmetrical Left & Right Petals */}
          {/* Far Left Petal */}
          <path 
            d="M 80 86 C 60 76, 56 64, 63 60 C 70 63, 75 75, 80 86 Z" 
            fill="url(#luxuryGoldGrad)" 
            stroke="#7A5B1D" 
            strokeWidth="0.3" 
            strokeLinejoin="round" 
          />
          
          {/* Far Right Petal */}
          <path 
            d="M 80 86 C 100 76, 104 64, 97 60 C 90 63, 85 75, 80 86 Z" 
            fill="url(#luxuryGoldGrad)" 
            stroke="#7A5B1D" 
            strokeWidth="0.3" 
            strokeLinejoin="round" 
          />

          {/* 5. Delicate decorative gold stitch dots floating above petals */}
          <circle cx="80" cy="44" r="1.0" fill="url(#luxuryGoldGrad)" />
          <circle cx="71" cy="49" r="0.8" fill="url(#luxuryGoldGrad)" />
          <circle cx="89" cy="49" r="0.8" fill="url(#luxuryGoldGrad)" />
        </g>
      </HoopFrame>
    </svg>
  );
}

/**
 * 4. Bespoke Commissions Hoop Component
 * Renders a gorgeous royal heirloom zardozi medallion featuring a complex 8-pointed star,
 * complete with a trailing needle and silk thread caught in motion.
 */
export function BespokeCommissionHoop() {
  return (
    <svg className="w-full h-full text-gold" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <HoopFrame>
        {/* Intricate royal star medallion with 3D Specular Emboss */}
        <g id="bespoke-medallion" transform="translate(0, 1.5)" filter="url(#embossedGold)">
          {/* Double boundary golden stitch rings */}
          <circle cx="80" cy="80" r="18" stroke="url(#luxuryGoldGrad)" strokeWidth="0.8" strokeDasharray="1.5 1.5" fill="none" />
          <circle cx="80" cy="80" r="20" stroke="url(#maroonThreadGrad)" strokeWidth="0.6" fill="none" opacity="0.7" />
          
          {/* Central ruby red seed bead */}
          <circle cx="80" cy="80" r="2.8" fill="#7A1F3D" stroke="url(#luxuryGoldGrad)" strokeWidth="0.6" />

          {/* Symmetrical 8-pointed star of gold zardozi threads */}
          <g stroke="url(#luxuryGoldGrad)" strokeWidth="0.9" strokeLinecap="round">
            {/* Cardinal points */}
            <path d="M 80 80 L 80 63" />
            <path d="M 80 80 L 80 97" />
            <path d="M 80 80 L 63 80" />
            <path d="M 80 80 L 97 80" />
            
            {/* Diagonal points */}
            <path d="M 80 80 L 68 68" />
            <path d="M 80 80 L 92 92" />
            <path d="M 80 80 L 92 68" />
            <path d="M 80 80 L 68 92" />
          </g>

          {/* Symmetrical gold/pearl beads on star tips */}
          <circle cx="80" cy="63" r="1.2" fill="#FCFAF6" stroke="#9E782F" strokeWidth="0.4" />
          <circle cx="80" cy="97" r="1.2" fill="#FCFAF6" stroke="#9E782F" strokeWidth="0.4" />
          <circle cx="63" cy="80" r="1.2" fill="#FCFAF6" stroke="#9E782F" strokeWidth="0.4" />
          <circle cx="97" cy="80" r="1.2" fill="#FCFAF6" stroke="#9E782F" strokeWidth="0.4" />
          <circle cx="68" cy="68" r="1.0" fill="url(#luxuryGoldGrad)" />
          <circle cx="92" cy="92" r="1.0" fill="url(#luxuryGoldGrad)" />
          <circle cx="92" cy="68" r="1.0" fill="url(#luxuryGoldGrad)" />
          <circle cx="68" cy="92" r="1.0" fill="url(#luxuryGoldGrad)" />
        </g>

        {/* Diagonal Aari needle with trailing loop of maroon thread */}
        <g id="bespoke-needle" filter="url(#embossedGold)">
          {/* Angled gold needle shaft from top-right (x ~ 102, y ~ 60) to bottom-left (x ~ 66, y ~ 96) */}
          <path d="M 100 58 L 68 90" stroke="url(#luxuryGoldGrad)" strokeWidth="1.2" strokeLinecap="round" />
          {/* Eye of the needle at the top right */}
          <circle cx="98" cy="60" r="0.6" fill="#FBF9F5" />

          {/* Trailing maroon silk thread loop caught in the needle eye */}
          <path 
            d="M 98 60 C 103 54, 108 58, 102 65 C 95 72, 86 68, 86 78 C 86 86, 92 88, 90 98" 
            stroke="url(#maroonThreadGrad)" 
            strokeWidth="0.8" 
            strokeLinecap="round" 
            fill="none" 
            opacity="0.85" 
          />
        </g>
      </HoopFrame>
    </svg>
  );
}

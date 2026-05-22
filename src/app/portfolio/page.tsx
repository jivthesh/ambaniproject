"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { img } from "@/lib/basePath";

const categories = ["All", "Bridal", "Traditional", "Designer", "Custom"];

const portfolioItems = [
  { id: 1, title: "Royal Peacock Magenta Blouse", category: "Bridal", hours: "180 Hours", difficulty: "High Complexity", image: img("/blouse-magenta.jpg"), height: "h-96", description: "Our flagship heavy bridal blouse featuring traditional peacock motifs and delicate floral nets in complete gold Aari hand embroidery, embellished with tiny crimson beads and pearl tassels." },
  { id: 2, title: "Temple Border Antique Gold", category: "Traditional", hours: "110 Hours", difficulty: "Heritage Classic", image: img("/blouse-gold.jpg"), height: "h-80", description: "A traditional Kerala-style bridal blouse framing pure temple design motifs in thick antique gold metallic zari threads over gold raw silk fabric, finished with red pearl beads." },
  { id: 3, title: "Zardozi Crimson Bridal Sleeve", category: "Bridal", hours: "200 Hours", difficulty: "Masterwork", image: img("/blouse-red-bridal.png"), height: "h-[28rem]", description: "Stunning sleeve detail showing heavy royal gold Zardozi, clustering seed pearls along the scallop borders, and a beautiful checkerboard pattern filled with micro-crystals." },
  { id: 4, title: "Seed Pearl Emerald Neckline", category: "Designer", hours: "130 Hours", difficulty: "Exquisite Detail", image: img("/blouse-emerald-detail.png"), height: "h-80", description: "A deep emerald green silk blouse featuring premium neck borders with tiny seed pearls, golden bullion thread outlines, and custom beads forming a royal traditional necklace layout." },
  { id: 5, title: "Zari Vine Crafting Process", category: "Custom", hours: "Heritage Process", difficulty: "Live Studio", image: img("/embroidery-hoop.png"), height: "h-96", description: "A peek into our live artisan studio showing a custom traditional floral gold Zari border being stitched tightly over a traditional wooden embroidery hoop on off-white raw silk." },
  { id: 6, title: "Classic Paisley Magenta Sleeve", category: "Traditional", hours: "90 Hours", difficulty: "Bespoke Classic", image: img("/blouse-magenta.jpg"), height: "h-80", description: "A traditional sleeve variation of our Royal Magenta design, centering a large royal paisley hand-embroidered with gold thread and dark ruby red accents." },
  { id: 7, title: "Kasavu Gold Floral Blouse", category: "Traditional", hours: "120 Hours", difficulty: "Kerala Bridal", image: img("/blouse-gold.jpg"), height: "h-[26rem]", description: "Designed specifically to complement traditional Kerala Kasavu sarees, blending rich cream silk backdrops with heavy floral gold Zari work and custom bead borders." },
  { id: 8, title: "Leaf Zardozi Emerald Sleeve", category: "Designer", hours: "140 Hours", difficulty: "Exquisite Detail", image: img("/blouse-emerald-detail.png"), height: "h-96", description: "A sleeve variant matching the seed pearl neckline, emphasizing continuous leaf motifs and layered bead borders for high-end boutique elegance." },
];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedItem, setSelectedItem] = useState<(typeof portfolioItems)[0] | null>(null);

  const filteredItems =
    activeFilter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-44 pb-28 md:pt-56 md:pb-36 bg-maroon overflow-hidden">
        <div className="absolute inset-0 embroidery-pattern opacity-10 pointer-events-none" />
        <div className="absolute top-10 right-10 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="font-body text-gold tracking-[0.3em] uppercase text-xs">
              Our Masterpieces
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-ivory leading-tight">
              QUASAR Portfolio
            </h1>
            <p className="font-body text-ivory/70 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
              Explore our curation of bridal blouses and handcrafted Aari embroidery works. Every piece is an heirloom designed to speak of tradition and luxury.
            </p>
          </motion.div>
        </div>
      </section>

  {/* Filters Sticky Bar */}
  <section className="py-8 bg-ivory sticky top-0 z-30 border-b border-gold/10 shadow-sm backdrop-blur-md bg-ivory/95">
    <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`font-body text-xs tracking-[0.15em] uppercase px-8 py-4 rounded-full transition-all duration-500 ease-out cursor-pointer hover:-translate-y-0.5 select-none active:scale-[0.98] ${activeFilter === category
                ? "bg-maroon text-ivory shadow-lg shadow-maroon/15 font-bold"
                : "bg-white/80 backdrop-blur-md text-maroon hover:bg-maroon hover:text-white font-bold border border-gold/25 shadow-sm shadow-gold/5"
              }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  </section>

      {/* Masonry Gallery */}
      <section className="py-28 md:py-36 lg:py-44 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="masonry-grid gap-8 md:gap-10 lg:gap-12">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="mb-8 md:mb-10 lg:mb-12"
                >
                  <motion.div
                    whileHover={{ y: -6 }}
                    onClick={() => setSelectedItem(item)}
                    className={`${item.height} rounded-2xl overflow-hidden group cursor-pointer relative border border-gold/15 bg-maroon-dark shadow-sm hover:shadow-xl transition-all duration-300`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Shadow overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-maroon-dark/95 via-maroon-dark/15 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300 pointer-events-none" />

                    {/* Quick Details Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col justify-end text-left pointer-events-none">
                      <span className="font-body text-[10px] tracking-wider uppercase text-gold/80 mb-1.5">{item.category}</span>
                      <h3 className="font-heading text-lg md:text-xl font-bold text-white mb-3 leading-tight">{item.title}</h3>
                      <div className="flex gap-4 items-center">
                        <span className="font-body text-[9px] md:text-[10px] text-white/60 uppercase tracking-widest bg-white/10 px-2.5 py-1 rounded">
                          {item.hours}
                        </span>
                        <span className="font-body text-[9px] md:text-[10px] text-gold/80 uppercase tracking-widest bg-gold/10 px-2.5 py-1 rounded">
                          {item.difficulty}
                        </span>
                      </div>
                    </div>

                    <div className="absolute inset-0 bg-maroon-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <span className="font-body text-xs tracking-wider uppercase text-gold border border-gold/50 px-6 py-2.5 rounded-full bg-maroon-dark/60 backdrop-blur-sm shadow-lg font-semibold">
                          View Details
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Lightbox / Detail Popup */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-maroon-dark/80 lightbox-overlay flex items-center justify-center p-6 md:p-10"
            onClick={() => setSelectedItem(null)}
          >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", damping: 25 }}
            className="bg-ivory rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl border border-gold/20 flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
              {/* Image Side */}
              <div className="w-full md:w-1/2 aspect-square md:aspect-auto md:h-auto relative bg-maroon-dark">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-ivory/20 backdrop-blur-sm rounded-full flex items-center justify-center text-ivory hover:bg-ivory/40 transition-colors duration-200 md:hidden"
                  aria-label="Close"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Detail side */}
              <div className="w-full md:w-1/2 p-10 md:p-12 lg:p-14 flex flex-col justify-between bg-white relative overflow-y-auto">
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-6 right-6 w-10 h-10 bg-ivory-dark rounded-full flex items-center justify-center text-maroon hover:bg-gold/20 hover:text-maroon transition-colors duration-200 hidden md:flex border border-gold/15 cursor-pointer"
                  aria-label="Close"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <div className="space-y-8 pt-4 md:pt-8">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-body text-[10px] tracking-wider uppercase px-3.5 py-1 bg-maroon/10 text-maroon rounded-full font-bold">
                      {selectedItem.category}
                    </span>
                    <span className="font-body text-[10px] tracking-wider uppercase px-3.5 py-1 bg-gold/10 text-gold-dark rounded-full font-bold border border-gold/15">
                      {selectedItem.hours} Crafting
                    </span>
                  </div>

                  <h3 className="font-heading text-2xl md:text-3xl lg:text-4xl text-maroon font-bold leading-snug">
                    {selectedItem.title}
                  </h3>

                  <div className="gold-line max-w-20" />

                  <p className="font-body text-sm md:text-base text-gray-600 leading-relaxed">
                    {selectedItem.description}
                  </p>

                  <div className="bg-ivory/70 backdrop-blur-sm p-8 rounded-2xl border border-gold/15 space-y-4 shadow-inner">
                    <p className="font-body text-xs text-maroon font-bold uppercase tracking-[0.1em]">Premium Specifications</p>
                    <ul className="font-body text-xs md:text-sm text-gray-600 space-y-2">
                      <li><strong className="text-maroon/85">Fabric:</strong> Handloom Pure Raw Silk</li>
                      <li><strong className="text-maroon/85">Needle technique:</strong> Hook-Aari Chain Stitching</li>
                      <li><strong className="text-maroon/85">Embellishments:</strong> Japanese glass beads, metallic Zari spools, Zardozi spirals</li>
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-10 mt-8">
                  <a
                    href={`https://wa.me/919876543210?text=Hi!%20I'm%20interested%20in%20inquiring%20about%20the%20${encodeURIComponent(selectedItem.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center text-center font-body text-xs tracking-[0.15em] uppercase px-8 py-5 bg-maroon text-ivory rounded-full hover:bg-maroon-light transition-all duration-500 ease-out font-bold shadow-lg shadow-maroon/15 hover:shadow-xl hover:shadow-maroon-light/25 hover:-translate-y-0.5 select-none active:scale-[0.98]"
                  >
                    Inquire on WhatsApp
                  </a>
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="w-full inline-flex items-center justify-center font-body text-xs tracking-[0.15em] uppercase px-8 py-5 border border-maroon text-maroon rounded-full bg-white/40 backdrop-blur-sm hover:bg-maroon hover:text-white transition-all duration-500 ease-out font-bold cursor-pointer hover:-translate-y-0.5 select-none active:scale-[0.98]"
                  >
                    Close Viewer
                  </button>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Instagram Feed / CTA */}
      <section className="py-28 md:py-36 lg:py-44 bg-ivory-dark relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 text-center space-y-10">
          <AnimatedSection>
            <div className="space-y-4">
              <p className="font-body text-gold tracking-[0.3em] uppercase text-xs font-semibold">
                Follow Us
              </p>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-maroon font-bold leading-tight">
                Follow our Live Stitching on Instagram
              </h2>
              <p className="font-body text-xs md:text-sm lg:text-base text-gray-500 max-w-lg mx-auto leading-relaxed">
                Watch daily behind-the-scenes videos of our master artisans handcrafting intricate bridal blouses, one stitch at a time.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-body text-xs tracking-[0.15em] uppercase px-12 py-5 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white rounded-full hover:shadow-[0_20px_50px_rgba(253,29,29,0.25)] hover:-translate-y-0.5 transition-all duration-500 ease-out font-bold select-none active:scale-[0.98]"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              @quasar.designer.studio
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { IconNeedleThread, IconThreadSpool } from "@/components/SpecialtyIcons";

const timelineEvents = [
  {
    year: "2012",
    title: "The Vision Born",
    description: "Our lead designer began training under traditional master embroiderers in Trivandrum, mastering ancestral hook-needle chains.",
  },
  {
    year: "2015",
    title: "First Bridal Couture",
    description: "Completed the first full bridal trousseau, gaining recognition in Kerala's designer community for immaculate gold zari lines.",
  },
  {
    year: "2018",
    title: "QUASAR Studio Ernakulam",
    description: "Opened a dedicated boutique workspace in MG Road, Kochi, hiring expert artisan hands to scale custom orders.",
  },
  {
    year: "2021",
    title: "High-End Collaborations",
    description: "Collaborated with premium boutique labels across South India, creating exclusive Kasavu and silk embroidery collections.",
  },
  {
    year: "2024",
    title: "Training Apprentices",
    description: "Created an in-studio training group to teach and protect standard hook techniques, passing the flame to the next generation.",
  },
  {
    year: "2026",
    title: "Digital Couture Studio",
    description: "Presenting QUASAR's boutique collection digitally to brides globally, delivering heirloom pieces to every continent.",
  },
];

const skills = [
  { name: "Hook-Aari Embroidery", level: 98 },
  { name: "Zardozi Bullion Work", level: 94 },
  { name: "Seed Pearl & Stone Settings", level: 96 },
  { name: "Kerala Kasavu Custom Borders", level: 95 },
  { name: "Classic Indian Motif Sketching", level: 92 },
  { name: "Silky Thread Painting Shading", level: 90 },
];

const workProcess = [
  {
    step: "01",
    title: "1-on-1 Consultation",
    description: "We discuss your wedding theme, saree details, and layout concepts in detail over WhatsApp or in-person.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Pattern Hand-Sketching",
    description: "We translate your inputs into a physical, customized paper layout mapped to your exact measurements.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Intensive Hand-Stitching",
    description: "The raw silk is stretched over our wood frames where master hands sew spools of gold and pearl meticulously.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    step: "04",
    title: "Verification & Delivery",
    description: "We inspect every single bead for secure anchors, carefully steam the silk, and package your couture safely.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-44 pb-28 md:pt-56 md:pb-36 bg-maroon overflow-hidden">
        <div className="absolute inset-0 embroidery-pattern opacity-10 pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-72 h-72 bg-rose-gold/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="font-body text-gold tracking-[0.3em] uppercase text-xs">
              Our Identity
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-ivory leading-tight">
              About QUASAR Studio
            </h1>
            <p className="font-body text-ivory/70 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
              We believe in creating high-end, slow-crafted bridal fashion that honors Kerala's rich artisanal heritage and luxury standards.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-28 md:py-36 lg:py-44 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            <AnimatedSection direction="left">
              <div className="relative p-2">
                <div className="absolute -inset-2 border border-gold/20 rounded-2xl animate-pulse" />
                <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-2xl relative">
                  <img
                    src="/embroidery-hoop.png"
                    alt="Artisan Aari Needle Embroidery Work at QUASAR"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-maroon/10" />
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <p className="font-body text-gold tracking-[0.3em] uppercase text-xs mb-4 font-semibold">
                Our Roots
              </p>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-maroon mb-6 leading-tight">
                A Dream Written in Gold Thread
              </h2>
              <div className="gold-line mb-10 max-w-24" />

              <div className="font-body text-gray-600 text-sm md:text-base space-y-6 leading-relaxed">
                <p>
                  The story of <strong>QUASAR Designer Studio</strong> started with a burning passion for the intricate chain-stitch art of traditional Aari embroidery. Observing traditional Kerala textiles and bridal outfits, our studio set out to build an elite boutique dedicated strictly to Slow Fashion and hand-worked perfection.
                </p>
                <p>
                  What began as single-person commission works quickly transformed into a premier digital luxury studio. By respecting and preserving classical motifs while embracing modern silhouettes, we ensure every custom blouse feels like a unique second skin tailored precisely for you.
                </p>
                <p>
                  Today, our boutique MG Road studio serves as a thriving hub of authentic craftsmanship. Brides across Kerala, India, and globally choose QUASAR to create their dream bridal ensembles because they know we do not believe in mass production—only customized masterpieces.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-10">
                <div className="text-center bg-white/80 backdrop-blur-md border border-gold/15 px-8 py-6 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.02)] hover:border-gold/30 hover:-translate-y-0.5 transition-all duration-300 select-none">
                  <p className="font-heading text-3xl font-bold text-maroon">14+</p>
                  <p className="font-body text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Years of Craft</p>
                </div>
                <div className="text-center bg-white/80 backdrop-blur-md border border-gold/15 px-8 py-6 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.02)] hover:border-gold/30 hover:-translate-y-0.5 transition-all duration-300 select-none">
                  <p className="font-heading text-3xl font-bold text-maroon">600+</p>
                  <p className="font-body text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Brides Styled</p>
                </div>
                <div className="text-center bg-white/80 backdrop-blur-md border border-gold/15 px-8 py-6 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.02)] hover:border-gold/30 hover:-translate-y-0.5 transition-all duration-300 select-none">
                  <p className="font-heading text-3xl font-bold text-maroon">100%</p>
                  <p className="font-body text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Slow Handmade</p>
                </div>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section className="py-28 md:py-36 lg:py-44 bg-maroon relative overflow-hidden">
        <div className="absolute inset-0 embroidery-pattern opacity-5 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative">

          <AnimatedSection>
            <div className="text-center mb-20 space-y-4">
              <p className="font-body text-gold tracking-[0.3em] uppercase text-xs font-semibold">
                Core Pillars
              </p>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-ivory">
                Artisan Handcraft Standards
              </h2>
              <div className="gold-line mx-auto max-w-24" />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                title: "Traditional Hook Needle",
                description: "Our artisans sew exclusively with classical thin wooden-handled metal hooks, pulling spools of thread from beneath the tightly stretched silk layer to form flawless continuous chain-stitch loops.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {/* Hook needle shaft */}
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L16 8" />
                    {/* Hook tip at the top right */}
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 8c.5-.5.8-1 1-1.5-.4.1-.8.5-1.1.8l.1.7z" />
                    {/* Wooden handle at the bottom left */}
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21l3-3" />
                    {/* Thread winding around the hook */}
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12c.5-2.5 2-4.5 4-4.5s3 2.5 3 4.5-2 4.5-4 4.5-3.5-2-3-4.5z" />
                  </svg>
                ),
              },
              {
                title: "No-Glue Pearl Anchors",
                description: "Every seed pearl, sequin, and glass bead on our blouses is anchored individually using strong nylon threads, ensuring complete structural integrity—never glued or heat-pressed.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="5" strokeWidth={1.5} />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2v20M2 12h20" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2l7 7m-7-7L5 9m7 13l7-7m-7 7l-7-7" />
                    <circle cx="12" cy="2" r="1.2" fill="currentColor" />
                    <circle cx="12" cy="22" r="1.2" fill="currentColor" />
                    <circle cx="2" cy="12" r="1.2" fill="currentColor" />
                    <circle cx="22" cy="12" r="1.2" fill="currentColor" />
                  </svg>
                ),
              },
              {
                title: "Pure Handloom Silks",
                description: "We source strictly pure 100% handloom raw silk, Banarasi brocades, and fine organzas to provide the perfect premium fabric weights needed for heavy embroidery load.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7h16M4 12h16M4 17h16M8 4v16M16 4v16" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 8c.3.8.9 1.4 1.7 1.7-.8.3-1.4.9-1.7 1.7-.3-.8-.9-1.4-1.7-1.7.8-.3 1.4-.9 1.7-1.7z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 16c.2.5.6.9 1.1 1.1-.5.2-.9.6-1.1 1.1-.2-.5-.6-.9-1.1-1.1.5-.2.9-.6 1.1-1.1z" />
                  </svg>
                ),
              },
            ].map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.1} className="h-full">
                <motion.div
                  whileHover={{ y: -8, scale: 1.01 }}
                  className="bg-white/5 backdrop-blur-md rounded-3xl p-10 md:p-12 border border-gold/15 hover:border-gold/30 hover:bg-white/10 transition-all duration-500 ease-out text-center h-full flex flex-col justify-between shadow-[0_8px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(212,175,55,0.08)] group"
                >
                  <div>
                    <div className="w-16 h-16 rounded-2xl bg-white/5 text-gold flex items-center justify-center mx-auto mb-8 border border-gold/10 group-hover:bg-gold group-hover:text-maroon group-hover:border-gold transition-all duration-500 shadow-sm relative">
                      {item.icon}
                    </div>
                    <h3 className="font-heading text-xl text-gold font-bold mb-4 group-hover:text-white transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="font-body text-ivory/60 text-xs md:text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

        </div>
      </section>

      {/* Timeline of Journey */}
      <section className="py-28 md:py-36 lg:py-44 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

          <AnimatedSection>
            <div className="text-center mb-20 space-y-4">
              <p className="font-body text-gold tracking-[0.3em] uppercase text-xs font-semibold">
                Our Milestones
              </p>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-maroon">
                Timeline of Journey
              </h2>
              <div className="gold-line mx-auto max-w-24" />
            </div>
          </AnimatedSection>

          <div className="bg-[#FAF6F0] rounded-[32px] p-6 sm:p-8 md:p-12 lg:p-16 border border-gold/15 relative shadow-sm before:absolute before:inset-2 before:border before:border-gold/5 before:rounded-[24px] before:pointer-events-none overflow-hidden">
            {/* Scrollable track inside the box on mobile, fits fully on desktop */}
            <div className="overflow-x-auto md:overflow-x-visible pb-4 pt-6 scrollbar-thin scrollbar-thumb-gold/30 scrollbar-track-transparent">
              <div className="relative flex justify-between items-start gap-4 min-w-[768px] md:min-w-0 md:w-full px-2">
                
                {/* Horizontal timeline connector line */}
                <div className="absolute left-8 right-8 top-5 h-[2px] bg-gradient-to-r from-gold/30 via-maroon/30 to-gold/30 pointer-events-none z-0" />

                {timelineEvents.map((event) => (
                  <div
                    key={event.year}
                    className="relative flex flex-col items-center text-center flex-1 min-w-[120px] md:min-w-0 z-10"
                  >
                    {/* Circle Node on the line */}
                    <div className="w-10 h-10 rounded-full bg-maroon text-ivory flex items-center justify-center font-heading text-xs font-bold border-2 border-gold shadow-md hover:scale-110 transition-transform duration-300">
                      {event.year}
                    </div>

                    {/* Content */}
                    <div className="mt-8 space-y-2">
                      <h3 className="font-heading text-xs sm:text-sm font-bold text-maroon leading-snug">
                        {event.title}
                      </h3>
                      <p className="font-body text-[10px] sm:text-xs text-gray-500 leading-relaxed font-light max-w-[150px] mx-auto">
                        {event.description}
                      </p>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Skills Showcase */}
      <section className="py-28 md:py-36 lg:py-44 bg-ivory-dark">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            <AnimatedSection direction="left">
              <div className="space-y-6">
                <p className="font-body text-gold tracking-[0.3em] uppercase text-xs font-semibold">
                  Technical Expertise
                </p>
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-maroon leading-tight">
                  Our Embroidery Skills & Standards
                </h2>
                <div className="gold-line mb-6 max-w-24" />
                <p className="font-body text-sm md:text-base text-gray-600 leading-relaxed max-w-xl">
                  Embroidery at QUASAR is a technical science. We keep rigorous records of stitch tightness, pull vectors, and stone balancing to guarantee that heavy gold and pearls sit perfectly without warping thin silk threads.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="space-y-8 bg-white p-10 md:p-12 rounded-2xl border border-gold/10 shadow-sm">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-bold text-maroon uppercase font-body tracking-wider">
                      <span>{skill.name}</span>
                      <span className="text-gold-dark">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2.5 bg-ivory-dark rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.08 }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-maroon to-gold rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* Work Process */}
      <section className="py-28 md:py-36 lg:py-44 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

          <AnimatedSection>
            <div className="text-center mb-20 space-y-4">
              <p className="font-body text-gold tracking-[0.3em] uppercase text-xs font-semibold">
                Our Process
              </p>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-maroon">
                Visualizing Our Custom Process
              </h2>
              <div className="gold-line mx-auto max-w-24" />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {workProcess.map((process, index) => (
              <AnimatedSection key={process.step} delay={index * 0.1} className="h-full">
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-white/80 backdrop-blur-md rounded-3xl p-10 md:p-12 border border-gold/15 text-center relative group h-full flex flex-col justify-between shadow-[0_8px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(122,31,61,0.06)] hover:border-gold/30 transition-all duration-500 ease-out"
                >
                  <span className="font-heading text-6xl text-maroon/5 absolute top-4 right-6 pointer-events-none font-bold group-hover:scale-105 group-hover:text-maroon/10 transition-all duration-500">
                    {process.step}
                  </span>
                  <div>
                    <div className="w-16 h-16 rounded-2xl bg-maroon/5 text-maroon flex items-center justify-center mx-auto mb-8 group-hover:bg-maroon group-hover:text-[#FFF8F0] transition-all duration-500 shadow-sm border border-maroon/5 group-hover:border-maroon">
                      {process.icon}
                    </div>
                    <h3 className="font-heading text-lg font-bold text-maroon mb-4 group-hover:text-maroon-light transition-colors duration-300 leading-tight">
                      {process.title}
                    </h3>
                    <p className="font-body text-xs md:text-sm text-gray-500 leading-relaxed font-light">
                      {process.description}
                    </p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}

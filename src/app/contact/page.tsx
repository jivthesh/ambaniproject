"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

const faqs = [
  {
    question: "What exactly is Aari hand embroidery?",
    answer: "Aari embroidery is a specialized traditional needlework technique originating from the Mughal era. It uses a very fine hooked needle (called an Aari) to pull loops of thread from beneath a stretched raw silk sheet to the surface, forming continuous chain-stitch lines. At QUASAR Designer Studio, we do this 100% by hand—never using machinery or computers.",
  },
  {
    question: "How long does a heavy bridal blouse take to complete?",
    answer: "Our timeline depends entirely on the design load. A simple neck border blouse usually takes 5 to 7 days, whereas a heavily embellished royal bridal trousseau containing thousands of pearls, Zardozi, and spools of gold thread takes between 3 to 6 weeks. We strongly recommend booking your custom slot 2 months before your wedding date.",
  },
  {
    question: "Can I supply my own wedding fabrics?",
    answer: "Yes! You are welcome to ship or drop off your custom raw silks, Banarasi tissues, or designer fabrics. During our 1-on-1 design consultation, we will inspect the fabric weight to ensure it can support the massive Zardozzi or pearl payload without tearing the weaves.",
  },
  {
    question: "What details do you need during a custom order?",
    answer: "We need your exact blouse measurements, detail photos of your wedding saree/lehenga, and an open discussion about your layout ideas (e.g. peacock motifs, initial placements, traditional temple grids). We will sketch out options on paper for your approval first.",
  },
  {
    question: "Do you ship completed outfits internationally?",
    answer: "Yes! We cater to brides globally. We package our heavy handcrafted garments in protective, moisture-proof custom cases to ensure they arrive in flawless condition. International courier timelines and tariffs are mapped out during your consultation.",
  },
  {
    question: "How are payments structured for couture?",
    answer: "To secure your slot and purchase custom raw silk and threads, we require a 50% advance deposit. The final 50% balance is settled upon completion, immediately after we provide detail photos and videos of your finished blouse before courier dispatch.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    occasion: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [openFaqs, setOpenFaqs] = useState<number[]>([]);

  const toggleFaq = (index: number) => {
    if (openFaqs.includes(index)) {
      setOpenFaqs(openFaqs.filter((i) => i !== index));
    } else {
      setOpenFaqs([...openFaqs, index]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API form submission
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", occasion: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-44 pb-28 md:pt-56 md:pb-36 lg:pt-64 lg:pb-44 bg-maroon overflow-hidden">
        <div className="absolute inset-0 embroidery-pattern opacity-10 pointer-events-none" />
        <div className="absolute top-10 left-10 w-72 h-72 bg-rose-gold/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-body text-gold tracking-[0.3em] uppercase text-xs mb-4">
              Get in Touch
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-ivory mb-6">
              Contact QUASAR
            </h1>
            <p className="font-body text-ivory/70 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
              Ready to start co-creating your dream bridal blouse? Connect with our MG Road studio designers directly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Details & Form Section */}
      <section className="py-28 md:py-36 lg:py-44 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24">

            {/* Contact Details */}
            <div className="lg:col-span-2 space-y-12">
              <AnimatedSection direction="left">
                <div className="space-y-6">
                  <p className="font-body text-gold tracking-[0.3em] uppercase text-xs font-semibold">
                    Studio Address
                  </p>
                  <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl text-maroon font-bold leading-tight">
                    Let's Connect
                  </h2>
                  <div className="gold-line max-w-24" />
                </div>
              </AnimatedSection>

              <div className="space-y-8">

                {/* Phone */}
                <AnimatedSection delay={0.05} direction="left">
                  <div className="flex items-start gap-6 bg-white/80 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-gold/15 shadow-[0_8px_30px_rgba(0,0,0,0.02)] hover:border-gold/30 hover:shadow-[0_16px_40px_rgba(122,31,61,0.06)] hover:-translate-y-0.5 transition-all duration-500 ease-out group">
                    <div className="w-12 h-12 rounded-2xl bg-maroon/5 flex items-center justify-center text-maroon shrink-0 group-hover:bg-maroon group-hover:text-gold transition-all duration-500 border border-maroon/5 group-hover:border-maroon">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-heading text-base font-bold text-maroon group-hover:text-maroon-light transition-colors duration-300">Telephone</h4>
                      <p className="font-body text-gray-500 text-sm md:text-base mt-2 font-light">+91 98765 43210</p>
                      <p className="font-body text-gray-400 text-[10px] uppercase mt-1 tracking-widest font-semibold">Mon-Sat, 9AM-6PM IST</p>
                    </div>
                  </div>
                </AnimatedSection>

                {/* Email */}
                <AnimatedSection delay={0.1} direction="left">
                  <div className="flex items-start gap-6 bg-white/80 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-gold/15 shadow-[0_8px_30px_rgba(0,0,0,0.02)] hover:border-gold/30 hover:shadow-[0_16px_40px_rgba(122,31,61,0.06)] hover:-translate-y-0.5 transition-all duration-500 ease-out group">
                    <div className="w-12 h-12 rounded-2xl bg-maroon/5 flex items-center justify-center text-maroon shrink-0 group-hover:bg-maroon group-hover:text-gold transition-all duration-500 border border-maroon/5 group-hover:border-maroon">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-heading text-base font-bold text-maroon group-hover:text-maroon-light transition-colors duration-300">Studio Email</h4>
                      <p className="font-body text-gray-500 text-sm md:text-base mt-2 font-light">hello@quasarstudio.in</p>
                      <p className="font-body text-gray-400 text-[10px] uppercase mt-1 tracking-widest font-semibold">We reply within 24 hours</p>
                    </div>
                  </div>
                </AnimatedSection>

                {/* Studio Location */}
                <AnimatedSection delay={0.15} direction="left">
                  <div className="flex items-start gap-6 bg-white/80 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-gold/15 shadow-[0_8px_30px_rgba(0,0,0,0.02)] hover:border-gold/30 hover:shadow-[0_16px_40px_rgba(122,31,61,0.06)] hover:-translate-y-0.5 transition-all duration-500 ease-out group">
                    <div className="w-12 h-12 rounded-2xl bg-maroon/5 flex items-center justify-center text-maroon shrink-0 group-hover:bg-maroon group-hover:text-gold transition-all duration-500 border border-maroon/5 group-hover:border-maroon">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-heading text-base font-bold text-maroon group-hover:text-maroon-light transition-colors duration-300">Design HQ</h4>
                      <p className="font-body text-gray-500 text-sm md:text-base mt-2 leading-relaxed font-light">
                        QUASAR Designer Studio<br />
                        Second Floor, MG Road<br />
                        Kochi, Kerala 682011
                      </p>
                    </div>
                  </div>
                </AnimatedSection>

                {/* Social channels */}
                <AnimatedSection delay={0.2} direction="left">
                  <div className="flex gap-4 items-center pt-8">
                    <a
                      href="https://wa.me/919876543210"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2.5 py-[18px] px-6 bg-[#25D366]/10 text-[#25D366] rounded-full hover:bg-[#25D366] hover:text-white hover:-translate-y-0.5 active:scale-[0.98] select-none shadow-sm shadow-[#25D366]/5 hover:shadow-lg hover:shadow-[#25D366]/20 transition-all duration-500 ease-out font-body text-xs font-bold border border-[#25D366]/25 tracking-[0.15em] uppercase text-center"
                    >
                      WhatsApp Us
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2.5 py-[18px] px-6 bg-maroon/5 text-maroon rounded-full hover:bg-maroon hover:text-white hover:-translate-y-0.5 active:scale-[0.98] select-none shadow-sm shadow-maroon/5 hover:shadow-lg hover:shadow-maroon/20 transition-all duration-500 ease-out font-body text-xs font-bold border border-gold/25 tracking-[0.15em] uppercase text-center"
                    >
                      Instagram
                    </a>
                  </div>
                </AnimatedSection>

              </div>
            </div>

            {/* Inquiry Form Card */}
            <div className="lg:col-span-3">
              <AnimatedSection direction="right">
                <div className="bg-white/80 backdrop-blur-md rounded-3xl p-10 md:p-14 lg:p-16 border border-gold/15 shadow-[0_15px_40px_rgba(0,0,0,0.02)] space-y-8 md:space-y-10 relative before:absolute before:inset-0 before:bg-gradient-to-tr before:from-transparent before:via-gold/2 before:to-transparent before:opacity-30 before:rounded-3xl before:pointer-events-none">

                  <div className="space-y-3">
                    <h3 className="font-heading text-2xl md:text-3xl text-maroon font-bold">
                      Bespoke Design Inquiry
                    </h3>
                    <p className="font-body text-sm text-gray-400 leading-relaxed">
                      Submit your wedding details below to receive slot availability.
                    </p>
                  </div>

                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-green-50 border border-green-200 rounded-xl"
                    >
                      <p className="font-body text-green-700 text-xs leading-relaxed">
                        Thank you! Your custom bridal design inquiry was recorded. We will review saree detail dates and get back to you shortly.
                      </p>
                    </motion.div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                      <div>
                        <label className="block font-body text-xs text-maroon font-bold mb-3 uppercase tracking-wider">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-6 py-4.5 rounded-2xl border border-gold/25 font-body text-sm text-gray-700 focus:outline-none focus:border-gold focus:ring-4 focus:ring-gold/10 transition-all duration-300 bg-ivory/20 focus:bg-white"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block font-body text-xs text-maroon font-bold mb-3 uppercase tracking-wider">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-6 py-4.5 rounded-2xl border border-gold/25 font-body text-sm text-gray-700 focus:outline-none focus:border-gold focus:ring-4 focus:ring-gold/10 transition-all duration-300 bg-ivory/20 focus:bg-white"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                      <div>
                        <label className="block font-body text-xs text-maroon font-bold mb-3 uppercase tracking-wider">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-6 py-4.5 rounded-2xl border border-gold/25 font-body text-sm text-gray-700 focus:outline-none focus:border-gold focus:ring-4 focus:ring-gold/10 transition-all duration-300 bg-ivory/20 focus:bg-white"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                      <div>
                        <label className="block font-body text-xs text-maroon font-bold mb-3 uppercase tracking-wider">
                          Occasion
                        </label>
                        <select
                          name="occasion"
                          value={formData.occasion}
                          onChange={handleChange}
                          className="w-full px-6 py-4.5 rounded-2xl border border-gold/25 font-body text-sm text-gray-700 focus:outline-none focus:border-gold focus:ring-4 focus:ring-gold/10 transition-all duration-300 bg-ivory/20 focus:bg-white"
                        >
                          <option value="">Select occasion</option>
                          <option value="Bridal Blouse">Bridal Blouse</option>
                          <option value="Saree Border">Saree Border</option>
                          <option value="Lehenga Trousseau">Lehenga Trousseau</option>
                          <option value="Festive wear">Festive / Puja</option>
                          <option value="Custom order">Custom Design</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block font-body text-xs text-maroon font-bold mb-3 uppercase tracking-wider">
                        Describe Your Dream Design *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-6 py-5 rounded-2xl border border-gold/25 font-body text-sm text-gray-700 focus:outline-none focus:border-gold focus:ring-4 focus:ring-gold/10 transition-all duration-300 bg-ivory/20 focus:bg-white resize-none"
                        placeholder="Please detail colors, specific motifs, or wedding date..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.01, y: -2 }}
                      whileTap={{ scale: 0.99 }}
                      className="w-full inline-flex items-center justify-center font-body text-xs tracking-[0.2em] uppercase py-5 px-10 bg-maroon text-ivory rounded-full hover:bg-maroon-light transition-all duration-500 ease-out disabled:opacity-50 font-bold shadow-lg shadow-maroon/15 hover:shadow-xl hover:shadow-maroon-light/25 select-none cursor-pointer"
                    >
                      {isSubmitting ? "Submitting Inquiry..." : "Submit Slot Inquiry"}
                    </motion.button>

                  </form>
                </div>
              </AnimatedSection>
            </div>

          </div>
        </div>
      </section>

      {/* Kochi Location Google Maps Embed */}
      <section className="py-20 md:py-28 lg:py-32 bg-ivory-dark/40 border-t border-b border-gold/15">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <AnimatedSection>
            <div className="w-full h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-md border border-gold/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125743.58394025!2d76.21738005!3d9.93118805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d514abec6bf%3A0xbd582caa5f3f59b!2sKochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="QUASAR Studio Ernakulam Location Map"
                className="grayscale-[20%] contrast-[1.05]"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Grid Section */}
      <section className="py-28 md:py-36 lg:py-44 bg-white relative overflow-hidden">
        {/* Subtle decorative background detail */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/3 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-maroon/2 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative">

          <AnimatedSection>
            <div className="text-center mb-20 md:mb-24 space-y-4">
              <p className="font-body text-gold tracking-[0.3em] uppercase text-xs font-semibold">
                Bespoke FAQs
              </p>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-maroon font-bold leading-tight">
                Frequently Asked Questions
              </h2>
              <div className="gold-line mx-auto max-w-24" />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {faqs.map((faq, index) => {
              const isOpen = openFaqs.includes(index);
              return (
                <AnimatedSection key={index} delay={index * 0.05} className="h-full">
                  <div
                    className={`bg-white/80 backdrop-blur-md rounded-3xl border transition-all duration-500 ease-out shadow-[0_8px_30px_rgba(0,0,0,0.02)] flex flex-col justify-between overflow-hidden relative group ${
                      isOpen
                        ? "border-gold bg-white/95 shadow-[0_20px_50px_rgba(122,31,61,0.06)]"
                        : "border-gold/15 hover:border-gold/30 hover:shadow-[0_16px_40px_rgba(122,31,61,0.04)]"
                    }`}
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full flex items-center justify-between p-8 md:p-10 text-left transition-colors duration-300 select-none cursor-pointer focus:outline-none"
                    >
                      <span className="font-heading text-base md:text-lg font-bold text-maroon pr-8 group-hover:text-maroon-light transition-colors duration-300 leading-tight">
                        {faq.question}
                      </span>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-8 h-8 rounded-full bg-maroon/5 text-maroon flex items-center justify-center shrink-0 group-hover:bg-maroon group-hover:text-gold transition-all duration-300 border border-maroon/5 group-hover:border-maroon"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </motion.div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-8 pb-8 md:px-10 md:pb-10 pt-2 border-t border-gold/10 bg-gold/3">
                            <p className="font-body text-xs md:text-sm text-gray-500 leading-relaxed font-light">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
}

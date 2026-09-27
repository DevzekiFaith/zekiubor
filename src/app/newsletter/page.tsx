'use client';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { motion } from "framer-motion";
import { HiMail, HiCheckCircle } from "react-icons/hi";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return toast.error("Please enter your email");

    setIsSubmitting(true);
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Subscribed to the Architecture Letter!");
        setEmail("");
      } else {
        toast.error(data.error || "Subscription failed. Please try again.");
      }
    } catch (error) {
      toast.error("Connection error. Please check your network.");
    } finally {
      setIsSubmitting(false);
    }
  };
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
  };

  return (
    <div className="min-h-screen bg-[#F5F0E8] text-[#0D1B2A]">
      <style>{`
        @media (max-width: 767px) {
          .container { padding-left: 1.5rem !important; padding-right: 1.5rem !important; }
          .fluid-section { padding-top: 3rem !important; padding-bottom: 3rem !important; }
          .grid.md\\:grid-cols-3 { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .grid.md\\:grid-cols-3 { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
      <Toaster 
        position="top-center" 
        toastOptions={{
          style: {
            background: '#0D1B2A',
            color: '#F5F0E8',
            borderRadius: '0px',
            fontFamily: 'var(--font-inter)',
            fontSize: '14px',
            border: '1px solid rgba(201, 168, 76, 0.3)'
          },
          success: {
            iconTheme: { primary: '#C9A84C', secondary: '#0D1B2A' }
          }
        }} 
      />
      <Header />
      
      <main>
        {/* HERO SECTION */}
        <section className="relative pt-72 pb-24 md:pt-72 md:pb-40 lg:pt-80 overflow-hidden border-b border-[#0D1B2A]/5">
          <div className="container mx-auto fluid-container text-center">
            <motion.div
              className="inline-flex items-center gap-3 px-6 py-2 bg-[#C9A84C]/10 rounded-full mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <HiMail className="w-5 h-5 text-[#C9A84C]" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#C9A84C]">The Weekly Dispatch</span>
            </motion.div>
            <motion.h1 
              className="fluid-h1 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              The Architecture <br />
              <span className="italic uppercase">Letter</span>
            </motion.h1>
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl text-[#0D1B2A]/60 font-light max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Weekly insights on the intersection of identity, mindset, and becoming. Strategic precision delivered to your inbox.
            </motion.p>
          </div>
        </section>

        {/* SUBSCRIPTION SECTION */}
        <section className="fluid-section">
          <div className="container mx-auto fluid-container max-w-4xl">
            <motion.div 
              className="bg-[#0D1B2A] p-8 sm:p-12 md:p-24 shadow-2xl relative overflow-hidden text-center hover-lift"
              {...fadeInUp}
            >
              <h2 className="font-display text-3xl sm:text-4xl text-white mb-8 tracking-tight">Access The Structural <br /> Insights</h2>
              <p className="text-lg sm:text-xl text-white/60 font-light mb-12">
                Join a global community of visionaries who receive high-fidelity strategy every Sunday at 9 PM.
              </p>
              
              <div className="max-w-md mx-auto">
                <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                  <input 
                    type="email" 
                    placeholder="Blueprint Email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-white/5 border-b border-white/20 px-0 py-5 text-[#F5F0E8] focus:border-[#C9A84C] outline-none transition-colors placeholder:text-white/20 font-light"
                  />
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="group w-full flex items-center justify-center gap-4 py-6 bg-[#C9A84C] text-[#0D1B2A] font-bold uppercase tracking-[0.4em] text-xs transition-all duration-300 hover:bg-[#F5F0E8] disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Processing..." : "Subscribe Now"}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </section>

        {/* BENEFITS SECTION */}
        <section className="fluid-section bg-white">
          <div className="container mx-auto fluid-container">
            <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
              {[
                { title: "Structural Logic", desc: "No fluff. Just architectural precision for your mental frameworks." },
                { title: "Practical Becoming", desc: "Actionable protocols for shifting your personal and professional identity." },
                { title: "Inner Circles", desc: "Priority access to upcoming masterclasses and coaching cohorts." }
              ].map((benefit, i) => (
                <motion.div 
                  key={i}
                  className="flex flex-col items-center text-center"
                  {...fadeInUp}
                  transition={{ delay: i * 0.1 }}
                >
                  <HiCheckCircle className="w-8 h-8 text-[#C9A84C] mb-6" />
                  <h3 className="font-display text-2xl mb-4 tracking-tight">{benefit.title}</h3>
                  <p className="text-[#0D1B2A]/60 font-light leading-relaxed">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

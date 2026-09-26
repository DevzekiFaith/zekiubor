'use client';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { motion } from "framer-motion";
import { HiShieldCheck, HiArrowRight, HiCheckCircle } from "react-icons/hi";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { track } from "@vercel/analytics";

export default function Audit() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return toast.error("Please fill in all fields");
    
    // Email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return toast.error("Please enter a valid professional email");
    }

    setIsSubmitting(true);
    try {
      const res = await fetch('/api/audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (res.ok) {
        toast.success("Structural Scan initiated! Starting download...");
        track("audit_download", { email: formData.email, name: formData.name });
        
        // Trigger automatic download of the Audit lead magnet
        const link = document.createElement('a');
        link.href = '/Audit.pdf';
        link.download = 'Architecture_Audit_ZekiUbor.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        setIsDownloaded(true);
      } else {
        toast.error("Failed to initiate scan. Please try again.");
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
    <div className="min-h-screen bg-[#060913] text-[#F5F0E8] selection:bg-[#C9A84C] selection:text-[#060913] relative overflow-hidden">
      {/* Ambient glowing background orbs */}
      <div className="ambient-glow-wrapper">
        <div className="ambient-orb-gold top-[-5%] left-[-10%]" />
        <div className="ambient-orb-blue top-[35%] right-[-15%]" />
        <div className="ambient-orb-purple bottom-[15%] left-[5%]" />
      </div>

      <Toaster 
        position="top-center" 
        toastOptions={{
          style: {
            background: 'rgba(9, 13, 26, 0.85)',
            backdropFilter: 'blur(20px)',
            color: '#F5F0E8',
            borderRadius: '16px',
            fontFamily: 'var(--font-inter)',
            fontSize: '14px',
            border: '1px solid rgba(201, 168, 76, 0.3)',
          },
          success: {
            iconTheme: { primary: '#C9A84C', secondary: '#060913' }
          }
        }} 
      />
      <Header />
      
      <main className="relative z-10">
        {/* HERO SECTION */}
        <section className="relative pt-44 pb-16 md:pt-52 md:pb-24 overflow-hidden">
          <div className="container mx-auto fluid-container text-center">
            <motion.div
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-pill-gold text-xs font-bold uppercase tracking-[0.25em] mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <HiShieldCheck className="w-4 h-4 text-[#C9A84C]" />
              <span>Precision Diagnostic Tool</span>
            </motion.div>

            <motion.h1 
              className="fluid-display mb-8 text-[#F5F0E8]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              The Human <br />
              <span className="text-gold-gradient font-bold uppercase">Architecture</span> <br />
              Audit
            </motion.h1>

            <motion.p 
              className="text-lg sm:text-xl text-[#F5F0E8]/70 font-light max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Discover which of the 5 layers of your human architecture is restricting your impact. A precision self-assessment for founders and visionary leaders.
            </motion.p>
          </div>
        </section>

        {/* AUDIT SCAN TERMINAL */}
        <section className="fluid-section pt-0">
          <div className="container mx-auto fluid-container max-w-3xl">
            <motion.div 
              className="glass-panel-gold p-8 sm:p-14 rounded-3xl border border-white/15 text-center shadow-2xl"
              {...fadeInUp}
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#C9A84C] block mb-3">Diagnostic Terminal</span>
              <h2 className="font-display text-3xl sm:text-4xl mb-4 text-[#F5F0E8]">Initiate Structural Scan</h2>
              <p className="text-sm text-[#F5F0E8]/65 font-light mb-8 max-w-lg mx-auto">
                Enter your details to generate your diagnostic assessment and download the architecture blueprint immediately.
              </p>
              
              {isDownloaded ? (
                <div className="py-8 text-center animate-fade-in-up">
                  <div className="w-14 h-14 rounded-full bg-[#C9A84C]/20 border border-[#C9A84C]/40 flex items-center justify-center mx-auto mb-4 text-[#C9A84C]">
                    <HiCheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[#F5F0E8] mb-2">Diagnostic Blueprint Initiated</h3>
                  <p className="text-sm text-[#F5F0E8]/70 font-light max-w-md mx-auto mb-8">
                    Your assessment PDF has started downloading automatically. If it didn&apos;t start, you can re-trigger below.
                  </p>
                  <a
                    href="/Audit.pdf"
                    download="Architecture_Audit_ZekiUbor.pdf"
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full glass-btn-primary text-xs uppercase tracking-widest font-bold"
                  >
                    <span>Download Blueprint Again</span>
                    <HiArrowRight className="w-4 h-4" />
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
                  <input 
                    type="text" 
                    placeholder="Your Full Name" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    className="glass-input px-5 py-4 rounded-xl text-sm"
                  />
                  <input 
                    type="email" 
                    placeholder="Professional Email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    className="glass-input px-5 py-4 rounded-xl text-sm"
                  />
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl glass-btn-primary text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-3 shadow-xl disabled:opacity-50"
                  >
                    <span>{isSubmitting ? "Generating Assessment..." : "Download The Audit Diagnostic"}</span>
                    <HiArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-[10px] text-center text-[#F5F0E8]/40 uppercase tracking-[0.2em] pt-2">
                    Confidential Assessment • Free Immediate Access
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </section>

        {/* THE 5 LAYERS PREVIEW IN GLASS */}
        <section className="fluid-section">
          <div className="container mx-auto fluid-container text-center">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#C9A84C] block mb-3">Diagnostic Layers</span>
              <h2 className="fluid-h2 text-[#F5F0E8]">The 5 Layers of Potential</h2>
              <p className="text-sm sm:text-base text-[#F5F0E8]/60 font-light mt-3">
                Each layer operates as a load-bearing column for your life and enterprise.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { name: 'Identity', desc: 'The bedrock of who you know yourself to be.' },
                { name: 'Mindset', desc: 'The structural frames carrying your cognitive load.' },
                { name: 'Values', desc: 'The core interior principles guiding all decisions.' },
                { name: 'Systems', desc: 'The operational machinery of your daily execution.' },
                { name: 'Presentation', desc: 'The authoritative facade commanding external interest.' }
              ].map((layer, i) => (
                <motion.div 
                  key={i}
                  className="glass-card p-8 rounded-3xl border border-white/10 flex flex-col justify-between"
                  {...fadeInUp}
                  transition={{ delay: i * 0.1 }}
                >
                  <span className="text-xs font-mono font-bold text-[#C9A84C] mb-4 block tracking-widest">
                    LAYER // 0{i+1}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-[#F5F0E8] mb-2">{layer.name}</h3>
                    <p className="text-xs text-[#F5F0E8]/60 font-light leading-relaxed">{layer.desc}</p>
                  </div>
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

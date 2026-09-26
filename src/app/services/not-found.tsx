'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { HiHome, HiArrowLeft, HiExclamationCircle } from 'react-icons/hi';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#060913] text-[#F5F0E8] relative overflow-hidden">
      {/* Ambient background light */}
      <div className="ambient-glow-wrapper">
        <div className="ambient-orb-gold top-[20%] left-[20%]" />
        <div className="ambient-orb-blue bottom-[20%] right-[20%]" />
      </div>

      <Header />
      
      {/* 404 Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20">
        <div className="container mx-auto fluid-container relative z-10">
          <div className="text-center max-w-2xl mx-auto">
            {/* 404 Icon */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex p-6 rounded-3xl glass-panel text-[#C9A84C]">
                <HiExclamationCircle className="w-16 h-16" />
              </div>
            </motion.div>
            
            {/* 404 Text */}
            <motion.div
              className="mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-7xl md:text-8xl font-display font-bold text-gold-gradient mb-4">
                404
              </h1>
              <h2 className="font-display text-3xl md:text-4xl text-[#F5F0E8] mb-4">
                Pillars Not Found
              </h2>
              <p className="text-sm sm:text-base text-[#F5F0E8]/60 font-light max-w-md mx-auto leading-relaxed">
                The requested blueprint or page could not be located. Let us guide you back to the foundation.
              </p>
            </motion.div>
            
            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link 
                href="/" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full glass-btn-primary text-xs uppercase tracking-widest font-bold shadow-xl"
              >
                <HiHome className="w-4 h-4" />
                <span>Go Home</span>
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full glass-btn-secondary text-xs uppercase tracking-widest font-semibold"
              >
                <HiArrowLeft className="w-4 h-4" />
                <span>Contact Desk</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

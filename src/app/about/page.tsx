"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight, Users, Lightbulb, Target, Globe, Zap, Brain, Building, ChevronRight, ExternalLink } from "lucide-react";

// Logos for the "Built by" and "Supported by" sections
const partnerLogos = [
  { name: "BNY Mellon", logo: "/logos/BNY.png" },
  { name: "IIT Chicago", logo: "/logos/IIT.png" },
  { name: "Kaplan Institute", logo: "/logos/Kl.png" },
  { name: "Persistent Systems", logo: "/logos/P.png" },
];

const investorLogos = [
  { name: "Investor 1", logo: "/images/logos/investor1.svg" },
  { name: "Investor 2", logo: "/images/logos/investor2.svg" },
  { name: "Investor 3", logo: "/images/logos/investor3.svg" },
  { name: "Investor 4", logo: "/images/logos/investor4.svg" },
];

// FAQ items
const faqItems = [
  {
    question: "What is Cortex's mission?",
    answer: "To build a new class of computing—where autonomous agents reason, collaborate, and orchestrate outcomes across fragmented systems, transforming how work gets done."
  },
  {
    question: "What is Cortex's vision?",
    answer: "To build the world's first agentic operating system—where software runs on collaboration, memory, and autonomous execution."
  },
  {
    question: "How does Cortex transform businesses?",
    answer: "Cortex enables businesses to automate complex workflows through intelligent AI agents that can reason, adapt, and collaborate across different systems."
  },
];

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function AboutPage() {
  const [activeSection, setActiveSection] = useState("hero");
  
  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let currentSection = "hero";
      
      sections.forEach(section => {
        // Fix TypeScript error by using getBoundingClientRect
        const sectionRect = section.getBoundingClientRect();
        const sectionTop = sectionRect.top + window.scrollY - 100;
        
        if (window.scrollY >= sectionTop) {
          currentSection = section.id || "";
        }
      });
      
      setActiveSection(currentSection);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <div className="min-h-screen bg-cortex-dark-blue overflow-hidden">
      {/* Floating navigation dots */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
        <div className="flex flex-col gap-4">
          {["hero", "mission", "partners", "investors", "team", "faq"].map((section) => (
            <Link 
              key={section} 
              href={`#${section}`}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${activeSection === section ? 'bg-secondary scale-125' : 'bg-white/30 hover:bg-white/50'}`}
              aria-label={`Scroll to ${section} section`}
            />
          ))}
        </div>
      </div>
      {/* Hero Section with large image */}
      <section id="hero" className="relative h-[90vh] min-h-[700px] flex items-center overflow-hidden">
        {/* Animated background with particles */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-cortex-dark-blue/90 via-cortex-dark-blue/80 to-cortex-dark-blue z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-cortex-dark-blue/80 via-cortex-dark-blue/70 to-cortex-dark-blue/90 bg-cover bg-center opacity-80 scale-105 transform transition-transform duration-10000 animate-slow-zoom"></div>
          
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 opacity-40 mix-blend-overlay">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-secondary/20 via-transparent to-accent/20 animate-gradient-shift"></div>
          </div>
          
          {/* Decorative elements - much more visible */}
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/15 via-transparent to-accent/15 bg-repeat opacity-30 z-5"></div>
          <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-secondary/20 filter blur-[100px] animate-pulse-slow"></div>
          <div className="absolute bottom-1/3 left-1/3 w-80 h-80 rounded-full bg-accent/20 filter blur-[80px] animate-pulse-slow animation-delay-2000"></div>
          
          {/* Floating particles - larger and more visible */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-secondary/50 animate-float"></div>
            <div className="absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-white/40 animate-float animation-delay-1000"></div>
            <div className="absolute bottom-1/4 right-1/4 w-5 h-5 rounded-full bg-accent/50 animate-float animation-delay-2000"></div>
            <div className="absolute bottom-1/3 left-1/3 w-3 h-3 rounded-full bg-white/40 animate-float animation-delay-3000"></div>
            <div className="absolute top-2/3 left-1/2 w-6 h-6 rounded-full bg-secondary/40 animate-float animation-delay-1500"></div>
            <div className="absolute top-1/2 right-1/4 w-4 h-4 rounded-full bg-accent/40 animate-float animation-delay-2500"></div>
          </div>
          
          {/* Grid lines - more visible */}
          <div className="absolute inset-0 opacity-15">
            <div className="absolute top-0 left-1/4 w-px h-full bg-white/50"></div>
            <div className="absolute top-0 left-2/4 w-px h-full bg-white/50"></div>
            <div className="absolute top-0 left-3/4 w-px h-full bg-white/50"></div>
            <div className="absolute top-1/4 left-0 w-full h-px bg-white/50"></div>
            <div className="absolute top-2/4 left-0 w-full h-px bg-white/50"></div>
            <div className="absolute top-3/4 left-0 w-full h-px bg-white/50"></div>
          </div>
        </div>
        
        <div className="container relative z-20 px-4 md:px-6">
          <motion.div 
            className="max-w-3xl"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn} className="mb-3">
              <span className="inline-block py-1 px-3 rounded-full bg-secondary/10 text-secondary text-sm font-medium tracking-wider mb-4">ABOUT CORTEX</span>
            </motion.div>
            
            <motion.h1 
              variants={fadeIn}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white/95 to-white/80">Creating the Future</span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary via-secondary/90 to-accent/90">of Computing</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeIn}
              className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed max-w-2xl font-light"
            >
              Built for a world where AI agents transform how work gets done
            </motion.p>
            
            <motion.div 
              variants={fadeIn}
              className="flex flex-wrap gap-4"
            >
              <Button 
                asChild 
                size="lg" 
                className="bg-secondary hover:bg-secondary/90 text-white text-lg group relative overflow-hidden"
              >
                <Link href="/contact" className="flex items-center">
                  <span className="relative z-10 flex items-center">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                </Link>
              </Button>
              
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="border-secondary/50 text-white hover:bg-secondary/10 text-lg group"
              >
                <Link href="#mission" className="flex items-center">
                  Learn More
                  <ChevronRight className="ml-1 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
            
            {/* Scroll indicator */}
            <motion.div 
              variants={fadeIn}
              className="absolute bottom-12 left-1/2 transform -translate-x-1/2 md:flex flex-col items-center text-white/50 animate-bounce-slow hidden"
            >
              <span className="text-xs uppercase tracking-widest mb-2">Scroll</span>
              <ChevronRight className="h-5 w-5 transform rotate-90" />
            </motion.div>
          </motion.div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute right-0 top-1/4 w-64 h-64 bg-secondary/5 rounded-full filter blur-[100px] animate-pulse-slow"></div>
        <div className="absolute left-1/4 bottom-1/4 w-48 h-48 bg-accent/5 rounded-full filter blur-[80px] animate-pulse-slow animation-delay-2000"></div>
      </section>

      {/* Mission & Vision Section with modern design */}
      <section id="mission" className="py-24 md:py-32 relative overflow-hidden">
        {/* Subtle background effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 left-1/4 w-96 h-96 bg-secondary/5 rounded-full filter blur-[100px]"></div>
          <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-accent/5 rounded-full filter blur-[100px]"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-accent/5 bg-repeat opacity-10"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              {/* Mission */}
              <motion.div variants={fadeIn}>
                <div className="inline-flex items-center justify-center mb-6">
                  <span className="py-1 px-3 rounded-full bg-secondary/10 text-secondary text-sm font-semibold tracking-wider uppercase">Our Mission</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white leading-tight">
                  Build a new class of computing
                </h2>
                <div className="bg-gradient-to-r from-secondary/40 to-accent/40 h-1 w-32 mb-8"></div>
                <p className="text-xl text-white/80 leading-relaxed mb-10 max-w-xl">
                  To build a new class of computing—where autonomous agents reason, collaborate, and orchestrate outcomes across fragmented systems, transforming how work gets done.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                  <div className="group hover:-translate-y-1 transition-transform duration-300 cursor-default">
                    <div className="flex-shrink-0 p-3 bg-secondary/10 rounded-full w-14 h-14 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors duration-300">
                      <Brain className="h-7 w-7 text-secondary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-secondary transition-colors duration-300">Reason</h3>
                    <p className="text-white/70">Autonomous agents that adapt and learn</p>
                  </div>
                  
                  <div className="group hover:-translate-y-1 transition-transform duration-300 cursor-default">
                    <div className="flex-shrink-0 p-3 bg-secondary/10 rounded-full w-14 h-14 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors duration-300">
                      <Users className="h-7 w-7 text-secondary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-secondary transition-colors duration-300">Collaborate</h3>
                    <p className="text-white/70">Systems that work together seamlessly</p>
                  </div>
                  
                  <div className="group hover:-translate-y-1 transition-transform duration-300 cursor-default">
                    <div className="flex-shrink-0 p-3 bg-secondary/10 rounded-full w-14 h-14 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors duration-300">
                      <Zap className="h-7 w-7 text-secondary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-secondary transition-colors duration-300">Orchestrate</h3>
                    <p className="text-white/70">Delivering outcomes across systems</p>
                  </div>
                </div>
              </motion.div>

              {/* Vision with image */}
              <motion.div variants={fadeIn} className="relative">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl group bg-cortex-dark-blue/80">
                  <div className="absolute inset-0 bg-gradient-to-tr from-cortex-dark-blue via-cortex-dark-blue/90 to-cortex-dark-blue/70 z-10 group-hover:opacity-90 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 overflow-hidden">
                    <Image 
                      src="/images/FK.gif" 
                      alt="Vision Image" 
                      fill 
                      unoptimized
                      className="object-cover opacity-15 group-hover:opacity-20 transition-all duration-500"
                    />
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-8 z-20 transform transition-transform duration-500 group-hover:translate-y-0 translate-y-2">
                    <div className="inline-flex items-center justify-center mb-4">
                      <span className="py-1 px-3 rounded-full bg-secondary/20 text-secondary text-sm font-semibold tracking-wider uppercase">Our Vision</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                      The world's first agentic operating system
                    </h2>
                    <div className="h-0.5 w-16 bg-secondary/50 mb-4"></div>
                    <p className="text-white/90 leading-relaxed max-w-lg">
                      Where software runs on collaboration, memory, and autonomous execution.
                    </p>
                  </div>
                </div>
                
                {/* Floating decorative elements */}
                <div className="absolute -top-8 -right-8 w-16 h-16 rounded-full border border-secondary/20 z-30 hidden lg:block"></div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full border border-accent/20 z-30 hidden lg:block"></div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Built by section */}
      <section id="partners" className="py-20 md:py-28 bg-cortex-dark-blue/50 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-secondary/5 rounded-full filter blur-[80px]"></div>
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-accent/5 rounded-full filter blur-[100px]"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <motion.div 
            className="max-w-7xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn} className="text-center mb-16">
              <span className="inline-block py-1 px-3 rounded-full bg-secondary/10 text-secondary text-sm font-medium tracking-wider mb-4">OUR TEAM</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Built by former bankers and AI experts</h2>
              <div className="h-1 w-24 bg-gradient-to-r from-secondary/40 to-accent/40 mx-auto"></div>
            </motion.div>
            
            <motion.div 
              variants={staggerContainer}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center"
            >
              {partnerLogos.map((partner, index) => (
                <motion.div 
                  key={index} 
                  variants={fadeIn}
                  className="bg-white/20 hover:bg-white/30 p-6 rounded-xl h-28 w-full flex items-center justify-center border border-white/20 hover:border-secondary/40 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-secondary/15 group"
                >
                  <div className="relative h-16 w-full flex items-center justify-center bg-white/10 rounded-lg p-2">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={120}
                      height={60}
                      className="object-contain max-h-16 opacity-100 brightness-125 contrast-125 saturate-125 filter drop-shadow-md group-hover:scale-105 transition-all duration-300"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* Supported by investors - Commented out for now as requested, but code preserved for future use */}
      {/* 
      <section id="investors" className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 border border-secondary/10 rounded-full opacity-20"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 border border-accent/10 rounded-full opacity-20"></div>
        
        <div className="container px-4 md:px-6 relative z-10">
          <motion.div 
            className="max-w-7xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn} className="text-center mb-16">
              <span className="inline-block py-1 px-3 rounded-full bg-secondary/10 text-secondary text-sm font-medium tracking-wider mb-4">INVESTORS</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Supported by world-class investors</h2>
              <div className="h-1 w-24 bg-gradient-to-r from-secondary/40 to-accent/40 mx-auto"></div>
              <p className="text-white/70 max-w-2xl mx-auto mt-6">Our vision is backed by leading investors who believe in the future of autonomous computing</p>
            </motion.div>
            
            <motion.div 
              variants={staggerContainer}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center"
            >
              {investorLogos.map((investor, index) => (
                <motion.div 
                  key={index} 
                  variants={fadeIn}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/5 p-6 rounded-xl h-28 w-full flex items-center justify-center border border-white/5 transition-all duration-300 hover:border-secondary/20 hover:shadow-lg hover:shadow-secondary/5"
                >
                  <div className="text-white/80 hover:text-white font-semibold text-lg transition-colors duration-300">{investor.name}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
      */}

      {/* Join our team section */}
      <section id="team" className="py-20 md:py-28 bg-cortex-dark-blue/50 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -bottom-20 right-0 w-96 h-96 bg-secondary/5 rounded-full filter blur-[100px]"></div>
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-accent/5 rounded-full filter blur-[80px]"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-accent/5 bg-repeat opacity-10"></div>
        </div>
        
        <div className="container px-4 md:px-6 relative z-10">
          <motion.div 
            className="max-w-7xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div variants={fadeIn}>
                <span className="inline-block py-1 px-3 rounded-full bg-secondary/10 text-secondary text-sm font-medium tracking-wider mb-4">CAREERS</span>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">Join a world-class team redefining computing</h2>
                <div className="h-1 w-24 bg-gradient-to-r from-secondary/40 to-accent/40 mb-8"></div>
                <p className="text-lg text-white/80 mb-10 leading-relaxed max-w-xl">
                  We're looking for exceptional talent to help us build the future of autonomous computing. Join us in creating technology that will transform how work gets done.
                </p>
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-secondary hover:bg-secondary/90 text-white group relative overflow-hidden"
                >
                  <Link href="/careers" className="flex items-center">
                    <span className="relative z-10 flex items-center">
                      View Open Positions
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                    <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                  </Link>
                </Button>
              </motion.div>
              
              <motion.div 
                variants={fadeIn} 
                className="relative rounded-xl overflow-hidden aspect-video group"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-cortex-dark-blue/80 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-cortex-dark-blue/70 to-accent/10 bg-cover bg-center group-hover:scale-105 transition-transform duration-7000"></div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 border border-secondary/30 rounded-full z-20"></div>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 border border-accent/30 rounded-full z-20"></div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-secondary/5 rounded-full filter blur-[80px]"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-accent/5 rounded-full filter blur-[100px]"></div>
        </div>
        
        <div className="container px-4 md:px-6 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn} className="text-center mb-16">
              <span className="inline-block py-1 px-3 rounded-full bg-secondary/10 text-secondary text-sm font-medium tracking-wider mb-4">FAQ</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Frequently asked questions</h2>
              <div className="h-1 w-24 bg-gradient-to-r from-secondary/40 to-accent/40 mx-auto"></div>
            </motion.div>
            
            <motion.div variants={staggerContainer} className="space-y-8">
              {faqItems.map((item, index) => (
                <motion.div 
                  key={index} 
                  variants={fadeIn}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-secondary/20 transition-colors duration-300 group"
                >
                  <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-secondary transition-colors duration-300">{item.question}</h3>
                  <div className="h-px w-full bg-white/10 mb-4 group-hover:bg-secondary/20 transition-colors duration-300"></div>
                  <p className="text-white/70 group-hover:text-white/80 transition-colors duration-300">{item.answer}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-36 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-cortex-dark-blue via-cortex-dark-blue/95 to-cortex-dark-blue/90 z-0"></div>
        
        {/* Animated gradient background */}
        <div className="absolute inset-0 opacity-30 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-transparent to-accent/20 animate-gradient-shift"></div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full filter blur-[120px]"></div>
        <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-accent/5 rounded-full filter blur-[100px]"></div>
        
        <div className="container px-4 md:px-6 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn} className="text-center">
              <span className="inline-block py-1 px-3 rounded-full bg-secondary/10 text-secondary text-sm font-medium tracking-wider mb-6">GET STARTED</span>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white leading-tight">
                Ready to transform how<br className="hidden md:block" /> work gets done?
              </h2>
              <motion.div 
                variants={fadeIn}
                className="h-1 w-24 bg-gradient-to-r from-secondary/40 to-accent/40 mx-auto mb-8"
              ></motion.div>
              <motion.p 
                variants={fadeIn}
                className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto font-light"
              >
                Join us in building the future of autonomous computing.
              </motion.p>
              <motion.div 
                variants={fadeIn}
                className="flex flex-col sm:flex-row gap-6 justify-center"
              >
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-secondary hover:bg-secondary/90 text-white text-lg px-8 py-6 rounded-xl group relative overflow-hidden"
                >
                  <Link href="/contact" className="flex items-center">
                    <span className="relative z-10 flex items-center">
                      Get Started Today
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                    <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                  </Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg" 
                  className="border-secondary/50 text-white hover:bg-secondary/10 text-lg px-8 py-6 rounded-xl group"
                >
                  <Link href="/products" className="flex items-center">
                    Explore Our Products
                    <ArrowUpRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" } 
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

export default function SecurityPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero section - Different layout from homepage */}
      <section className="relative min-h-[90vh] overflow-hidden">
        {/* Modern animated gradient background - Different pattern */}
        <div className="absolute inset-0 bg-gradient-to-tl from-cortex-dark via-cortex-dark-blue to-cortex-dark z-0">
          <div className="absolute inset-0 opacity-30 mix-blend-soft-light">
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_70%_30%,rgba(88,160,194,0.3),transparent_60%)]">
            </div>
            <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(88,160,194,0.2),transparent_50%)]">
            </div>
          </div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary/10 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-accent/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Decorative elements - Different pattern */}
        <div className="absolute top-20 right-10 w-24 h-24 border border-secondary/20 rounded-lg rotate-45"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 border border-secondary/20 rounded-lg rotate-12"></div>
        <div className="absolute top-1/3 left-1/4 w-16 h-16 border border-secondary/20 rounded-lg rotate-45"></div>

        {/* Content with different layout */}
        <div className="container relative z-10 px-4 md:px-6 pt-32 md:pt-40 pb-20">
          {/* Security shield graphic at top */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mx-auto mb-12 w-24 h-24 md:w-32 md:h-32 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-secondary to-accent rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute inset-2 bg-cortex-dark-blue/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/10">
              <svg xmlns="http://www.w3.org/2000/svg" width="50%" height="50%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                <path d="M12 8v4"></path>
                <path d="M12 16h.01"></path>
              </svg>
            </div>
          </motion.div>
          
          {/* Centered title and text - different from homepage's left-aligned approach */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            {/* Coming soon badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="inline-block mb-6"
            >
              <div className="bg-secondary/10 backdrop-blur-sm border border-secondary/20 rounded-full px-4 py-1 text-xs font-medium text-secondary inline-flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                </span>
                <span><strong>Coming Soon</strong> — We're enhancing our security features</span>
              </div>
            </motion.div>
            
            {/* Accent line */}
            <div className="w-20 h-1 bg-secondary rounded-full mx-auto mb-6"></div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif leading-tight tracking-tight mb-6">
              <span className="text-white">Security at</span>{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent">Cortex</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              We've built enterprise-grade security into every layer of our platform, ensuring your sensitive financial data remains protected while AI drives your business forward.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 pt-4 justify-center">
              <Button
                size="lg"
                className="bg-secondary text-white hover:bg-secondary/90 rounded-lg text-base px-8 py-6 h-auto font-medium"
                asChild
              >
                <Link href="/contact">Book A Demo</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 rounded-lg text-base px-8 py-6 h-auto font-medium"
                asChild
              >
                <Link href="/use-cases">Learn more</Link>
              </Button>
            </div>
          </motion.div>
          
          {/* Security cards in horizontal layout - different from homepage's vertical card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12"
          >
            <div className="bg-cortex-dark-blue/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 shadow-xl hover:bg-cortex-dark-blue/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-white mb-2 text-center">No Training on Your Data</h3>
              <p className="text-muted-foreground text-center text-sm">
                Your data is never used to train our AI models or shared with third parties.
              </p>
            </div>
            
            <div className="bg-cortex-dark-blue/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 shadow-xl hover:bg-cortex-dark-blue/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-white mb-2 text-center">End-to-End Encryption</h3>
              <p className="text-muted-foreground text-center text-sm">
                256-bit AES encryption protects your data both at rest and in transit.
              </p>
            </div>
            
            <div className="bg-cortex-dark-blue/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 shadow-xl hover:bg-cortex-dark-blue/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                  <path d="M12 8v4"></path>
                  <path d="M12 16h.01"></path>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-white mb-2 text-center">Compliance Ready</h3>
              <p className="text-muted-foreground text-center text-sm">
                Built to meet SOC 2, CCPA, GDPR, and other regulatory requirements.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certification logos - Different horizontal bar layout */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-cortex-dark-blue to-cortex-dark">
        <div className="container px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h3 className="text-xl md:text-2xl font-serif mb-2">Compliant with Industry Standards</h3>
            <p className="text-muted-foreground text-sm max-w-2xl mx-auto">Our security infrastructure and practices meet or exceed the most rigorous standards in the industry</p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-8 max-w-4xl mx-auto"
          >
            <motion.div variants={fadeIn} className="flex flex-col items-center">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-md border border-secondary/30 bg-cortex-dark-blue/50 flex items-center justify-center mb-2 shadow-lg shadow-secondary/5 hover:border-secondary/50 transition-all duration-300">
                <span className="text-sm font-medium">SOC 2</span>
              </div>
              <span className="text-xs text-muted-foreground hidden md:block">SOC 2</span>
            </motion.div>
            
            <motion.div variants={fadeIn} className="flex flex-col items-center">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-md border border-secondary/30 bg-cortex-dark-blue/50 flex items-center justify-center mb-2 shadow-lg shadow-secondary/5 hover:border-secondary/50 transition-all duration-300">
                <span className="text-sm font-medium">CCPA</span>
              </div>
              <span className="text-xs text-muted-foreground hidden md:block">CCPA</span>
            </motion.div>
            
            <motion.div variants={fadeIn} className="flex flex-col items-center">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-md border border-secondary/30 bg-cortex-dark-blue/50 flex items-center justify-center mb-2 shadow-lg shadow-secondary/5 hover:border-secondary/50 transition-all duration-300">
                <span className="text-sm font-medium">GDPR</span>
              </div>
              <span className="text-xs text-muted-foreground hidden md:block">GDPR</span>
            </motion.div>
            
            <motion.div variants={fadeIn} className="flex flex-col items-center">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-md border border-secondary/30 bg-cortex-dark-blue/50 flex items-center justify-center mb-2 shadow-lg shadow-secondary/5 hover:border-secondary/50 transition-all duration-300">
                <span className="text-sm font-medium">HIPAA</span>
              </div>
              <span className="text-xs text-muted-foreground hidden md:block">HIPAA</span>
            </motion.div>
            
            <motion.div variants={fadeIn} className="flex flex-col items-center">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-md border border-secondary/30 bg-cortex-dark-blue/50 flex items-center justify-center mb-2 shadow-lg shadow-secondary/5 hover:border-secondary/50 transition-all duration-300">
                <span className="text-sm font-medium">ISO</span>
              </div>
              <span className="text-xs text-muted-foreground hidden md:block">ISO 27001</span>
            </motion.div>
            
            <motion.div variants={fadeIn} className="flex flex-col items-center">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-md border border-secondary/30 bg-cortex-dark-blue/50 flex items-center justify-center mb-2 shadow-lg shadow-secondary/5 hover:border-secondary/50 transition-all duration-300">
                <span className="text-sm font-medium">PCI</span>
              </div>
              <span className="text-xs text-muted-foreground hidden md:block">PCI DSS</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main content - Different zigzag layout */}
      <section className="py-16 md:py-32 relative overflow-hidden">
        {/* Background elements - Different pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-secondary/10 rounded-lg rotate-45 filter blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-lg rotate-12 filter blur-3xl"></div>
        </div>
        
        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <div className="w-12 h-1 bg-secondary rounded-full mx-auto mb-6"></div>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
              Security by Design
            </h2>
            <p className="text-muted-foreground text-lg">
              Our security architecture is built into every layer of the Cortex platform, ensuring your data remains protected while AI accelerates your business.
            </p>
          </motion.div>

          {/* Zigzag layout - different from homepage's grid */}
          {/* Feature 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center gap-8 mb-20"
          >
            <div className="md:w-1/2 order-2 md:order-1">
              <div className="p-1 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-2xl">
                <div className="bg-cortex-dark-blue/60 backdrop-blur-sm p-8 rounded-xl">
                  <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-serif mb-4">Data Privacy Guarantee</h3>
                  <p className="text-muted-foreground mb-6">
                    Your data is never used to train our AI models or shared with third parties. We maintain strict isolation between clients and implement comprehensive access controls.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary mt-1">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-sm text-muted-foreground">No training on customer data</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary mt-1">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-sm text-muted-foreground">Complete data isolation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary mt-1">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-sm text-muted-foreground">Client-specific deployment options</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-secondary/30 to-accent/30 rounded-2xl blur-lg opacity-50"></div>
                <div className="relative bg-cortex-dark-blue/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 shadow-xl">
                  <div className="aspect-video bg-cortex-dark-blue/80 rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-secondary/40">
                      <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Feature 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col md:flex-row items-center gap-8 mb-20"
          >
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-secondary/30 to-accent/30 rounded-2xl blur-lg opacity-50"></div>
                <div className="relative bg-cortex-dark-blue/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 shadow-xl">
                  <div className="aspect-video bg-cortex-dark-blue/80 rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-secondary/40">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="p-1 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-2xl">
                <div className="bg-cortex-dark-blue/60 backdrop-blur-sm p-8 rounded-xl">
                  <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-serif mb-4">Enterprise-Grade Encryption</h3>
                  <p className="text-muted-foreground mb-6">
                    We implement 256-bit AES encryption for all data at rest and in transit, with a comprehensive key management system that ensures only authorized access.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary mt-1">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-sm text-muted-foreground">256-bit AES encryption</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary mt-1">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-sm text-muted-foreground">TLS 1.3 for all communications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary mt-1">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-sm text-muted-foreground">Secure key management</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Feature 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col md:flex-row items-center gap-8"
          >
            <div className="md:w-1/2 order-2 md:order-1">
              <div className="p-1 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-2xl">
                <div className="bg-cortex-dark-blue/60 backdrop-blur-sm p-8 rounded-xl">
                  <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                      <path d="M12 8v4"></path>
                      <path d="M12 16h.01"></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-serif mb-4">Comprehensive Compliance</h3>
                  <p className="text-muted-foreground mb-6">
                    Our security infrastructure is designed to meet or exceed the most stringent regulatory requirements, with continuous monitoring and regular audits.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary mt-1">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-sm text-muted-foreground">SOC 2 Type II certified</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary mt-1">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-sm text-muted-foreground">GDPR and CCPA compliant</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary mt-1">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-sm text-muted-foreground">Regular penetration testing</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-secondary/30 to-accent/30 rounded-2xl blur-lg opacity-50"></div>
                <div className="relative bg-cortex-dark-blue/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 shadow-xl">
                  <div className="aspect-video bg-cortex-dark-blue/80 rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-secondary/40">
                      <path d="M12 2a10 10 0 1 0 10 10H12V2z"></path>
                      <path d="M21.18 8.02A10 10 0 0 0 12 2v10h10a10 10 0 0 0-.82-3.98z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Data protection - Card-based layout */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-cortex-dark-blue/50 to-cortex-dark/80 backdrop-blur-sm relative overflow-hidden">
        {/* Background decorative elements - Different pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,rgba(88,160,194,0.2),transparent_70%)]"></div>
          <div className="absolute -top-1/2 -left-1/4 w-96 h-96 rounded-lg rotate-12 border border-secondary/20"></div>
          <div className="absolute -bottom-1/2 -right-1/4 w-96 h-96 rounded-lg rotate-45 border border-secondary/20"></div>
        </div>
        
        <div className="container px-4 md:px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="w-12 h-1 bg-secondary rounded-full mx-auto mb-6"></div>
            <p className="text-sm text-secondary uppercase tracking-wider mb-2">Data protection</p>
            <h2 className="text-3xl md:text-4xl font-serif mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
              Your sensitive data is protected
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We safeguard your sensitive information with advanced security measures, ensuring end-to-end encryption, strict access controls, and compliance with the highest industry standards.
            </p>
          </motion.div>
          
          {/* Card-based layout - different from homepage */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <div className="bg-cortex-dark-blue/60 backdrop-blur-sm border border-white/10 rounded-xl p-6 shadow-xl hover:border-secondary/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-white">Data Isolation</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Complete isolation between customer environments with dedicated resources and strict access controls.
              </p>
            </div>
            
            <div className="bg-cortex-dark-blue/60 backdrop-blur-sm border border-white/10 rounded-xl p-6 shadow-xl hover:border-secondary/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-white">Encryption</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                All data encrypted at rest and in transit using industry-standard 256-bit AES encryption protocols.
              </p>
            </div>
            
            <div className="bg-cortex-dark-blue/60 backdrop-blur-sm border border-white/10 rounded-xl p-6 shadow-xl hover:border-secondary/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                    <path d="M12 8v4"></path>
                    <path d="M12 16h.01"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-white">Access Control</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Granular role-based access controls with multi-factor authentication and detailed audit logging.
              </p>
            </div>
            
            <div className="bg-cortex-dark-blue/60 backdrop-blur-sm border border-white/10 rounded-xl p-6 shadow-xl hover:border-secondary/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
                    <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-white">Monitoring</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                24/7 security monitoring with automated threat detection and incident response protocols.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cloud security - Split with image placeholder */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Background decorative elements - Different pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,rgba(88,160,194,0.2),transparent_70%)]"></div>
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-secondary/5 rounded-lg rotate-12 filter blur-3xl"></div>
        </div>
        
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="w-12 h-1 bg-secondary rounded-full mb-6"></div>
              <p className="text-sm text-secondary uppercase tracking-wider mb-2">Cloud security</p>
              <h2 className="text-3xl md:text-4xl font-serif mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                Enterprise-grade cloud infrastructure
              </h2>
              <p className="text-lg text-muted-foreground">
                Cortex is built on a secure, scalable foundation, leveraging AWS and Azure for enterprise-grade cloud protection. With zero-trust architecture, end-to-end encryption, and continuous monitoring, your data stays safe from unauthorized access and threats.
              </p>
              
              <div className="pt-4 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-white">Zero-Trust Architecture</h3>
                    <p className="text-sm text-muted-foreground">Every access request is fully authenticated, authorized, and encrypted.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-white">Private Cloud Options</h3>
                    <p className="text-sm text-muted-foreground">Deploy in your own VPC or use our secure managed cloud environment.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-white">Continuous Monitoring</h3>
                    <p className="text-sm text-muted-foreground">Real-time threat detection and automated incident response.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-secondary/30 to-accent/30 rounded-2xl blur-lg opacity-50"></div>
              <div className="relative bg-cortex-dark-blue/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 shadow-xl">
                <div className="aspect-video bg-cortex-dark-blue/80 rounded-lg flex items-center justify-center">
                  <div className="w-24 h-24 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary to-accent rounded-full opacity-20 animate-pulse"></div>
                    <div className="absolute inset-2 bg-cortex-dark-blue/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/10">
                      <svg xmlns="http://www.w3.org/2000/svg" width="50%" height="50%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
                        <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                        <path d="M2 17l10 5 10-5"></path>
                        <path d="M2 12l10 5 10-5"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-3">
                  <div className="bg-cortex-dark-blue/60 backdrop-blur-sm border border-white/5 rounded-lg p-3 flex flex-col items-center justify-center">
                    <span className="text-xs text-muted-foreground mb-1">Provider</span>
                    <span className="text-sm font-medium">AWS</span>
                  </div>
                  <div className="bg-cortex-dark-blue/60 backdrop-blur-sm border border-white/5 rounded-lg p-3 flex flex-col items-center justify-center">
                    <span className="text-xs text-muted-foreground mb-1">Provider</span>
                    <span className="text-sm font-medium">Azure</span>
                  </div>
                  <div className="bg-cortex-dark-blue/60 backdrop-blur-sm border border-white/5 rounded-lg p-3 flex flex-col items-center justify-center">
                    <span className="text-xs text-muted-foreground mb-1">Option</span>
                    <span className="text-sm font-medium">Private VPC</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ section - Tabbed layout */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-cortex-dark-blue/50 to-cortex-dark/80 backdrop-blur-sm relative overflow-hidden">
        {/* Background decorative elements - Different pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(135deg,rgba(88,160,194,0.1)_0%,transparent_50%,rgba(88,160,194,0.1)_100%)]"></div>
          <div className="absolute -top-1/4 -left-1/4 w-96 h-96 rounded-lg rotate-12 border border-secondary/20"></div>
          <div className="absolute -bottom-1/4 -right-1/4 w-96 h-96 rounded-lg -rotate-12 border border-secondary/20"></div>
        </div>
        
        <div className="container px-4 md:px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="w-12 h-1 bg-secondary rounded-full mx-auto mb-6"></div>
            <p className="text-sm text-secondary uppercase tracking-wider mb-2">Security FAQs</p>
            <h2 className="text-3xl md:text-4xl font-serif mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
              Security questions answered
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get answers to the most common questions about our security practices and data protection measures.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            {/* Tabbed card layout - different from homepage */}
            <div className="bg-cortex-dark-blue/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="bg-cortex-dark-blue/60 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-secondary/30 transition-all duration-300">
                    <h3 className="text-xl font-serif mb-3 flex items-center">
                      <span className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center mr-3 shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                        </svg>
                      </span>
                      How does Cortex protect my sensitive financial data?
                    </h3>
                    <p className="text-muted-foreground">
                      Cortex employs end-to-end encryption, secure cloud infrastructure, and strict access controls to protect your sensitive financial data. All information is encrypted both in transit and at rest using industry-standard protocols, and we maintain compliance with financial security regulations.
                    </p>
                  </div>
                  
                  <div className="bg-cortex-dark-blue/60 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-secondary/30 transition-all duration-300">
                    <h3 className="text-xl font-serif mb-3 flex items-center">
                      <span className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center mr-3 shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                          <path d="M12 8v4"></path>
                          <path d="M12 16h.01"></path>
                        </svg>
                      </span>
                      What security certifications does Cortex have?
                    </h3>
                    <p className="text-muted-foreground">
                      Cortex maintains SOC 2 Type II compliance and adheres to GDPR, CCPA, and other relevant data protection regulations. Our security practices are regularly audited by independent third parties to ensure the highest standards of data protection.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-cortex-dark-blue/60 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-secondary/30 transition-all duration-300">
                    <h3 className="text-xl font-serif mb-3 flex items-center">
                      <span className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center mr-3 shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
                          <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>
                        </svg>
                      </span>
                      Can I deploy Cortex in my own private cloud environment?
                    </h3>
                    <p className="text-muted-foreground">
                      Yes, Cortex offers deployment options for private cloud environments, including AWS and Azure. Our team can work with you to set up a secure, dedicated instance that meets your specific security and compliance requirements.
                    </p>
                  </div>
                  
                  <div className="bg-cortex-dark-blue/60 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-secondary/30 transition-all duration-300">
                    <h3 className="text-xl font-serif mb-3 flex items-center">
                      <span className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center mr-3 shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
                          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                        </svg>
                      </span>
                      How does Cortex handle data access and user permissions?
                    </h3>
                    <p className="text-muted-foreground">
                      Cortex implements role-based access controls (RBAC) that allow administrators to define precisely who can access what data and functionality. We support multi-factor authentication, single sign-on integration, and detailed audit logging to track all system access and changes.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <Button variant="secondary" className="rounded-full">
                  View security whitepaper
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA section - Security focused with shield graphic */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cortex-dark-blue/30 to-cortex-dark/50 backdrop-blur-sm"></div>
        
        {/* Background decorative elements - Different pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(88,160,194,0.3),transparent_70%)]"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[conic-gradient(from_0deg_at_50%_50%,rgba(88,160,194,0.1)_0deg,transparent_60deg,rgba(88,160,194,0.1)_120deg,transparent_180deg,rgba(88,160,194,0.1)_240deg,transparent_300deg,rgba(88,160,194,0.1)_360deg)] animate-slow-spin"></div>
        </div>
        
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-2xl blur-lg opacity-50"></div>
              <div className="relative bg-cortex-dark-blue/40 backdrop-blur-sm border border-white/10 rounded-xl p-8 shadow-xl">
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-16 h-16 relative flex-shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary to-accent rounded-full opacity-20 animate-pulse"></div>
                    <div className="absolute inset-1 bg-cortex-dark-blue/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/10">
                      <svg xmlns="http://www.w3.org/2000/svg" width="50%" height="50%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                        <path d="M12 8v4"></path>
                        <path d="M12 16h.01"></path>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif">Enterprise Security</h3>
                    <p className="text-muted-foreground">Bank-grade protection for your financial data</p>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <p className="text-muted-foreground">End-to-end encryption for all data</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <p className="text-muted-foreground">SOC 2 Type II and GDPR compliant</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <p className="text-muted-foreground">24/7 security monitoring and incident response</p>
                  </li>
                </ul>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="rounded-full w-full sm:w-auto" asChild>
                    <Link href="/contact">
                      Get started
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-serif mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                Ready to experience secure financial analysis?
              </h2>
              <p className="text-xl text-muted-foreground">
                Join thousands of financial professionals who trust Cortex with their sensitive data. Our enterprise-grade security ensures your information remains protected at all times.
              </p>
              
              <div className="pt-4 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">Dedicated Security Team</h3>
                    <p className="text-muted-foreground">Our security experts are available to address your concerns and provide guidance on implementation.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                      <path d="M12 8v4"></path>
                      <path d="M12 16h.01"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">Security Whitepaper</h3>
                    <p className="text-muted-foreground">Download our detailed security whitepaper to learn more about our robust security measures.</p>
                  </div>
                </div>
                
                <div className="pt-4">
                  <Button variant="outline" size="lg" className="rounded-full" asChild>
                    <Link href="/contact">Schedule a security consultation</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

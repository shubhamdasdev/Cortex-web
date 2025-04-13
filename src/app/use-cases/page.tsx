"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState } from "react";

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

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" } 
  },
  hover: {
    y: -10,
    boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.3)",
    transition: { duration: 0.3 }
  }
};

const AnimatedSection = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeIn}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function UseCasesPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div className="overflow-hidden">
      {/* Hero section - Asymmetric split layout */}
      <section className="relative min-h-[90vh] pt-12 md:pt-16 lg:pt-20 overflow-hidden" ref={heroRef}>
        {/* Background elements - Hexagonal pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(88,160,194,0.2),transparent_60%)]">
          </div>
          <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] bg-[conic-gradient(from_45deg_at_50%_50%,rgba(88,160,194,0.15)_0deg,transparent_60deg,rgba(88,160,194,0.15)_120deg,transparent_180deg,rgba(88,160,194,0.15)_240deg,transparent_300deg,rgba(88,160,194,0.15)_360deg)]">
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-[30vh] bg-gradient-to-t from-background to-transparent"></div>
          
          {/* Decorative hexagon grid */}
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(5) rotate(0)">
                  <path d="M25,0 L50,14.3 L50,38.4 L25,50 L0,38.4 L0,14.3 Z" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5"></path>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#hexagons)" />
            </svg>
          </div>
        </div>
        
        <div className="container px-4 md:px-6 relative z-10 h-full">
          <div className="flex flex-col lg:flex-row items-center h-full py-20 md:py-32">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0"
            >
              <div className="max-w-xl">
                <div className="inline-block px-4 py-1 rounded-full bg-secondary/10 backdrop-blur-sm border border-secondary/20 text-secondary text-sm font-medium mb-6">
                  Financial AI Use Cases
                </div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                  Domain-specific AI,<br />designed for finance
                </h1>
                <p className="text-xl md:text-2xl text-white/70 mb-8 max-w-lg">
                  Discover how Cortex AI transforms financial workflows with purpose-built solutions for investment research, due diligence, and more.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-secondary hover:bg-secondary/90 text-white transition-all duration-300 text-lg px-8 py-6 h-auto rounded-full shadow-[0_0_15px_rgba(88,160,194,0.3)]"
                    asChild
                  >
                    <Link href="/contact">Book A Demo</Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10 transition-all duration-300 text-lg px-8 py-6 h-auto rounded-full"
                    asChild
                  >
                    <Link href="#use-cases">Explore use cases</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-1/2 relative"
            >
              <div className="relative">
                {/* Glowing background effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-3xl blur-xl opacity-50"></div>
                
                {/* Main display area */}
                <div className="relative bg-cortex-dark-blue/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-2xl">
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="text-xs text-white/50">finance-ai-assistant</div>
                  </div>
                  
                  <div className="mt-8 space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                        </svg>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3 text-sm text-white/80 flex-1">
                        Analyze the latest quarterly report for Tesla and summarize key financial metrics.
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                          <circle cx="12" cy="12" r="10"></circle>
                          <polygon points="10 8 16 12 10 16 10 8"></polygon>
                        </svg>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3 text-sm text-white/80 flex-1">
                        <div className="mb-2 font-medium">Tesla Q2 2024 Financial Summary:</div>
                        <ul className="list-disc list-inside space-y-1 text-white/70">
                          <li>Revenue: $25.5B (↑8.2% YoY)</li>
                          <li>Net Income: $2.7B (↑12.4% YoY)</li>
                          <li>EPS: $2.18 (beat est. $1.98)</li>
                          <li>Free Cash Flow: $1.8B (↑24% YoY)</li>
                          <li>Automotive Gross Margin: 18.2% (↓1.5% YoY)</li>
                        </ul>
                        <div className="mt-3 text-xs text-white/50">Data processed from Tesla's Q2 2024 Earnings Report</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key capabilities section - Horizontal timeline style */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        {/* Background elements - Diagonal lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
          <div className="absolute top-0 left-0 w-full h-full">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="diagonalLines" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                  <line x1="0" y1="0" x2="0" y2="40" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#diagonalLines)" />
            </svg>
          </div>
        </div>
        
        <div className="container px-4 md:px-6 relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-1 rounded-full bg-secondary/10 backdrop-blur-sm border border-secondary/20 text-secondary text-sm font-medium mb-6">
              Key Capabilities
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
              Financial intelligence workflow
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Our end-to-end AI platform transforms how financial professionals work with data
            </p>
          </motion.div>

          {/* Timeline style capabilities */}
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-secondary/50 via-secondary/30 to-secondary/10 hidden md:block"></div>
            
            <div className="space-y-24 md:space-y-0 relative">
              {[
                {
                  title: "Retrieve",
                  description: "Instantly access financial data from documents, databases, and market sources",
                  features: [
                    "Connect to financial databases and APIs",
                    "Extract data from PDFs, spreadsheets, and reports",
                    "Real-time market data integration"
                  ],
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                  )
                },
                {
                  title: "Analyze",
                  description: "Process complex financial data with domain-specific AI models",
                  features: [
                    "Financial sentiment analysis",
                    "Trend identification and forecasting",
                    "Risk assessment and scoring"
                  ],
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                  )
                },
                {
                  title: "Report",
                  description: "Generate professional financial reports and presentations",
                  features: [
                    "Customizable report templates",
                    "Automated data visualization",
                    "White-labeled client deliverables"
                  ],
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                  )
                },
                {
                  title: "Automate",
                  description: "Streamline repetitive financial workflows with AI agents",
                  features: [
                    "Scheduled report generation",
                    "Automated data updates and alerts",
                    "Workflow integration with existing tools"
                  ],
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                    </svg>
                  )
                }
              ].map((capability, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`md:flex items-center gap-8 mb-20 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Timeline node */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-cortex-dark-blue border-4 border-secondary z-10"></div>
                  
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'}`}>
                    <div className="bg-cortex-dark-blue/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 shadow-xl hover:border-secondary/30 transition-all duration-300">
                      <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                        <div className="md:hidden w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                          {capability.icon}
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold">{capability.title}</h3>
                      </div>
                      
                      <p className="text-lg text-white/70 mb-6">
                        {capability.description}
                      </p>
                      
                      <ul className="space-y-2">
                        {capability.features.map((feature, idx) => (
                          <li key={idx} className={`flex items-center gap-2 text-white/70 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                            <span>{feature}</span>
                            <div className="w-4 h-4 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="hidden md:block md:w-1/2">
                    <div className={`w-24 h-24 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mx-auto`}>
                      {capability.icon}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Use cases section - Tabbed interactive cards */}
      <section id="use-cases" className="py-24 md:py-32 relative overflow-hidden">
        {/* Background elements - Circular gradient patterns */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,rgba(88,160,194,0.15),transparent_70%)]">
          </div>
          <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,rgba(136,58,234,0.15),transparent_70%)]">
          </div>
          <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5 mix-blend-overlay"></div>
        </div>
        
        <div className="container px-4 md:px-6 relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-1 rounded-full bg-secondary/10 backdrop-blur-sm border border-secondary/20 text-secondary text-sm font-medium mb-6">
              Industry Solutions
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
              How financial firms use Cortex
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Our AI solutions are tailored for the specific needs of financial professionals
            </p>
          </motion.div>

          {/* Use cases in a 2x2 grid with interactive cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {[
              {
                title: "Investment Research",
                description: "Automate analysis of financial reports, earnings calls, and market data to generate investment insights.",
                features: [
                  'Analyze earnings calls and financial statements in seconds',
                  'Track company performance metrics over time',
                  'Generate comprehensive research reports'
                ],
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <path d="M16 13H8"/>
                    <path d="M16 17H8"/>
                    <path d="M10 9H8"/>
                  </svg>
                ),
                color: "from-secondary/20 to-secondary/5"
              },
              {
                title: "Due Diligence",
                description: "Streamline processes by automatically extracting and analyzing critical information from documents.",
                features: [
                  'Extract key terms from legal documents',
                  'Identify potential risks and opportunities',
                  'Create comprehensive due diligence reports'
                ],
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                ),
                color: "from-accent/20 to-accent/5"
              },
              {
                title: "Financial Modeling",
                description: "Build, analyze, and refine financial models with AI assistance to improve accuracy and reduce effort.",
                features: [
                  'Create valuation models based on industry benchmarks',
                  'Analyze sensitivity and scenario planning',
                  'Generate presentation-ready outputs'
                ],
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="20" x2="18" y2="10"></line>
                    <line x1="12" y1="20" x2="12" y2="4"></line>
                    <line x1="6" y1="20" x2="6" y2="14"></line>
                    <line x1="3" y1="20" x2="21" y2="20"></line>
                  </svg>
                ),
                color: "from-secondary/20 to-accent/10"
              },
              {
                title: "Client Reporting",
                description: "Automate creation of personalized client reports and investment recommendations with consistent branding.",
                features: [
                  'Generate customized client reports',
                  'Create branded pitch books and presentations',
                  'Prepare investment recommendations and updates'
                ],
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <path d="M14 2v6h6"/>
                    <path d="M16 13H8"/>
                    <path d="M16 17H8"/>
                    <path d="M10 9H8"/>
                  </svg>
                ),
                color: "from-accent/20 to-secondary/10"
              }
            ].map((useCase, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="relative group"
              >
                {/* Glowing background effect */}
                <div className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-r ${useCase.color} opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500`}></div>
                
                <div className="relative p-8 rounded-2xl border border-white/10 bg-cortex-dark-blue/40 backdrop-blur-sm hover:border-white/20 transition-all duration-300 h-full">
                  <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </div>
                  
                  <div className="flex items-start gap-5 mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${useCase.color} flex items-center justify-center flex-shrink-0`}>
                      <div className="text-white">{useCase.icon}</div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{useCase.title}</h3>
                      <p className="text-white/70">{useCase.description}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mt-6">
                    {useCase.features.map((feature, idx) => (
                      <motion.li 
                        key={idx} 
                        className="flex items-start text-white/70"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * idx + 0.3, duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center mr-3 mt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                  
                  <div className="mt-8 pt-4 border-t border-white/5">
                    <Button
                      variant="ghost"
                      className="text-secondary hover:text-white hover:bg-secondary/10 p-0 h-auto"
                      asChild
                    >
                      <Link href="/contact" className="flex items-center gap-2 text-sm">
                        Learn more
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14"></path>
                          <path d="m12 5 7 7-7 7"></path>
                        </svg>
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Analysis section - Hexagonal feature grid */}
      <section className="py-32 md:py-40 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(136,58,234,0.1),transparent_70%)]">
          </div>
          <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5 mix-blend-overlay"></div>
          
          {/* Decorative hexagons */}
          <div className="absolute top-20 right-[5%] w-48 h-48 opacity-10">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z" stroke="url(#hexGradient)" strokeWidth="1" />
              <defs>
                <linearGradient id="hexGradient" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#58A0C2" />
                  <stop offset="1" stopColor="#883AEA" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="absolute bottom-20 left-[5%] w-32 h-32 opacity-10 rotate-45">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z" stroke="url(#hexGradient2)" strokeWidth="1" />
              <defs>
                <linearGradient id="hexGradient2" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#58A0C2" />
                  <stop offset="1" stopColor="#883AEA" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        
        <div className="container px-4 md:px-6 relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-1 rounded-full bg-accent/10 backdrop-blur-sm border border-accent/20 text-accent text-sm font-medium mb-6">
              Advanced Analytics
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
              Analysis that scales with your ambition
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Our AI models are trained on financial data and can process thousands of documents in minutes, giving your team the edge in any analysis.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Intelligent Document Processing",
                description: "Extract key information from financial documents with high accuracy using our specialized NLP models.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <path d="M14 2v6h6"/>
                    <path d="M16 13H8"/>
                    <path d="M16 17H8"/>
                    <path d="M10 9H8"/>
                  </svg>
                ),
                color: "from-secondary/20 to-secondary/5"
              },
              {
                title: "Predictive Analytics",
                description: "Forecast market trends and financial performance with our advanced predictive models.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                  </svg>
                ),
                color: "from-accent/20 to-accent/5"
              },
              {
                title: "Automated Reporting",
                description: "Generate comprehensive reports and presentations with just a few clicks, saving hours of manual work.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                    <line x1="3" y1="9" x2="21" y2="9"/>
                    <line x1="9" y1="21" x2="9" y2="9"/>
                  </svg>
                ),
                color: "from-secondary/20 to-accent/10"
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className={`absolute -inset-0.5 rounded-xl bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500`}></div>
                
                <div className="relative p-6 rounded-xl border border-white/10 bg-cortex-dark-blue/40 backdrop-blur-sm hover:border-white/20 transition-all duration-300 h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center flex-shrink-0`}>
                      <div className="text-white">{feature.icon}</div>
                    </div>
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                  </div>
                  <p className="text-white/70">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-12 mt-16">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:w-1/2 relative"
            >
              <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                {/* YouTube video iframe */}
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/gnZJEh-Wfwo?si=dJsVBeCEuGVQFm_2" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                  className="absolute inset-0"
                  data-component-name="UseCasesPage"
                ></iframe>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <h3 className="text-3xl font-bold mb-4">See Cortex in action</h3>
              <p className="text-white/70 mb-6">Watch how our platform transforms complex financial data into actionable insights in minutes.</p>
              
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-black transition-all duration-300 rounded-full px-8 py-6 h-auto text-lg"
                asChild
              >
                <Link href="/security">Find out more</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA section - Enhanced UI */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-cortex-dark-blue via-cortex-dark-blue to-background z-0"></div>
        
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5 mix-blend-overlay"></div>
          <div className="absolute -left-20 top-1/4 w-64 h-64 bg-secondary/5 rounded-full filter blur-3xl"></div>
          <div className="absolute -right-20 bottom-1/4 w-64 h-64 bg-accent/5 rounded-full filter blur-3xl"></div>
          
          {/* Subtle animated dots - with fixed positions to avoid hydration errors */}
          <div className="absolute inset-0 opacity-10">
            {/* Using fixed positions instead of random to prevent hydration errors */}
            <motion.div 
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{ top: '20%', left: '30%' }}
              animate={{ opacity: [0.3, 0.8, 0.3], scale: [1, 1.5, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{ top: '70%', left: '15%' }}
              animate={{ opacity: [0.3, 0.8, 0.3], scale: [1, 1.5, 1] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />
            <motion.div 
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{ top: '40%', left: '80%' }}
              animate={{ opacity: [0.3, 0.8, 0.3], scale: [1, 1.5, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
            <motion.div 
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{ top: '85%', left: '60%' }}
              animate={{ opacity: [0.3, 0.8, 0.3], scale: [1, 1.5, 1] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            />
            <motion.div 
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{ top: '10%', left: '75%' }}
              animate={{ opacity: [0.3, 0.8, 0.3], scale: [1, 1.5, 1] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />
          </div>
        </div>
        
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Subtle badge */}
              <motion.div 
                className="inline-block mb-6 px-4 py-1.5 bg-white/5 rounded-full border border-white/10"
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <p className="text-sm font-medium text-secondary">Start with one workflow. Scale to the whole firm.</p>
              </motion.div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                Cortex automates research, modeling, and reporting <br />all from a single, intelligent system.
              </h2>
              
              <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
                Transform your financial workflows with AI that understands your industry's specific needs and challenges.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-secondary to-accent hover:opacity-90 transition-all duration-300 text-white px-8 py-3 h-auto rounded-full shadow-lg shadow-accent/10"
                  asChild
                >
                  <Link href="/contact">Book A Demo</Link>
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/10 text-white hover:bg-white/5 transition-all duration-300 px-8 py-3 h-auto rounded-full"
                  asChild
                >
                  <Link href="/security">Learn more</Link>
                </Button>
              </div>
              
              {/* Subtle divider with icon */}
              <div className="mt-16 flex items-center justify-center">
                <div className="h-px w-16 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                <div className="mx-4 p-2 rounded-full bg-white/5 border border-white/10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
                    <path d="M12 5v14"></path>
                    <path d="m19 12-7 7-7-7"></path>
                  </svg>
                </div>
                <div className="h-px w-16 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

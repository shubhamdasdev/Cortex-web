"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useInView, useAnimation, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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
    transition: { duration: 0.5, ease: "easeOut" } 
  },
  hover: { 
    y: -5,
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
    transition: { duration: 0.3 }
  }
};

interface FeatureCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ children, className, delay = 0 }) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={cardVariants}
      custom={delay}
      whileHover="hover"
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const FeaturesSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const workspaceRef = useRef<HTMLDivElement>(null);
  
  return (
    <section className="py-16 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-secondary/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="w-12 h-1 bg-secondary rounded-full mx-auto mb-6"></div>
          <h2 className="text-4xl md:text-5xl font-serif mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
          Inside the Cortex OS
          </h2>
          <p className="text-muted-foreground text-lg">
          Purpose-built modules engineered for speed, precision, and execution across financial workflows.
          </p>
        </motion.div>

        <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <FeatureCard className="relative group overflow-hidden">
            <Card className="bg-muted/20 border-muted backdrop-blur-sm h-full transition-all duration-300 hover:bg-muted/30 hover:border-secondary/20">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/5 rounded-bl-full opacity-70 group-hover:opacity-100 transition-opacity"></div>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M10.5 20.5 3 13l7.5-7.5"/>
                      <path d="m13.5 20.5 7.5-7.5-7.5-7.5"/>
                    </svg>
                  </div>
                  <CardTitle className="text-xl font-serif">Autonomous Agent Workflows</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-base">
                Cortex agents break down complex research, modeling, and memo tasks into executable micro-steps — just like a real analyst team.Orchestrated. Repeatable. Traceable.
                </CardDescription>
                
                {/* Task Flow Animation */}
                <div className="mt-6 relative bg-muted/30 p-4 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary/5 to-transparent animate-pulse"></div>
                  <div className="relative z-10">
                    <div className="flex items-center mb-3">
                      <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center text-xs font-medium">1</div>
                      <div className="ml-2 text-sm font-medium">Understand the request</div>
                    </div>
                    <motion.div 
                      className="h-1 bg-gradient-to-r from-secondary/50 to-secondary/20 rounded-full mb-3"
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      viewport={{ once: true }}
                    />
                    <div className="flex items-center mb-3">
                      <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center text-xs font-medium">2</div>
                      <div className="ml-2 text-sm font-medium">Collect, cross-reference, and reason over inputs</div>
                    </div>
                    <motion.div 
                      className="h-1 bg-gradient-to-r from-secondary/50 to-secondary/20 rounded-full mb-3"
                      initial={{ width: 0 }}
                      whileInView={{ width: '80%' }}
                      transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
                      viewport={{ once: true }}
                    />
                    <div className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center text-xs font-medium">3</div>
                      <div className="ml-2 text-sm font-medium">Generate structured outputs</div>
                    </div>
                    <motion.div 
                      className="h-1 bg-gradient-to-r from-secondary/50 to-secondary/20 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: '60%' }}
                      transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </FeatureCard>

          <FeatureCard className="relative group overflow-hidden" delay={0.1}>
            <Card className="bg-muted/20 border-muted backdrop-blur-sm h-full transition-all duration-300 hover:bg-muted/30 hover:border-secondary/20">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/5 rounded-bl-full opacity-70 group-hover:opacity-100 transition-opacity"></div>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/>
                      <line x1="2" y1="12" x2="22" y2="12"/>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                    </svg>
                  </div>
                  <CardTitle className="text-xl font-serif">Contextual Reasoning Across All Sources</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-base">
                Agents don’t just retrieve data — they reason over it. Cortex unifies internal files, external content, and memory into a smart, searchable layer — grounding every task in real context.
                </CardDescription>
                
                {/* Data Flow Visualization */}
                <div className="mt-6 relative bg-muted/30 p-4 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary/5 to-transparent animate-pulse"></div>
                  <div className="relative z-10">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <motion.div 
                        className="px-2 py-1 bg-secondary/20 rounded text-xs font-medium"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        viewport={{ once: true }}
                      >
                        SEC Filings
                      </motion.div>
                      <motion.div 
                        className="px-2 py-1 bg-secondary/20 rounded text-xs font-medium"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                        viewport={{ once: true }}
                      >
                        Earnings Calls
                      </motion.div>
                      <motion.div 
                        className="px-2 py-1 bg-secondary/20 rounded text-xs font-medium"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.3 }}
                        viewport={{ once: true }}
                      >
                        Internal Documents
                      </motion.div>
                      <motion.div 
                        className="px-2 py-1 bg-secondary/20 rounded text-xs font-medium"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.4 }}
                        viewport={{ once: true }}
                      >
                        Market Data
                      </motion.div>
                    </div>
                    
                    <div className="flex justify-center my-2">
                      <motion.div 
                        className="w-10 h-10 rounded-full bg-secondary/30 flex items-center justify-center"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="7 13 12 18 17 13"></polyline>
                          <polyline points="7 6 12 11 17 6"></polyline>
                        </svg>
                      </motion.div>
                    </div>
                    
                    <motion.div 
                      className="p-2 bg-secondary/10 border border-secondary/20 rounded-md text-center text-sm font-medium"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                      viewport={{ once: true }}
                    >
                      Unified Knowledge Graph
                    </motion.div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </FeatureCard>

          <FeatureCard className="relative group overflow-hidden" delay={0.2}>
            <Card className="bg-muted/20 border-muted backdrop-blur-sm h-full transition-all duration-300 hover:bg-muted/30 hover:border-secondary/20">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/5 rounded-bl-full opacity-70 group-hover:opacity-100 transition-opacity"></div>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                      <polyline points="14 2 14 8 20 8"/>
                    </svg>
                  </div>
                  <CardTitle className="text-xl font-serif">Outputs That Deliver, Not Just Explain</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-base">
                  Accelerate time to value by formatting analyses into tailor-made deliverables.
                </CardDescription>
                <div className="mt-4">
                  <Button variant="link" asChild className="px-0 h-auto text-secondary hover:text-secondary/80 font-medium">
                    <Link href="/contact">Book A Demo for format customization</Link>
                  </Button>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <motion.div 
                    className="bg-muted/30 p-3 rounded-md flex items-center justify-center h-24 group/item hover:bg-muted/50 transition-all duration-300"
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto mb-2 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span className="text-sm font-medium group-hover/item:text-white transition-colors">PowerPoints</span>
                    </div>
                  </motion.div>
                  <motion.div 
                    className="bg-muted/30 p-3 rounded-md flex items-center justify-center h-24 group/item hover:bg-muted/50 transition-all duration-300"
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto mb-2 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span className="text-sm font-medium group-hover/item:text-white transition-colors">Documents</span>
                    </div>
                  </motion.div>
                  <motion.div 
                    className="bg-muted/30 p-3 rounded-md flex items-center justify-center h-24 group/item hover:bg-muted/50 transition-all duration-300"
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto mb-2 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      <span className="text-sm font-medium group-hover/item:text-white transition-colors">Charts</span>
                    </div>
                  </motion.div>
                  <motion.div 
                    className="bg-muted/30 p-3 rounded-md flex items-center justify-center h-24 group/item hover:bg-muted/50 transition-all duration-300"
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto mb-2 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm font-medium group-hover/item:text-white transition-colors">Spreadsheets</span>
                    </div>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </FeatureCard>
        </AnimatedSection>

        <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-24">
          <motion.div variants={fadeIn}>
            <div className="w-12 h-1 bg-secondary/70 rounded-full mb-6"></div>
            <h3 className="text-2xl md:text-3xl font-serif mb-4">Built to Collaborate with You</h3>
            <p className="text-muted-foreground text-lg mb-6">
              Answering questions and performing tasks like an analyst would, Cortex reveals its thought process and grows with your team over time.
            </p>
            <ul className="space-y-3">
              <motion.li 
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="p-1 rounded-full bg-secondary/20 text-secondary mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span className="text-muted-foreground">Transparent reasoning with step-by-step explanations</span>
              </motion.li>
              <motion.li 
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="p-1 rounded-full bg-secondary/20 text-secondary mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span className="text-muted-foreground">Adapts to your team's feedback and preferences</span>
              </motion.li>
              <motion.li 
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="p-1 rounded-full bg-secondary/20 text-secondary mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span className="text-muted-foreground">Continuous learning from your organization's knowledge</span>
              </motion.li>
            </ul>
          </motion.div>
          
          <motion.div 
            variants={fadeIn}
            className="relative"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-secondary/30 to-accent/30 rounded-xl blur opacity-30"></div>
            <div className="relative bg-muted/20 border border-white/10 rounded-xl p-4 overflow-hidden">
              <div className="flex items-center gap-3 mb-4 border-b border-white/10 pb-3">
                <div className="w-3 h-3 rounded-full bg-secondary animate-pulse"></div>
                <div className="text-sm font-medium">Cortex Assistant</div>
              </div>
              
              <div className="space-y-4">
                <motion.div 
                  className="bg-muted/30 p-3 rounded-lg max-w-[80%]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <p className="text-sm">I've analyzed the quarterly results for ACME Corp. Their revenue grew by 12.5% YoY, exceeding analyst expectations of 10.2%.</p>
                </motion.div>
                
                <motion.div 
                  className="bg-muted/30 p-3 rounded-lg max-w-[80%]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <p className="text-sm">The growth was primarily driven by their new product line, which contributed 60% of the incremental revenue.</p>
                </motion.div>
                
                <motion.div 
                  className="flex justify-end"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-secondary/20 p-3 rounded-lg max-w-[80%]">
                    <p className="text-sm">Can you compare this with their main competitors?</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="bg-muted/30 p-3 rounded-lg max-w-[80%]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  viewport={{ once: true }}
                >
                  <p className="text-sm">Analyzing competitor data now...</p>
                  <div className="flex items-center gap-1 mt-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary/70 animate-pulse"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary/70 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary/70 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatedSection>

        <AnimatedSection className="mt-28">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <div className="w-12 h-1 bg-secondary/70 rounded-full mx-auto mb-6"></div>
            <h3 className="text-2xl md:text-3xl font-serif mb-4">An AI-native workspace built for the future</h3>
            <p className="text-muted-foreground text-lg">
              A seamless environment that adapts to your financial workflows
            </p>
          </div>
          
          <motion.div 
            className="relative mt-12 rounded-xl overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-secondary/30 to-accent/30 rounded-xl blur opacity-30"></div>
            <div className="relative bg-cortex-dark-blue/60 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden">
              <div className="border-b border-white/10">
                <div className="flex space-x-1 px-4 py-3">
                  {['Documents', 'Tables', 'Charts', 'Slides'].map((tab, index) => (
                    <motion.div key={tab} className="relative" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 + index * 0.1 }}>
                      <Button 
                        variant="ghost" 
                        className={`px-4 py-2 h-auto rounded-t-lg relative ${index === activeTab ? 'text-secondary' : 'text-white/70 hover:text-white'}`}
                        onClick={() => setActiveTab(index)}
                      >
                        {tab}
                        {index === activeTab && (
                          <motion.div 
                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary"
                            layoutId="activeTab"
                          />
                        )}
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div className="p-6 min-h-[400px]" ref={workspaceRef}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`workspace-${activeTab}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="h-full"
                  >
                    {activeTab === 0 && (
                      <div className="bg-muted/10 rounded-lg p-4 border border-white/10 overflow-hidden">
                        <div className="flex items-center justify-between mb-4">
                          <div className="text-lg font-medium">Financial Report Documentation</div>
                          <div className="flex space-x-2">
                            <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                                <polyline points="14 2 14 8 20 8"></polyline>
                              </svg>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          <div className="p-3 bg-muted/20 rounded-lg border border-white/5">
                            <h3 className="text-sm font-medium mb-2">Q3 2024 Financial Summary</h3>
                            <p className="text-xs text-white/70 mb-3">This document provides a comprehensive overview of the company's financial performance for the third quarter of fiscal year 2024.</p>
                            <div className="flex items-center text-xs text-secondary">
                              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 6 12 12 16 14"></polyline>
                              </svg>
                              <span>Last updated 2 days ago</span>
                            </div>
                          </div>
                          
                          <div className="p-3 bg-muted/20 rounded-lg border border-white/5">
                            <h3 className="text-sm font-medium mb-2">Market Analysis Report</h3>
                            <p className="text-xs text-white/70 mb-3">An in-depth analysis of current market trends and competitive landscape affecting our business operations.</p>
                            <div className="flex items-center text-xs text-secondary">
                              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 6 12 12 16 14"></polyline>
                              </svg>
                              <span>Last updated 1 week ago</span>
                            </div>
                          </div>
                          
                          <div className="p-3 bg-secondary/10 rounded-lg border border-secondary/20">
                            <h3 className="text-sm font-medium mb-2">Strategic Growth Plan</h3>
                            <p className="text-xs text-white/70 mb-3">A forward-looking document outlining our strategic initiatives for sustainable growth over the next five years.</p>
                            <div className="flex items-center text-xs text-secondary">
                              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 6 12 12 16 14"></polyline>
                              </svg>
                              <span>Last updated 3 days ago</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {activeTab === 2 && (
                      <div className="bg-muted/10 rounded-lg p-4 border border-white/10 overflow-hidden">
                        <div className="flex items-center justify-between mb-4">
                          <div className="text-lg font-medium">Financial Performance Charts</div>
                          <div className="flex space-x-2">
                            <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="20" x2="18" y2="10"></line>
                                <line x1="12" y1="20" x2="12" y2="4"></line>
                                <line x1="6" y1="20" x2="6" y2="14"></line>
                                <line x1="3" y1="20" x2="21" y2="20"></line>
                              </svg>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-muted/20 p-4 rounded-lg border border-white/5">
                            <h3 className="text-sm font-medium mb-2">Revenue Growth</h3>
                            <div className="aspect-video bg-muted/10 rounded-md flex items-center justify-center relative overflow-hidden">
                              <div className="absolute inset-0 flex items-end justify-around px-4 pb-4">
                                <motion.div 
                                  className="w-8 bg-secondary/70 rounded-t-sm" 
                                  initial={{ height: 0 }} 
                                  animate={{ height: '60%' }} 
                                  transition={{ duration: 1, delay: 0.2 }}
                                />
                                <motion.div 
                                  className="w-8 bg-secondary/50 rounded-t-sm" 
                                  initial={{ height: 0 }} 
                                  animate={{ height: '45%' }} 
                                  transition={{ duration: 1, delay: 0.3 }}
                                />
                                <motion.div 
                                  className="w-8 bg-secondary/90 rounded-t-sm" 
                                  initial={{ height: 0 }} 
                                  animate={{ height: '75%' }} 
                                  transition={{ duration: 1, delay: 0.4 }}
                                />
                                <motion.div 
                                  className="w-8 bg-secondary/60 rounded-t-sm" 
                                  initial={{ height: 0 }} 
                                  animate={{ height: '50%' }} 
                                  transition={{ duration: 1, delay: 0.5 }}
                                />
                              </div>
                              <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10"></div>
                            </div>
                          </div>
                          
                          <div className="bg-muted/20 p-4 rounded-lg border border-white/5">
                            <h3 className="text-sm font-medium mb-2">Market Share</h3>
                            <div className="aspect-video bg-muted/10 rounded-md flex items-center justify-center relative overflow-hidden">
                              <div className="w-32 h-32 rounded-full border border-white/10 relative">
                                <motion.div 
                                  className="absolute inset-0 border-4 border-transparent border-t-secondary/80 rounded-full"
                                  initial={{ rotate: 0 }}
                                  animate={{ rotate: 360 }}
                                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                />
                                <div className="absolute inset-2 rounded-full bg-muted/20 flex items-center justify-center text-xs font-medium">32%</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-4 p-3 bg-secondary/10 rounded-lg border border-secondary/20">
                          <div className="flex items-start gap-2">
                            <div className="p-1 rounded-full bg-secondary/20 text-secondary mt-0.5">
                              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="12" y1="16" x2="12" y2="12"></line>
                                <line x1="12" y1="8" x2="12.01" y2="8"></line>
                              </svg>
                            </div>
                            <div className="text-xs text-white/70">
                              <span className="font-medium text-secondary">Insight:</span> Visual data indicates strong growth trajectory in Q3 with projected market share increase of 5% by year end.
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {activeTab === 3 && (
                      <div className="bg-muted/10 rounded-lg p-4 border border-white/10 overflow-hidden">
                        <div className="flex items-center justify-between mb-4">
                          <div className="text-lg font-medium">Financial Presentation</div>
                          <div className="flex space-x-2">
                            <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                                <line x1="8" y1="21" x2="16" y2="21"></line>
                                <line x1="12" y1="17" x2="12" y2="21"></line>
                              </svg>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                              </svg>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-muted/20 rounded-lg border border-white/5 overflow-hidden">
                          <div className="p-3 bg-secondary/10 border-b border-white/5 flex items-center justify-between">
                            <div className="text-sm font-medium">Q3 Financial Performance</div>
                            <div className="flex space-x-2">
                              <div className="w-6 h-6 rounded-full bg-muted/20 flex items-center justify-center text-xs">1</div>
                              <div className="w-6 h-6 rounded-full bg-secondary/30 flex items-center justify-center text-xs">2</div>
                              <div className="w-6 h-6 rounded-full bg-muted/20 flex items-center justify-center text-xs">3</div>
                            </div>
                          </div>
                          
                          <div className="aspect-video relative">
                            <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                              <motion.div 
                                className="text-xl font-medium mb-4 text-center"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                              >
                                Financial Growth Highlights
                              </motion.div>
                              
                              <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                                <motion.div 
                                  className="p-3 bg-muted/10 rounded-lg border border-white/5 text-center"
                                  initial={{ opacity: 0, scale: 0.9 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ duration: 0.5, delay: 0.2 }}
                                >
                                  <div className="text-2xl font-medium text-secondary mb-1">32%</div>
                                  <div className="text-xs text-white/70">Market Share</div>
                                </motion.div>
                                
                                <motion.div 
                                  className="p-3 bg-muted/10 rounded-lg border border-white/5 text-center"
                                  initial={{ opacity: 0, scale: 0.9 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ duration: 0.5, delay: 0.3 }}
                                >
                                  <div className="text-2xl font-medium text-secondary mb-1">12.5%</div>
                                  <div className="text-xs text-white/70">Revenue Growth</div>
                                </motion.div>
                                
                                <motion.div 
                                  className="p-3 bg-muted/10 rounded-lg border border-white/5 text-center"
                                  initial={{ opacity: 0, scale: 0.9 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ duration: 0.5, delay: 0.4 }}
                                >
                                  <div className="text-2xl font-medium text-secondary mb-1">24.3%</div>
                                  <div className="text-xs text-white/70">Profit Margin</div>
                                </motion.div>
                                
                                <motion.div 
                                  className="p-3 bg-muted/10 rounded-lg border border-white/5 text-center"
                                  initial={{ opacity: 0, scale: 0.9 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ duration: 0.5, delay: 0.5 }}
                                >
                                  <div className="text-2xl font-medium text-secondary mb-1">+3.2%</div>
                                  <div className="text-xs text-white/70">YoY Change</div>
                                </motion.div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {activeTab === 1 && (
                      <div className="bg-muted/10 rounded-lg p-4 border border-white/10 overflow-hidden">
                        <div className="flex items-center justify-between mb-4">
                          <div className="text-lg font-medium">Financial Performance Analysis</div>
                          <div className="flex space-x-2">
                            <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <polyline points="17 8 12 3 7 8"></polyline>
                                <line x1="12" y1="3" x2="12" y2="15"></line>
                              </svg>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="18" cy="5" r="3"></circle>
                                <circle cx="6" cy="12" r="3"></circle>
                                <circle cx="18" cy="19" r="3"></circle>
                                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                              </svg>
                            </div>
                          </div>
                        </div>
                        
                        <div className="overflow-x-auto">
                          <table className="w-full">
                            <thead>
                              <tr className="border-b border-white/10">
                                <th className="text-left p-2 text-xs font-medium text-white/70">Company</th>
                                <th className="text-right p-2 text-xs font-medium text-white/70">Revenue Growth</th>
                                <th className="text-right p-2 text-xs font-medium text-white/70">Profit Margin</th>
                                <th className="text-right p-2 text-xs font-medium text-white/70">Market Share</th>
                                <th className="text-right p-2 text-xs font-medium text-white/70">YoY Change</th>
                              </tr>
                            </thead>
                            <tbody>
                              {[
                                { company: 'ACME Corp', growth: '12.5%', margin: '24.3%', share: '32.1%', change: '+3.2%', highlight: true },
                                { company: 'Competitor A', growth: '8.7%', margin: '19.8%', share: '28.4%', change: '+1.5%' },
                                { company: 'Competitor B', growth: '6.2%', margin: '22.1%', share: '18.9%', change: '-0.7%' },
                                { company: 'Competitor C', growth: '9.1%', margin: '17.5%', share: '15.6%', change: '+2.1%' },
                              ].map((row, i) => (
                                <motion.tr 
                                  key={row.company} 
                                  className={`border-b border-white/5 ${row.highlight ? 'bg-secondary/10' : ''}`}
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 0.2 + i * 0.1, duration: 0.3 }}
                                >
                                  <td className="p-2 text-sm">{row.company}</td>
                                  <td className="p-2 text-sm text-right">{row.growth}</td>
                                  <td className="p-2 text-sm text-right">{row.margin}</td>
                                  <td className="p-2 text-sm text-right">{row.share}</td>
                                  <td className={`p-2 text-sm text-right ${row.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>{row.change}</td>
                                </motion.tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                        
                        <div className="mt-4 p-3 bg-secondary/10 rounded-lg border border-secondary/20">
                          <div className="flex items-start gap-2">
                            <div className="p-1 rounded-full bg-secondary/20 text-secondary mt-0.5">
                              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="12" y1="16" x2="12" y2="12"></line>
                                <line x1="12" y1="8" x2="12.01" y2="8"></line>
                              </svg>
                            </div>
                            <div className="text-xs text-white/70">
                              <span className="font-medium text-secondary">Insight:</span> ACME Corp has shown the strongest growth among competitors, primarily driven by their new product line launch in Q3.
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </AnimatedSection>

        <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-28">
          <motion.div variants={fadeIn} className="relative">
            <div className="w-12 h-1 bg-secondary/70 rounded-full mb-6"></div>
            <h3 className="text-2xl md:text-3xl font-serif mb-4">LLMs Engineered for Finance</h3>
            <p className="text-muted-foreground text-lg mb-6">
              Custom-built models designed to understand the intricacies of financial concepts and documents: P&Ls, accounting methodologies, diligence files, and more.
            </p>
            
            <div className="mt-8 relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-xl blur opacity-20"></div>
              <div className="relative bg-muted/10 border border-white/10 rounded-xl p-4 overflow-hidden">
                <div className="flex flex-wrap gap-3 mb-4">
                  {['Financial Statements', 'Accounting Terms', 'Market Analysis', 'Regulatory Filings'].map((domain, i) => (
                    <motion.div 
                      key={domain}
                      className="px-3 py-1.5 bg-secondary/10 border border-secondary/20 rounded-full text-xs font-medium"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 * i }}
                      viewport={{ once: true }}
                    >
                      {domain}
                    </motion.div>
                  ))}
                </div>
                
                <motion.div 
                  className="relative h-32 bg-gradient-to-br from-cortex-dark-blue/80 to-cortex-dark-blue/90 rounded-lg overflow-hidden border border-white/10"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  {/* Background elements */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-8 -right-8 w-24 h-24 bg-secondary/10 rounded-full blur-xl"></div>
                    <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/10 rounded-full blur-xl"></div>
                  </div>
                  
                  <div className="absolute top-4 left-0 right-0 text-center">
                    <div className="text-sm font-medium text-white mb-1">Financial Domain Expertise</div>
                  </div>
                  
                  <div className="absolute bottom-6 left-0 right-0 flex items-center justify-center">
                    <div className="relative w-full max-w-xs px-8">
                      <div className="flex justify-between mb-2 text-xs">
                        <span className="text-white/60">Beginner</span>
                        <span className="text-white/60">Expert</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-secondary/80 via-secondary to-accent"
                          initial={{ width: 0 }}
                          whileInView={{ width: '85%' }}
                          transition={{ duration: 1.5, delay: 0.5 }}
                          viewport={{ once: true }}
                        />
                      </div>
                      <div className="mt-2 flex justify-end">
                        <div className="px-2 py-0.5 bg-secondary/20 rounded-full text-xs font-medium text-secondary border border-secondary/30">
                          85%
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-1.5">
                    <motion.div 
                      className="w-1.5 h-1.5 rounded-full bg-secondary/80 animate-pulse"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.7 }}
                      viewport={{ once: true }}
                    />
                    <motion.div 
                      className="w-1.5 h-1.5 rounded-full bg-secondary/80 animate-pulse"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.8 }}
                      viewport={{ once: true }}
                      style={{ animationDelay: '0.2s' }}
                    />
                    <motion.div 
                      className="w-1.5 h-1.5 rounded-full bg-secondary/80 animate-pulse"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.9 }}
                      viewport={{ once: true }}
                      style={{ animationDelay: '0.4s' }}
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={fadeIn} className="relative">
            <div className="w-12 h-1 bg-secondary/70 rounded-full mb-6"></div>
            <h3 className="text-2xl md:text-3xl font-serif mb-4">Traceable from Start to Finish</h3>
            <p className="text-muted-foreground text-lg mb-6">
              Cortex provides integrated citations, augmenting outputs with attribution to underlying sources.
            </p>
            
            <div className="mt-8 relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-xl blur opacity-20"></div>
              <div className="relative bg-muted/10 border border-white/10 rounded-xl p-4 overflow-hidden">
                <motion.div 
                  className="p-3 bg-muted/20 rounded-lg mb-3 border-l-2 border-secondary"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <p className="text-sm">The company's revenue increased by 15% year-over-year, primarily driven by expansion in the European market.</p>
                  <div className="mt-2 flex items-center gap-2">
                    <div className="p-1 rounded-full bg-secondary/20 text-secondary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                        <polyline points="14 2 14 8 20 8"/>
                      </svg>
                    </div>
                    <span className="text-xs text-secondary">Source: Q3 2024 Earnings Report, p.12</span>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="p-3 bg-muted/20 rounded-lg mb-3 border-l-2 border-secondary"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <p className="text-sm">The gross margin improved to 58%, compared to 52% in the same period last year.</p>
                  <div className="mt-2 flex items-center gap-2">
                    <div className="p-1 rounded-full bg-secondary/20 text-secondary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                        <line x1="3" y1="9" x2="21" y2="9"/>
                        <line x1="9" y1="21" x2="9" y2="9"/>
                      </svg>
                    </div>
                    <span className="text-xs text-secondary">Source: Financial Data Table, Row 14</span>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex justify-end"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary/20 rounded-full text-xs font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                    <span>100% Traceable Analysis</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatedSection>

        <motion.div 
          className="relative mt-28 rounded-xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-secondary/30 to-accent/30 rounded-xl blur opacity-30"></div>
          <div className="relative bg-cortex-dark-blue/90 backdrop-blur-sm border border-white/10 rounded-xl p-8 md:p-12 overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-0 left-1/4 w-64 h-64 bg-secondary/5 rounded-full filter blur-3xl animate-pulse"></div>
              <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/5 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
              <div className="absolute top-1/2 right-1/4 w-32 h-32 border border-secondary/10 rounded-full"></div>
            </div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <div className="w-12 h-1 bg-secondary/70 rounded-full mb-6"></div>
              <motion.h3 
                className="text-2xl md:text-3xl font-serif mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Cortex integrates with your internal and external data providers
              </motion.h3>
              <motion.p 
                className="text-muted-foreground text-lg mb-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                A diversified set of data sources spanning the financial services industry.
              </motion.p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: 'SEC Filings', icon: 'M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z' },
                  { name: 'Earning Calls', icon: 'M8 11A5 5 0 1 0 8 1a5 5 0 0 0 0 10z M18 21a5 5 0 1 0 0-10 5 5 0 0 0 0 10z M8 21a5 5 0 1 0 0-10 5 5 0 0 0 0 10z' },
                  { name: 'AWS', icon: 'M2 19.5C2 18.1 3.1 17 4.5 17H19.5C20.9 17 22 18.1 22 19.5C22 20.9 20.9 22 19.5 22H4.5C3.1 22 2 20.9 2 19.5Z M2 13.5C2 12.1 3.1 11 4.5 11H19.5C20.9 11 22 12.1 22 13.5C22 14.9 20.9 16 19.5 16H4.5C3.1 16 2 14.9 2 13.5Z M2 7.5C2 6.1 3.1 5 4.5 5H19.5C20.9 5 22 6.1 22 7.5C22 8.9 20.9 10 19.5 10H4.5C3.1 10 2 8.9 2 7.5Z' },
                  { name: 'PowerPoint', icon: 'M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z M14 2v6h6' },
                  { name: 'Broker Research', icon: 'M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4 M16 17l5-5-5-5 M21 12H9' },
                  { name: 'Market Data', icon: 'M12 20V10 M18 20V4 M6 20v-6' },
                  { name: 'Excel', icon: 'M3 3v18h18 M9 3v18 M3 9h18 M3 15h18' },
                  { name: 'Connected', icon: 'M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71 M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71' },
                ].map((item, i) => (
                  <motion.div 
                    key={item.name}
                    className="bg-muted/10 border border-white/5 p-4 rounded-lg flex flex-col items-center justify-center h-24 hover:bg-muted/20 hover:border-secondary/20 transition-all duration-300 group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * i }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-2 text-secondary/70 group-hover:text-secondary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                    </svg>
                    <span className="text-sm font-medium group-hover:text-white transition-colors">{item.name}</span>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                className="mt-10 flex justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <Button 
                  variant="outline" 
                  className="border-secondary/50 text-secondary hover:bg-secondary/10 hover:text-white transition-all duration-300"
                  asChild
                >
                  <Link href="/contact">Explore integration options</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;

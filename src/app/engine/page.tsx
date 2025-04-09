"use client"

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import FlowchartVisualization from "@/components/ui/flowchart-visualization";

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

export default function EnginePage() {
  return (
    <div className="overflow-hidden">
      {/* Hero section - Matching security page layout */}
      <section className="relative min-h-[90vh] overflow-hidden">
        {/* Modern animated gradient background */}
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

        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-24 h-24 border border-secondary/20 rounded-lg rotate-45"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 border border-secondary/20 rounded-lg rotate-12"></div>
        <div className="absolute top-1/3 left-1/4 w-16 h-16 border border-secondary/20 rounded-lg rotate-45"></div>

        {/* Content with centered layout */}
        <div className="container relative z-10 px-4 md:px-6 pt-32 md:pt-40 pb-20">
          {/* Engine graphic at top */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mx-auto mb-12 w-24 h-24 md:w-32 md:h-32 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-secondary to-accent rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute inset-2 bg-cortex-dark-blue/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/10">
              <svg xmlns="http://www.w3.org/2000/svg" width="50%" height="50%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 16v-4"></path>
                <path d="M8 12h8"></path>
              </svg>
            </div>
          </motion.div>
          
          {/* Centered title and text */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            {/* Accent line */}
            <div className="w-20 h-1 bg-secondary rounded-full mx-auto mb-6"></div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif leading-tight tracking-tight mb-6">
              <span className="text-white">Zone</span>{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent">Engine</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Powering the next generation of human-AI collaboration with a unique blend of agentic independence and copilot-like assistance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 pt-4 justify-center">
              <Button
                size="lg"
                className="bg-secondary text-white hover:bg-secondary/90 rounded-lg text-base px-8 py-6 h-auto font-medium"
                asChild
              >
                <Link href="/contact">Get Early Access</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 rounded-lg text-base px-8 py-6 h-auto font-medium"
                asChild
              >
                <Link href="/docs">Read Documentation</Link>
              </Button>
            </div>
          </motion.div>
          
          {/* Engine feature cards in horizontal layout */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12"
          >
            <div className="bg-cortex-dark-blue/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 shadow-xl hover:bg-cortex-dark-blue/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 16v-4"></path>
                  <path d="M8 12h8"></path>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-white mb-2 text-center">Agentic Independence</h3>
              <p className="text-muted-foreground text-center text-sm">
                Autonomously executes complex tasks with minimal human supervision.
              </p>
            </div>
            
            <div className="bg-cortex-dark-blue/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 shadow-xl hover:bg-cortex-dark-blue/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-white mb-2 text-center">Human Collaboration</h3>
              <p className="text-muted-foreground text-center text-sm">
                Seamlessly integrates with human workflows, providing guidance when needed.
              </p>
            </div>
            
            <div className="bg-cortex-dark-blue/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 shadow-xl hover:bg-cortex-dark-blue/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-white mb-2 text-center">Adaptive Learning</h3>
              <p className="text-muted-foreground text-center text-sm">
                Continuously improves and adapts to user preferences and feedback.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Workflow Visualization Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-cortex-dark-blue to-cortex-dark relative overflow-hidden">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="w-12 h-1 bg-secondary rounded-full mx-auto mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-serif mb-4 text-white">How It Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The Cortex Engine combines the best of both worlds: the guided assistance of copilots with the autonomous capability of agents.
            </p>
          </motion.div>
          
          {/* Flowchart Visualization Component */}
          <div className="bg-cortex-dark-blue/30 backdrop-blur-md border border-white/10 rounded-xl shadow-xl overflow-hidden relative p-8">
            <FlowchartVisualization />
          </div>
        </div>
      </section>

      {/* How It Works - Vertical Timeline */}
      <section className="py-16 md:py-32 bg-cortex-dark relative overflow-hidden">
        {/* Background elements - Similar to security page */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-secondary/10 rounded-lg rotate-45 filter blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-lg rotate-12 filter blur-3xl"></div>
        </div>
        
        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <div className="w-12 h-1 bg-secondary rounded-full mx-auto mb-6"></div>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
              The Workflow
            </h2>
            <p className="text-muted-foreground text-lg">
              Explore how the Cortex Engine transforms the way knowledge workers collaborate with AI.
            </p>
          </motion.div>

          <div className="flex flex-col max-w-4xl mx-auto relative">
            {/* Vertical Timeline connector */}
            <div className="absolute top-0 left-1/2 w-1 h-full bg-gradient-to-b from-secondary/50 via-secondary/30 to-transparent -translate-x-1/2 rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-white/10 animate-pulse"></div>
            </div>

            {/* Timeline Item 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-start mb-20 relative"
            >
              <div className="w-1/2 pr-12 text-right">
                <h3 className="text-xl font-medium text-white mb-2">User Request</h3>
                <p className="text-muted-foreground text-sm">
                  Knowledge workers express their needs in natural language, just like with a copilot.
                </p>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-secondary border-4 border-cortex-dark z-10"></div>
              <div className="w-1/2 pl-12"></div>
            </motion.div>

            {/* Timeline Item 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-start mb-20 relative"
            >
              <div className="w-1/2 pr-12"></div>
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-secondary border-4 border-cortex-dark z-10"></div>
              <div className="w-1/2 pl-12">
                <h3 className="text-xl font-medium text-white mb-2">AI Planning</h3>
                <p className="text-muted-foreground text-sm">
                  The Cortex Engine analyzes the request and formulates a comprehensive plan of action.
                </p>
              </div>
            </motion.div>

            {/* Timeline Item 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex items-start mb-20 relative"
            >
              <div className="w-1/2 pr-12 text-right">
                <h3 className="text-xl font-medium text-white mb-2">Autonomous Execution</h3>
                <p className="text-muted-foreground text-sm">
                  Unlike traditional copilots, the Cortex Engine can execute complex tasks autonomously.
                </p>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-secondary border-4 border-cortex-dark z-10"></div>
              <div className="w-1/2 pl-12"></div>
            </motion.div>

            {/* Timeline Item 4 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex items-start mb-20 relative"
            >
              <div className="w-1/2 pr-12"></div>
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-secondary border-4 border-cortex-dark z-10"></div>
              <div className="w-1/2 pl-12">
                <h3 className="text-xl font-medium text-white mb-2">Human Oversight</h3>
                <p className="text-muted-foreground text-sm">
                  Users maintain control with approval checkpoints and can guide the AI's work at any time.
                </p>
              </div>
            </motion.div>

            {/* Timeline Item 5 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="flex items-start relative"
            >
              <div className="w-1/2 pr-12 text-right">
                <h3 className="text-xl font-medium text-white mb-2">Continuous Learning</h3>
                <p className="text-muted-foreground text-sm">
                  The Cortex Engine learns from each interaction, becoming more aligned with user preferences over time.
                </p>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-secondary border-4 border-cortex-dark z-10"></div>
              <div className="w-1/2 pl-12"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-cortex-dark to-cortex-dark-blue relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
          <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-secondary/10 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-accent/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="w-12 h-1 bg-secondary rounded-full mx-auto mb-6"></div>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
              Ready to Transform Your Workflow?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Join our early access program and be among the first to experience the power of the Cortex Engine.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Button
                size="lg"
                className="bg-secondary text-white hover:bg-secondary/90 rounded-lg text-base px-8 py-6 h-auto font-medium"
                asChild
              >
                <Link href="/contact">Request Access</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 rounded-lg text-base px-8 py-6 h-auto font-medium"
                asChild
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

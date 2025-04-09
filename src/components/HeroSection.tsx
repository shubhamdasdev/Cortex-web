import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden">
      {/* Modern animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cortex-dark via-cortex-dark to-cortex-dark-blue z-0">
        <div className="absolute inset-0 opacity-30 mix-blend-soft-light">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(88,160,194,0.3),transparent_40%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(88,160,194,0.2),transparent_40%)]"></div>
        </div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-24 h-24 border border-secondary/20 rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 border border-secondary/20 rounded-full"></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 border border-secondary/20 rounded-full"></div>

      {/* Main content */}
      <div className="container relative z-10 px-4 md:px-6 pt-32 md:pt-40 pb-20">
        <div className="flex flex-col items-center text-center">
          {/* Accent line */}
          <div className="w-20 h-1 bg-secondary rounded-full mb-6"></div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif leading-tight tracking-tight max-w-4xl">
            <span className="text-white">The Agentic</span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent">Operating System</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mt-6">
          Add AI agents to your workflow and execute 10x faster.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 pt-8 mb-16">
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
              <Link href="/use-cases">How it works</Link>
            </Button>
          </div>
          
          {/* Product image showcase */}
          <div className="relative w-full max-w-5xl mx-auto">
            {/* Decorative glow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-secondary/50 to-accent/50 rounded-2xl blur opacity-30"></div>
            
            {/* Product image container */}
            <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-xl">
              {/* Top blur gradient */}
              <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-cortex-dark-blue/90 to-transparent z-10"></div>
              
              {/* Bottom blur gradient */}
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-cortex-dark-blue/90 to-transparent z-10"></div>
              
              {/* Left blur gradient */}
              <div className="absolute top-0 left-0 bottom-0 w-16 bg-gradient-to-r from-cortex-dark-blue/90 to-transparent z-10"></div>
              
              {/* Right blur gradient */}
              <div className="absolute top-0 right-0 bottom-0 w-16 bg-gradient-to-l from-cortex-dark-blue/90 to-transparent z-10"></div>
              
              {/* Product image */}
              <div className="relative">
                <Image
                  src="/images/cortex-product-screenshot.png"
                  alt="Cortex Platform Interface"
                  width={800}
                  height={500}
                  className="w-full h-auto object-cover rounded-2xl"
                  priority
                />
                
                {/* Subtle overlay to ensure text readability */}
                <div className="absolute inset-0 bg-cortex-dark-blue/10 backdrop-blur-[1px] rounded-2xl"></div>
                
                {/* Highlight badge */}
                <div className="absolute top-4 right-4 bg-secondary/90 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full z-20 shadow-lg">
                  Cortex Workspace
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

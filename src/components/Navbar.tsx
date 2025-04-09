"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HoverDropdown, HoverDropdownItem } from "@/components/ui/hover-dropdown";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-2 bg-cortex-dark-blue/90 backdrop-blur-md shadow-lg" : "py-4 bg-transparent"}`}>
      {/* Animated gradient line at top */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-secondary to-transparent opacity-70"></div>
      
      {/* Subtle glow effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 left-1/4 w-32 h-32 bg-secondary/10 rounded-full filter blur-3xl opacity-40"></div>
        <div className="absolute -top-24 right-1/3 w-32 h-32 bg-accent/10 rounded-full filter blur-3xl opacity-40"></div>
      </div>

      <div className="container mx-auto flex items-center justify-between px-4 md:px-6 relative">
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative h-10 w-10 overflow-hidden rounded-lg group-hover:scale-105 transition-transform duration-300">
            <Image 
              src="/images/CJ.png" 
              alt="Cortex Logo" 
              width={40}
              height={40}
              className="w-full h-full object-contain"
            />
          </div>
          <span className="font-medium text-lg bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80 group-hover:from-secondary group-hover:to-accent transition-all duration-300">Cortex</span>
        </Link>

        <div className="hidden md:flex-1 md:flex items-center justify-center space-x-8">
          {/* Products Dropdown Menu - Hover */}
          <HoverDropdown
            trigger={
              <div className="text-sm font-medium text-white/80 hover:text-white relative group flex items-center gap-1">
                <span>Products</span>
                <ChevronDown className="h-4 w-4" />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300"></span>
              </div>
            }
            contentClassName="bg-cortex-dark-blue/95 backdrop-blur-md border border-secondary/20 text-white min-w-[200px] rounded-md shadow-lg"
          >
            <div className="py-1">
              <HoverDropdownItem className="font-medium text-secondary/90 px-4 py-2 border-b border-secondary/10">
                Core Products
              </HoverDropdownItem>
              <HoverDropdownItem>
                <div className="w-full flex justify-between items-center group">
                  <Link href="/products/workspace" className="flex-grow">
                    Workspace
                  </Link>
                  <span className="text-[9px] ml-2 text-secondary/80 italic group-hover:text-secondary transition-colors">coming soon</span>
                </div>
              </HoverDropdownItem>
              <HoverDropdownItem>
                <div className="w-full flex justify-between items-center group">
                  <Link href="/products/agents" className="flex-grow">
                    Agents
                  </Link>
                  <span className="text-[9px] ml-2 text-secondary/80 italic group-hover:text-secondary transition-colors">coming soon</span>
                </div>
              </HoverDropdownItem>
              <HoverDropdownItem>
                <div className="w-full flex justify-between items-center group">
                  <Link href="/products/memory" className="flex-grow">
                    Memory
                  </Link>
                  <span className="text-[9px] ml-2 text-secondary/80 italic group-hover:text-secondary transition-colors">coming soon</span>
                </div>
              </HoverDropdownItem>
              <HoverDropdownItem>
                <div className="w-full flex justify-between items-center group">
                  <Link href="/products/execution" className="flex-grow">
                    Execution
                  </Link>
                  <span className="text-[9px] ml-2 text-secondary/80 italic group-hover:text-secondary transition-colors">coming soon</span>
                </div>
              </HoverDropdownItem>
              <HoverDropdownItem>
                <div className="w-full flex justify-between items-center group">
                  <Link href="/products/integrations" className="flex-grow">
                    Integrations
                  </Link>
                  <span className="text-[9px] ml-2 text-secondary/80 italic group-hover:text-secondary transition-colors">coming soon</span>
                </div>
              </HoverDropdownItem>
            </div>
          </HoverDropdown>

          {/* Use Cases Dropdown Menu - Hover */}
          <HoverDropdown
            trigger={
              <div className="text-sm font-medium text-white/80 hover:text-white relative group flex items-center gap-1">
                <span data-component-name="Navbar">Use Cases</span>
                <ChevronDown className="h-4 w-4" />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300"></span>
              </div>
            }
            contentClassName="bg-cortex-dark-blue/95 backdrop-blur-md border border-secondary/20 text-white min-w-[200px] rounded-md shadow-lg"
          >
            <div className="py-1">
              <HoverDropdownItem className="font-medium text-secondary/90 px-4 py-2 border-b border-secondary/10">
                By Industry
              </HoverDropdownItem>
              <HoverDropdownItem>
                <Link href="/use-cases" className="w-full font-medium text-white hover:text-secondary transition-colors">
                  Finance
                </Link>
              </HoverDropdownItem>
              <HoverDropdownItem>
                <div className="w-full flex justify-between items-center group">
                  <span className="text-white/80">Healthcare</span>
                  <span className="text-[9px] ml-2 text-secondary/80 italic group-hover:text-secondary transition-colors">coming soon</span>
                </div>
              </HoverDropdownItem>
              <HoverDropdownItem>
                <div className="w-full flex justify-between items-center group">
                  <span className="text-white/80">Retail</span>
                  <span className="text-[9px] ml-2 text-secondary/80 italic group-hover:text-secondary transition-colors">coming soon</span>
                </div>
              </HoverDropdownItem>
              <HoverDropdownItem className="font-medium text-secondary/90 px-4 py-2 border-b border-secondary/10 mt-2">
                By Function
              </HoverDropdownItem>
              <HoverDropdownItem>
                <div className="w-full flex justify-between items-center group">
                  <span className="text-white/80">Research</span>
                  <span className="text-[9px] ml-2 text-secondary/80 italic group-hover:text-secondary transition-colors">coming soon</span>
                </div>
              </HoverDropdownItem>
              <HoverDropdownItem>
                <div className="w-full flex justify-between items-center group">
                  <span className="text-white/80">Analytics</span>
                  <span className="text-[9px] ml-2 text-secondary/80 italic group-hover:text-secondary transition-colors">coming soon</span>
                </div>
              </HoverDropdownItem>

            </div>
          </HoverDropdown>
          <Link 
            href="/capabilities" 
            className="text-sm font-medium text-white/80 hover:text-white relative group"
          >
            <span>Capabilities</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link 
            href="/engine" 
            className="text-sm font-medium text-white/80 hover:text-white relative group"
          >
            <span>Engine</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link 
            href="/security" 
            className="text-sm font-medium text-white/80 hover:text-white relative group"
          >
            <span>Security</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300"></span>
          </Link>
          
          {/* Company Dropdown Menu - Hover */}
          <HoverDropdown
            trigger={
              <div className="text-sm font-medium text-white/80 hover:text-white relative group flex items-center gap-1">
                <span>Company</span>
                <ChevronDown className="h-4 w-4" />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300"></span>
              </div>
            }
            contentClassName="bg-cortex-dark-blue/95 backdrop-blur-md border border-secondary/20 text-white min-w-[200px] rounded-md shadow-lg"
          >
            <div className="py-1">
              <HoverDropdownItem className="font-medium text-secondary/90 px-4 py-2 border-b border-secondary/10">
                About Us
              </HoverDropdownItem>
              <HoverDropdownItem>
                <Link href="/careers" className="w-full font-medium text-white hover:text-secondary transition-colors">
                  Careers
                </Link>
              </HoverDropdownItem>
              <HoverDropdownItem>
                <Link href="/about" className="w-full font-medium text-white hover:text-secondary transition-colors">
                  About
                </Link>
              </HoverDropdownItem>
              <HoverDropdownItem>
                <Link href="/blog" className="w-full">
                  Blog
                </Link>
              </HoverDropdownItem>
            </div>
          </HoverDropdown>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Button 
            variant="ghost" 
            className="text-white/80 hover:text-white hover:bg-white/5 transition-all duration-300" 
            asChild
          >
            <Link href="https://app.cortex.ai">Log in</Link>
          </Button>
          <Button 
            className="bg-secondary/90 hover:bg-secondary text-white transition-all duration-300 shadow-[0_0_15px_rgba(88,160,194,0.3)] hover:shadow-[0_0_20px_rgba(88,160,194,0.5)]" 
            asChild
          >
            <Link href="/contact">Book A Demo</Link>
          </Button>
        </div>

        <button
          className="md:hidden relative z-10 w-10 h-10 flex items-center justify-center rounded-md bg-white/5 hover:bg-white/10 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="h-5 w-5 text-white" />
          ) : (
            <Menu className="h-5 w-5 text-white" />
          )}
        </button>
      </div>

      {/* Mobile menu with animation */}
      <div 
        className={`md:hidden fixed inset-0 z-40 bg-cortex-dark-blue/95 backdrop-blur-lg transition-all duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        style={{ clipPath: isOpen ? 'circle(150% at top right)' : 'circle(0% at top right)' }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-secondary/5 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/5 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="container h-full flex flex-col justify-center px-6 py-20">
          <div className="space-y-6 text-center">
            <div className="py-3">
              <h3 className="text-xl font-medium text-secondary mb-2">Products</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-center py-2 group">
                  <Link
                    href="/products/workspace"
                    className="text-lg font-medium text-white hover:text-secondary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Workspace
                  </Link>
                  <span className="text-[9px] ml-2 text-secondary/80 italic">coming soon</span>
                </div>
                <div className="flex items-center justify-center py-2 group">
                  <Link
                    href="/products/agents"
                    className="text-lg font-medium text-white hover:text-secondary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Agents
                  </Link>
                  <span className="text-[9px] ml-2 text-secondary/80 italic">coming soon</span>
                </div>
                <div className="flex items-center justify-center py-2 group">
                  <Link
                    href="/products/memory"
                    className="text-lg font-medium text-white hover:text-secondary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Memory
                  </Link>
                  <span className="text-[9px] ml-2 text-secondary/80 italic">coming soon</span>
                </div>
                <div className="flex items-center justify-center py-2 group">
                  <Link
                    href="/products/execution"
                    className="text-lg font-medium text-white hover:text-secondary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Execution
                  </Link>
                  <span className="text-[9px] ml-2 text-secondary/80 italic">coming soon</span>
                </div>
                <div className="flex items-center justify-center py-2 group">
                  <Link
                    href="/products/integrations"
                    className="text-lg font-medium text-white hover:text-secondary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Integrations
                  </Link>
                  <span className="text-[9px] ml-2 text-secondary/80 italic">coming soon</span>
                </div>
              </div>
            </div>
            <div className="py-3">
              <h3 className="text-xl font-medium text-secondary mb-2">Use Cases</h3>
              <div className="space-y-3">
                <h4 className="text-base font-medium text-white/80 mt-2">By Industry</h4>
                <div className="flex items-center justify-center py-2 group">
                  <Link
                    href="/use-cases"
                    className="text-lg font-medium text-white hover:text-secondary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Finance
                  </Link>
                </div>
                <div className="flex items-center justify-center py-2 group">
                  <span className="text-lg font-medium text-white/80">Healthcare</span>
                  <span className="text-[9px] ml-2 text-secondary/80 italic">coming soon</span>
                </div>
                <div className="flex items-center justify-center py-2 group">
                  <span className="text-lg font-medium text-white/80">Retail</span>
                  <span className="text-[9px] ml-2 text-secondary/80 italic">coming soon</span>
                </div>
                <h4 className="text-base font-medium text-white/80 mt-2">By Function</h4>
                <div className="flex items-center justify-center py-2 group">
                  <span className="text-lg font-medium text-white/80">Research</span>
                  <span className="text-[9px] ml-2 text-secondary/80 italic">coming soon</span>
                </div>
                <div className="flex items-center justify-center py-2 group">
                  <span className="text-lg font-medium text-white/80">Analytics</span>
                  <span className="text-[9px] ml-2 text-secondary/80 italic">coming soon</span>
                </div>

              </div>
            </div>
            <Link
              href="/capabilities"
              className="block py-3 text-xl font-medium text-white hover:text-secondary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Capabilities
            </Link>
            <Link
              href="/engine"
              className="block py-3 text-xl font-medium text-white hover:text-secondary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Engine
            </Link>
            <Link
              href="/security"
              className="block py-3 text-xl font-medium text-white hover:text-secondary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Security
            </Link>
            <Link
              href="/careers"
              className="block py-3 text-xl font-medium text-white hover:text-secondary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Careers
            </Link>
          </div>
          
          <div className="mt-12 flex flex-col items-center space-y-4">
            <Button 
              variant="ghost" 
              className="w-full max-w-xs justify-center text-white hover:bg-white/10"
              asChild
              onClick={() => setIsOpen(false)}
            >
              <Link href="https://app.cortex.ai">
                Log in
              </Link>
            </Button>
            <Button 
              className="w-full max-w-xs justify-center bg-secondary/90 hover:bg-secondary text-white shadow-[0_0_15px_rgba(88,160,194,0.3)]"
              asChild
              onClick={() => setIsOpen(false)}
            >
              <Link href="/contact">
                Book A Demo
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

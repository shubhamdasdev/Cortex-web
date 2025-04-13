"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // This is a placeholder for actual authentication logic
      // In a real implementation, you would connect to your authentication service
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For now, show an admin contact message
      setError("This is a demo login page. Please contact Cortex admins for actual login credentials.");
      setIsLoading(false);
    } catch (err) {
      setError("An error occurred during login. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-cortex-dark-blue">
      {/* Animated gradient line at top */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-secondary to-transparent opacity-70"></div>
      
      {/* Subtle glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-secondary/10 rounded-full filter blur-3xl opacity-40"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full filter blur-3xl opacity-40"></div>
      </div>

      <div className="container mx-auto px-4 py-24 flex-1 flex items-center justify-center">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Link href="/" className="inline-flex items-center justify-center mb-6">
              <div className="relative h-12 w-12 overflow-hidden rounded-lg mr-3">
                <Image 
                  src="/images/CJ.png" 
                  alt="Cortex Logo" 
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-medium text-2xl bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">Cortex</span>
            </Link>
            <h1 className="text-3xl font-bold text-white mb-2">Welcome back</h1>
            <p className="text-white/70">Sign in to your Cortex account</p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 shadow-xl p-6">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-1">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-transparent"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label htmlFor="password" className="block text-sm font-medium text-white/90">
                    Password
                  </label>
                  <Link href="/forgot-password" className="text-xs text-secondary hover:text-secondary/80">
                    Forgot password?
                  </Link>
                </div>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-transparent"
                  placeholder="••••••••"
                />
              </div>

              {error && (
                <div className="p-3 bg-red-500/20 border border-red-500/30 rounded-md">
                  <p className="text-sm text-white">{error}</p>
                </div>
              )}

              <Button
                type="submit"
                className="w-full bg-secondary hover:bg-secondary/90 text-white py-2 rounded-md transition-all duration-300 shadow-[0_0_15px_rgba(88,160,194,0.3)] hover:shadow-[0_0_20px_rgba(88,160,194,0.5)]"
                disabled={isLoading}
              >
                {isLoading ? "Signing in..." : "Sign in"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-white/70">
                Don't have an account?{" "}
                <Link href="/contact" className="text-secondary hover:text-secondary/80">
                  Contact us for access
                </Link>
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-xs text-white/50">
              By signing in, you agree to our{" "}
              <Link href="/terms-of-use" className="text-white/70 hover:text-white">
                Terms of Use
              </Link>{" "}
              and{" "}
              <Link href="/privacy-policy" className="text-white/70 hover:text-white">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

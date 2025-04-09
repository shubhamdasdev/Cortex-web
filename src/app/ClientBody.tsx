"use client";

import React, { useEffect } from "react";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: true });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: true });

export function ClientBody({ children }: { children: React.ReactNode }) {
  // Remove any extension-added classes during hydration
  useEffect(() => {
    document.body.classList.remove("dark");
    document.body.classList.remove("light");
  }, []);

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        {children}
      </main>
      <Footer />
    </>
  );
}

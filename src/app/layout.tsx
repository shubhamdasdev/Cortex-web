import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClientBody } from "./ClientBody";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Cortex",
  description: "The autonomous financial analyst for financial services. Optimize your team's most common workflows and enhance the quality of every output.",
  icons: {
    icon: "/images/Ck.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Syne, Raleway } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { AuthProvider } from "@/context/AuthContext";

const syne = Syne({ 
  subsets: ["latin"],
  variable: '--font-syne'
});

const raleway = Raleway({ 
  subsets: ["latin"],
  variable: '--font-raleway'
});

export const metadata: Metadata = {
  title: "XERO | Food Waste Management Platform",
  description: "Transform your business with AI-driven food waste management and blockchain transparency.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={twMerge(
        raleway.variable, 
        syne.variable,
        "antialiased bg-[#EAEEFE] font-raleway"
      )}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}



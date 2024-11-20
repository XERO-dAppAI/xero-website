import type { Metadata } from "next";

import { Syne, Raleway } from "next/font/google";

import "./globals.css";

import { twMerge } from "tailwind-merge";



const syne = Syne({ 

  subsets: ["latin"],

  variable: '--font-syne'

});



const raleway = Raleway({ 

  subsets: ["latin"],

  variable: '--font-raleway'

});



export const metadata: Metadata = {

  title: "Light Saas Landing Page",

  description: "Template created by Frontend Tribe",

};



export default function RootLayout({

  children,

}: Readonly<{

  children: React.ReactNode;

}>) {

  return (

    <html lang="en" className="relative">

      <body className={twMerge(

        raleway.variable, 

        syne.variable,

        "antialiased bg-[#EAEEFE] font-raleway"

      )}>

        {children}

      </body>

    </html>

  );

}



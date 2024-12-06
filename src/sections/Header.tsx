'use client';

import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50">
      <div className="py-3 sm:py-3.5 md:py-4 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="relative ml-1 sm:ml-1.5 md:ml-2">
              <Image 
                src={Logo} 
                alt="Saas Logo" 
                height={40}
                width={40}
                className="w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] md:w-[44px] md:h-[44px] object-contain"
              />
            </div>
            <MenuIcon className="h-4 w-4 sm:h-4.5 sm:w-4.5 md:h-5 md:w-5 md:hidden" />
            <nav className="hidden md:flex items-center mr-1 sm:mr-1.5 md:mr-2">
              <button 
                className="btn-header-glow"
                onClick={() => window.open('https://slklx-vqaaa-aaaaj-qnexq-cai.icp0.io/', '_blank', 'noopener,noreferrer')}
              >
                <span>Launch XERO dApp</span>
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

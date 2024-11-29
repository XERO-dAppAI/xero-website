import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="fixed top-0 w-full z-20">
      <div className="py-5 bg-white/5 backdrop-blur-sm">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image src={Logo} alt="Saas Logo" height={40} width={40} />
            <MenuIcon className="h-5 w-5 md:hidden" />
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <button className="btn-header-glow">
                <span>Get for free</span>
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

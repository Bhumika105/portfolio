"use client";

import { useScroll } from "@/contexts/scroll-context";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/site/ThemeToggle";
import Image from "next/image";
import Link from "next/link";

type NavItem = {
  id: string;
  label: string;
};

const navItems: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export function Header() {
  const { activeSection, scrollToSection } = useScroll();

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <button 
          onClick={() => scrollToSection('home')}
          className="flex items-center gap-2 font-semibold tracking-tight hover:text-primary transition-colors"
        >
          <div className="relative h-8 w-8 rounded-full overflow-hidden">
            <Image
              src="/avatar.jpg"
              alt="Bhumika Nautiyal"
              fill
              className="object-cover object-[50%_25%]"
            />
          </div>
          <span className="hidden sm:inline">Bhumika N.</span>
        </button>
        
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={cn(
                "px-3 py-2 text-sm font-medium transition-colors hover:text-primary",
                activeSection === item.id ? "text-primary" : "text-muted-foreground"
              )}
            >
              {item.label}
            </button>
          ))}
        </nav>
        
        <div className="flex items-center">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

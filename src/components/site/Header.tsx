"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { ThemeToggle } from "@/components/site/ThemeToggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const links = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="font-semibold tracking-tight">
          Bhumika Nautiyal
        </Link>
        <div className="flex items-center gap-3">
          <nav className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                {links.map((l) => (
                  <NavigationMenuItem key={l.href}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={l.href}
                        className={cn(
                          "px-3 py-2 text-sm hover:underline",
                          pathname === l.href ? "text-primary" : "text-muted-foreground"
                        )}
                      >
                        {l.label}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
          <ThemeToggle />
          <Link href="/about" aria-label="About Bhumika" className="ml-1">
            <Avatar>
              <AvatarImage src="/avatar.jpg" alt="Bhumika Nautiyal avatar" className="object-cover object-[50%_25%]" />
              <AvatarFallback>BN</AvatarFallback>
            </Avatar>
          </Link>
        </div>
      </div>
    </header>
  );
}

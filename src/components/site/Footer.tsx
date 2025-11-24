import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="mt-16 border-t py-8 text-sm text-muted-foreground">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 sm:flex-row">
        <p>© {new Date().getFullYear()} Bhumika Nautiyal. All rights reserved.</p>
        <nav className="flex items-center gap-4">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <a
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Resume
          </a>
          <a href={siteConfig.social.github} className="hover:underline" aria-label="GitHub">
            GitHub
          </a>
          <a href={siteConfig.social.linkedin} className="hover:underline" aria-label="LinkedIn">
            LinkedIn
          </a>
        </nav>
      </div>
    </footer>
  );
}

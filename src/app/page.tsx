import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <div className="mb-6 flex flex-wrap items-center gap-2">
          <Badge variant="secondary">Senior Engineer</Badge>
          <Badge>Full Stack</Badge>
          <Badge>Blockchain</Badge>
          <Badge>AI/ML</Badge>
        </div>
        <div className="mb-6">
          <Image
            src="/avatar.jpg"
            alt="Bhumika Nautiyal avatar"
            width={112}
            height={112}
            className="h-28 w-28 rounded-full ring-2 ring-primary/50 object-cover object-[50%_25%]"
            priority
          />
        </div>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Bhumika Nautiyal
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Full Stack, Blockchain & AI Engineer. I build modern web apps with React/Next.js, Node.js, and Web3, and deliver AI-powered experiences.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Button asChild>
            <a
              href="https://drive.google.com/file/d/1YKWtnhnoOp24T9zDykEznAZgajcyTdL8/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
            </a>
          </Button>
          <Button asChild variant="outline">
            <Link href="/contact">Contact Me</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

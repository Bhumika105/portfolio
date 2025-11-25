import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Github, Linkedin, Twitter, Code, Cpu, Database, Globe, Smartphone } from "lucide-react";

// Import section components
import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section 
        id="home" 
        className="min-h-screen flex items-center justify-center relative"
      >
        <div className="container mx-auto px-4 text-center">
          <div className="relative w-48 h-48 mx-auto mb-8">
            <Image
              src="/avatar.jpg"
              alt="Bhumika Nautiyal"
              fill
              className="rounded-full object-cover border-4 border-primary/20"
              priority
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Bhumika Nautiyal</h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-8">
            Full Stack, Blockchain & AI Engineer
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-8">
            I build modern web applications with cutting-edge technologies and 
            deliver exceptional user experiences.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="gap-2" asChild>
              <a href="#contact">
                Get in Touch <Mail className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="gap-2" asChild>
              <a href="#projects">
                View My Work <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Other Sections */}
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </div>
  );
}

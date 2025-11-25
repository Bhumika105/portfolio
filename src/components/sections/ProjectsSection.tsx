
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect } from 'react';

const projects = [
  {
    title: "DANA PAY - Financial Platform",
    description: "Comprehensive financial platform with customer and admin interfaces, supporting multiple payment providers and subscription management.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "PayPal", "Web3"],
    image: "/projects/danapay-admin.png",
    // github: "#",
    demo: "https://admin.danapay.io/"
  },
  {
    title: "KODA NFT Marketplace",
    description: "Decentralized NFT marketplace built on the KODA blockchain with features like bidding, auctions, and collections.",
    technologies: ["React", "Solidity", "IPFS", "Web3.js", "Ethereum"],
    image: "/projects/koda-nft.JPG",
    // github: "#",
    demo: "https://kodadot.xyz/"
  },
  {
    title: "Airdrop Minting Platform",
    description: "Advanced NFT minting platform featuring 3-level whitelist system for fair distribution and community engagement.",
    technologies: ["Next.js", "Solidity", "Hardhat", "IPFS", "Web3.js"],
    image: "/projects/airdropmint.JPG",
    // github: "#",
    demo: "https://airdrophouses.com/"
  },
  {
    title: "RoosterWars - Blockchain Game",
    description: "Play-to-earn blockchain game where players collect, breed, and battle digital roosters with unique traits.",
    technologies: ["Unity", "C#", "Solidity", "Web3.js", "Ethereum"],
    image: "/projects/roosterwars.JPG",
    // github: "#",
    demo: "https://play.google.com/store/apps/details?id=com.fowlplay.roosterwars&hl=en_US"
  },
  {
    title: "GhostMarket - Web3 Marketplace",
    description: "Web3 play-to-own marketplace for digital assets with integrated wallet and cross-chain support.",
    technologies: ["React", "TypeScript", "Ethereum", "Polygon", "WalletConnect"],
    image: "/projects/ghost-market.png",
    // github: "#",
    demo: "https://ghostmarket.io/"
  },
  {
    title: "HirePeople - AI Recruiter",
    description: "Chrome extension for recruiters using GPT-4 to generate personalized bulk messages on LinkedIn.",
    technologies: ["Chrome Extension", "GPT-4", "React", "Node.js", "Firebase"],
    image: "/projects/hirepeople.png",
    // github: "#",
    demo: "https://www.youtube.com/watch?v=-33topK5zmk"
  },
  {
    title: "Eco Token - Regen Network",
    description: "Eco-friendly marketplace on Regen Network for carbon credits and sustainable assets.",
    technologies: ["React", "Cosmos SDK", "Tendermint", "IPFS", "Web3"],
    image: "/projects/eco-token.png",
    // github: "#",
    demo: "https://ecotoken.earth/"
  },
  {
    title: "HouseBuyersOfAmerica",
    description: "Real estate platform connecting buyers with properties, featuring advanced search and virtual tours.",
    technologies: ["React", "Node.js", "MongoDB", "Mapbox", "Stripe"],
    image: "/projects/housebuyers.png",
    // github: "#",
    demo: "https://www.housebuyersofamerica.com/"
  },
  {
    title: "RFLXT - Digital Doubles",
    description: "Platform connecting talent with their digital doubles and communities through blockchain technology.",
    technologies: ["React", "Three.js", "Web3", "IPFS", "Ethereum"],
    image: "/projects/rflxt.png",
    // github: "#",
    demo: "https://rflxt.com/"
  },
  {
    title: "Talaqqi - Arabic Education",
    description: "Interactive learning platform for Arabic language education with progress tracking.",
    technologies: ["React Native", "Node.js", "MongoDB", "Firebase", "WebRTC"],
    image: "/projects/talaqqi.png",
    // github: "#",
    demo: "https://talaqqi.app/class/"
  },
  // {
  //   title: "CanterPower System",
  //   description: "Generator management system with real-time monitoring using Mapbox integration.",
  //   technologies: ["React", "Mapbox GL", "Node.js", "MongoDB", "WebSockets"],
  //   image: "/projects/canterpower.png",
  //   // github: "#",
  //   demo: "#"
  // },
  {
    title: "RubberFlooring - R4U",
    description: "E-commerce platform for high-temperature resistant rubber flooring products.",
    technologies: ["React", "Next.js", "Shopify", "Stripe", "MongoDB"],
    image: "/projects/rubberflooring.png",
    // github: "#",
    demo: "https://www.rubberflooring4u.com/"
  }
];


export function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Calculate number of projects to show based on screen size
  const projectsPerView = typeof window !== 'undefined' 
    ? window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3
    : 3;

  const totalProjects = projects.length;
  const totalPages = Math.ceil(totalProjects / projectsPerView);

  // Handle touch/mouse events for dragging
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scroll speed
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!containerRef.current) return;
    const touch = e.touches[0];
    setStartX(touch.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!containerRef.current) return;
    const touch = e.touches[0];
    const x = touch.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  // Handle scroll events to update current index
  const handleScroll = () => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const scrollPosition = container.scrollLeft;
    const containerWidth = container.clientWidth;
    const newIndex = Math.round(scrollPosition / containerWidth);
    if (newIndex !== currentIndex) {
      setCurrentIndex(newIndex);
    }
  };

  // Handle navigation
  const scrollToIndex = (index: number) => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const scrollAmount = container.clientWidth * index;
    container.scrollTo({
      left: scrollAmount,
      behavior: 'smooth'
    });
    setCurrentIndex(index);
  };

  // Auto-scroll to current index if it changes
  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll, { passive: true });
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  // Group projects into pages
  const projectGroups = Array.from({ length: totalPages }).map((_, i) => 
    projects.slice(i * projectsPerView, (i + 1) * projectsPerView)
  );

  return (
    <section id="projects" className="py-20 bg-muted/50 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
        
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={() => scrollToIndex(Math.max(0, currentIndex - 1))}
            disabled={currentIndex === 0}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 p-2 rounded-full bg-background/80 shadow-lg hover:bg-primary/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous projects"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Projects Container */}
          <div
            ref={containerRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
            style={{ scrollSnapType: 'x mandatory' }}
            onMouseDown={handleMouseDown}
            onMouseLeave={() => setIsDragging(false)}
            onMouseUp={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={() => setIsDragging(false)}
          >
            {projectGroups.map((group, groupIndex) => (
              <div
                key={groupIndex}
                className="w-full flex-shrink-0 snap-start px-2"
                style={{ scrollSnapAlign: 'start' }}
              >
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {group.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => scrollToIndex(Math.min(totalPages - 1, currentIndex + 1))}
            disabled={currentIndex === totalPages - 1}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 p-2 rounded-full bg-background/80 shadow-lg hover:bg-primary/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next projects"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentIndex === index ? 'bg-primary w-8' : 'bg-muted-foreground/30 w-3'
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Project Card Component
function ProjectCard({ project }: { project: typeof projects[0] }) {
  return (
    <div className="group relative overflow-hidden rounded-xl border bg-card shadow-sm transition-all hover:shadow-md h-full flex flex-col">
      <div className="aspect-video overflow-hidden">
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          width={500}
          height={300}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          quality={85}
        />
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-2 mb-3">
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full whitespace-nowrap">
            {project.technologies[0]}
          </span>
        </div>
        <p className="text-muted-foreground text-sm mb-4 flex-1">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(1, 4).map((tech) => (
            <span 
              key={tech}
              className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>
        <Button asChild className="w-full mt-auto">
          <a 
            href={project.demo} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center"
          >
            <ExternalLink className="h-4 w-4 mr-2" /> View Live
          </a>
        </Button>
      </div>
    </div>
  );
}
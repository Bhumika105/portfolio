import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Experience | Bhumika Nautiyal",
};

type Experience = {
  role: string;
  when: string;
  bullets: string[];
  project?: {
    title: string;
    href: string;
    image: string; // path under /public
  };
};

const experiences: Experience[] = [
  {
    role: "Software Developer Intern — Ericsson",
    when: "01/2025 - 08/2025 · Athlone",
    bullets: [
      "Built CRUD apps (Node.js/Express, E-UI, Leaflet.js, SQL) and tested with Postman.",
      "Containerized with Docker; deployed on Kubernetes; automated with Helm.",
      "Integrated Structurizr into IDP; microservice pipeline auto-generating SVG diagrams stored in Gitea.",
    ],
    project: {
      title: "Architecture Diagrams PoC",
      href: "https://www.ericsson.com/en",
      image: "/experiences/Ericsson1.png",
    },
  },
  {
    role: "Full Stack & AI Engineer — Musical AI",
    when: "03/2024 - 02/2025 · Los Angeles (Remote)",
    bullets: [
      "Built UIs for BeMusic with React/Next.js; optimized AWS Amplify Studio components.",
      "TypeScript adoption to reduce runtime errors.",
      "Added secure multi-user auth; integrated Python Gradio for AI audio generation.",
      "Developed DL models for genre/mood classification to improve recommendations.",
    ],
    project: {
      title: "BeMusic UI",
      href: "https://www.wearemusical.ai/",
      image: "/experiences/musicalai-bemusic.png",
    },
  },
  {
    role: "FrontEnd-heavy Full Stack Developer — Realtime Feedback",
    when: "12/2022 - 03/2024 · Dallas (Remote)",
    bullets: [
      "Next.js SSR/SSG for performance; Laravel backend with chat, notifications.",
      "Integrations: Twilio, Stripe; performance with Redis and DataDog.",
      "Docker on AWS EC2; implemented a 24/7 RAG chatbot (HuggingFace + Python).",
    ],
    project: {
      title: "Feedback Platform",
      href: "https://www.realtimefeedback.com/",
      image: "/experiences/realtime-feedback.png",
    },
  },
  {
    role: "Senior Next.js & Web3 Developer Intern — EcoToken",
    when: "02/2022 - 03/2023 · Langley, Canada",
    bullets: [
      "Led core UX for customer/admin; API caching; modular UI Kit with Wagmi.",
      "Built with Next.js, T3 stack, Prisma, Subgraph for GraphQL CMS.",
      "Web3: Solidity contracts, NFTs (Hardhat), Chainlink Oracles, IPFS via Pinata.",
      "Account abstraction: linked wallets to emails for Web2 + Web3 UX.",
    ],
    project: {
      title: "EcoToken Web3 Suite",
      href: "https://ecotoken.earth/",
      image: "/experiences/ecotoken.png",
    },
  },
  {
    role: "Team Lead — CeX",
    when: "05/2024 · Ennis",
    bullets: ["Managed customer interactions, trade-ins, quality testing, and team mentoring."],
    project: {
      title: "Cex",
      href: "http://webuy.com/",
      image: "/experiences/cex.png",
    },
  },
];

export default function ExperiencePage() {
  return (
    <section className="py-12">
      <h1 className="mb-8 text-3xl font-semibold tracking-tight">Experience</h1>
      <div className="grid gap-6">
        {experiences.map((exp) => (
          <Card key={exp.role}>
            <CardHeader>
              <CardTitle>{exp.role}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <div className="grid gap-4 sm:grid-cols-2">
                {/* Left column: when + bullets */}
                <div className="space-y-4">
                  <p>{exp.when}</p>
                  <ul className="list-disc pl-5">
                    {exp.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>

                {/* Right column: project (image on top, caption/button below). On mobile, this stacks under left. */}
                {exp.project ? (
                  <div className="flex w-full max-w-sm sm:ml-auto flex-col items-start sm:items-end gap-2">
                    <div className="overflow-hidden rounded-md border">
                      <Image
                        src={exp.project.image}
                        alt={exp.project.title}
                        width={256}
                        height={144}
                        className="h-36 w-64 object-cover"
                      />
                    </div>
                    <div className="text-sm text-foreground/90 sm:text-right w-full">
                      <div className="font-medium">{exp.project.title}</div>
                    </div>
                    <div>
                      <Button asChild size="sm" variant="outline">
                        <Link href={exp.project.href} target="_blank" rel="noopener noreferrer">
                          View Project
                        </Link>
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div />
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

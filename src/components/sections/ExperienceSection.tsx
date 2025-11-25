import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Software Developer Intern",
    company: "Ericsson",
    location: "Athlone",
    period: "01/2025 - 08/2025",
    description: [
      "Built CRUD applications with Node.js/Express.js backend and Ericsson UI (E-UI) & Leaflet.js maps frontend",
      "Managed database in phpMyAdmin/SQL and performed API testing with Postman",
      "Containerized applications with Docker, deployed scalable systems on Kubernetes, and automated with Helm",
      "Led a group project on Architecture & Developer Experience PoC, integrating Structurizr into Ericsson's Internal Developer Portal (IDP)",
      "Developed an API microservice pipeline for auto-generating and storing SVG diagrams in Gitea"
    ],
    skills: ["Node.js", "Express.js", "Docker", "Kubernetes", "Helm", "SQL", "Postman"]
  },
  {
    role: "Full Stack & AI Engineer",
    company: "Musical AI",
    location: "Los Angeles, United States",
    period: "03/2024 - 02/2025",
    description: [
      "Built user interfaces for the BeMusic project using React/Next.js and optimized components in AWS Amplify Studio",
      "Improved code reliability with TypeScript implementation",
      "Implemented secure multi-user authentication with token-based login and session persistence",
      "Integrated Python Gradio for AI audio generation and developed deep-learning models for genre and mood classification"
    ],
    skills: ["React", "Next.js", "TypeScript", "AWS Amplify", "Python", "AI/ML"]
  },
  {
    role: "FrontEnd Heavy Full Stack Developer",
    company: "Realtime Feedback",
    location: "Dallas, United States",
    period: "12/2022 - 03/2024",
    description: [
      "Built the frontend with React and Next.js using SSR/SSG to improve speed and performance",
      "Developed a scalable Laravel backend with real-time chat, notifications, and integrations like Twilio and Stripe",
      "Optimized performance using Redis and DataDog and supported migration to AWS EC2 with Docker",
      "Implemented AI features, including a 24/7 RAG-based chatbot using HuggingFace and Python"
    ],
    skills: ["React", "Next.js", "Laravel", "Docker", "AWS", "Redis", "Python", "HuggingFace"]
  },
  {
    role: "Senior Next.js & Web3 Developer Intern",
    company: "EcoToken",
    location: "Langley, Canada",
    period: "02/2022 - 03/2023",
    description: [
      "Led development of core user experiences with API caching and modular UI Kit with Wagmi for blockchain integration",
      "Built scalable applications using Next.js, T3 stack (TypeScript, Tailwind, TRPC), Prisma, and Subgraph for GraphQL-powered CMS",
      "Developed Web3 features including Solidity smart contracts, NFT deployment with Hardhat and Streamlit",
      "Enhanced user experience by implementing account abstraction and linking wallet addresses to email accounts"
    ],
    skills: ["Next.js", "TypeScript", "Web3", "Solidity", "Hardhat", "GraphQL", "IPFS"]
  },
  {
    role: "Team Lead",
    company: "CeX",
    location: "Ennis",
    period: "05/2024",
    description: [
      "Managed customer interactions and ensured high service standards",
      "Evaluated and priced second-hand devices for trade-ins",
      "Supervised and mentored team members to enhance performance",
      "Addressed and resolved customer issues efficiently"
    ],
    skills: ["Customer Service", "Team Leadership", "Quality Assurance", "Sales"]
  }
];

export function ExperienceSection() {
  return (
    <section 
      id="experience" 
      className="py-20"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="relative pl-8 border-l-2 border-primary/20 group"
            >
              <div className="absolute -left-2.5 top-0 w-4 h-4 rounded-full bg-primary group-hover:scale-150 transition-transform"></div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                <h3 className="text-xl font-semibold">{exp.role}</h3>
                <span className="text-muted-foreground">@ {exp.company}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <span>{exp.period}</span>
                <span>•</span>
                <span>{exp.location}</span>
              </div>
              <ul className="mb-3 space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

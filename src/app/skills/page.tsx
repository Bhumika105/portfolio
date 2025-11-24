import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Skills | Bhumika Nautiyal",
};

const categories = [
  {
    name: "Frontend",
    items: ["React", "Next.js", "TypeScript", "TailwindCSS", "shadcn/ui"],
  },
  {
    name: "Backend",
    items: ["Node.js", "Express", "Laravel/PHP", "Java", "C#/.NET"],
  },
  {
    name: "AI/ML",
    items: ["Python", "TensorFlow", "LLM/RAG", "HuggingFace", "Gradio"],
  },
  {
    name: "Blockchain",
    items: ["Solidity", "EVM", "Polygon", "Cardano", "Hardhat", "Wagmi"],
  },
  {
    name: "Data & DevOps",
    items: ["SQL", "Redis", "Docker", "Kubernetes", "AWS"],
  },
];

export default function SkillsPage() {
  return (
    <section className="py-12">
      <h1 className="mb-8 text-3xl font-semibold tracking-tight">Skills</h1>
      <div className="grid gap-8 sm:grid-cols-2">
        {categories.map((c) => (
          <div key={c.name}>
            <h2 className="mb-3 text-xl font-medium">{c.name}</h2>
            <div className="flex flex-wrap gap-2">
              {c.items.map((i) => (
                <Badge key={i} variant="secondary">
                  {i}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

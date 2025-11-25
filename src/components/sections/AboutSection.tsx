import { Badge } from "@/components/ui/badge";
import { Code, Cpu, Database, Globe, Smartphone, GraduationCap, BookOpen, Server, CpuIcon, Cloud } from "lucide-react";

export function AboutSection() {
  const skills = [
    { 
      name: "Frontend", 
      icon: <Code className="h-6 w-6" />, 
      items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML/CSS"] 
    },
    { 
      name: "Backend", 
      icon: <Server className="h-6 w-6" />, 
      items: ["Node.js", "Express", "Python", "Java", "C#", ".NET"] 
    },
    { 
      name: "Blockchain", 
      icon: <Globe className="h-6 w-6" />, 
      items: ["Solidity", "Web3.js", "Ethereum", "Hardhat", "IPFS", "Wagmi"] 
    },
    { 
      name: "AI/ML", 
      icon: <Cpu className="h-6 w-6" />, 
      items: ["TensorFlow", "PyTorch", "NLP", "Computer Vision", "HuggingFace", "Gradio"] 
    },
    { 
      name: "Cloud & DevOps", 
      icon: <Cloud className="h-6 w-6" />, 
      items: ["AWS", "Docker", "Kubernetes", "CI/CD", "GitHub Actions", "Helm"] 
    },
    { 
      name: "Database & Tools", 
      icon: <Database className="h-6 w-6" />, 
      items: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Prisma", "GraphQL"] 
    },
  ];

  return (
    <section 
      id="about" 
      className="py-20 bg-muted/50"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                Professional Summary
              </h3>
              <p className="text-lg mb-6">
                I'm a passionate Full Stack Engineer with expertise in Blockchain and AI technologies. 
                With experience in building scalable web applications and implementing cutting-edge 
                solutions in the blockchain and AI space, I bring a strong foundation in both 
                frontend and backend development.
              </p>
              <p className="text-lg">
                My journey in tech is driven by curiosity and a love for solving complex problems. 
                I thrive in dynamic environments where I can apply my skills to create impactful solutions.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-primary" />
                Education
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">BSc in Software Development</h4>
                  <p className="text-muted-foreground">Technological University of the Shannon (TUS)</p>
                  <p className="text-sm text-muted-foreground">2021 - 2025 | Limerick, Ireland</p>
                  <div className="mt-2">
                    <h5 className="text-sm font-medium">Core Modules:</h5>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {["Software Testing (JUnit)", "Applications Development (C#)", 
                        "Enterprise Application Development (Java)", "Big Data Mining (Python)", 
                        "Responsive Web Development", "Secure Cloud Services (AWS)"].map((module) => (
                        <Badge key={module} variant="secondary" className="text-xs">
                          {module}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <CpuIcon className="h-5 w-5 text-primary" />
            Technical Skills
          </h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => (
              <div key={skill.name} className="rounded-lg border p-6 bg-card hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    {skill.icon}
                  </div>
                  <h4 className="text-lg font-medium">{skill.name}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <Badge key={item} variant="outline" className="text-xs">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

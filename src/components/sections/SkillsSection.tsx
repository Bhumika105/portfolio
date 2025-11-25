import React from 'react';
import { Code, Cpu, Database, Globe, Smartphone, Server, GitBranch } from "lucide-react";

type SkillCategory = {
  name: string;
  icon: React.ReactNode;
  skills: {
    name: string;
    level: number;
  }[];
};

export function SkillsSection() {
  const skills: SkillCategory[] = [
    {
      name: "Frontend",
      icon: <Code className="h-6 w-6" />,
      skills: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 90 },
      ],
    },
    {
      name: "Backend",
      icon: <Server className="h-6 w-6" />,
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express", level: 85 },
        { name: "NestJS", level: 80 },
        { name: "Python", level: 75 },
      ],
    },
    {
      name: "Blockchain",
      icon: <Globe className="h-6 w-6" />,
      skills: [
        { name: "Solidity", level: 85 },
        { name: "Ethereum", level: 85 },
        { name: "Web3.js", level: 80 },
        { name: "Hardhat", level: 80 },
      ],
    },
    {
      name: "AI/ML",
      icon: <Cpu className="h-6 w-6" />,
      skills: [
        { name: "TensorFlow", level: 75 },
        { name: "PyTorch", level: 70 },
        { name: "NLP", level: 75 },
        { name: "Computer Vision", level: 70 },
      ],
    },
    {
      name: "Mobile",
      icon: <Smartphone className="h-6 w-6" />,
      skills: [
        { name: "React Native", level: 80 },
        { name: "Flutter", level: 70 },
        { name: "iOS/Swift", level: 60 },
        { name: "Android/Kotlin", level: 65 },
      ],
    },
    {
      name: "DevOps & Tools",
      icon: <GitBranch className="h-6 w-6" />,
      skills: [
        { name: "Docker", level: 80 },
        { name: "Kubernetes", level: 70 },
        { name: "AWS", level: 75 },
        { name: "CI/CD", level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Skills & Expertise</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((category, index) => (
            <div key={index} className="rounded-xl border p-6 bg-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.name}</h3>
              </div>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary rounded-full"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

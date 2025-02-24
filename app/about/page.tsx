"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function About() {
  const skills = {
    "Languages & Frameworks": [
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "React.js",
      "Node.js",
      "Express.js",
      "Next.js",
    ],
    "Database Technologies": ["MongoDB", "PostgreSQL"],
    "DevOps & Tools": ["Docker", "Kubernetes", "GitHub", "GitLab", "Linux"],
    "Other Technologies": [
      "TailwindCSS",
      "Zod",
      "Embedded C",
      "IoT",
      "Machine Learning",
      "AI",
    ],
  };

  return (
    <main className="min-h-screen bg-background py-20">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>
          
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Professional Summary</h2>
            <p className="text-muted-foreground mb-6">
              Results-driven Full-Stack Software Engineer with over three years of experience
              developing and deploying scalable web applications for high-profile clients.
              Proven track record of enhancing performance, reducing page load times, and
              delivering user-centric solutions. Adept at leading cross-functional teams
              and providing innovative, problem-solving strategies in remote environments.
            </p>
            <p className="text-muted-foreground">
              Throughout my career, I've improved application performance by 30%, achieved
              95% test coverage, and developed AI-driven solutions with 85% accuracy.
              I'm passionate about creating efficient, user-friendly applications that
              solve real-world problems.
            </p>
          </Card>

          <div className="space-y-8">
            {Object.entries(skills).map(([category, items]) => (
              <Card key={category} className="p-6">
                <h2 className="text-xl font-semibold mb-4">{category}</h2>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
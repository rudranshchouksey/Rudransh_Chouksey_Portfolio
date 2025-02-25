"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin, Briefcase } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      company: "Accenture",
      role: "Software Analyst",
      period: "Nov 2023 - Present",
      location: "Indore, Madhya Pradesh, India",
      type: "Hybrid",
      description: [
        "Developed scalable web apps using React, Next.js, TypeScript, MongoDB, and Prisma",
        "Improved app performance by 30% and reduced load times by 25%",
        "Provided technical support for 50+ stakeholders, improving issue resolution by 40%",
        "Developed 150+ unit tests, ensuring 95% code coverage"
      ],
      skills: ["React", "Next.js", "TypeScript", "MongoDB", "Prisma", "TailwindCSS"]
    },
    {
      company: "Accenture",
      role: "Associate Software Engineer",
      period: "Sep 2021 - Nov 2023",
      location: "Indore, Madhya Pradesh, India",
      type: "Hybrid",
      description: [
        "Designed enterprise apps using Oracle WebLogic & SOA Suite",
        "Led microservices development with Kubernetes, Kafka, Docker",
        "Built modern UI/UX using React, TailwindCSS, and Next.js"
      ],
      skills: ["Oracle WebLogic", "SOA Suite", "Kubernetes", "Kafka", "Docker", "React"]
    },
    {
      company: "Freelance",
      role: "Full-Stack Developer",
      period: "Jan 2022 - Present",
      location: "India",
      type: "Remote",
      description: [
        "Built custom full-stack applications using MERN stack and Web3",
        "Developed AI-driven applications with 85% prediction accuracy",
        "Created IoT automation systems improving efficiency by 30%",
        "Implemented WebRTC for real-time communication",
        "Optimized database performance for high scalability"
      ],
      skills: ["MERN Stack", "Web3", "AI/ML", "IoT", "WebRTC", "PostgreSQL"]
    },
    {
      company: "ROBOTRONiX INDIA",
      role: "Intern",
      period: "Aug 2020 - May 2021",
      location: "Indore, Madhya Pradesh, India",
      type: "Hybrid",
      description: [
        "Developed ML models with 85% accuracy for predictive analysis",
        "Implemented AI-driven prototypes with 95% uptime",
        "Assisted in organizing 3 product launch events"
      ],
      skills: ["Python", "Flask", "NLP", "Deep Learning", "Machine Learning", "AI"]
    },
    {
      company: "BitByte Software Technology",
      role: "Trainee",
      period: "Feb 2020 - Aug 2020",
      location: "Indore, Madhya Pradesh, India",
      type: "Remote",
      description: [
        "Developed IoT solutions with Raspberry Pi & Embedded C",
        "Integrated APIs, expanding functionality by 40%",
        "Optimized hardware-software integration"
      ],
      skills: ["Python", "Flask", "Embedded C", "IoT", "API Integration"]
    }
  ];

  return (
    <main className="min-h-screen bg-background py-20">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold mb-12 text-center">Experience</h1>
          <div className="max-w-4xl mx-auto">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="mb-8 p-6 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-2 h-full bg-primary/20 group-hover:bg-primary transition-colors duration-300" />
                  <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                    <h3 className="text-xl font-semibold">{experience.role}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Building2 className="h-4 w-4" />
                      <span>{experience.company}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{experience.period}</span>
                    </div>
                    <Badge variant="secondary">{experience.type}</Badge>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground mb-4">
                    <MapPin className="h-4 w-4" />
                    <span>{experience.location}</span>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {experience.description.map((item, i) => (
                      <li key={i} className="text-muted-foreground">
                        • {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill, i) => (
                      <Badge key={i} variant="outline">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
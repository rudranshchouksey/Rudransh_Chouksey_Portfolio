"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "AI SaaS Real-time Video Sharing + Desktop App",
      description: "Cross-platform video sharing solution with real-time capabilities",
      longDescription: "A comprehensive video sharing platform that combines the power of cloud computing with desktop convenience. Built with modern technologies to ensure high performance and reliability.",
      achievements: [
        "Developed SaaS platform with AWS, CloudFront, Next.js, Electron",
        "Maintained 99% uptime and reduced latency by 20%",
        "Implemented real-time features using Socket.io"
      ],
      tech: ["AWS", "Next.js", "Electron", "Socket.io", "Express"],
      github: "https://github.com/rudranshchouksey/video-sharing-app",
      demo: "https://video-sharing-app.demo.com",
      images: [
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
        "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&h=400&fit=crop",
        "https://images.unsplash.com/photo-1618788372246-79faff0c3742?w=800&h=400&fit=crop"
      ]
    },
    {
      title: "Food Delivery App",
      description: "Full-stack food delivery platform with real-time tracking",
      longDescription: "A modern food delivery application that connects restaurants with customers. Features include real-time order tracking, restaurant management, and a seamless ordering experience.",
      achievements: [
        "Built system supporting 500+ daily users",
        "Reduced order processing time by 30%",
        "Improved customer satisfaction by 15%"
      ],
      tech: ["React.js", "Node.js", "MongoDB", "Socket.io"],
      github: "https://github.com/rudranshchouksey/food-delivery",
      demo: "https://food-delivery.demo.com",
      images: [
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=400&fit=crop",
        "https://images.unsplash.com/photo-1565299585577-e4e457bf63b7?w=800&h=400&fit=crop",
        "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=800&h=400&fit=crop"
      ]
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
          <h1 className="text-4xl font-bold mb-12 text-center">Projects</h1>
          <div className="max-w-6xl mx-auto space-y-20">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="overflow-hidden">
                  <div className="relative w-full h-[400px] overflow-hidden">
                    <div className="flex transition-transform duration-500 hover:translate-x-[-66.666%]">
                      {project.images.map((image, i) => (
                        <div key={i} className="relative w-full flex-shrink-0">
                          <img
                            src={image}
                            alt={`${project.title} screenshot ${i + 1}`}
                            className="w-full h-[400px] object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="p-8">
                    <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
                    <p className="text-lg text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <p className="text-muted-foreground mb-6">
                      {project.longDescription}
                    </p>
                    <div className="space-y-4 mb-6">
                      <h3 className="text-lg font-semibold">Key Achievements:</h3>
                      <ul className="space-y-2">
                        {project.achievements.map((achievement, i) => (
                          <li key={i} className="text-muted-foreground">
                            • {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map((tech, i) => (
                        <Badge key={i} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <Button
                        variant="outline"
                        asChild
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <Github className="h-4 w-4" />
                          View Code
                        </a>
                      </Button>
                      <Button
                        asChild
                      >
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    </div>
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
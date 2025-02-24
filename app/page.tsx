"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  Download,
  Github,
  Linkedin,
  Mail,
  Calendar,
  Building2,
  Briefcase,
  MapPin,
  ExternalLink,
  Phone,
  Globe,
  BookOpen
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
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

  const projects = [
    {
      title: "AI SaaS Real-time Video Sharing + Desktop App",
      description: "Cross-platform video sharing solution with real-time capabilities",
      achievements: [
        "Developed SaaS platform with AWS, CloudFront, Next.js, Electron",
        "Maintained 99% uptime and reduced latency by 20%",
        "Implemented real-time features using Socket.io"
      ],
      tech: ["AWS", "Next.js", "Electron", "Socket.io", "Express"],
      github: "https://github.com/rudranshchouksey/video-sharing-app",
      demo: "https://video-sharing-app.demo.com"
    },
    {
      title: "Food Delivery App",
      description: "Full-stack food delivery platform with real-time tracking",
      achievements: [
        "Built system supporting 500+ daily users",
        "Reduced order processing time by 30%",
        "Improved customer satisfaction by 15%"
      ],
      tech: ["React.js", "Node.js", "MongoDB", "Socket.io"],
      github: "https://github.com/rudranshchouksey/food-delivery",
      demo: "https://food-delivery.demo.com"
    }
  ];

  const education = {
    degree: "Bachelor of Technology in Computer Science",
    institution: "Lakshmi Narain College of Technology",
    location: "Indore, Madhya Pradesh",
    period: "Aug 2017 – June 2021"
  };

  const publications = [
    {
      title: "Analytical Problem-Solving Approach using Artificial Neural Network",
      journal: "International Journal of Technology Research and Management (IJTRM)",
      date: "April 2019"
    }
  ];

  const certifications = [
    {
      name: "Full-Stack Web Development Certificate",
      issuer: "100xDevs"
    },
    {
      name: "Technology Certifications",
      issuer: "Code Dam"
    }
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-background/80 z-0" />
        <div className="container px-4 mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&q=80"
              alt="Rudransh Chouksey"
              className="w-32 h-32 rounded-full mx-auto mb-8 border-4 border-primary/20"
            />
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Rudransh Chouksey
            </h1>
            <div className="text-xl md:text-2xl text-muted-foreground mb-4">
              <TypeAnimation
                sequence={[
                  "Full-Stack Developer",
                  2000,
                  "Software Analyst at Accenture",
                  2000,
                  "AI & IoT Enthusiast",
                  2000,
                ]}
                repeat={Infinity}
              />
            </div>
            <div className="flex items-center justify-center gap-4 text-muted-foreground mb-8">
              <span className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                +917999189654
              </span>
              <span className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                rudranshchouksey@gmail.com
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Indore, India
              </span>
            </div>
            <div className="flex gap-4 justify-center mb-12">
              <Button variant="default" size="lg">
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </Button>
              <Button variant="outline" size="lg">
                <Mail className="mr-2 h-4 w-4" /> Contact Me
              </Button>
            </div>
            <div className="flex gap-4 justify-center">
              <a
                href="https://github.com/rudranshchouksey"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/in/rudransh-chouksey-586489147"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-8">About Me</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Results-driven Full-Stack Software Engineer with over three years of experience developing and deploying scalable web applications for high-profile clients. I specialize in building scalable web applications using modern technologies like React, Next.js, and Node.js. My expertise extends to AI/ML, IoT, and enterprise solutions.
            </p>
            <p className="text-lg text-muted-foreground">
              Throughout my career, I've improved application performance by 30%, achieved 95% test coverage, and developed AI-driven solutions with 85% accuracy. I'm passionate about creating efficient, user-friendly applications that solve real-world problems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
            <div className="max-w-4xl mx-auto">
              {experiences.map((experience, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
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
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full">
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                      <p className="text-muted-foreground mb-4">{project.description}</p>
                      <ul className="space-y-2 mb-4">
                        {project.achievements.map((achievement, i) => (
                          <li key={i} className="text-muted-foreground">
                            • {achievement}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech, i) => (
                          <Badge key={i} variant="outline">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-4">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Github className="h-4 w-4" />
                          <span>Code</span>
                        </a>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                        >
                          <ExternalLink className="h-4 w-4" />
                          <span>Live Demo</span>
                        </a>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education & Publications Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8">Education</h2>
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-2">{education.degree}</h3>
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <Building2 className="h-4 w-4" />
                  <span>{education.institution}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <MapPin className="h-4 w-4" />
                  <span>{education.location}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{education.period}</span>
                </div>
              </Card>
            </motion.div>

            {/* Publications */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8">Publications</h2>
              {publications.map((pub, index) => (
                <Card key={index} className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{pub.title}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    <BookOpen className="h-4 w-4" />
                    <span>{pub.journal}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{pub.date}</span>
                  </div>
                </Card>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
            <Card className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-2">
                  <Phone className="h-5 w-5 text-muted-foreground" />
                  <a href="tel:+917999189654" className="text-lg hover:text-primary transition-colors">
                    +91 7999189654
                  </a>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <a href="mailto:rudranshchouksey@gmail.com" className="text-lg hover:text-primary transition-colors">
                    rudranshchouksey@gmail.com
                  </a>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                  <span className="text-lg">Indore, Madhya Pradesh, India</span>
                </div>
                <div className="flex justify-center gap-4 pt-4">
                  <a
                    href="https://github.com/rudranshchouksey"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                  <a
                    href="https://linkedin.com/in/rudransh-chouksey-586489147"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
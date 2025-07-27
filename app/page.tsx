"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useSpring } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Download,
  ExternalLink,
  Menu,
  X,
  ChevronDown,
  Trophy,
  Calendar,
  Star,
  Code,
  Globe,
  Brain,
  Shield,
  Palette,
} from "lucide-react"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [typewriterText, setTypewriterText] = useState("")
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [hoveredElements, setHoveredElements] = useState<number[]>([])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const typewriterTexts = ["App Developer", "Cybersecurity Enthusiast", "Flutter Wizard", "Blockchain Explorer"]

  useEffect(() => {
    let currentTextIndex = 0
    let currentCharIndex = 0
    let isDeleting = false

    const typeInterval = setInterval(
      () => {
        const currentText = typewriterTexts[currentTextIndex]

        if (!isDeleting) {
          setTypewriterText(currentText.substring(0, currentCharIndex + 1))
          currentCharIndex++

          if (currentCharIndex === currentText.length) {
            setTimeout(() => {
              isDeleting = true
            }, 2000)
          }
        } else {
          setTypewriterText(currentText.substring(0, currentCharIndex - 1))
          currentCharIndex--

          if (currentCharIndex === 0) {
            isDeleting = false
            currentTextIndex = (currentTextIndex + 1) % typewriterTexts.length
          }
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearInterval(typeInterval)
  }, [])

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    setMobileMenuOpen(false)
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  const handleDownloadResume = () => {
    const link = document.createElement("a")
    link.href = "/resume.pdf"
    link.download = "Divyansh_Krishna_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const skills = {
    "App Development": {
      icon: <Code className="w-6 h-6" />,
      level: "Expert",
      description: "Industrial-level Flutter developer",
      technologies: ["Flutter", "Dart", "Firebase", "Android Studio", "iOS Development"],
      experience: "2+ years",
      projects: "5+ apps built",
    },
    "Web Development": {
      icon: <Globe className="w-6 h-6" />,
      level: "Intermediate",
      description: "Full-stack web development capabilities",
      technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB", "Express"],
      experience: "1.5+ years",
      projects: "3+ websites",
    },
    Cybersecurity: {
      icon: <Shield className="w-6 h-6" />,
      level: "Advanced",
      description: "Penetration testing and security analysis",
      technologies: ["Kali Linux", "Wireshark", "Wifite", "BurpSuite", "Phishing Tools", "DoS Attacks"],
      experience: "2+ years",
      projects: "WiFi Pentesting Suite",
    },
    "AI/ML": {
      icon: <Brain className="w-6 h-6" />,
      level: "Beginner",
      description: "Model training and data analysis",
      technologies: ["Python", "TensorFlow", "Data Analysis", "Model Training"],
      experience: "1+ year",
      projects: "Award-winning ML project",
    },
    "Design & Content": {
      icon: <Palette className="w-6 h-6" />,
      level: "Intermediate",
      description: "Creative design and content creation",
      technologies: ["Figma", "Video Editing", "Social Media Design", "Content Creation"],
      experience: "1.5+ years",
      projects: "Multiple design projects",
    },
  }

  const projects = [
    {
      name: "Nimbus",
      description:
        "Social networking app designed specifically for athletes to connect, share achievements, and find training partners.",
      tech: ["Flutter", "Firebase", "Dart"],
      category: "app",
      image: "/placeholder.svg?height=200&width=300",
      github: "https://github.com/dvyansh22",
      live: "#",
    },
    {
      name: "TraveLink",
      description:
        "Comprehensive travel planning website for students with budget tracking and group coordination features.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      category: "web",
      image: "/placeholder.svg?height=200&width=300",
      github: "https://github.com/dvyansh22",
      live: "#",
    },
    {
      name: "RoboWars",
      description: "Match scheduling and tournament management app for robotics competitions.",
      tech: ["Flutter", "SQLite", "Provider"],
      category: "app",
      image: "/placeholder.svg?height=200&width=300",
      github: "https://github.com/dvyansh22",
      live: "#",
    },
    {
      name: "WiFi Pentesting Suite",
      description: "Comprehensive WiFi security testing toolkit with automated vulnerability assessment.",
      tech: ["Python", "Kali Linux", "Bash"],
      category: "cybersec",
      image: "/placeholder.svg?height=200&width=300",
      github: "https://github.com/dvyansh22",
      live: "#",
    },
  ]

  const experiences = [
    {
      role: "App Development Intern",
      company: "K12 Techno Services",
      period: "2024",
      description:
        "Developed mobile applications using Flutter, implemented Firebase integration, and collaborated with cross-functional teams.",
      tech: ["Flutter", "Firebase", "Git"],
    },
    {
      role: "Co-Secretary",
      company: "Cybersecurity Club, VIT",
      period: "2025 - Present",
      description:
        "Led cybersecurity workshops, organized CTF competitions, and managed club operations with 200+ members.",
      tech: ["Leadership", "Event Management", "Cybersecurity"],
    },
  ]

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert":
        return "text-green-400"
      case "Advanced":
        return "text-blue-400"
      case "Intermediate":
        return "text-yellow-400"
      case "Beginner":
        return "text-orange-400"
      default:
        return "text-gray-400"
    }
  }

  const getLevelStars = (level: string) => {
    const stars = {
      Expert: 5,
      Advanced: 4,
      Intermediate: 3,
      Beginner: 2,
    }
    return stars[level as keyof typeof stars] || 1
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      {/* Interactive Tech Background - Global */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Hexagonal Grid */}
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hexGrid" x="0" y="0" width="60" height="52" patternUnits="userSpaceOnUse">
              <polygon
                points="30,2 50,15 50,37 30,50 10,37 10,15"
                fill="none"
                stroke="url(#hexGradient)"
                strokeWidth="0.5"
              />
            </pattern>
            <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexGrid)" />
        </svg>

        {/* Circuit Lines */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`circuit-${i}`}
            className="absolute bg-gradient-to-r from-cyan-400/20 to-purple-500/20"
            style={{
              width: Math.random() * 200 + 100,
              height: 1,
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              transformOrigin: "left center",
            }}
            animate={{
              scaleX: [0, 1, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}

        
        

        {/* Floating Tech Elements */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`tech-${i}`}
            className="absolute text-cyan-400/30 font-mono text-xs"
            style={{
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.7, 0.3],
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            {["</>", "{}", "[]", "()", "&&", "||", "!=", "=="][Math.floor(Math.random() * 8)]}
          </motion.div>
        ))}

        {/* Reduced Mouse Follower */}
        <motion.div
          className="absolute pointer-events-none"
          style={{
            left: mousePosition.x - 60,
            top: mousePosition.y - 60,
          }}
        >
          {/* Outer glow - reduced */}
          <motion.div
            className="absolute w-24 h-24 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, rgba(139, 92, 246, 0.1) 30%, transparent 60%)",
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />

          {/* Inner core - reduced */}
          <motion.div
            className="absolute w-12 h-12 rounded-full"
            style={{
              left: 24,
              top: 24,
              background:
                "radial-gradient(circle, rgba(6, 182, 212, 0.3) 0%, rgba(139, 92, 246, 0.2) 50%, transparent 80%)",
            }}
            animate={{
              scale: [0.8, 1.1, 0.8],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-green-400 z-50"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-black/60 backdrop-blur-md border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div
              className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              DK
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["Home", "About", "Skills", "Projects", "Experience", "Awards", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`px-3 py-2 text-sm font-medium transition-colors hover:text-cyan-400 ${
                    activeSection === item.toLowerCase() ? "text-cyan-400" : "text-gray-300"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-300 hover:text-white">
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden bg-black/95 backdrop-blur-md"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {["Home", "About", "Skills", "Projects", "Experience", "Awards", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-cyan-400 w-full text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-green-400 bg-clip-text text-transparent">
                Divyansh Krishna
              </span>
            </motion.h1>

            <motion.div
              className="text-xl md:text-2xl text-gray-300 mb-8 h-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {typewriterText}
              <span className="animate-pulse">|</span>
            </motion.div>

            <motion.div
              className="flex justify-center space-x-6 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <a href="https://github.com/dvyansh22" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/divyanshkrishna/"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:divyanshkrishna3@gmail.com"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Mail size={24} />
              </a>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <Button
                onClick={() => scrollToSection("projects")}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-3"
              >
                Explore My Work
              </Button>
              <Button
                onClick={handleDownloadResume}
                variant="outline"
                className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-3 bg-transparent"
              >
                <Download className="mr-2" size={16} />
                Download Resume
              </Button>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <ChevronDown className="text-cyan-400" size={32} />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900/20 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="relative">
                <div className="w-64 h-64 mx-auto rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 p-1">
                  <img
                    src="/profilepic.jpg?height=256&width=256"
                    alt="Divyansh Krishna"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                I'm a passionate B.Tech student specializing in Computer Science with Blockchain Technology at VIT
                Vellore. My journey in tech spans across app development, cybersecurity, and emerging technologies. I
                love creating innovative solutions and exploring the intersection of security and development.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <Card className="bg-gray-800/60 border-gray-700/50 backdrop-blur-sm">
                  <CardContent className="p-4 text-center">
                    <div className="text-cyan-400 mb-2">🏫</div>
                    <div className="text-sm text-gray-300">Education</div>
                    <div className="font-semibold">VIT Vellore</div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800/60 border-gray-700/50 backdrop-blur-sm">
                  <CardContent className="p-4 text-center">
                    <div className="text-purple-400 mb-2">📍</div>
                    <div className="text-sm text-gray-300">Location</div>
                    <div className="font-semibold">Varanasi, India</div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800/60 border-gray-700/50 backdrop-blur-sm">
                  <CardContent className="p-4 text-center">
                    <div className="text-green-400 mb-2">📧</div>
                    <div className="text-sm text-gray-300">Email</div>
                    <div className="font-semibold text-xs">divyanshkrishna3@gmail.com</div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800/60 border-gray-700/50 backdrop-blur-sm">
                  <CardContent className="p-4 text-center">
                    <div className="text-yellow-400 mb-2">🧠</div>
                    <div className="text-sm text-gray-300">Hobbies</div>
                    <div className="font-semibold">Chess, Rubik's Cube</div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Skills & Expertise
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillData], categoryIndex) => (
              <motion.div
                key={category}
                className="bg-gray-900/30 backdrop-blur-sm p-6 rounded-lg border border-gray-800/50 hover:border-cyan-400/50 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <div className="text-cyan-400 mr-3">{skillData.icon}</div>
                  <h3 className="text-xl font-semibold text-cyan-400">{category}</h3>
                </div>

                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-sm font-medium ${getLevelColor(skillData.level)}`}>{skillData.level}</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={12}
                          className={`${
                            i < getLevelStars(skillData.level) ? "text-yellow-400 fill-current" : "text-gray-600"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-3">{skillData.description}</p>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>Experience: {skillData.experience}</span>
                    <span>{skillData.projects}</span>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {skillData.technologies.slice(0, 4).map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-gray-700/50 text-gray-300 text-xs px-2 py-1">
                        {tech}
                      </Badge>
                    ))}
                    {skillData.technologies.length > 4 && (
                      <Badge variant="secondary" className="bg-gray-700/50 text-gray-400 text-xs px-2 py-1">
                        +{skillData.technologies.length - 4}
                      </Badge>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-900/20 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                className="bg-gray-800/60 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-700/50 hover:border-cyan-400 transition-colors group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                    <a href={project.github} className="text-white hover:text-cyan-400">
                      <Github size={24} />
                    </a>
                    <a href={project.live} className="text-white hover:text-cyan-400">
                      <ExternalLink size={24} />
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-cyan-400">{project.name}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-gray-700 text-gray-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Experience
          </motion.h2>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 to-purple-500"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center mb-12 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                  <Card className="bg-gray-800/60 border-gray-700/50 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-2">
                        <Calendar className="text-cyan-400 mr-2" size={16} />
                        <span className="text-sm text-gray-400">{exp.period}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-cyan-400 mb-1">{exp.role}</h3>
                      <h4 className="text-lg text-purple-400 mb-3">{exp.company}</h4>
                      <p className="text-gray-300 mb-4">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((tech) => (
                          <Badge key={tech} variant="secondary" className="bg-gray-700 text-gray-300">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full border-4 border-black"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section id="awards" className="py-20 bg-gray-900/20 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Awards & Achievements
          </motion.h2>

          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border-yellow-500/30">
              <CardContent className="p-8 text-center">
                <Trophy className="text-yellow-400 mx-auto mb-4" size={48} />
                <h3 className="text-2xl font-bold text-yellow-400 mb-2">Yantra Central Hack</h3>
                <p className="text-xl text-gray-300 mb-4">Best Electronics Project</p>
                <p className="text-gray-400">
                  Awarded for developing an innovative machine learning solution that demonstrated exceptional technical
                  excellence and practical application in electronics.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Get In Touch
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h3 className="text-2xl font-semibold mb-6 text-cyan-400">Let's Connect</h3>
              <p className="text-gray-300 mb-8">
                I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.
                Feel free to reach out!
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="text-cyan-400 mr-4" size={20} />
                  <span className="text-gray-300">divyanshkrishna3@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="text-cyan-400 mr-4" size={20} />
                  <span className="text-gray-300">+91 7985538268</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="text-cyan-400 mr-4" size={20} />
                  <span className="text-gray-300">Varanasi, India</span>
                </div>
              </div>

              <div className="flex space-x-4 mt-8">
                <a href="https://github.com/dvyansh22" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/divyanshkrishna/"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Card className="bg-gray-800/60 border-gray-700/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <form className="space-y-6">
                    <div>
                      <Input
                        placeholder="Your Name"
                        className="bg-gray-900 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-400"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Your Email"
                        className="bg-gray-900 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-400"
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder="Your Message"
                        rows={5}
                        className="bg-gray-900 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-400"
                      />
                    </div>
                    <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © 2025 Divyansh Krishna. Made with ❤️ using Next.js & Tailwind CSS
            </div>
            <div className="flex space-x-6">
              {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

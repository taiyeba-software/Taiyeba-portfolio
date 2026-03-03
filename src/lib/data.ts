export const siteConfig = {
  name: "Taiyeba Islam",
  role: "Full Stack Developer",
  description:
    "I build accessible, performant web applications with modern technologies. Passionate about clean code, great user experiences, and solving complex problems.",
  location: "Dhaka, Bangladesh",
  email: "islamtaiyeba38@gmail.com",
  socials: {
    github: "https://github.com/taiyeba-software",
    linkedin: "https://linkedin.com/in/taiyeba-islam",
    twitter: "https://x.com",
  },
  navLinks: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ],
}

export const aboutData = {
  paragraphs: [
    "I'm a developer passionate about crafting clean, performant user interfaces that blend thoughtful design with robust engineering.",
    "My work spans across front-end and back-end development, with a focus on building full-stack applications using React, Next.js, Node.js, and modern cloud infrastructure.",
    "When I'm not coding, you'll find me exploring new technologies, contributing to open source, or reading about system design.",
  ],
}

export interface Project {
  company: string
  title: string
  subtitle: string
  description: string
  tags: string[]
  image: string
  githubLink: string
  liveDemoLink?: string
  status?: "Live" | "Upcoming"
}

export const projectsData: Project[] = [
  {
    company: "Rajkonna",
    title: "Production-Ready E-commerce Backend API",
    subtitle: "Modular, scalable REST API with caching and cloud deployment",
    description:
      "A layered Node.js + Express backend powering an e-commerce platform. Features JWT authentication, role-based authorization, Redis caching, ImageKit CDN integration, and MongoDB Atlas. Fully deployed on Render with environment-driven configuration.",
    tags: ["Node.js", "Express", "MongoDB", "Redis", "JWT", "Render"],
    image: "/placeholder.jpg",
    githubLink: "https://github.com/taiyeba-software/Backend-Rajkonna",
    liveDemoLink: "https://backend-rajkonna.onrender.com",
    status: "Live",
  },
  {
    company: "Rajkonna",
    title: "Full-Stack E-commerce Frontend",
    subtitle: "Responsive shopping experience with authentication & cart system",
    description:
      "A React-based frontend with user authentication, product browsing, cart management, and protected routes. Built with Context API, Tailwind CSS, and integrated with a production-ready backend API.",
    tags: ["React", "React Router", "Tailwind CSS", "Context API"],
    image: "/placeholder.jpg",
    githubLink: "https://github.com/taiyeba-software/rajkonna",
    status: "Live",
  },
  {
    company: "SparkleLab",
    title: "AI Image Editing SaaS (MVP)",
    subtitle: "Cloud-native image processing with secure authentication",
    description:
      "A Next.js + TypeScript SaaS application featuring Clerk authentication, Cloudinary AI background removal, MongoDB integration, and typed server actions. Focused on production debugging, environment configuration, and scalable architecture.",
    tags: ["Next.js", "TypeScript", "MongoDB", "Cloudinary", "Clerk"],
    image: "/placeholder.jpg",
    githubLink: "https://github.com/taiyeba-software/SparkleLab",
    status: "Live",
  },
  {
    company: "VerbaScope",
    title: "AI-Assisted Early Emotional Signal Detection Platform",
    subtitle: "Upcoming research-driven NLP system for Bangla code-mixed text",
    description:
      "VerbaScope is an AI-assisted platform designed to detect early emotional signals in Bangla-English code-mixed social media text during content creation. The system follows a modular microservice architecture with a Next.js frontend, Node.js API layer, and a FastAPI-based ML service for probabilistic sentiment and sarcasm detection. Currently in development as a final-year research project.",
    tags: ["Next.js", "Node.js", "FastAPI", "MongoDB", "NLP", "Microservices"],
    image: "/verbascape-preview.jpg",
    githubLink: "#",
    liveDemoLink: "#",
    status: "Upcoming",
  }
]

export interface SkillCluster {
  title: string
  description: string
  technologies: string[]
  icon: string
}

export const skillsData: SkillCluster[] = [
  {
    title: "Frontend Engineering",
    description: "Building responsive, accessible UIs with modern frameworks and component design patterns.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    icon: "Code",
  },
  {
    title: "Backend Development",
    description: "Creating robust server-side logic with RESTful APIs, authentication, and authorization layers.",
    technologies: ["Node.js", "Express", "REST APIs", "JWT", "Environment Configuration"],
    icon: "Server",
  },
  {
    title: "Database & Data Modeling",
    description: "Designing scalable data structures and managing persistence with modern document databases.",
    technologies: ["MongoDB", "Mongoose", "MongoDB Atlas", "Data Modeling"],
    icon: "Database",
  },
  {
    title: "System Architecture",
    description: "Architecting layered, maintainable systems with role-based access and service orientation.",
    technologies: ["Layered Design", "RBAC", "Service-Oriented Architecture", "Microservices"],
    icon: "Layers",
  },
  {
    title: "Cloud & Deployment",
    description: "Deploying applications to production with environment-driven configuration and monitoring.",
    technologies: ["Render", "Vercel", "Environment Configuration", "CI/CD Basics"],
    icon: "Cloud",
  },
  {
    title: "AI & Applied Learning",
    description: "Building AI-assisted features and exploring practical machine learning applications.",
    technologies: ["FastAPI", "NLP Basics", "Cloudinary AI", "AI Integration"],
    icon: "Sparkles",
  },
]

export const engineeringFoundations = [
  "Git & GitHub Workflow",
  "API Documentation",
  "Jest + Supertest Testing",
  "Production Debugging",
  "Environment Variable Safety",
  "AI-assisted Development (GitHub Copilot, Blackbox AI)",
]

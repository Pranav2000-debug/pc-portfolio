// Skills data organized by category
export const skillsData = {
  languages: {
    title: "Languages",
    skills: ["JavaScript", "TypeScript"],
  },
  frontend: {
    title: "Frontend",
    skills: ["React", "Next.js"],
  },
  backend: {
    title: "Backend",
    skills: ["Node.js", "Express", "Hono"],
  },
  databases: {
    title: "Databases",
    skills: ["MongoDB", "PostgreSQL", "Redis"],
  },
  orm: {
    title: "ORM / Query Builders",
    skills: ["Prisma", "Drizzle", "Mongoose"],
  },
  devops: {
    title: "DevOps & Tools",
    skills: ["Docker", "AWS EC2", "Git", "GitHub"],
  },
};

// Work experience data
export const experienceData = [
  {
    title: "Freelance Developer",
    company: "AOA Society Website",
    location: "Noida, India",
    period: "Feb 2025 - Oct 2025",
    description: [
      "Recognized by the society for contributing to improved transparency and digital accessibility.",
      "Integrated a payment gateway and dashboard with UCO bank for society payments for various events and registrations.",
      "Designed workflows for OTP-based verification and secure certificate downloads through a ReactJS frontend.",
      "Dynamic PDF generation from templates, automatically embedding member details (name, flat number, etc.).",
    ],
  },
];

// Projects data
export const projectsData = [
  {
    title: "Debatrium",
    subtitle: "Online Debating Platform",
    status: "ongoing",
    description:
      "Backend-centric MERN SaaS platform supporting secure PDF ingestion and LLM-driven debate analysis pipelines, including argument classification, counter-argument generation, scoring, and structured outputs.",
    highlights: [
      "Production-grade authentication with JWT, HttpOnly cookies, refresh-token rotation, RBAC",
      "Token-aware document chunking, async job orchestration with Inngest",
      "Containerized backend with Docker, NGINX reverse proxying, and CI/CD pipelines",
    ],
    techStack: ["React", "Node.js", "Express", "MongoDB", "Docker", "NGINX", "Inngest"],
    liveUrl: "", // To be filled
    githubUrl: "https://github.com/Pranav2000-debug/Debatrium", // To be filled
    image: "/images/projects/debatrium.png",
  },
  {
    title: "Pair Code",
    subtitle: "Collaborative Coding Interview Platform",
    status: "completed",
    description: "Real-time coding interview platform featuring a VSCode-powered code editor, 1-on-1 video rooms and live chat using Stream.io.",
    highlights: [
      "Secure authentication with Clerk, room locking (2 participants only)",
      "Isolated code execution with automated test-case–based feedback",
      "Dashboard with live stats and solo practice mode using TanStack Query",
    ],
    techStack: ["React", "Node.js", "Express", "Stream.io", "Clerk", "TanStack Query"],
    liveUrl: "https://apex-talent.netlify.app/", // To be filled
    githubUrl: "https://github.com/Pranav2000-debug/apex-talent", // To be filled
    image: "/images/projects/paircode.png",
  },
  {
    title: "Pixel Forge",
    subtitle: "Video Management & Media Processing Platform",
    status: "completed",
    description:
      "A Next.js 16 SaaS-style web application for video management and media processing. Upload videos to Cloudinary, compress and optimize them, and share across social platforms.",
    highlights: [
      "Video upload & management with Cloudinary cloud storage",
      "Video compression tracking with original vs compressed file sizes",
      "Social sharing module for media content across platforms",
      "Secured with Clerk authentication for user profiles and sessions",
    ],
    techStack: ["Next.js", "TypeScript", "Cloudinary", "Clerk", "Tailwind CSS"],
    liveUrl: "https://pixel-forge-knto.vercel.app/home",
    githubUrl: "https://github.com/Pranav2000-debug/pixel-forge",
    image: "/images/projects/pixelforge.png",
  },
];

// Certifications data
export const certificationsData = [
  {
    title: "JavaScript Certification",
    issuer: "Udemy",
    year: "2024",
    credentialUrl: "https://www.udemy.com/certificate/UC-0effa002-b38a-4314-bca5-2f80106f1867/", // To be filled
  },
  {
    title: "MERN Stack Development",
    issuer: "GeekForGeeks (Offline Course)",
    year: "May 2025 - August 2025",
    credentialUrl: "https://media.geeksforgeeks.org/courses/certificates/914d31e6fc4877e4e818c3be791aca84.pdf", // To be filled
  },
];

// Contact links
export const contactData = {
  email: "pranav.ch410@gmail.com",
  phone: "+91 9198888747",
  location: "Noida, Uttar Pradesh",
  linkedin: "https://www.linkedin.com/in/pranav-chandra-b8843818b/",
  github: "https://github.com/Pranav2000-debug",
};

// About/Summary
export const aboutData = {
  summary: `Full-stack developer specializing in Node.js, modern JavaScript and TypeScript. Experienced in delivering end-to-end features across React/Next.js frontends and Node.js services with emphasis on correctness, performance, and maintainability. Skilled in designing API contracts, authentication and authorization workflows, data access layers, and state management. Proficient with both relational and document databases, applying schema design, indexing, and efficient querying to real product requirements.`,
  focus: [
    "React & Next.js",
    "Node.js & Express",
    "MongoDB & PostgreSQL",
    "Docker & AWS EC2",
    "RESTful APIs",
    "Auth & Session Handling",
    "Performance Optimization",
  ],
};

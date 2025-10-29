export const resumeData = {
  personal: {
    name: "Stanimir Sergev",
    title: "Full-Stack Developer | DevOps Engineer",
    email: "stanimirsergev159@gmail.com",
    phone: "+359 89 522 5759",
    location: "Sofia, Bulgaria",
    linkedin: "https://www.linkedin.com/in/stansns/",
    github: "https://github.com/StanSNS",
    bio: "I build things that work (and keep working). As a Full-Stack Developer and DevOps Engineer, I mix backend, frontend, and cloud wizardry to deliver scalable solutions. Fluent in Kotlin (because why should Java have all the fun?). I code, I collaborate, and I don't bite during stand-ups — solving problems and leading teams without turning meetings into marathons."
  },

  experience: [
    {
      title: "Full-Stack Software Engineer",
      company: "FAAC Bulgaria",
      location: "Ruse",
      period: "03/2024 - Present",
      duration: "19 months",
      description: "Playing a pivotal role in the development and maintenance of cutting-edge access point and garage management systems, delivering high-quality solutions in a fast-paced enterprise environment.",
      achievements: [
        "Architected and implemented scalable microservices architecture handling 10K+ daily transactions with 99.9% uptime",
        "Reduced system response time by 40% through strategic database optimization, query tuning, and intelligent caching strategies",
        "Designed and implemented comprehensive CI/CD pipelines using Jenkins and GitHub Actions, reducing deployment time by 60% and eliminating manual errors",
        "Led technical code reviews and mentored 3 junior developers, establishing best practices and coding standards across the team",
        "Actively participated in Scrum ceremonies including daily stand-ups, sprint planning, and retrospectives using Jira for task management and sprint tracking",
        "Optimized PostgreSQL database performance through index optimization and query restructuring, improving overall system throughput by 35%",
        "Implemented containerization strategy using Docker and Kubernetes, enabling seamless horizontal scaling and zero-downtime deployments",
        "Collaborated with cross-functional teams (QA, DevOps, Product) in Agile environment, consistently delivering sprint commitments and maintaining 95%+ velocity"
      ],
      technologies: ["Java", "Spring Boot", "React", "PostgreSQL", "Docker", "Kubernetes", "AWS", "Azure DevOps", "Jenkins", "Git", "Jira", "Confluence"]
    }
  ],

  education: [
    {
      degree: "Full-Stack Developer",
      institution: "Software University - SoftUni",
      location: "Sofia, Bulgaria",
      period: "07/2022 - Present",
      type: "Professional Course",
      description: "Comprehensive full-stack development program covering modern technologies",
      courses: [
        "Java (Spring Framework)",
        "Kubernetes",
        "Vite, React, Vue, JavaScript",
        "Docker",
        "SQL (Postgres, MySQL)",
        "Cloud (Azure)",
        "CI/CD",
        "Terraform",
        "Playwright",
        "Kotlin"
      ]
    },
    {
      degree: "Chinese, Biology, Chemistry",
      institution: "SU \"Vasil Levski\"",
      location: "Ruse, Bulgaria",
      period: "09/2014 - 05/2018",
      type: "High School"
    }
  ],

  skills: {
    frontend: [
      { name: "React", level: 90, yearsOfExperience: 2 },
      { name: "Vue", level: 50, yearsOfExperience: 1 },
      { name: "JavaScript/TypeScript", level: 75, yearsOfExperience: 2.5 },
      { name: "Tailwind CSS", level: 75, yearsOfExperience: 2 },
      { name: "Vite", level: 70, yearsOfExperience: 1.5 },
      { name: "Angular", level: 50, yearsOfExperience: 1 }
    ],
    backend: [
      { name: "Java", level: 90, yearsOfExperience: 3 },
      { name: "Spring Boot", level: 90, yearsOfExperience: 2.5 },
      { name: "Kotlin", level: 60, yearsOfExperience: 1 },
      { name: "Node.js/Express", level: 70, yearsOfExperience: 1.5 },
      { name: "REST APIs", level: 90, yearsOfExperience: 3 }
    ],
    devops: [
      { name: "Docker", level: 90, yearsOfExperience: 2.5 },
      { name: "Kubernetes", level: 75,sOfExperience: 2 },
      { name: "CI/CD (GitHub Actions, Jenkins)", level: 75, yearsOfExperience: 2 },
      { name: "Prometheus & Grafana", level: 75, yearsOfExperience: 1.5 }
    ],
    database: [
      { name: "PostgreSQL", level: 85, yearsOfExperience: 2.5 },
      { name: "MySQL", level: 85, yearsOfExperience: 3 },
      { name: "MongoDB", level: 60, yearsOfExperience: 1 },
      { name: "Redis", level: 75, yearsOfExperience: 1 },
      { name: "Hibernate/JPA", level: 85, yearsOfExperience: 2.5 }
    ],
    testing: [
      { name: "JUnit", level: 70, yearsOfExperience: 1.5 },
      { name: "Jest", level: 70, yearsOfExperience: 1.5 },
      { name: "Playwright", level: 80, yearsOfExperience: 1.5 }
    ],
    tools: [
      { name: "Git & GitHub", level: 90, yearsOfExperience: 3 },
      { name: "Jira", level: 85, yearsOfExperience: 2 },
      { name: "Confluence", level: 80, yearsOfExperience: 1.5 },
      { name: "Postman", level: 85, yearsOfExperience: 2.5 },
      { name: "VS Code", level: 90, yearsOfExperience: 3 },
      { name: "IntelliJ IDEA", level: 85, yearsOfExperience: 2.5 }
    ]
  },

  softSkills: [
    "Agile/Scrum Methodologies",
    "Sprint Planning & Retrospectives",
    "Jira & Confluence Expertise",
    "Problem-solving",
    "Analytical thinking",
    "Cross-functional Collaboration",
    "Communication",
    "Teamwork",
    "Adaptability",
    "Code Review & Mentoring",
    "Leadership",
    "Attention to Detail",
    "Critical Thinking",
    "Conflict Resolution",
    "Growth Mindset",
    "Time Management"
  ],

  projects: [
    {
      name: "Digital Menu - Interactive Restaurant QR Menu Platform",
      period: "In Active Development • Launch Feb 2026",
      description: "Modern SaaS platform transforming restaurant dining experiences through QR code-based interactive menus. Building a comprehensive Progressive Web App with real-time content management, enabling restaurants to eliminate paper menus while providing customers with rich, interactive dining information on their personal devices.",
      technologies: ["React", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "Supabase", "Docker", "PWA", "Tailwind CSS", "Redis", "Nginx"],
      highlights: [
        "Architecting scalable multi-tenant SaaS platform with microservices architecture deployed via Docker Compose on VPS infrastructure",
        "Developing Progressive Web App (PWA) with offline caching, optimized for sub-3-second load times on 3G networks",
        "Implementing comprehensive admin dashboard with QR code generation, real-time menu management, and analytics",
        "Building Express.js REST API with Supabase PostgreSQL integration, Row Level Security policies for data isolation",
        "Designing mobile-first responsive interface with Tailwind CSS supporting iOS Safari 12+ and Android Chrome 70+",
        "Integrating Supabase Auth for secure restaurant authentication and session management with custom middleware",
        "Implementing Redis caching layer for menu data optimization and improved performance",
        "Developing image optimization pipeline with Supabase Storage CDN for fast food photography delivery",
        "Creating monorepo architecture with shared TypeScript types between frontend and backend",
        "Targeting 50-100 concurrent users per VPS instance with horizontal scaling capabilities",
        "Collaborating in 2-person development team using Agile methodology and Git workflow"
      ],
      githubUrl: null,
      liveUrl: null,
      status: "🚀 In Active Development • Private Repository",
      isPrivate: true,
      teamSize: 2,
      expectedLaunch: "February 2026"
    },
    {
      name: "GymFit - Full-Stack E-Commerce Platform",
      period: "Production Ready • Operated for 2 months",
      description: "Modern e-commerce platform for fitness products with three-tier architecture: customer frontend, admin panel, and Spring Boot 3 backend. Fully deployed and operational for 2 months before business plan pivot.",
      technologies: ["React", "Spring Boot 3", "PostgreSQL", "Docker", "JWT Auth", "Chart.js", "Bootstrap", "crypto-js", "Maven"],
      highlights: [
        "Built complete three-tier architecture with customer frontend, admin dashboard, and RESTful API backend",
        "Implemented JWT-based authentication and role-based access control for secure admin operations",
        "Integrated real-time product availability tracking via external API integrations",
        "Developed comprehensive admin panel for product, order, and user management with data visualization",
        "Containerized entire stack using Docker Compose for seamless deployment and scalability",
        "Encrypted sensitive data using crypto-js for enhanced security in session storage and cookies",
        "Deployed production-ready application with PostgreSQL database persistence",
        "Successfully operated in production environment for 2 months handling real customer orders",
        "Achieved full CI/CD automation with GitHub Actions"
      ],
      githubUrl: "https://github.com/StanSNS/gym-backend",
      repositories: [
        { name: "Customer Frontend", url: "https://github.com/StanSNS/gym-frontend", commits: 207 },
        { name: "Admin Panel", url: "https://github.com/StanSNS/frontend-admin", commits: 33 },
        { name: "Spring Boot Backend", url: "https://github.com/StanSNS/gym-backend", commits: 261 }
      ],
      liveUrl: null,
      status: "Production-ready • Business discontinued"
    },
    {
      name: "React-Spring-Web-Azure-Terraform with CI/CD",
      period: "04/2024 - 08/2024",
      description: "Full-stack application with Spring Boot backend and React frontend, emphasizing CI/CD pipelines with Azure DevOps and infrastructure provisioning with Terraform.",
      technologies: ["React", "Spring Boot", "Terraform", "Azure", "Docker", "PostgreSQL"],
      highlights: [
        "Implemented Infrastructure as Code using Terraform for reproducible cloud infrastructure",
        "Set up automated CI/CD pipeline with Azure DevOps for continuous deployment",
        "Deployed to Azure App Service with auto-scaling capabilities",
        "Achieved 99.9% uptime SLA through proper monitoring and health checks"
      ],
      githubUrl: "https://github.com/StanSNS",
      liveUrl: null
    }
  ],

  certificates: [
    {
      name: "Programming Basics",
      issuer: "Software University - SoftUni",
      date: "June 2022",
      score: "6.00/6.00",
      certificateUrl: "https://softuni.bg/certificates/details/137434/7466b5c9"
    },
    {
      name: "Programming Fundamentals with Java",
      issuer: "Software University - SoftUni",
      date: "September 2022",
      score: "6.00/6.00",
      certificateUrl: "https://softuni.bg/certificates/details/148626/fc309468"
    },
    {
      name: "Java Advanced",
      issuer: "Software University - SoftUni",
      date: "January 2023",
      score: "6.00/6.00",
      certificateUrl: "https://softuni.bg/certificates/details/161860/cb0c6813"
    },
    {
      name: "Java OOP",
      issuer: "Software University - SoftUni",
      date: "February 2023",
      score: "6.00/6.00",
      certificateUrl: "https://softuni.bg/certificates/details/168912/941cb7b0"
    },
    {
      name: "MySQL",
      issuer: "Software University - SoftUni",
      date: "May 2023",
      score: "6.00/6.00",
      certificateUrl: "https://softuni.bg/certificates/details/172185/22ad6a5f"
    },
    {
      name: "Spring Data",
      issuer: "Software University - SoftUni",
      date: "June 2023",
      score: "6.00/6.00",
      certificateUrl: "https://softuni.bg/certificates/details/180547/ac8feb7b"
    },
    {
      name: "Spring Fundamentals",
      issuer: "Software University - SoftUni",
      date: "September 2023",
      score: "6.00/6.00",
      certificateUrl: "https://softuni.bg/certificates/details/191498/a18f9fa2"
    },
    {
      name: "Spring Advanced",
      issuer: "Software University - SoftUni",
      date: "October 2023",
      score: "6.00/6.00",
      certificateUrl: "https://softuni.bg/certificates/details/197663/a398227d"
    },
    {
      name: "IT Career Booster",
      issuer: "Software University - SoftUni",
      date: "October 2023",
      score: "6.00/6.00",
      certificateUrl: "https://softuni.bg/certificates/details/198643/482e2ac5"
    },
    {
      name: "JS Back-End",
      issuer: "Software University - SoftUni",
      date: "January 2024",
      score: "6.00/6.00",
      certificateUrl: "https://softuni.bg/certificates/details/204955/0c30a6c1"
    },
    {
      name: "Containers and Cloud",
      issuer: "Software University - SoftUni",
      date: "January 2024",
      score: "6.00/6.00",
      certificateUrl: "https://softuni.bg/certificates/details/207030/11bca279"
    },
    {
      name: "Software Engineering and DevOps",
      issuer: "Software University - SoftUni",
      date: "February 2024",
      score: "6.00/6.00",
      certificateUrl: "https://softuni.bg/certificates/details/213380/97638987"
    },
    {
      name: "Kubernetes",
      issuer: "Software University - SoftUni",
      date: "Coming Soon",
      score: null,
      certificateUrl: null
    },
    {
      name: "AI and Machine Learning with Python",
      issuer: "Software University - SoftUni",
      date: "Starting January 2026",
      score: null,
      certificateUrl: null
    }
  ],

  languages: [
    { name: "Bulgarian", proficiency: 100, level: "Native" },
    { name: "English", proficiency: 80, level: "C1" }
  ],

  interests: [
    { name: "AI & Machine Learning", icon: "🤖" },
    { name: "Gym & Fitness", icon: "💪" },
    { name: "MQL5 Trading", icon: "📈" },
    { name: "Stock Market", icon: "📊" },
    { name: "Reading", icon: "📚" },
    { name: "Traveling", icon: "✈️" },
    { name: "Cooking", icon: "🍳" }
  ],

  availability: {
    status: "Open to opportunities",
    type: ["Full-time", "Contract"],
    remote: "Open to remote/hybrid/on-site",
    timezone: "EET (UTC+2)",
    startDate: "Immediate (1 month notice period)"
  },

  currentlyLearning: [
    "Advanced Kubernetes patterns",
    "Microservices architecture",
    "System design at scale",
    "Go programming language",
    "AI and Machine Learning with Python"
  ]
};

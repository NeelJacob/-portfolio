// Personal Information
export const personalInfo = {
  name: "Neel Jacob Jogy",
  title: "Software Engineer",
  tagline: "Building Python backends, ML pipelines, and APIs that actually work.",
  location: "London, UK",
  email: "neeljacob2002@gmail.com", // UPDATE THIS
  github: "https://github.com/NeelJacob",
  linkedin: "https://linkedin.com/in/neel-jacob-jogy", // UPDATE THIS
  resumeUrl: "/Neel_Jacob_CV.pdf",
  resumeDAUrl: "/Neel_Jacob_CV_DA.pdf",
  availability: "Open to opportunities",
};

// Navigation Links
export const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

// Skills Data
export const skills = {
  languages: {
    title: "Languages",
    icon: "Code2",
    items: ["Python", "SQL", "Java", "JavaScript"],
    color: "from-blue-500 to-cyan-500",
  },
  backend: {
    title: "Backend & APIs",
    icon: "Server",
    items: ["FastAPI", "Flask", "REST APIs", "Uvicorn", "Supabase Auth"],
    color: "from-green-500 to-emerald-500",
  },
  ml: {
    title: "ML & AI",
    icon: "Brain",
    items: ["TensorFlow", "Keras", "InsightFace", "OpenCV", "scikit-learn", "CNNs"],
    color: "from-purple-500 to-pink-500",
  },
  databases: {
    title: "Databases",
    icon: "Database",
    items: ["PostgreSQL", "SQLite", "Supabase", "Row-Level Security"],
    color: "from-orange-500 to-amber-500",
  },
  data: {
    title: "Data & Pipelines",
    icon: "BarChart3",
    items: ["Pandas", "NumPy", "Data Preprocessing", "Model Pipelines"],
    color: "from-rose-500 to-red-500",
  },
  tools: {
    title: "Tools",
    icon: "Wrench",
    items: ["Git", "GitHub", "Postman", "VS Code", "Jupyter Notebooks"],
    color: "from-slate-500 to-zinc-500",
  },
};

// Projects Data
export const projects = [
  {
    id: "face-recognition",
    title: "Hybrid Face Recognition API",
    shortDescription: "Dual-branch recognition system with ArcFace + CNN achieving 100% confidence",
    description: `A sophisticated face recognition system that combines ArcFace embeddings with CNN classification for robust celebrity identification. This was my final year project at the University of Greenwich.

The system uses a dual-branch architecture where ArcFace provides high-quality facial embeddings while a custom CNN handles classification. This hybrid approach achieved 100% softmax confidence and 74.7% cosine similarity on test images.

The project includes a FastAPI backend with automatic model download from Google Drive, a Tkinter desktop GUI for real-time webcam recognition, and a Flask web app. Additional features include Wikipedia API integration for celebrity information and voice feedback.`,
    image: "/projects/face-recognition.png",
    tags: ["Python", "TensorFlow", "Keras", "FastAPI", "OpenCV", "InsightFace"],
    category: "Machine Learning",
    github: "https://github.com/NeelJacob/Hybrid-celebrity-face-recognition",
    liveUrl: null,
    featured: true,
    stats: [
      { label: "Softmax Confidence", value: "100%" },
      { label: "Cosine Similarity", value: "74.7%" },
      { label: "Model Size", value: "317MB" },
    ],
    highlights: [
      "Dual-branch ArcFace + CNN architecture",
      "Trained on VGGFace2 dataset",
      "Real-time webcam recognition",
      "Wikipedia API integration",
      "Voice feedback system",
      "FastAPI production backend",
    ],
  },
  {
    id: "candidate-tracker",
    title: "Open-To-Work Candidate Tracker",
    shortDescription: "Multi-user API with Supabase Auth and row-level security",
    description: `A production-ready backend API for tracking job candidates, built with FastAPI and Supabase. Features multi-user authentication, row-level security (RLS), and full CRUD operations.

The system implements proper authorization patterns where users can only access their own candidate data. Row-level security policies are enforced at the database level, providing an extra layer of protection beyond application-level checks.

The RESTful API follows best practices with proper error handling, input validation, and consistent response formats.`,
    image: "/projects/candidate-tracker.png",
    tags: ["Python", "FastAPI", "Supabase", "PostgreSQL", "REST API"],
    category: "Backend",
    github: "https://github.com/NeelJacob/neel-hiring-tool",
    liveUrl: null,
    featured: true,
    stats: [
      { label: "Auth", value: "Supabase" },
      { label: "Security", value: "RLS" },
      { label: "API", value: "RESTful" },
    ],
    highlights: [
      "Multi-user authentication",
      "Row-level security (RLS)",
      "Full CRUD operations",
      "RESTful API design",
      "Input validation",
      "Proper error handling",
    ],
  },
  {
    id: "tube-planner",
    title: "London Underground Route Planner",
    shortDescription: "Dijkstra's algorithm implementation for TfL network routing",
    description: `An implementation of Dijkstra's shortest-path algorithm for navigating the London Underground network. The system supports both time-based and station-count routing modes.

The project includes data visualization tools for displaying routes and network analysis. The algorithm efficiently handles the complex TfL network with over 270 stations and multiple line intersections.`,
    image: "/projects/tube-planner.png",
    tags: ["Python", "Dijkstra's Algorithm", "Graph Theory", "Data Visualization"],
    category: "Algorithms",
    github: "https://github.com/NeelJacob",
    liveUrl: null,
    featured: false,
    stats: [
      { label: "Stations", value: "270+" },
      { label: "Modes", value: "2" },
      { label: "Algorithm", value: "Dijkstra" },
    ],
    highlights: [
      "Dijkstra's shortest-path algorithm",
      "Time-based routing",
      "Station-count routing",
      "Network visualization",
      "TfL data integration",
    ],
  },
  {
    id: "distributed-system",
    title: "Distributed Network System",
    shortDescription: "Fault-tolerant client-server architecture with group communication",
    description: `A Java-based distributed system implementing fault-tolerant group communication between multiple clients and servers. The system handles network failures gracefully and maintains consistency.

Comprehensive unit testing with JUnit ensures reliability and helps catch regressions during development.`,
    image: "/projects/distributed-system.png",
    tags: ["Java", "Distributed Systems", "Sockets", "JUnit"],
    category: "Systems",
    github: "https://github.com/NeelJacob",
    liveUrl: null,
    featured: false,
    stats: [
      { label: "Architecture", value: "Client-Server" },
      { label: "Testing", value: "JUnit" },
      { label: "Feature", value: "Fault-Tolerant" },
    ],
    highlights: [
      "Fault-tolerant design",
      "Group communication protocol",
      "Socket programming",
      "JUnit test coverage",
      "Graceful failure handling",
    ],
  },
];

// Education Data
export const education = [
  {
    institution: "University of Greenwich",
    degree: "BEng(Hons) Software Engineering",
    grade: "UpperSecond Class Honours (2:1)",
    period: "2022 - 2025",
    location: "London, UK",
    highlights: [
      "Final Year Project: Hybrid Face Recognition System",
      "Focus on software architecture and ML",
      "Courses: Distributed Systems, AI, Database Design",
    ],
  },
];

// Blog Posts (sample data - you can connect this to a CMS later)
export const blogPosts = [
  {
    id: "building-face-recognition-api",
    title: "Building a Production Face Recognition API with FastAPI",
    excerpt: "How I built a dual-branch recognition system combining ArcFace embeddings with CNN classification, and deployed it as a FastAPI backend.",
    date: "2024-01-15",
    readTime: "8 min read",
    tags: ["Python", "FastAPI", "Machine Learning"],
    featured: true,
  },
  {
    id: "row-level-security-supabase",
    title: "Implementing Row-Level Security with Supabase",
    excerpt: "A deep dive into using RLS policies to secure multi-tenant applications without complex application logic.",
    date: "2024-01-08",
    readTime: "5 min read",
    tags: ["Supabase", "PostgreSQL", "Security"],
    featured: false,
  },
  {
    id: "dijkstra-tube-network",
    title: "Applying Dijkstra's Algorithm to the London Underground",
    excerpt: "Graph theory in practice: how I modeled the TfL network and implemented efficient route finding.",
    date: "2024-01-01",
    readTime: "6 min read",
    tags: ["Algorithms", "Python", "Data Structures"],
    featured: false,
  },
];

// Testimonials (for future use)
export const testimonials = [];

// Stats for About page
export const stats = [
  { value: "4", label: "Projects Completed" },
  { value: "2:1", label: "Degree Classification" },
  { value: "100%", label: "Model Confidence" },
  { value: "2025", label: "Graduate" },
];

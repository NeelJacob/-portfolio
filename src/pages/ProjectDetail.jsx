import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Github,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";
import { projects } from "../data/content";
import FaceRecognitionDemo from "../components/FaceRecognitionDemo";

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projects.find((p) => p.id === id);
  const currentIndex = projects.findIndex((p) => p.id === id);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const prevProject =
    projects[(currentIndex - 1 + projects.length) % projects.length];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">
            Project not found
          </h1>
          <Link to="/projects" className="btn btn-primary">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const icons = {
    "face-recognition": "🎭",
    "candidate-tracker": "👥",
    "tube-planner": "🚇",
    "distributed-system": "🌐",
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-accent/10 rounded-full blur-[120px]" />
        </div>

        <div className="container-custom relative z-10">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Project Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="aspect-video rounded-2xl bg-gradient-to-br from-accent/20 to-primary-500/20 flex items-center justify-center overflow-hidden"
            >
              <span className="text-8xl">{icons[project.id] || "💻"}</span>
            </motion.div>

            {/* Project Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-mono text-accent uppercase tracking-wider">
                  {project.category}
                </span>
                {project.featured && (
                  <span className="px-2 py-0.5 rounded text-xs bg-amber-500/20 text-amber-400 font-medium">
                    Featured
                  </span>
                )}
              </div>

              <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                {project.title}
              </h1>

              <p className="text-lg text-slate-400 mb-6">
                {project.shortDescription}
              </p>

              {/* Demo Section - only for face recognition project */}
              {project.id === "face-recognition" && (
                <div className="mt-12 p-6 rounded-2xl bg-dark-light border border-slate-800">
                  <FaceRecognitionDemo />
                </div>
              )}

              {/* Stats */}
              <div className="flex flex-wrap gap-6 mb-8 pb-8 border-b border-slate-800">
                {project.stats.map((stat, i) => (
                  <div key={i}>
                    <div className="text-2xl font-bold gradient-text">
                      {stat.value}
                    </div>
                    <div className="text-sm text-slate-500">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    <Github className="w-4 h-4" />
                    View on GitHub
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="prose prose-lg prose-invert max-w-none">
                <h2 className="text-2xl font-display font-bold text-white mb-4">
                  About the Project
                </h2>
                {project.description.split("\n\n").map((paragraph, i) => (
                  <p key={i} className="text-slate-300 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Key Features */}
              <div className="mt-12">
                <h3 className="text-xl font-semibold text-white mb-6">
                  Key Features
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {project.highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 rounded-xl bg-dark-light"
                    >
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-6"
            >
              {/* Tech Stack */}
              <div className="card">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="badge">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="card">
                <h3 className="text-lg font-semibold text-white mb-4">Links</h3>
                <div className="space-y-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg bg-dark hover:bg-dark-lighter transition-colors"
                    >
                      <Github className="w-5 h-5 text-slate-400" />
                      <span className="text-slate-300">Source Code</span>
                      <ExternalLink className="w-4 h-4 text-slate-500 ml-auto" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg bg-dark hover:bg-dark-lighter transition-colors"
                    >
                      <ExternalLink className="w-5 h-5 text-slate-400" />
                      <span className="text-slate-300">Live Demo</span>
                      <ExternalLink className="w-4 h-4 text-slate-500 ml-auto" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 border-t border-slate-800">
        <div className="container-custom">
          <div className="flex justify-between items-center">
            <Link
              to={`/projects/${prevProject.id}`}
              className="group flex items-center gap-4"
            >
              <div className="p-3 rounded-xl bg-dark-light group-hover:bg-dark-lighter transition-colors">
                <ArrowLeft className="w-5 h-5 text-slate-400" />
              </div>
              <div className="hidden sm:block">
                <div className="text-xs text-slate-500 uppercase tracking-wider">
                  Previous
                </div>
                <div className="text-white font-medium group-hover:text-accent transition-colors">
                  {prevProject.title}
                </div>
              </div>
            </Link>

            <Link
              to={`/projects/${nextProject.id}`}
              className="group flex items-center gap-4"
            >
              <div className="hidden sm:block text-right">
                <div className="text-xs text-slate-500 uppercase tracking-wider">
                  Next
                </div>
                <div className="text-white font-medium group-hover:text-accent transition-colors">
                  {nextProject.title}
                </div>
              </div>
              <div className="p-3 rounded-xl bg-dark-light group-hover:bg-dark-lighter transition-colors">
                <ArrowRight className="w-5 h-5 text-slate-400" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Github, ExternalLink, Filter } from 'lucide-react'
import { projects } from '../data/content'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

function PageHeader() {
  return (
    <section className="pt-32 pb-16 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-1/2 h-1/2 bg-primary-500/10 rounded-full blur-[120px]" />
      </div>
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-accent font-mono text-sm uppercase tracking-wider">My Work</span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mt-2 mb-4">
            Projects & Experiments
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl">
            A collection of projects I've built, from ML systems to backend APIs. 
            Click on any project to learn more about how it works.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function ProjectFilters({ activeFilter, setActiveFilter }) {
  const categories = ['All', 'Machine Learning', 'Backend', 'Algorithms', 'Systems']

  return (
    <div className="flex flex-wrap items-center gap-2 mb-8">
      <Filter className="w-4 h-4 text-slate-500 mr-2" />
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveFilter(category)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            activeFilter === category
              ? 'bg-accent text-white'
              : 'bg-dark-light text-slate-400 hover:text-white hover:bg-dark-lighter'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  )
}

function ProjectCard({ project, index }) {
  const icons = ['🎭', '👥', '🚇', '🌐']
  
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <Link
        to={`/projects/${project.id}`}
        className="card card-hover block group h-full"
      >
        {/* Project Image/Icon */}
        <div className="aspect-video rounded-xl bg-gradient-to-br from-accent/20 to-primary-500/20 flex items-center justify-center mb-4 overflow-hidden">
          <span className="text-5xl group-hover:scale-110 transition-transform duration-500">
            {icons[projects.indexOf(project)] || '💻'}
          </span>
        </div>

        {/* Category Badge */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-mono text-accent uppercase tracking-wider">
            {project.category}
          </span>
          {project.featured && (
            <span className="px-2 py-0.5 rounded text-xs bg-amber-500/20 text-amber-400 font-medium">
              Featured
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl font-display font-semibold text-white mb-2 group-hover:text-accent transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-slate-400 text-sm mb-4 line-clamp-2">
          {project.shortDescription}
        </p>

        {/* Stats */}
        <div className="flex gap-4 mb-4 pb-4 border-b border-slate-800">
          {project.stats.slice(0, 3).map((stat, i) => (
            <div key={i}>
              <div className="text-sm font-bold text-white">{stat.value}</div>
              <div className="text-xs text-slate-500">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 3).map((tag, i) => (
            <span key={i} className="badge text-xs">
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="badge text-xs">+{project.tags.length - 3}</span>
          )}
        </div>

        {/* Links */}
        <div className="flex items-center justify-between pt-2">
          <span className="text-sm text-accent font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
            View Details
            <ArrowRight className="w-4 h-4" />
          </span>
          <div className="flex gap-2">
            {project.github && (
              <span className="p-2 rounded-lg bg-dark text-slate-400">
                <Github className="w-4 h-4" />
              </span>
            )}
            {project.liveUrl && (
              <span className="p-2 rounded-lg bg-dark text-slate-400">
                <ExternalLink className="w-4 h-4" />
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

function ProjectsGrid() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  return (
    <section className="pb-20">
      <div className="container-custom">
        <ProjectFilters activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
        
        <motion.div
          layout
          className="grid md:grid-cols-2 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-400">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default function Projects() {
  return (
    <>
      <PageHeader />
      <ProjectsGrid />
    </>
  )
}

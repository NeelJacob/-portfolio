import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  ArrowRight, 
  Download, 
  Github, 
  Linkedin, 
  Mail, 
  MapPin,
  Code2,
  Server,
  Brain,
  Database,
  BarChart3,
  Wrench,
  ExternalLink,
  ChevronRight
} from 'lucide-react'
import { personalInfo, skills, projects, stats } from '../data/content'

const iconMap = {
  Code2, Server, Brain, Database, BarChart3, Wrench
}

// Animation variants
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

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-accent/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-primary-500/20 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.02]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark-light border border-slate-800 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-slate-300">{personalInfo.availability}</span>
            <MapPin className="w-3 h-3 text-slate-500" />
            <span className="text-sm text-slate-500">{personalInfo.location}</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6"
          >
            <span className="text-white">Hi, I'm </span>
            <span className="gradient-text">{personalInfo.name.split(' ')[0]}</span>
            <span className="inline-block ml-4 animate-wave origin-[70%_70%]">👋</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-400 mb-8 max-w-2xl"
          >
            {personalInfo.title} who loves building{' '}
            <span className="text-white font-medium">Python backends</span>,{' '}
            <span className="text-white font-medium">ML pipelines</span>, and{' '}
            <span className="text-white font-medium">APIs that actually work</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 mb-12"
          >
            <Link to="/projects" className="btn btn-primary">
              View My Work
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a href={personalInfo.resumeUrl} download className="btn btn-secondary">
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-4"
          >
            <span className="text-sm text-slate-500">Find me on</span>
            <div className="flex items-center gap-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-dark-light hover:bg-dark-lighter border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition-all"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-dark-light hover:bg-dark-lighter border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-xl bg-dark-light hover:bg-dark-lighter border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition-all"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-slate-500">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-slate-500 to-transparent" />
        </div>
      </motion.div>
    </section>
  )
}

function StatsSection() {
  return (
    <section className="py-16 border-y border-slate-800 bg-dark-light/50">
      <div className="container-custom">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-display font-bold gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function SkillsSection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-accent font-mono text-sm uppercase tracking-wider">What I work with</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mt-2">
            Skills & Technologies
          </h2>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {Object.values(skills).map((skill, index) => {
            const Icon = iconMap[skill.icon]
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="card card-hover group"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{skill.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <span key={i} className="badge text-xs">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

function FeaturedProjectsSection() {
  const featuredProjects = projects.filter(p => p.featured)

  return (
    <section className="section-padding bg-dark-light/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12"
        >
          <div>
            <span className="text-accent font-mono text-sm uppercase tracking-wider">Featured Work</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mt-2">
              Recent Projects
            </h2>
          </div>
          <Link to="/projects" className="btn btn-ghost group">
            View All Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
          className="space-y-6"
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={fadeInUp}
            >
              <Link
                to={`/projects/${project.id}`}
                className="card card-hover block group overflow-hidden"
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Project Image Placeholder */}
                  <div className="lg:w-1/3 aspect-video lg:aspect-[4/3] rounded-xl bg-gradient-to-br from-accent/20 to-primary-500/20 flex items-center justify-center overflow-hidden">
                    <div className="text-6xl group-hover:scale-110 transition-transform duration-500">
                      {index === 0 ? '🎭' : '👥'}
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="lg:w-2/3 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-mono text-accent uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-display font-semibold text-white mb-2 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 mb-4">
                      {project.shortDescription}
                    </p>

                    {/* Stats */}
                    <div className="flex flex-wrap gap-4 mb-4">
                      {project.stats.map((stat, i) => (
                        <div key={i} className="text-center">
                          <div className="text-lg font-bold text-white">{stat.value}</div>
                          <div className="text-xs text-slate-500">{stat.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 4).map((tag, i) => (
                        <span key={i} className="badge text-xs">
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="badge text-xs">+{project.tags.length - 4}</span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-accent via-accent-dark to-primary-600 p-8 md:p-12 lg:p-16"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/10 to-transparent" />

          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Let's build something amazing together
            </h2>
            <p className="text-white/80 text-lg mb-8">
              I'm currently looking for my next opportunity. Whether you have a role that might be a good fit 
              or just want to connect, I'd love to hear from you.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn bg-white text-accent hover:bg-slate-100">
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={personalInfo.resumeUrl}
                download
                className="btn bg-white/10 text-white border border-white/20 hover:bg-white/20"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <SkillsSection />
      <FeaturedProjectsSection />
      <CTASection />

      {/* Add wave animation keyframes */}
      <style>{`
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          10% { transform: rotate(14deg); }
          20% { transform: rotate(-8deg); }
          30% { transform: rotate(14deg); }
          40% { transform: rotate(-4deg); }
          50% { transform: rotate(10deg); }
          60%, 100% { transform: rotate(0deg); }
        }
        .animate-wave {
          animation: wave 2.5s ease-in-out infinite;
        }
      `}</style>
    </>
  )
}

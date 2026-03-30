import { motion } from 'framer-motion'
import { 
  MapPin, 
  Calendar, 
  GraduationCap, 
  Briefcase,
  Download,
  ArrowRight,
  CheckCircle2
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { personalInfo, education, skills } from '../data/content'

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
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-accent/10 rounded-full blur-[120px]" />
      </div>
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-accent font-mono text-sm uppercase tracking-wider">About Me</span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mt-2 mb-4">
            The Person Behind the Code
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl">
            Software Engineer passionate about building things that work beautifully behind the scenes.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function AboutContent() {
  return (
    <section className="pb-20">
      <div className="container-custom">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-slate-300 text-lg leading-relaxed">
                I'm <span className="text-white font-semibold">{personalInfo.name}</span>, a Software Engineering graduate from the 
                University of Greenwich with a 2:1 degree. I'm passionate about building{' '}
                <span className="text-accent">Python backends</span>,{' '}
                <span className="text-accent">data pipelines</span>, and{' '}
                <span className="text-accent">ML-integrated systems</span> that solve real problems.
              </p>
              
              <p className="text-slate-300 text-lg leading-relaxed">
                My sweet spot is taking complex requirements and turning them into clean, maintainable code. 
                Whether it's designing RESTful APIs, training machine learning models, or setting up 
                robust database architectures, I enjoy the challenge of building systems end-to-end.
              </p>

              <p className="text-slate-300 text-lg leading-relaxed">
                My final year project was a{' '}
                <span className="text-white font-medium">hybrid face recognition system</span> that 
                combines ArcFace embeddings with CNN classification — achieving 100% softmax confidence 
                and 74.7% cosine similarity on test images. I built everything from model training to 
                the FastAPI production backend.
              </p>

              <p className="text-slate-300 text-lg leading-relaxed">
                Currently on a Graduate visa in the UK, I'm actively looking for roles where I can 
                build things from scratch and own them end to end. I'm particularly drawn to{' '}
                <span className="text-white font-medium">AI startups</span>,{' '}
                <span className="text-white font-medium">backend engineering</span>, and{' '}
                <span className="text-white font-medium">data engineering</span> roles.
              </p>
            </div>

            {/* What I'm Looking For */}
            <div className="mt-12">
              <h3 className="text-xl font-semibold text-white mb-4">What I'm Looking For</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  'Junior Python/Backend Developer',
                  'Graduate Software Engineer',
                  'Junior Data Engineer',
                  'ML Engineer / MLOps',
                  'Junior Data Analyst',
                  'AI Startup roles',
                ].map((role, index) => (
                  <div key={index} className="flex items-center gap-2 text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span>{role}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 pt-8">
              <Link to="/contact" className="btn btn-primary">
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a href={personalInfo.resumeUrl} download className="btn btn-secondary">
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Quick Info Card */}
            <div className="card">
              <h3 className="text-lg font-semibold text-white mb-4">Quick Info</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-dark">
                    <MapPin className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400">Location</div>
                    <div className="text-white">{personalInfo.location}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-dark">
                    <Briefcase className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400">Status</div>
                    <div className="text-white flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      {personalInfo.availability}
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-dark">
                    <Calendar className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400">Visa</div>
                    <div className="text-white">Graduate Visa (UK)</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Education Card */}
            <div className="card">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-accent" />
                Education
              </h3>
              {education.map((edu, index) => (
                <div key={index}>
                  <div className="text-white font-medium">{edu.institution}</div>
                  <div className="text-slate-300 text-sm">{edu.degree}</div>
                  <div className="text-accent text-sm font-medium mt-1">{edu.grade}</div>
                  <div className="text-slate-500 text-sm mt-1">{edu.period}</div>
                  <div className="mt-3 pt-3 border-t border-slate-800">
                    <div className="text-xs text-slate-500 uppercase tracking-wider mb-2">Highlights</div>
                    <ul className="space-y-1">
                      {edu.highlights.map((highlight, i) => (
                        <li key={i} className="text-sm text-slate-400 flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Download CV Card */}
            <div className="card bg-gradient-to-br from-accent/10 to-primary-500/10 border-accent/20">
              <h3 className="text-lg font-semibold text-white mb-2">Get My CV</h3>
              <p className="text-sm text-slate-400 mb-4">
                Download my resume to learn more about my experience and skills.
              </p>
              <div className="space-y-2">
                <a
                  href={personalInfo.resumeUrl}
                  download
                  className="btn btn-primary w-full text-sm"
                >
                  <Download className="w-4 h-4" />
                  Software Engineer CV
                </a>
                <a
                  href={personalInfo.resumeDAUrl}
                  download
                  className="btn btn-secondary w-full text-sm"
                >
                  <Download className="w-4 h-4" />
                  Data Analyst CV
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function SkillsSection() {
  const skillCategories = [
    { 
      title: 'Primary Stack', 
      items: ['Python', 'FastAPI', 'PostgreSQL', 'TensorFlow'],
      color: 'from-accent to-primary-500'
    },
    { 
      title: 'Also Comfortable With', 
      items: ['Flask', 'Supabase', 'OpenCV', 'Pandas', 'NumPy'],
      color: 'from-green-500 to-emerald-500'
    },
    { 
      title: 'Learning & Growing', 
      items: ['Docker', 'Power BI', 'AWS', 'Kubernetes'],
      color: 'from-amber-500 to-orange-500'
    },
  ]

  return (
    <section className="py-20 bg-dark-light/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-accent font-mono text-sm uppercase tracking-wider">Technical Skills</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mt-2">
            What I Bring to the Table
          </h2>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
          className="grid md:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="card text-center"
            >
              <div className={`inline-block px-4 py-1 rounded-full bg-gradient-to-r ${category.color} text-white text-sm font-medium mb-4`}>
                {category.title}
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                {category.items.map((item, i) => (
                  <span key={i} className="badge">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default function About() {
  return (
    <>
      <PageHeader />
      <AboutContent />
      <SkillsSection />
    </>
  )
}

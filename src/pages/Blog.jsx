import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react'
import { blogPosts } from '../data/content'

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
        <div className="absolute top-0 left-1/3 w-1/2 h-1/2 bg-accent/10 rounded-full blur-[120px]" />
      </div>
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-accent font-mono text-sm uppercase tracking-wider">Blog</span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mt-2 mb-4">
            Thoughts & Learnings
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl">
            Writing about software engineering, machine learning, and the things I learn along the way.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function FeaturedPost() {
  const featured = blogPosts.find(post => post.featured)
  
  if (!featured) return null

  return (
    <section className="pb-12">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Link
            to={`/blog/${featured.id}`}
            className="block group relative overflow-hidden rounded-2xl bg-gradient-to-br from-accent/20 via-dark-light to-primary-500/20 p-8 md:p-12"
          >
            {/* Background decoration */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/10 to-transparent" />

            <div className="relative z-10 max-w-2xl">
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium">
                  Featured
                </span>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <Calendar className="w-4 h-4" />
                  {new Date(featured.date).toLocaleDateString('en-US', { 
                    month: 'long', 
                    day: 'numeric', 
                    year: 'numeric' 
                  })}
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <Clock className="w-4 h-4" />
                  {featured.readTime}
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4 group-hover:text-accent transition-colors">
                {featured.title}
              </h2>

              <p className="text-slate-400 mb-6">
                {featured.excerpt}
              </p>

              <div className="flex items-center gap-4">
                <span className="text-accent font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read Article
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

function BlogGrid() {
  const otherPosts = blogPosts.filter(post => !post.featured)

  return (
    <section className="pb-20">
      <div className="container-custom">
        <h2 className="text-xl font-semibold text-white mb-8">All Articles</h2>
        
        <motion.div
          initial="initial"
          animate="animate"
          variants={stagger}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {blogPosts.map((post, index) => (
            <motion.div key={post.id} variants={fadeInUp}>
              <Link
                to={`/blog/${post.id}`}
                className="card card-hover block h-full group"
              >
                {/* Post Image Placeholder */}
                <div className="aspect-video rounded-xl bg-gradient-to-br from-dark to-dark-lighter flex items-center justify-center mb-4 overflow-hidden">
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-500">
                    {post.tags.includes('Machine Learning') ? '🧠' : 
                     post.tags.includes('Security') ? '🔐' : '📝'}
                  </div>
                </div>

                {/* Meta */}
                <div className="flex items-center gap-4 mb-3 text-sm text-slate-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-accent transition-colors line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, i) => (
                    <span key={i} className="badge text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function NewsletterCTA() {
  return (
    <section className="py-20 bg-dark-light/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto text-center"
        >
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-slate-400 mb-6">
            Get notified when I publish new articles about software engineering, ML, and my journey.
          </p>
          <form className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="input-field flex-grow"
            />
            <button type="submit" className="btn btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </form>
          <p className="text-xs text-slate-500 mt-3">
            No spam, ever. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default function Blog() {
  return (
    <>
      <PageHeader />
      <FeaturedPost />
      <BlogGrid />
      <NewsletterCTA />
    </>
  )
}

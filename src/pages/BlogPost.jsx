import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, Clock, Tag, Share2, Twitter, Linkedin, Link as LinkIcon } from 'lucide-react'
import { blogPosts } from '../data/content'

export default function BlogPost() {
  const { id } = useParams()
  const post = blogPosts.find(p => p.id === id)

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Post not found</h1>
          <Link to="/blog" className="btn btn-primary">
            Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  // Sample content - in a real app, this would come from a CMS or MDX files
  const sampleContent = {
    'building-face-recognition-api': `
## The Challenge

When I started my final year project, I knew I wanted to build something that combined my interests in machine learning and backend development. Face recognition seemed like the perfect challenge — it's a well-studied problem with real-world applications, but building a production-ready system requires solving many interesting engineering problems.

## Architecture Decisions

The key insight was that a single model approach wasn't going to cut it. After experimenting with various architectures, I settled on a dual-branch approach:

1. **ArcFace Embeddings**: For generating high-quality facial embeddings that capture identity
2. **CNN Classification**: For the final classification step

This hybrid approach gave me the best of both worlds — the robustness of ArcFace embeddings with the flexibility of CNN-based classification.

## Building the API

For the backend, I chose FastAPI for its async capabilities and automatic OpenAPI documentation. The API handles:

- Image upload and preprocessing
- Model inference with automatic GPU detection
- Wikipedia API integration for celebrity information
- Response caching for frequently queried faces

## Results

The final system achieved:
- **100% softmax confidence** on test images
- **74.7% cosine similarity** for identity verification
- Sub-100ms inference time on GPU

## Lessons Learned

Building this project taught me that production ML systems are about much more than just the model. You need to think about deployment, scaling, error handling, and user experience from day one.
    `,
    'row-level-security-supabase': `
## Why Row-Level Security?

When building multi-tenant applications, you need to ensure users can only access their own data. While you can do this in application code, Row-Level Security (RLS) in PostgreSQL provides an extra layer of protection at the database level.

## Setting Up RLS in Supabase

Supabase makes RLS surprisingly easy. Here's how I set it up for my candidate tracker:

### 1. Enable RLS on your table

First, enable RLS on the candidates table. This blocks all access by default.

### 2. Create policies

Then create policies that define who can do what. For example, a policy that lets users only see their own candidates.

## The Benefits

With RLS in place:
- Even if there's a bug in your application code, users can't access other users' data
- Your security is declarative and version-controlled
- You get audit logging for free

## Gotchas

A few things to watch out for:
- Remember to add policies for all CRUD operations
- Service role keys bypass RLS — use them carefully
- Test your policies thoroughly!
    `,
    'dijkstra-tube-network': `
## Modeling the Tube Network

The London Underground is a fascinating graph problem. With over 270 stations and 11 lines, it's complex enough to be interesting but small enough to work with easily.

## Data Structure

I represented the network as an adjacency list where each station maps to its connected stations with edge weights representing travel time between them.

## Implementing Dijkstra's Algorithm

The classic Dijkstra's algorithm finds the shortest path from a source to all other nodes. For the Tube network, I implemented two modes:

1. **Time-based routing**: Minimize total travel time
2. **Station-count routing**: Minimize number of stops

## Interesting Findings

Some fun discoveries from analyzing the network:
- The most connected station is Baker Street (5 lines)
- The longest single journey without changing is on the Central Line
- Zone 1 stations have an average of 3.2 connections

## Next Steps

I'd love to extend this with:
- Real-time service status integration
- Walking connections between nearby stations
- Multi-modal routing with buses
    `
  }

  const content = sampleContent[id] || `
## Coming Soon

This article is currently being written. Check back soon for the full content!

In the meantime, feel free to explore my other articles or check out the project this article is about.
  `

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href)
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 relative">
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
              to="/blog"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag, i) => (
                <span key={i} className="badge text-xs">
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 text-slate-400">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-3"
            >
              <div className="prose prose-lg prose-invert max-w-none">
                {content.split('\n').map((line, i) => {
                  if (line.startsWith('## ')) {
                    return <h2 key={i} className="text-2xl font-display font-bold text-white mt-8 mb-4">{line.replace('## ', '')}</h2>
                  }
                  if (line.startsWith('### ')) {
                    return <h3 key={i} className="text-xl font-semibold text-white mt-6 mb-3">{line.replace('### ', '')}</h3>
                  }
                  if (line.startsWith('1. ') || line.startsWith('2. ') || line.startsWith('3. ')) {
                    return <p key={i} className="text-slate-300 ml-4 mb-2">{line}</p>
                  }
                  if (line.startsWith('- ')) {
                    return <p key={i} className="text-slate-300 ml-4 mb-2">• {line.replace('- ', '')}</p>
                  }
                  if (line.trim() === '') {
                    return <br key={i} />
                  }
                  if (line.includes('**')) {
                    const parts = line.split('**')
                    return (
                      <p key={i} className="text-slate-300 mb-4">
                        {parts.map((part, j) => 
                          j % 2 === 1 ? <strong key={j} className="text-white">{part}</strong> : part
                        )}
                      </p>
                    )
                  }
                  return <p key={i} className="text-slate-300 mb-4">{line}</p>
                })}
              </div>

              {/* Share Section */}
              <div className="mt-12 pt-8 border-t border-slate-800">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Share this article</span>
                  <div className="flex gap-2">
                    <a
                      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-dark-light hover:bg-dark-lighter text-slate-400 hover:text-white transition-colors"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-dark-light hover:bg-dark-lighter text-slate-400 hover:text-white transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <button
                      onClick={copyLink}
                      className="p-2 rounded-lg bg-dark-light hover:bg-dark-lighter text-slate-400 hover:text-white transition-colors"
                    >
                      <LinkIcon className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.article>

            {/* Sidebar */}
            <motion.aside
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Author Card */}
              <div className="card">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-primary-500 flex items-center justify-center font-bold text-white">
                    NJ
                  </div>
                  <div>
                    <div className="font-semibold text-white">Neel Jacob Jogy</div>
                    <div className="text-sm text-slate-400">Software Engineer</div>
                  </div>
                </div>
                <p className="text-sm text-slate-400">
                  Building Python backends, ML pipelines, and APIs that work. Currently looking for exciting opportunities.
                </p>
              </div>

              {/* Related Posts */}
              <div className="card">
                <h3 className="text-lg font-semibold text-white mb-4">More Articles</h3>
                <div className="space-y-4">
                  {blogPosts.filter(p => p.id !== id).slice(0, 2).map((relatedPost) => (
                    <Link
                      key={relatedPost.id}
                      to={`/blog/${relatedPost.id}`}
                      className="block group"
                    >
                      <div className="text-white font-medium group-hover:text-accent transition-colors line-clamp-2">
                        {relatedPost.title}
                      </div>
                      <div className="text-sm text-slate-500 mt-1">
                        {relatedPost.readTime}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>
    </>
  )
}

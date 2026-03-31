import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  Send,
  CheckCircle2,
  AlertCircle,
  Download,
  MessageSquare,
  Calendar,
} from "lucide-react";
import { personalInfo } from "../data/content";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

function PageHeader() {
  return (
    <section className="pt-32 pb-16 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-1/2 h-1/2 bg-accent/10 rounded-full blur-[120px]" />
      </div>
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-accent font-mono text-sm uppercase tracking-wider">
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mt-2 mb-4">
            Let's Work Together
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl">
            I'm currently looking for new opportunities. Whether you have a role
            that might be a good fit or just want to say hi, I'd love to hear
            from you.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle, sending, success, error

  const handleChange = (e) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    // Simulate form submission
    // In production, you'd use EmailJS, Formspree, or your own backend
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
      setFormState({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      name="contact"
      method="POST"
      data-netlify="true"
      onSubmit={handleSubmit}
      className="card"
    >
      <input type="hidden" name="form-name" value="contact" />
      <h2 className="text-xl font-semibold text-white mb-6">Send a Message</h2>

      <div className="space-y-4">
        {/* Name & Email Row */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-slate-300 mb-2"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formState.name}
              onChange={handleChange}
              required
              placeholder="John Doe"
              className="input-field"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-slate-300 mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              required
              placeholder="john@example.com"
              className="input-field"
            />
          </div>
        </div>

        {/* Subject */}
        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-slate-300 mb-2"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formState.subject}
            onChange={handleChange}
            required
            placeholder="Job Opportunity / Collaboration / Just saying hi"
            className="input-field"
          />
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-slate-300 mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formState.message}
            onChange={handleChange}
            required
            rows={6}
            placeholder="Tell me about the opportunity or what you'd like to discuss..."
            className="input-field resize-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status === "sending"}
          className={`btn btn-primary w-full ${status === "sending" ? "opacity-70 cursor-not-allowed" : ""}`}
        >
          {status === "sending" ? (
            <>
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Send Message
            </>
          )}
        </button>

        {/* Status Messages */}
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400"
          >
            <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
            <span>Message sent successfully! I'll get back to you soon.</span>
          </motion.div>
        )}

        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400"
          >
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            <span>
              Something went wrong. Please try again or email me directly.
            </span>
          </motion.div>
        )}
      </div>
    </motion.form>
  );
}

function ContactInfo() {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      description: "Best for formal inquiries",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: personalInfo.linkedin,
      description: "Let's grow our network",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "View my code",
      href: personalInfo.github,
      description: "Check out my projects",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="space-y-6"
    >
      {/* Contact Methods */}
      <div className="card">
        <h2 className="text-xl font-semibold text-white mb-6">
          Other Ways to Reach Me
        </h2>
        <div className="space-y-4">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.href}
              target={method.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="flex items-start gap-4 p-4 rounded-xl bg-dark hover:bg-dark-lighter transition-colors group"
            >
              <div className="p-2 rounded-lg bg-dark-light group-hover:bg-accent/20 transition-colors">
                <method.icon className="w-5 h-5 text-accent" />
              </div>
              <div>
                <div className="font-medium text-white group-hover:text-accent transition-colors">
                  {method.label}
                </div>
                <div className="text-sm text-slate-400">
                  {method.description}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Location */}
      <div className="card">
        <div className="flex items-start gap-4">
          <div className="p-2 rounded-lg bg-dark">
            <MapPin className="w-5 h-5 text-accent" />
          </div>
          <div>
            <div className="font-medium text-white">Based in</div>
            <div className="text-slate-400">{personalInfo.location}</div>
            <div className="text-sm text-slate-500 mt-1">
              Open to remote & hybrid roles in UK or India
            </div>
          </div>
        </div>
      </div>

      {/* Availability */}
      <div className="card bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/20">
        <div className="flex items-start gap-4">
          <div className="p-2 rounded-lg bg-green-500/20">
            <Calendar className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <div className="font-medium text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              {personalInfo.availability}
            </div>
            <div className="text-sm text-slate-400 mt-1">
              Currently on a Graduate Visa in the UK
            </div>
          </div>
        </div>
      </div>

      {/* Download CV */}
      <div className="card">
        <h3 className="text-lg font-semibold text-white mb-4">Get My CV</h3>
        <p className="text-sm text-slate-400 mb-4">
          Prefer to review my experience offline? Download my resume.
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
  );
}

function FAQ() {
  const faqs = [
    {
      q: "What roles are you looking for?",
      a: "Junior Python/Backend Developer, Graduate Software Engineer, Junior Data Engineer, ML Engineer, or Data Analyst roles. I'm particularly interested in AI startups and companies building interesting products.",
    },
    {
      q: "Are you open to relocation?",
      a: "I'm currently in London on a Graduate Visa. I'm open to roles in the UK (remote, hybrid, or on-site) and would also consider relocating to India.",
    },
    {
      q: "What's your notice period?",
      a: "I'm currently available immediately and can start as soon as the hiring process is complete.",
    },
    {
      q: "Do you freelance?",
      a: "I'm primarily looking for full-time roles, but I'm open to discussing interesting freelance or contract opportunities in backend development or ML.",
    },
  ];

  return (
    <section className="py-20 bg-dark-light/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-accent font-mono text-sm uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="text-3xl font-display font-bold text-white mt-2">
            Common Questions
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto space-y-4"
        >
          {faqs.map((faq, index) => (
            <div key={index} className="card">
              <h3 className="text-lg font-semibold text-white mb-2 flex items-start gap-3">
                <MessageSquare className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                {faq.q}
              </h3>
              <p className="text-slate-400 ml-8">{faq.a}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default function Contact() {
  return (
    <>
      <PageHeader />

      <section className="pb-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
            <div className="lg:col-span-2">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>

      <FAQ />
    </>
  );
}

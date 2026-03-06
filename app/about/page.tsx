"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Calendar,
  Coffee,
  Zap,
  Code2,
  Globe,
  Layers,
  Server,
  Smartphone,
  Star,
  ExternalLink,
} from "lucide-react"
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiMongodb,
  SiTailwindcss,
  SiVuedotjs,
  SiDocker,
  SiLaravel,
  SiGit,
  SiAmazonwebservices,
} from "react-icons/si"

// ─── Animated Counter ────────────────────────────────────────────────────────
function Counter({ end, suffix = "", duration = 1800 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const startTime = performance.now()
          const step = (now: number) => {
            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.round(eased * end))
            if (progress < 1) requestAnimationFrame(step)
          }
          requestAnimationFrame(step)
        }
      },
      { threshold: 0.4 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end, duration])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

// ─── Skill Bar ────────────────────────────────────────────────────────────────
function SkillBar({ label, pct, color }: { label: string; pct: number; color: string }) {
  const [width, setWidth] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(pct), 200)
        }
      },
      { threshold: 0.4 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [pct])

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-sm font-semibold text-foreground">{label}</span>
        <span className="text-xs font-bold text-primary">{pct}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-border overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-1000 ease-out ${color}`}
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  )
}

// ─── Experience Data ──────────────────────────────────────────────────────────
const experiences = [
  {
    role: "Full-Stack Engineer",
    company: "MoonJoin Technologies",
    period: "2023 – Present",
    current: true,
    description:
      "Engineered vendor cart management with real-time edits, automated refunds & item substitutions. Integrated 9PSB Payment Gateway for virtual account wallet funding. Built secure withdrawal workflows for vendors and delivery partners.",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Laravel"],
  },
  {
    role: "Frontend Developer",
    company: "Whatspodcasting · Plluggg",
    period: "Feb 2025 – Apr 2025",
    current: false,
    description:
      "Led frontend development delivering a fast, performant and highly accessible podcast platform UI.",
    tags: ["React", "TypeScript", "Tailwind"],
  },
  {
    role: "Frontend Engineer",
    company: "The New Story Foundation",
    period: "Feb 2025 – Mar 2025",
    current: false,
    description:
      "Built an NGO website from scratch, crafting a dynamic, compelling site to showcase their humanitarian work to the world.",
    tags: ["Next.js", "TypeScript", "CMS"],
  },
  {
    role: "Frontend Developer",
    company: "Cargomax Services Ltd",
    period: "May 2024 – Feb 2025",
    current: false,
    description:
      "Built the user interface for managing orders and products using Next.js. Delivered a fully responsive, customer-friendly experience.",
    tags: ["Next.js", "React", "REST API"],
  },
  {
    role: "Frontend Developer",
    company: "Tripflex",
    period: "May 2024 – Dec 2024",
    current: false,
    description:
      "Built a car-tour booking platform alongside an admin dashboard for managing drivers, payments, and app settings.",
    tags: ["React", "Node.js", "Dashboard"],
  },
  {
    role: "Full Stack Developer (Instructor)",
    company: "Alusoft Technologies Ltd",
    period: "Jun 2023 – Oct 2023",
    current: false,
    description:
      "Taught HTML, CSS, and JavaScript to aspiring developers, guiding students through their first real-world projects.",
    tags: ["HTML", "CSS", "JavaScript", "Teaching"],
  },
  {
    role: "Full Stack Developer",
    company: "SQI College of ICT",
    period: "Sept 2022 – Aug 2024",
    current: false,
    description:
      "Studied advanced full-stack development — React, Node.js, SQL — and built production-grade frontend and backend systems.",
    tags: ["React", "Node.js", "SQL", "Education"],
  },
]

// ─── Tech Stack ───────────────────────────────────────────────────────────────
const techStack = [
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-500", bg: "bg-blue-500/10" },
  { name: "React", icon: SiReact, color: "text-sky-400", bg: "bg-sky-400/10" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-foreground", bg: "bg-foreground/10" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-emerald-500", bg: "bg-emerald-500/10" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-indigo-400", bg: "bg-indigo-400/10" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-500", bg: "bg-green-500/10" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400", bg: "bg-cyan-400/10" },
  { name: "Vue.js", icon: SiVuedotjs, color: "text-emerald-400", bg: "bg-emerald-400/10" },
  { name: "Docker", icon: SiDocker, color: "text-blue-400", bg: "bg-blue-400/10" },
  { name: "Laravel", icon: SiLaravel, color: "text-red-500", bg: "bg-red-500/10" },
  { name: "Git", icon: SiGit, color: "text-orange-500", bg: "bg-orange-500/10" },
  { name: "AWS", icon: SiAmazonwebservices, color: "text-yellow-500", bg: "bg-yellow-500/10" },
]

const skills = [
  { label: "Frontend Development", pct: 95, color: "bg-primary" },
  { label: "Backend & APIs", pct: 85, color: "bg-indigo-500" },
  { label: "Database Design", pct: 80, color: "bg-emerald-500" },
  { label: "Mobile-First / Responsive", pct: 92, color: "bg-sky-400" },
  { label: "DevOps & Cloud", pct: 65, color: "bg-orange-400" },
]

const values = [
  { icon: Code2, title: "Clean Code Advocate", desc: "Every line matters. I write code that's readable, maintainable, and built to scale." },
  { icon: Zap, title: "Performance Obsessed", desc: "Speed is a feature. I relentlessly optimize for load time, rendering, and user experience." },
  { icon: Layers, title: "Fullstack Mindset", desc: "From database schema to pixel-perfect UI — I own the entire stack." },
  { icon: Globe, title: "Product Thinker", desc: "I don't just build features. I think about the user, the business, and the impact." },
  { icon: Smartphone, title: "Mobile-First Always", desc: "Every interface I build is crafted for all screen sizes from day one." },
  { icon: Server, title: "Systems & Scale", desc: "Designing for growth — architecture that holds up under real-world traffic and complexity." },
]

// ─── Page Component ───────────────────────────────────────────────────────────
export default function AboutPage() {
  const [activeExp, setActiveExp] = useState(0)

  return (
    <div className="min-h-screen pb-32 overflow-x-hidden">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[0%] right-[10%] w-[400px] h-[400px] rounded-full bg-indigo-500/8 blur-[100px] pointer-events-none" />

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_60%,transparent_100%)] opacity-[0.07]" />

        <div className="relative z-10 container px-6 text-center max-w-4xl mx-auto pt-16">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/8 border border-primary/15 text-primary text-xs font-bold tracking-widest uppercase mb-6 animate-in fade-in slide-in-from-bottom-2 duration-700">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            Full-Stack Engineer · Available for Opportunities
          </div>

          <h1 className="text-5xl md:text-8xl font-bold leading-[1.05] tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            Favour{" "}
            <span className="text-gradient italic">Mayowa</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            I build fast, reliable, and beautifully crafted web products — from concept to deployment. 
            3+ years turning complex ideas into clean, working software.
          </p>

          {/* Meta pills */}
          <div className="flex flex-wrap justify-center gap-3 mt-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            {[
              { icon: MapPin, text: "Nigeria" },
              { icon: Calendar, text: "3+ Years Exp." },
              { icon: Coffee, text: "Open to Relocation" },
            ].map(({ icon: Icon, text }) => (
              <span key={text} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary border border-border text-sm text-muted-foreground font-medium">
                <Icon size={13} className="text-primary" />
                {text}
              </span>
            ))}
          </div>

          {/* Social CTAs */}
          <div className="flex flex-wrap justify-center gap-3 mt-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
            <Link href="https://github.com/vickymayowa" target="_blank" className="btn-outline-premium text-sm py-2 px-4">
              <Github size={15} /> GitHub
            </Link>
            <Link href="https://www.linkedin.com/in/favour-adebanjo/" target="_blank" className="btn-outline-premium text-sm py-2 px-4">
              <Linkedin size={15} /> LinkedIn
            </Link>
            <Link href="mailto:techiedevmayowa@gmail.com" className="btn-premium text-sm py-2 px-4">
              <Mail size={15} /> Email Me
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ────────────────────────────────────────────────────── */}
      <div className="container px-6 mx-auto max-w-5xl mt-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: 3, suffix: "+", label: "Years of Experience" },
            { value: 20, suffix: "+", label: "Projects Shipped" },
            { value: 10, suffix: "+", label: "Companies & Clients" },
            { value: 12, suffix: "+", label: "Technologies" },
          ].map((stat) => (
            <div key={stat.label} className="card-premium text-center group">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-1 font-heading">
                <Counter end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-xs text-muted-foreground font-semibold tracking-wide uppercase">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bio + Values Bento Grid ───────────────────────────────────────── */}
      <div className="container px-6 mx-auto max-w-5xl mt-8 space-y-6">

        {/* Bio Card */}
        <div className="card-premium relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-primary/5 blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="relative z-10 grid md:grid-cols-[1fr_auto] gap-8 items-center">
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <Star size={16} className="text-primary fill-primary" />
                <span className="text-xs font-bold uppercase tracking-widest text-primary">About Me</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                I'm Favour Mayowa — a Full-Stack Engineer with a builder's mindset.
              </h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  My journey started with curiosity and a laptop. Over 3+ years, I've shipped everything from
                  fintech platforms and NGO websites to booking systems and real-time dashboards — used by people across the globe.
                </p>
                <p>
                  I specialize in the modern JavaScript ecosystem: <span className="text-foreground font-semibold">React, Next.js, Node.js, TypeScript</span> — and I'm deeply comfortable on the backend too, working with <span className="text-foreground font-semibold">Laravel, PostgreSQL, and MongoDB</span>.
                </p>
                <p>
                  I don't just code — <span className="text-foreground font-semibold">I architect experiences</span>. I care about performance, scalability, and making things that work beautifully and make a real impact.
                </p>
              </div>
            </div>

            {/* Decorative quote */}
            <div className="hidden md:flex flex-col items-center justify-center min-w-[180px] text-center p-6 rounded-2xl bg-primary/5 border border-primary/10">
              <span className="text-5xl text-primary/20 font-serif leading-none mb-2">"</span>
              <p className="text-sm italic text-foreground/70 leading-relaxed">If it needs to be built, I build it — with precision and passion.</p>
              <span className="text-5xl text-primary/20 font-serif leading-none mt-2 rotate-180">"</span>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {values.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="card-premium group flex gap-4 items-start">
              <div className="shrink-0 w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:border-primary">
                <Icon size={18} className="text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-foreground mb-1 group-hover:text-primary transition-colors">{title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Skills Section ────────────────────────────────────────────────── */}
      <div className="container px-6 mx-auto max-w-5xl mt-8">
        <div className="grid md:grid-cols-2 gap-6">

          {/* Skill Bars */}
          <div className="card-premium space-y-5">
            <div className="flex items-center gap-2 mb-2">
              <Layers size={16} className="text-primary" />
              <span className="text-xs font-bold uppercase tracking-widest text-primary">Proficiency</span>
            </div>
            <h2 className="text-xl font-bold mb-4">Core Skill Areas</h2>
            {skills.map((s) => (
              <SkillBar key={s.label} {...s} />
            ))}
          </div>

          {/* Tech Stack Tiles */}
          <div className="card-premium">
            <div className="flex items-center gap-2 mb-2">
              <Code2 size={16} className="text-primary" />
              <span className="text-xs font-bold uppercase tracking-widest text-primary">Tech Stack</span>
            </div>
            <h2 className="text-xl font-bold mb-4">Tools I Work With</h2>
            <div className="grid grid-cols-3 gap-2">
              {techStack.map(({ name, icon: Icon, color, bg }) => (
                <div
                  key={name}
                  className={`flex flex-col items-center gap-1.5 p-3 rounded-xl ${bg} border border-border/50 hover:border-primary/30 hover:scale-105 transition-all duration-200 cursor-default`}
                >
                  <Icon className={`text-2xl ${color}`} />
                  <span className="text-[10px] font-semibold text-muted-foreground text-center leading-tight">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Career Timeline ───────────────────────────────────────────────── */}
      <div className="container px-6 mx-auto max-w-5xl mt-8">
        <div className="card-premium">
          <div className="flex items-center gap-2 mb-2">
            <Star size={16} className="text-primary fill-primary" />
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Career Journey</span>
          </div>
          <h2 className="text-xl font-bold mb-8">Experience Timeline</h2>

          <div className="grid md:grid-cols-[280px_1fr] gap-0">
            {/* Left: Timeline Nav */}
            <div className="relative border-r border-border/50 pr-0 md:pr-6 pb-6 md:pb-0">
              <div className="space-y-1">
                {experiences.map((exp, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveExp(i)}
                    className={`w-full text-left flex items-start gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                      activeExp === i
                        ? "bg-primary/10 border border-primary/20"
                        : "hover:bg-secondary border border-transparent"
                    }`}
                  >
                    {/* Dot */}
                    <div className={`mt-1.5 shrink-0 w-2.5 h-2.5 rounded-full border-2 border-background transition-all duration-300 ${
                      activeExp === i ? "bg-primary scale-125" : exp.current ? "bg-primary/60" : "bg-muted-foreground/30 group-hover:bg-primary/50"
                    }`} />
                    <div className="min-w-0">
                      <p className={`text-sm font-bold leading-tight truncate transition-colors ${activeExp === i ? "text-primary" : "text-foreground"}`}>
                        {exp.role}
                      </p>
                      <p className="text-[11px] text-muted-foreground truncate">{exp.company}</p>
                      <p className="text-[10px] text-muted-foreground/60 mt-0.5">{exp.period}</p>
                    </div>
                    {exp.current && (
                      <span className="shrink-0 ml-auto px-1.5 py-0.5 text-[9px] font-bold rounded-full bg-primary/20 text-primary border border-primary/30">
                        NOW
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Detail Panel */}
            <div className="md:pl-8 pt-6 md:pt-0">
              <div key={activeExp} className="animate-in fade-in slide-in-from-right-4 duration-300">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{experiences[activeExp].role}</h3>
                    <p className="text-primary font-semibold text-sm mt-0.5">{experiences[activeExp].company}</p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold">
                    {experiences[activeExp].period}
                  </span>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-5">
                  {experiences[activeExp].description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {experiences[activeExp].tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-lg bg-secondary border border-border text-xs font-semibold text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Progress dots */}
                <div className="flex gap-1.5 mt-8">
                  {experiences.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveExp(i)}
                      className={`rounded-full transition-all duration-300 ${i === activeExp ? "w-6 h-1.5 bg-primary" : "w-1.5 h-1.5 bg-border hover:bg-primary/40"}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <div className="container px-6 mx-auto max-w-5xl mt-8">
        <div className="relative overflow-hidden rounded-2xl bg-primary/5 border border-primary/15 p-8 md:p-12 text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-primary/10 blur-[80px] pointer-events-none" />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              Open to Work
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Let's Build Something Great</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              I'm actively looking for full-time roles, contract work, and exciting collaborations. 
              If you need a reliable engineer who cares about quality — let's talk.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="btn-premium group">
                Get in Touch
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="https://www.linkedin.com/in/favour-adebanjo/" target="_blank" className="btn-outline-premium">
                <Linkedin size={15} />
                LinkedIn Profile
                <ExternalLink size={13} className="ml-1 opacity-60" />
              </Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

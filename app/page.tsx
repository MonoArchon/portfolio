import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import TechStackPage from './tech-stack/page'
import ProjectsPage from './projects/page'
import CertificatesPage from './certificates/page'
import AboutPage from './about/page'

const stats = [
  { value: '4', label: 'Projects made' },
  { value: '2', label: 'Certifications' },
]

const quickLinks = [
  {
    href: '#about',
    title: 'About Me',
    desc: 'The story behind the code and how I got here.',
  },
  {
    href: '#tech-stack',
    title: 'Tech Stack',
    desc: 'The languages, frameworks, and tools I reach for.',
  },
  {
    href: '#projects',
    title: 'Projects',
    desc: 'Selected work across web, APIs, and infrastructure.',
  },
  {
    href: '#certificates',
    title: 'Certificates',
    desc: 'Credentials and courses that sharpened my craft.',
  },
]

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <section className="flex flex-col items-start gap-6 py-20 sm:py-28">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-primary">
        <span className="size-1.5 rounded-full bg-primary" />
          Available for new projects
        </span>
        <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-balance sm:text-6xl lg:text-7xl">
          Hi, I&apos;m Schann Alves.
          <br />
          <span className="text-primary">Aspiring Web developer && Data analyst</span>
          <br />
          <p>
            I build things for fun, and I thrive on learning new technologies.
          </p>
        </h1>
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Link
            href="#projects"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            View Projects
            <ArrowRight className="size-4" />
          </Link>
          <Link
            href="#about"
            className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
          >
            About Me
          </Link>
        </div>

        <dl className="mt-8 grid grid-cols-3 gap-6 border-t border-border pt-8">
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
                {s.value}
              </dd>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </dl>
      </section>
      
      <section id="about" className="scroll-mt-20">
        <AboutPage />
      </section>
      <section id="tech-stack" className="scroll-mt-20">
        <TechStackPage />
      </section>
      <section id="projects" className="scroll-mt-20">
        <ProjectsPage />
      </section>
      <section id="certificates" className="scroll-mt-20">
        <CertificatesPage />
      </section>

      <section className="grid gap-4 pb-24 sm:grid-cols-2">
        {quickLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group flex items-start justify-between gap-4 rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
          >
            <div>
              <h2 className="font-heading text-xl font-semibold text-card-foreground">
                {link.title}
              </h2>
              <p className="mt-1.5 text-sm text-muted-foreground">
                {link.desc}
              </p>
            </div>
            <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
          </Link>
        ))}
      </section>
    </div>
  )
}

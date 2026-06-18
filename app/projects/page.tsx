import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { ArrowUpRight } from 'lucide-react'
import { GitBranch } from '@/components/brand-icons'

export const metadata: Metadata = {
  title: 'Projects — Schann Alves',
  description:
    'Selected full-stack projects by Schann Alves across SaaS, e-commerce, real-time, and developer tooling.',
}

const projects = [
  {
    title: 'UM-based Book Shop',
    image: '/project-bookshop.png',
    desc: 'A system for a university bookstore, featuring inventory management, and user reviews.',
    tags: ['Java'],
    live: 'https://example.com',
    code: 'https://github.com',
    featured: true,
  },
  {
    title: 'Ar'+ "'" +'s Flowers',
    image: '/project-ecommerce.png',
    desc: 'Helped debug and add features to an e-commerce site for a local flower shop.',
    tags: ['PHP', 'CSS', 'MySQL'],
    live: 'https://example.com',
    code: 'https://github.com/JayEm6768/Ar-s-Flowers',
    featured: true,
  },
  {
    title: 'Waves Resort Reservation System',
    image: '/project-reservation.jpg',
    desc: 'Helped build security features and made changes on some UI elements.',
    tags: ['Laravel', 'PHP', 'CSS'],
    live: 'https://example.com',
    code: 'https://github.com/Foxtrotdum/waves-reservation-appdev',
    featured: false,
  },
  {
    title: 'YOLOv8-based Helmet Detection',
    image: '/project-helmet-detection.png',
    desc: 'A computer vision project for detecting helmet usage in image inference and video inference.',
    tags: ['Python', 'Streamlit'],
    live: 'https://cs20-helmet-detection.streamlit.app/',
    code: 'https://github.com/MonoArchon/helmet-detection',
    featured: false,
  },
]

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <PageHeader
        eyebrow="Projects"
        title="Things I've designed and help built."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-primary/50"
          >
            <div className="relative aspect-video overflow-hidden border-b border-border">
              <Image
                src={project.image || '/placeholder.svg'}
                alt={`${project.title} interface preview`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-1 flex-col gap-4 p-6">
              <div className="flex items-start justify-between gap-3">
                <h2 className="font-heading text-xl font-semibold text-card-foreground">
                  {project.title}
                </h2>
                {project.featured && (
                  <span className="rounded-md bg-primary/15 px-2 py-0.5 text-xs font-medium text-primary">
                    Featured
                  </span>
                )}
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {project.desc}
              </p>
              <ul className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-md border border-border px-2 py-0.5 font-mono text-xs text-muted-foreground"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex items-center gap-4 pt-2">
                <Link
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                >
                  Live demo
                  <ArrowUpRight className="size-4" />
                </Link>
                <Link
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground"
                >
                  <GitBranch className="size-4" />
                  Source
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

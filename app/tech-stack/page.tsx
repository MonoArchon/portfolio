import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { Code2, Server, Database, Wrench, Layers, Cloud} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Tech Stack',
  description:
    'The languages, frameworks, databases, and tools Schann Alves uses to build full-stack applications.',
}

const categories = [
  {
    icon: Code2,
    title: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Python', 'PHP', 'SQL', 'Java', 'HTML & CSS'],
  },
  {
    icon: Layers,
    title: 'Frontend',
    items: ['React', 'Next.js', 'Tailwind CSS', 'Streamlit',],
  },
  {
    icon: Server,
    title: 'Backend',
    items: ['Node.js', 'FastAPI',],
  },
  {
    icon: Database,
    title: 'Databases',
    items: ['PostgreSQL', 'MySQL', ],
  },
  // {
  //   icon: Cloud,
  //   title: 'DevOps & Cloud',
  //   items: ['AWS', 'Docker',],
  // },
  {
    icon: Wrench,
    title: 'Tools',
    items: ['Git', 'Figma',],
  },
]

const proficiency = [
  { name: 'TypeScript / JavaScript', level: 95 },
  { name: 'React / Next.js', level: 92 },
  { name: 'Node.js / APIs', level: 88 },
  { name: 'PostgreSQL / SQL', level: 85 },
  { name: 'Cloud & DevOps', level: 78 },
]

export default function TechStackPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <PageHeader
        eyebrow="Tech Stack"
        title="The tools I build with."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map(({ icon: Icon, title, items }) => (
          <div
            key={title}
            className="rounded-xl border border-border bg-card p-6"
          >
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-lg bg-secondary text-primary">
                <Icon className="size-5" />
              </span>
              <h2 className="font-heading text-lg font-semibold text-card-foreground">
                {title}
              </h2>
            </div>
            <ul className="mt-4 flex flex-wrap gap-2">
              {items.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-border bg-secondary px-2.5 py-1 text-sm text-secondary-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

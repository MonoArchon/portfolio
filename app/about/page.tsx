import Image from 'next/image'
import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { MapPin, Briefcase, GraduationCap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Me — Schann Alves',
  description:
    'Get to know Schann Alves',
}

const timeline = [
  {
    year: '2022 — Present',
    role: 'College',
    org: 'University of Mindanao',
  },
  {
    year: '2019 — 2021',
    role: 'Senior High School',
    org: 'Jose Maria College Foundation Inc.',
  },
  {
    year: '2015 — 2019',
    role: 'Junior High School',
    org: 'Holy Cross College of Sasa, Inc.',
  },
]

const facts = [
  { icon: MapPin, label: 'Based in', value: 'Davao, Philippines' },
  { icon: Briefcase, label: 'Aspiring', value: 'Web Dev // Data Analyst' },
  { icon: GraduationCap, label: 'Education', value: 'B.S. Computer Science' },
]

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <PageHeader
        eyebrow="About Me"
        title="Problem solver, lifelong learner."
      />

      <div className="mt-12 grid gap-12 lg:grid-cols-[280px_1fr]">
        <div className="flex flex-col gap-6">
          <div className="relative aspect-square overflow-hidden rounded-2xl border border-border">
            <Image
              src="/self.jpg"
              alt="Portrait of Schann Alves"
              fill
              className="object-cover"
              sizes="280px"
              priority
            />
          </div>
          <ul className="flex flex-col gap-3">
            {facts.map(({ icon: Icon, label, value }) => (
              <li
                key={label}
                className="flex items-center gap-3 rounded-lg border border-border bg-card p-3"
              >
                <span className="flex size-9 items-center justify-center rounded-md bg-secondary text-primary">
                  <Icon className="size-4" />
                </span>
                <span className="flex flex-col">
                  <span className="text-xs text-muted-foreground">{label}</span>
                  <span className="text-sm font-medium text-card-foreground">
                    {value}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-10">
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              I&apos;m Schann, an aspiring web developer and data analyst. The Projects I am 
              involve in spans from designing database schemas and making responsive interfaces.
              I believe the best products come from sweating the details. Outside of coding you&apos;ll find 
              me hunting for the perfect cup of coffee.
            </p>
          </div>

          {<div>
            <h2 className="font-heading text-xl font-semibold">Education</h2>
            <ol className="mt-6 flex flex-col gap-6">
              {timeline.map((item) => (
                <li
                  key={item.role}
                  className="relative border-l border-border pl-6"
                >
                  <span className="absolute -left-[5px] top-1.5 size-2.5 rounded-full bg-primary" />
                  <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    {item.year}
                  </p>
                  <h3 className="mt-1 font-medium text-foreground">
                    {item.role}{' '}
                    <span className="text-primary">· {item.org}</span>
                  </h3>
                </li>
              ))}
            </ol>
          </div>}
        </div>
      </div>
    </div>
  )
}

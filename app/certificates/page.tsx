import Link from 'next/link'
import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { Award, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Certificates — Schann Alves',
  description:
    'Certifications and courses completed by Schann Alves in cloud, web development, and software engineering.',
}

const certificates = [
  {
    title: 'IT Specialist - Java',
    issuer: 'Issued by Certiport, a Pearson VUE business',
    date: '2023',
    url: 'https://www.credly.com/badges/b88953db-4250-4792-9d19-b13ad8a800f1',
  },
  {
    title: 'IT Specialist - Databases',
    issuer: 'Issued by Certiport, a Pearson VUE business',
    date: '2024',
    url: 'https://www.credly.com/badges/142d95d8-85b7-4cc2-8088-60056b4563ab',
  },
]

export default function CertificatesPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <PageHeader
        eyebrow="Certificates"
        title="Credentials and continued learning."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {certificates.map((cert) => (
          <Link
            key={cert.title}
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-4 rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
          >
            <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
              <Award className="size-5" />
            </span>
            <div className="flex flex-col gap-1">
              <div className="flex items-start justify-between gap-2">
                <h2 className="font-heading text-base font-semibold leading-snug text-card-foreground text-balance">
                  {cert.title}
                </h2>
                <ExternalLink className="mt-0.5 size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
              </div>
              <p className="text-sm text-muted-foreground">
                {cert.issuer} · {cert.date}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

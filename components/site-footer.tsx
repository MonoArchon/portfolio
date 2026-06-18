import Link from 'next/link'
import { GitBranch, Facebook, Instagram, Mail } from './brand-icons'

const socials = [
  { href: 'https://github.com/MonoArchon', label: 'GitHub', icon: GitBranch },
  { href: 'https://www.facebook.com/schann.alves.5/', label: 'Facebook', icon: Facebook },
  { href: 'https://www.instagram.com/alvesschann/', label: 'Instagram', icon: Instagram },
  { href: 'mailto:alvesschann@gmail.com', label: 'Email', icon: Mail },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          {'\u00A9'} {new Date().getFullYear()} Schann Alves. Built with Next.js.
        </p>
        <div className="flex items-center gap-2">
          <p className="text-sm text-muted-foreground">
            Contact me:
          </p>
          {socials.map(({ href, label, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="inline-flex size-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
            >
              <Icon className="size-4" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}

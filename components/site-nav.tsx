'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { Menu, X, Terminal } from 'lucide-react'
import { cn } from '@/lib/utils'

const links = [
  { href: '/', label: 'Home' },
  { href: '#about', label: 'About Me' },
  { href: '#tech-stack', label: 'Tech Stack' },
  { href: '#projects', label: 'Projects' },
  { href: '#certificates', label: 'Certificates' },
]

export function SiteNav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY
      const isScrollingDown = currentScrollY > lastScrollY.current
      const shouldHide = isScrollingDown && currentScrollY > 80

      setHidden(shouldHide)
      lastScrollY.current = currentScrollY
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className={cn("sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md transition-transform duration-300",
      hidden ? "-translate-y-full" : "translate-y-0",
    )}>
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-2 font-heading text-lg font-bold tracking-tight"
          onClick={() => setOpen(false)}
        >
          <span className="flex size-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Terminal className="size-4" aria-hidden="true" />
          </span>
          <span>
            Schann<span className="text-primary">Alves</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {links.slice(1).map((link) => {
            const active = pathname === link.href
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'rounded-md px-3 py-2 text-sm font-medium transition-colors',
                    active
                      ? 'bg-secondary text-primary'
                      : 'text-muted-foreground hover:text-foreground',
                  )}
                >
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-md text-foreground md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-border px-6 py-3 md:hidden">
          {links.slice(1).map((link) => {
            const active = pathname === link.href
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'block rounded-md px-3 py-2.5 text-sm font-medium transition-colors',
                    active
                      ? 'bg-secondary text-primary'
                      : 'text-muted-foreground hover:text-foreground',
                  )}
                >
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>
      )}
    </header>
  )
}

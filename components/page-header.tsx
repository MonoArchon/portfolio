export function PageHeader({
  eyebrow,
  title,
}: {
  eyebrow: string
  title: string
}) {
  return (
    <div className="flex flex-col gap-3 border-b border-border pb-8">
      <span className="font-mono text-xs uppercase tracking-widest text-primary">
        {eyebrow}
      </span>
      <h1 className="font-heading text-3xl font-bold tracking-tight text-balance sm:text-5xl">
        {title}
      </h1>
    </div>
  )
}

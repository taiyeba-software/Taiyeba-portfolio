import { siteConfig } from '@/lib/data'
import { Mail, Github, Linkedin, FileText } from 'lucide-react'
// import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-2xl">
        <div className="rounded-2xl border border-border/40 bg-white/5 backdrop-blur px-6 sm:px-8 py-12">
          <div className="text-center">
            {/* <h2 className="mb-2 font-mono text-sm text-muted-foreground">{'// contact'}</h2> */}
            <h3 className="type-h2 mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              Get in Touch
            </h3>
            <p className="type-body mx-auto mb-10 max-w-lg text-muted-foreground text-pretty">
              I&apos;m actively seeking internship roles where I can learn, contribute meaningfully, and strengthen my engineering fundamentals.
            </p>
          </div>

          {/* Primary CTA */}
          <div className="mb-6 flex justify-center">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=islamtaiyeba38@gmail.com&su=Internship%20Opportunity&body=Hi%20Taiyeba,%0A%0AI%20would%20like%20to%20connect%20regarding%20an%20opportunity.%0A"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_32px_-8px_hsl(var(--primary)/0.35)]"
            >
              <Mail className="h-4 w-4" />
              Send me an email
            </a>
          </div>

          {/* Secondary CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <Link
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border/50 bg-white/3 px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:bg-white/8 hover:border-primary/50 hover:shadow-[0_12px_32px_-8px_hsl(var(--primary)/0.2)]"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </Link>
            <Link
              href={siteConfig.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border/50 bg-white/3 px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:bg-white/8 hover:border-primary/50 hover:shadow-[0_12px_32px_-8px_hsl(var(--primary)/0.2)]"
            >
              <Github className="h-4 w-4" />
              GitHub
            </Link>
            <Link
              href="/interview strategy.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border/50 bg-white/3 px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:bg-white/8 hover:border-primary/50 hover:shadow-[0_12px_32px_-8px_hsl(var(--primary)/0.2)]"
            >
              <FileText className="h-4 w-4" />
              Resume
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
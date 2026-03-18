import {
  Code,
  Server,
  Database,
  Layers,
  Cloud,
  Sparkles,
  Lightbulb,
} from 'lucide-react'
import { skillsData, engineeringFoundations } from '@/lib/data'
import {
  Card,
  CardContent,
} from '../../components/ui/card'
import { cn } from '@/lib/utils'

// Icon mapping for skill clusters
const iconMap: Record<string, React.ReactNode> = {
  Code: <Code className="h-6 w-6" />,
  Server: <Server className="h-6 w-6" />,
  Database: <Database className="h-6 w-6" />,
  Layers: <Layers className="h-6 w-6" />,
  Cloud: <Cloud className="h-6 w-6" />,
  Sparkles: <Sparkles className="h-6 w-6" />,
}

export function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          {/* <h2 className="mb-2 text-center font-mono text-sm text-muted-foreground">{'// skills'}</h2> */}
          <h3 className="type-h2 mb-12 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-center text-transparent">
            Skills & Expertise
          </h3>

          {/* Skill Clusters Grid (6 cards max, responsive) */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skillsData.map((cluster) => (
              <Card
                key={cluster.title}
                className={cn(
                  'group relative overflow-hidden border-border/50 bg-white/5 py-0 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-white/10 hover:shadow-[0_12px_32px_-8px_hsl(var(--primary)/0.35)]'
                )}
              >
                <CardContent className="p-5 sm:p-6">
                  <div className="space-y-4">
                    {/* Icon & Title */}
                    <div className="flex items-start gap-3">
                      <div className="rounded-lg bg-primary/10 p-2.5 text-primary transition-all duration-300 group-hover:bg-primary/20">
                        {iconMap[cluster.icon]}
                      </div>
                      <h4 className="type-h4 pt-1">
                        {cluster.title}
                      </h4>
                    </div>

                    {/* Description */}
                    <p className="type-body text-muted-foreground">
                      {cluster.description}
                    </p>

                    {/* Technologies (comma-separated) */}
                    <div className="border-t border-border/30 pt-3">
                      <p className="type-label mb-2">
                        Tech Stack
                      </p>
                      <p className="text-sm text-foreground/85 leading-relaxed">
                        {cluster.technologies.join(', ')}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Engineering Foundations Section */}
        <div className="rounded-2xl border border-border/40 bg-white/5 backdrop-blur px-6 sm:px-8 py-8 sm:py-10">
          <div className="mb-6 flex items-center gap-3">
            <Lightbulb className="h-5 w-5 text-primary" />
            <h4 className="type-h4">
              Engineering Foundations
            </h4>
          </div>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
            {engineeringFoundations.map((item) => (
              <div
                key={item}
                className={cn(
                  'group rounded-lg border border-border/50 bg-white/3 px-4 py-3 transition-all duration-300 hover:border-primary/40 hover:bg-white/8 hover:shadow-[0_8px_20px_-12px_hsl(var(--primary)/0.25)]'
                )}
              >
                <p className="type-body font-medium text-foreground/90 group-hover:text-foreground">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

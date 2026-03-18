import { ArrowDown } from "lucide-react";
import { GlareCardHero } from "@/components/glare-card-hero";
import Image from "next/image";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden pt-16 sm:pt-20"
    >
      <GlareCardHero>

        <div className="flex w-full items-center px-6 py-10 sm:px-10 sm:py-12 lg:px-20">
            <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">

              {/* Left side */}
              <div className="flex flex-col items-center text-center md:items-start md:text-left">

                {/* Main Statement */}
                  <h1 className="type-h1 mb-6 max-w-3xl text-[clamp(2rem,4.6vw,3.75rem)]">
                    I design and <span className="font-light text-primary" style={{ fontFamily: "var(--font-m-plus-code-latin)" }}>develop()</span>{" "}
                    <span className="font-semibold">
                      products, shape meaningful brands, and build + lead inspired,
                      talented teams.
                    </span>
                  </h1>

                  {/* Subline */}
                  <p className="type-body max-w-md text-[hsl(var(--muted-foreground))]">
                    Full‑stack developer focused on clean architecture, scalable systems,
                    and thoughtful digital experiences.
                  </p>
              </div>

              {/* Right side — 30% width */}
              <div className="relative mt-2 flex items-center justify-center lg:mt-0 lg:justify-end">
                <Image
                  src="/images/profile.png"
                  alt="Profile photo"
                  width={440}
                  height={660}
                  className="h-auto w-[min(88vw,520px)] object-contain grayscale lg:w-[min(42vw,600px)]"
                  priority
                />
              </div>

            </div>
      </div>

        {/* Scroll indicator */}
        <a
          href="#about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-[hsl(var(--muted-foreground))] transition-colors hover:text-[hsl(var(--foreground))]"
          aria-label="Scroll to about section"
        >
          <ArrowDown className="h-5 w-5" />
        </a>
      </GlareCardHero>
    </section>
  );
}

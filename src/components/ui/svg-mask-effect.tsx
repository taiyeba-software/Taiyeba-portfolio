"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export function SvgMaskEffect({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 320, y: 160 });

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const syncCenter = () => {
      const rect = element.getBoundingClientRect();
      setMousePosition({ x: rect.width / 2, y: rect.height / 2 });
    };

    const updateMousePosition = (event: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      setMousePosition({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      });
    };

    syncCenter();
    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("resize", syncCenter);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("resize", syncCenter);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn("pointer-events-none relative h-full w-full", className)}
    >
      <motion.div
        className="absolute inset-0 opacity-30 [mask-image:url(/mask.svg)] [mask-repeat:no-repeat] [mask-size:220px] bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-cyan-500/20"
        animate={{
          maskPosition: `${mousePosition.x - 110}px ${mousePosition.y - 110}px`,
        }}
        transition={{
          maskPosition: { duration: 0.2, ease: "linear" },
        }}
      />
    </div>
  );
}

export const MaskContainer = ({
  children,
  revealText,
  size = 10,
  revealSize = 600,
  maskTransitionDuration = 0.3,
  maskTransitionDelay = 0,
  fadeTransitionDuration = 0.3,
  fadeTransitionDelay = 0,
  className,
}: {
  children?: string | React.ReactNode;
  revealText?: string | React.ReactNode;
  size?: number;
  revealSize?: number;
  maskTransitionDuration?: number;
  maskTransitionDelay?: number;
  fadeTransitionDuration?: number;
  fadeTransitionDelay?: number;
  className?: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [supportsHover, setSupportsHover] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const updateMousePosition = (e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }
  };

  useEffect(() => {
    const syncInputMode = () => {
      if (typeof window === "undefined") return;
      const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
      setSupportsHover(canHover);
    };

    syncInputMode();
    window.addEventListener("resize", syncInputMode);

    return () => {
      window.removeEventListener("resize", syncInputMode);
    };
  }, []);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const syncCenter = () => {
      const rect = element.getBoundingClientRect();
      setMousePosition({ x: rect.width / 2, y: rect.height / 2 });
    };

    syncCenter();
    window.addEventListener("resize", syncCenter);

    return () => {
      window.removeEventListener("resize", syncCenter);
      setIsHovered(false);
    };
  }, []);

  const maskSize = isHovered ? revealSize : size;

  if (!supportsHover) {
    return (
      <div
        ref={containerRef}
        className={cn("relative flex min-h-svh w-full items-center justify-center", className)}
      >
        <div className="relative z-20 mx-auto w-full max-w-4xl px-6 text-white [&_*]:!text-white sm:px-10 lg:px-20">
          {children}
        </div>
      </div>
    );
  }

  return (
    <motion.div
      ref={containerRef}
      className={cn("relative h-screen cursor-pointer", className)}
      onMouseMove={updateMousePosition}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="absolute flex h-full w-full items-center justify-center bg-white text-6xl [mask-image:url(/mask.svg)] [mask-repeat:no-repeat]"
        style={{
          // @ts-ignore
          maskPosition: `${mousePosition.x - maskSize / 2}px ${mousePosition.y - maskSize / 2}px`,
          maskSize: `${maskSize}px`,
        }}
        animate={{
          maskSize: maskSize,
        }}
        transition={{
          maskSize: {
            duration: maskTransitionDuration,
            delay: maskTransitionDelay,
            ease: "easeInOut",
          },
        }}
      >
        <div className="absolute inset-0 z-0 h-full w-full bg-white" />
        <div className="relative z-20 mx-auto w-full max-w-4xl px-6 sm:px-10 lg:px-20">
          {children}
        </div>
      </motion.div>

      <motion.div 
        className="flex h-full w-full items-center justify-center"
        animate={{ opacity: isHovered ? 0 : 1 }}
        transition={{
          opacity: {
            duration: fadeTransitionDuration,
            delay: fadeTransitionDelay,
            ease: "easeInOut",
          },
        }}
      >
        {revealText}
      </motion.div>
    </motion.div>
  );
};
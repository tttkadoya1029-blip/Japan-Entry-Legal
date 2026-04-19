"use client";

import { motion, useInView, cubicBezier, type Variants } from "framer-motion";
import { useRef, type ReactNode } from "react";

const ease = cubicBezier(0.22, 1, 0.36, 1);

interface Props {
  children: ReactNode;
  delay?: number;
  className?: string;
  /** "up" (default) | "fade" | "left" */
  direction?: "up" | "fade" | "left";
}

const variants: Record<string, Variants> = {
  up:   { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } },
  fade: { hidden: { opacity: 0 },        visible: { opacity: 1 } },
  left: { hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } },
};

export function AnimateIn({ children, delay = 0, className = "", direction = "up" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants[direction]}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Stagger children on scroll into view */
interface StaggerProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
}

export function StaggerIn({ children, className = "", stagger = 0.08, delay = 0 }: StaggerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{ visible: { transition: { staggerChildren: stagger, delayChildren: delay } } }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export const staggerChild: Variants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};

/** Animated horizontal rule that extends from left */
export function AnimatedRule({ className = "", delay = 0 }: { className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ scaleX: 0, originX: 0 }}
      animate={inView ? { scaleX: 1 } : {}}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay }}
      className={`h-px bg-[#e0ddd8] w-full ${className}`}
    />
  );
}

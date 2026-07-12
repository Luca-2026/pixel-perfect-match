"use client";
import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode, ElementType, ComponentProps } from "react";

type MotionTag = "div" | "section" | "article" | "header" | "footer" | "ul" | "ol" | "li" | "figure" | "span";

interface RevealProps {
  as?: MotionTag;
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
  amount?: number;
}

/** Sanfte Fade-Up-Enthüllung beim Eintritt in den Viewport. */
export function Reveal({
  as = "div",
  children,
  className,
  delay = 0,
  y = 24,
  once = true,
  amount = 0.2,
}: RevealProps) {
  const reduce = useReducedMotion();
  const Comp = motion[as] as ElementType;
  const props: ComponentProps<typeof motion.div> = reduce
    ? { initial: false }
    : {
        initial: { opacity: 0, y },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once, amount },
        transition: {
          duration: 0.7,
          delay,
          ease: [0.22, 1, 0.36, 1],
        },
      };
  return (
    <Comp className={className} {...props}>
      {children}
    </Comp>
  );
}

/** Container, der Kinder gestaffelt einblendet. Kinder müssen <StaggerItem/> sein oder motion-Kompatibel. */
export function Stagger({
  as = "div",
  children,
  className,
  delay = 0,
  gap = 0.08,
  once = true,
  amount = 0.2,
}: RevealProps & { gap?: number }) {
  const reduce = useReducedMotion();
  const Comp = motion[as] as ElementType;
  const variants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduce ? 0 : gap,
        delayChildren: reduce ? 0 : delay,
      },
    },
  };
  return (
    <Comp
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
    >
      {children}
    </Comp>
  );
}

export function StaggerItem({
  as = "div",
  children,
  className,
  y = 20,
}: {
  as?: MotionTag;
  children: ReactNode;
  className?: string;
  y?: number;
}) {
  const reduce = useReducedMotion();
  const Comp = motion[as] as ElementType;
  const variants: Variants = {
    hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };
  return (
    <Comp className={className} variants={variants}>
      {children}
    </Comp>
  );
}

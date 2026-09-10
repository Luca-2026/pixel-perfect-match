import type { ReactNode, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Container({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10", className)}
      {...props}
    >
      {children}
    </div>
  );
}

interface SectionProps extends HTMLAttributes<HTMLElement> {
  as?: "section" | "div";
  tone?: "paper" | "mint" | "ink";
}

export function Section({
  as: Tag = "section",
  tone = "paper",
  className,
  children,
  ...props
}: SectionProps) {
  const toneClass =
    tone === "ink"
      ? "bg-ink text-paper"
      : tone === "mint"
      ? "bg-mint/40"
      : "bg-paper";
  return (
    <Tag className={cn("py-20 sm:py-28", toneClass, className)} {...props}>
      {children}
    </Tag>
  );
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("eyebrow", className)}>{children}</p>;
}

export function HeadlineDot({
  as: Tag = "h2",
  children,
  className,
}: {
  as?: "h1" | "h2" | "h3";
  children: ReactNode;
  className?: string;
}) {
  return <Tag className={cn("headline-dot", className)}>{children}</Tag>;
}

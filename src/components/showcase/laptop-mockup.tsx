"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { ExternalLink } from "lucide-react";
import { useSafeReducedMotion } from "@/hooks/use-safe-reduced-motion";

interface LaptopMockupProps {
  src: string;
  alt: string;
  /** Optional: interaktive Website im Display und Link zum Öffnen in neuem Tab. */
  liveUrl?: string;
  liveLabel?: string;
}

export function LaptopMockup({ src, alt, liveUrl, liveLabel }: LaptopMockupProps) {
  const reduce = useSafeReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const screenRef = useRef<HTMLDivElement>(null);
  const [nearby, setNearby] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);
  useEffect(() => {
    const element = screenRef.current;
    if (!element || !liveUrl) return;
    const resize = new ResizeObserver(([entry]) => {
      if (entry) setScreenWidth(entry.contentRect.width);
    });
    resize.observe(element);
    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) {
        setNearby(true);
        observer.disconnect();
      }
    }, { rootMargin: "200px" });
    observer.observe(element);
    return () => { resize.disconnect(); observer.disconnect(); };
  }, [liveUrl]);
  const screenScale = screenWidth / 1280;
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.97, 1, 0.99]);

  return (
    <motion.div
      ref={ref}
      className="relative mx-auto w-full max-w-5xl"
      initial={reduce ? false : { opacity: 0, y: 40 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      style={reduce ? undefined : { scale }}
    >
      <div className="relative mx-auto block w-full">
        <img src={src} alt={alt} loading="lazy" width={1600} height={1040} className="relative block aspect-[20/13] h-auto w-full object-contain" />
        {liveUrl && (
          <div ref={screenRef} className="absolute left-[11.7%] top-[14.3%] h-[74.1%] w-[76.6%] overflow-hidden">
            {nearby && screenScale > 0 && (
              <iframe
                src={liveUrl}
                title={`Interaktive Website ${liveLabel ?? "im Laptop"}`}
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
                referrerPolicy="strict-origin-when-cross-origin"
                onLoad={() => setLoaded(true)}
                onError={() => setLoaded(false)}
                tabIndex={loaded ? 0 : -1}
                className={`absolute left-0 top-0 origin-top-left border-0 bg-paper ${loaded ? "visible" : "invisible"}`}
                style={{ width: 1280, height: screenRef.current ? screenRef.current.clientHeight / screenScale : 820, transform: `scale(${screenScale})` }}
              />
            )}
          </div>
        )}
      </div>

      {liveUrl && (
        <div className="mt-4 flex justify-center">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener"
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line bg-paper px-4 py-2 text-xs font-medium text-ink/80 no-underline hover:bg-mint hover:text-ink hover:no-underline"
          >
            {liveLabel ?? liveUrl.replace(/^https?:\/\//, "")} in neuem Tab öffnen
            <ExternalLink className="h-3.5 w-3.5" aria-hidden />
          </a>
        </div>
      )}
    </motion.div>
  );
}

"use client";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { CheckCircle2, ExternalLink, Loader2, ShieldAlert } from "lucide-react";

interface LaptopMockupProps {
  src: string;
  alt: string;
  /** Wenn gesetzt, wird die Ziel-URL live im Screen-Bereich als iframe geladen. */
  liveUrl?: string;
  /** Sichtbarer Titel/Domain-Label im Chrome-Balken über dem Live-Frame. */
  liveLabel?: string;
}

// Screen-Bereich innerhalb der Mockup-PNG (1920x1248), ausgemessen.
const SCREEN = {
  top: 14.26,
  left: 11.72,
  right: 12.4,
  bottom: 22.52,
} as const;

export function LaptopMockup({ src, alt, liveUrl, liveLabel }: LaptopMockupProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [status, setStatus] = useState<"loading" | "live" | "blocked">("loading");
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.97, 1, 0.99]);

  // Fallback-Detektion: X-Frame-Options / frame-ancestors verhindern das Laden.
  // Wenn onLoad nicht innerhalb von 7s feuert oder das geladene Dokument leer
  // ist (typisch bei X-Frame-Options: DENY/SAMEORIGIN), auf "blocked" schalten.
  useEffect(() => {
    if (!liveUrl) return;
    const timer = window.setTimeout(() => {
      setStatus((s) => (s === "loading" ? "blocked" : s));
    }, 7000);
    return () => window.clearTimeout(timer);
  }, [liveUrl]);

  const handleLoad = () => {
    // Cross-Origin: Zugriff auf contentDocument wirft. Bei einem Frame-Block
    // liefern manche Browser stattdessen ein leeres Dokument ohne Fehler —
    // in dem Fall ist contentWindow.length 0 UND das Dokument liest sich
    // ohne Throw. Wir behandeln jeden greifbaren Load als "live".
    try {
      const doc = iframeRef.current?.contentDocument;
      // Wenn wir das Dokument lesen können und es leer ist, ist es geblockt.
      if (doc && (!doc.body || doc.body.childElementCount === 0)) {
        setStatus("blocked");
        return;
      }
    } catch {
      // Cross-Origin-Zugriff verweigert = Seite wurde geladen.
    }
    setStatus("live");
  };

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
      <div
        aria-hidden
        className="absolute -inset-x-10 bottom-2 h-40 rounded-[50%] blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in oklab, var(--color-petrol) 35%, transparent), transparent 70%)",
        }}
      />

      <div className="relative mx-auto block w-full">
        <img src={src} alt={alt} loading="lazy" className="relative block w-full h-auto" />

        {liveUrl && (
          <div
            className="absolute overflow-hidden bg-white"
            style={{
              top: `${SCREEN.top}%`,
              left: `${SCREEN.left}%`,
              right: `${SCREEN.right}%`,
              bottom: `${SCREEN.bottom}%`,
            }}
          >
            {status !== "live" && (
              <img
                src={src}
                alt=""
                aria-hidden
                className="absolute inset-0 h-full w-full"
                style={{
                  objectFit: "none",
                  objectPosition: `-${(SCREEN.left / 100) * 1920}px -${(SCREEN.top / 100) * 1248}px`,
                  transform: `scale(${1 / ((100 - SCREEN.left - SCREEN.right) / 100)})`,
                  transformOrigin: "top left",
                }}
              />
            )}
            {status !== "blocked" && (
              <iframe
                ref={iframeRef}
                src={liveUrl}
                title={liveLabel ?? alt}
                loading="lazy"
                onLoad={handleLoad}
                className="relative h-full w-full border-0"
                referrerPolicy="no-referrer-when-downgrade"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
              />
            )}
            {status === "blocked" && (
              <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-ink/85 via-ink/40 to-transparent p-4 sm:p-6">
                <div className="w-full max-w-sm rounded-md border border-line bg-paper/95 p-4 text-center shadow-lg backdrop-blur">
                  <p className="eyebrow">Live-Vorschau nicht möglich</p>
                  <p className="mt-2 text-xs text-ink/70">
                    Der Server von {liveLabel ?? "der Zielseite"} erlaubt die
                    Einbettung in fremde Fenster nicht. Öffnen Sie die Seite
                    daher in einem neuen Tab.
                  </p>
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener"
                    className="mt-3 inline-flex items-center gap-2 rounded-md bg-petrol px-3 py-2 text-xs font-medium text-paper no-underline hover:bg-ink hover:no-underline"
                  >
                    Website in neuem Tab öffnen
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                  </a>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {liveUrl && (
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-xs text-ink/60">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-3 py-1 font-mono">
            <span
              className={
                "h-2 w-2 rounded-full " +
                (status === "live"
                  ? "bg-mint"
                  : status === "blocked"
                    ? "bg-amber"
                    : "bg-ink/30 animate-pulse")
              }
              aria-hidden
            />
            {status === "live"
              ? `Live: ${liveLabel ?? liveUrl.replace(/^https?:\/\//, "")}`
              : status === "blocked"
                ? `Vorschau: ${liveLabel ?? liveUrl.replace(/^https?:\/\//, "")}`
                : `Lade ${liveLabel ?? liveUrl.replace(/^https?:\/\//, "")} …`}
          </span>
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-1 text-petrol no-underline hover:underline"
          >
            in neuem Tab öffnen
            <ExternalLink className="h-3 w-3" aria-hidden />
          </a>
        </div>
      )}
    </motion.div>
  );
}

import { useEffect, useRef } from "react";

/**
 * Video, das automatisch (stumm, in Schleife) abspielt, sobald es im
 * sichtbaren Bereich ist, und pausiert, wenn es den Viewport verlässt.
 * Steuerung bleibt über controls möglich; Ton kann der Besucher aktivieren.
 */
export function AutoplayVideo({
  src,
  className,
  label,
}: {
  src: string;
  className?: string;
  label: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            void video.play().catch(() => {
              /* Autoplay blockiert: Nutzer kann manuell starten */
            });
          } else {
            video.pause();
          }
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      controls
      muted
      loop
      autoPlay
      playsInline
      preload="metadata"
      className={className}
      aria-label={label}
    />
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export type GalleryPhoto = { src: string; alt: string };

type GalleryProps = {
  photos: GalleryPhoto[];
  /** Show the first photo large above the grid, with this caption */
  featuredCaption?: string;
};

const iconButton =
  "flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-2xl font-bold text-white hover:bg-white/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

export default function Gallery({ photos, featuredCaption }: GalleryProps) {
  const [index, setIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const touchStartX = useRef<number | null>(null);
  const total = photos.length;

  const step = (delta: number) =>
    setIndex((current) => (current === null ? current : (current + delta + total) % total));

  // Open/close the native dialog and lock page scroll while it's open
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (index === null) {
      if (dialog.open) dialog.close();
      return;
    }
    if (!dialog.open) dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [index]);

  // Preload the neighbouring photos so Next/Previous feel instant
  useEffect(() => {
    if (index === null) return;
    [index - 1, index + 1].forEach((i) => {
      const preload = new window.Image();
      preload.src = photos[(i + total) % total].src;
    });
  }, [index, photos, total]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") step(1);
    if (e.key === "ArrowLeft") step(-1);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
  };

  const current = index === null ? null : photos[index];
  const gridStart = featuredCaption ? 1 : 0;

  return (
    <>
      {featuredCaption && photos[0] && (
        <figure className="mx-auto mb-10 max-w-4xl">
          <button
            type="button"
            onClick={() => setIndex(0)}
            aria-label={`Enlarge photo: ${featuredCaption}`}
            className="relative block aspect-[3/2] w-full overflow-hidden rounded-2xl shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-haiti-navy"
          >
            <Image
              src={photos[0].src}
              alt={photos[0].alt}
              fill
              sizes="(min-width: 896px) 896px, 100vw"
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </button>
          <figcaption className="mt-3 text-center font-bold text-haiti-navy">{featuredCaption}</figcaption>
        </figure>
      )}

      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {photos.slice(gridStart).map((photo, i) => {
          const photoIndex = i + gridStart;
          return (
            <li key={photo.src}>
              <button
                type="button"
                onClick={() => setIndex(photoIndex)}
                aria-label={`Enlarge photo ${photoIndex + 1} of ${total}`}
                className="relative block aspect-[4/3] w-full overflow-hidden rounded-xl shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-haiti-navy"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                  className="object-cover object-top transition-transform duration-300 hover:scale-105"
                />
              </button>
            </li>
          );
        })}
      </ul>

      <dialog
        ref={dialogRef}
        aria-label="Photo viewer"
        onClose={() => setIndex(null)}
        onKeyDown={handleKeyDown}
        onClick={(e) => {
          if (e.target === e.currentTarget) setIndex(null);
        }}
        className="m-0 h-full max-h-none w-full max-w-none bg-transparent p-0 backdrop:bg-black/90"
      >
        {current && (
          <div
            className="flex h-full flex-col p-4 sm:p-6"
            onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
            onTouchEnd={handleTouchEnd}
          >
            <div className="flex items-center justify-between text-white">
              <p aria-live="polite" className="font-bold">
                Photo {index! + 1} of {total}
              </p>
              <button type="button" onClick={() => setIndex(null)} aria-label="Close photo viewer" className={iconButton}>
                ✕
              </button>
            </div>

            <div className="relative my-4 min-h-0 flex-1">
              <Image key={current.src} src={current.src} alt={current.alt} fill sizes="100vw" unoptimized className="object-contain" />
            </div>

            <div className="flex items-center justify-center gap-6">
              <button type="button" onClick={() => step(-1)} aria-label="Previous photo" className={iconButton}>
                ←
              </button>
              <button type="button" onClick={() => step(1)} aria-label="Next photo" className={iconButton}>
                →
              </button>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}

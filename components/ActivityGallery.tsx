"use client";

import { useState } from "react";
import Gallery from "@/components/Gallery";
import type { ActivityCategory, ActivityPhoto } from "@/data/activities";

type ActivityGalleryProps = {
  categories: ActivityCategory[];
  photos: ActivityPhoto[];
  featuredCaption?: string;
};

const ALL = "all";

export default function ActivityGallery({ categories, photos, featuredCaption }: ActivityGalleryProps) {
  const [active, setActive] = useState<string>(ALL);

  const filtered = active === ALL ? photos : photos.filter((photo) => photo.category === active);

  const tabClass = (id: string) =>
    `rounded-full px-5 py-2 text-sm font-bold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-haiti-navy ${
      active === id ? "bg-haiti-navy text-white" : "bg-white text-haiti-navy hover:bg-haiti-gold/20"
    }`;

  return (
    <div>
      <div role="group" aria-label="Filter activities by category" className="mb-10 flex flex-wrap justify-center gap-3">
        <button type="button" onClick={() => setActive(ALL)} className={tabClass(ALL)} aria-pressed={active === ALL}>
          All Activities
        </button>
        {categories.map((category) => (
          <button
            key={category.id}
            type="button"
            onClick={() => setActive(category.id)}
            className={tabClass(category.id)}
            aria-pressed={active === category.id}
          >
            {category.label}
          </button>
        ))}
      </div>

      <Gallery key={active} photos={filtered} featuredCaption={active === ALL ? featuredCaption : undefined} />
    </div>
  );
}

export type ActivityCategory = {
  id: string;
  label: string;
};

export type ActivityPhoto = {
  src: string;
  alt: string;
  category: string;
};

export const activityCategories: ActivityCategory[] = [
  { id: "learning", label: "Learning & Growth" },
  { id: "play", label: "Play & Friendship" },
  { id: "community", label: "Community & Care" },
];

export const activityPhotos: ActivityPhoto[] = [
  {
    src: "/gallery/PHOTO-2026-06-14-21-56-29.jpg",
    alt: "Staff and children gathering as donated supplies are unloaded",
    category: "community",
  },
  {
    src: "/gallery/PHOTO-2026-06-14-21-56-13.jpg",
    alt: "Children holding handwritten signs about their rights during a workshop",
    category: "learning",
  },
  {
    src: "/gallery/girlwriting.jpg",
    alt: "A girl focused on her schoolwork at a classroom desk",
    category: "learning",
  },
  {
    src: "/gallery/joy.jpg",
    alt: "Students holding up new notebooks donated to their school",
    category: "learning",
  },
  {
    src: "/gallery/PHOTO-2026-06-14-21-56-10.jpg",
    alt: "Two young men studying together on laptops",
    category: "learning",
  },
  {
    src: "/gallery/diploma.jpg",
    alt: "Young graduates celebrating with certificates and flowers",
    category: "learning",
  },
  {
    src: "/gallery/boy.jpg",
    alt: "A small boy in a yellow shirt reaching for a yellow balloon",
    category: "play",
  },
  {
    src: "/gallery/girlssmiling.jpg",
    alt: "A group of girls laughing together outside",
    category: "play",
  },
  {
    src: "/gallery/PHOTO-2026-06-14-21-56-11.jpg",
    alt: "Four young women posing together with the mountains behind them",
    category: "play",
  },
  {
    src: "/gallery/PHOTO-2026-06-14-21-56-12.jpg",
    alt: "Three friends smiling together under a tree",
    category: "play",
  },
  {
    src: "/gallery/girlsmiling.jpg",
    alt: "A young woman walking through the orphanage grounds",
    category: "play",
  },
  {
    src: "/gallery/PHOTO-2026-06-14-21-56-06(1).jpg",
    alt: "A volunteer delivering a donated mattress",
    category: "community",
  },
  {
    src: "/gallery/satellite.jpg",
    alt: "Volunteers installing a satellite dish at the orphanage",
    category: "community",
  },
];

import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import CallToAction from "@/components/CallToAction";
import ActivityGallery from "@/components/ActivityGallery";
import { activityCategories, activityPhotos } from "@/data/activities";

export const metadata = { title: "Activities at the Orphanage | Haitian Youth Foundation Inc." };

export default function ActivitiesPage() {
  return (
    <>
      <PageHeader
        title="Life at the Orphanage"
        subtitle="From lessons and laughter to the everyday care that keeps a home running, here's a look at daily life for the children we support."
      />

      <Section title="Everyday Moments" intro="Filter by category, or select any photo to see it full-size.">
        <ActivityGallery
          categories={activityCategories}
          photos={activityPhotos}
          featuredCaption="Welcoming a delivery of donated supplies"
        />
      </Section>

      <CallToAction
        heading="Help Us Create More Moments Like These"
        text="Your support funds the lessons, supplies, and everyday care that make these moments possible."
      />
    </>
  );
}

import {
  Building2,
  Globe,
  RefreshCcw,
  Clock,
  Image,
  Share2,
} from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "Zameen Listing Posting",
    description:
      "We upload and manage your property listings on Zameen with complete details and images.",
  },
  {
    icon: Globe,
    title: "OLX Property Posting",
    description:
      "Get your properties published on OLX quickly without spending hours uploading listings yourself.",
  },
  {
    icon: RefreshCcw,
    title: "Listing Updates",
    description:
      "Need to update prices, descriptions, or property information? We handle routine listing updates for you.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description:
      "Most listings are posted within 24–48 hours after receiving complete property details.",
  },
  {
    icon: Image,
    title: "Photo & Content Formatting",
    description:
      "We organize property images, titles, and descriptions to ensure professional-looking listings.",
  },
  {
    icon: Share2,
    title: "Social Media Posting",
    description:
      "Optionally publish the same property listings to Facebook, Instagram, or other social platforms.",
  },
];
const WhatWeDo = () => {
  return (
    <div id="what-we-handle" className="px-6 py-10">
      <h2 className="mx-auto max-w-3xl text-center font-medium text-4xl tracking-[-0.045em] sm:text-[2.75rem]">
         What We Handle
      </h2>
      <p className="mt-3 text-pretty text-center text-lg text-muted-foreground tracking-[-0.01em] sm:text-2xl">
         We manage your property listings so you can focus on clients and closing deals.
      </p>
      <div className="mx-auto mt-10 grid max-w-(--breakpoint-lg) gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div data-aos="fade-left"
            className="flex flex-col border bg-card p-6"
            key={feature.title}
          >
            <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-muted">
              <feature.icon className="size-5" />
            </div>
            <span className="font-medium text-lg">{feature.title}</span>
            <p className="mt-1 text-[15px] text-foreground/80">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeDo;

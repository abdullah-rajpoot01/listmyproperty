import {
  FileText,
  Upload,
  CheckCircle,
} from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Send Property Details",
    description:
      "Share property information, photos, price, and location through WhatsApp.",
  },
  {
    icon: Upload,
    title: "We Publish Your Listings",
    description:
      "Our team uploads and formats your listings on Zameen, OLX, and selected platforms.",
  },
  {
    icon: CheckCircle,
    title: "Stay Focused On Sales",
    description:
      "While we handle the posting work, you focus on inquiries, viewings, and closing deals.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="px-6 py-10">
      <h2 className="text-center font-medium text-4xl tracking-[-0.045em] sm:text-[2.75rem]">
        How It Works
      </h2>

      <p className="mt-3 text-center text-muted-foreground text-lg sm:text-xl">
        Get started in just three simple steps.
      </p>

      <div className="mx-auto mt-12 grid max-w-(--breakpoint-lg) gap-6 md:grid-cols-3">
        {steps.map((step, index) => (
          <div data-aos="fade-left"
            key={step.title}
            className=" border bg-card p-6 text-center"
          >
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-muted">
              <step.icon className="size-6" />
            </div>

            <div className="mb-2 text-sm font-medium text-primary">
              Step {index + 1}
            </div>

            <h3 className="font-medium text-lg">
              {step.title}
            </h3>

            <p className="mt-2 text-muted-foreground">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
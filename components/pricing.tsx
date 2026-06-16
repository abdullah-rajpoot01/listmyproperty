import { CircleCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const plans = [
    {
        name: "Basic",
        price: 1000,
        description: "Perfect for small agents who need basic listing posting support.",
        features: [
            "Up to 20 listings/month",
            "Zameen OR OLX posting",
            "Basic title + description formatting",
            "Standard 24–48h delivery",
        ],
        buttonText: "Start Basic Plan",
    },
    {
        name: "Standard",
        price: 1500,
        isRecommended: true,
        description: "Best for active agents managing regular property listings.",
        features: [
            "Up to 30 listings/month",
            "Zameen + OLX posting",
            "Listing updates included",
            "Faster priority handling",
        ],
        buttonText: "Call Now To Start",
    },
    {
        name: "Growth",
        price: 2500,
        isPopular: true,
        description: "Ideal for agents with high listing volume.",
        features: [
            "Up to 60 listings/month",
            "Zameen + OLX posting",
            "Priority processing",
            "Better turnaround speed",
        ],
        buttonText: "Call Now To Start",
    },
    {
        name: "Pro",
        price: 7000,
        description: "Best for agencies with heavy listing requirements.",
        features: [
            "Up to 200 listings/month",
            "Zameen + OLX posting",
            "Bulk handling support",
            "Agency-level priority",
        ],
        buttonText: "Call Now To Start",
    },
];

const Pricing = () => {
    return (
        <div id="pricing" className="px-6 py-10">
            <h2 className="text-center font-medium text-4xl tracking-[-0.04em] sm:text-[2.75rem]">
                Our Plans
            </h2>
            <p className="mt-3 text-center text-muted-foreground text-xl -tracking-[0.01em] md:text-2xl">
                Choose the plan that fits your needs
            </p>

            <div className="mx-auto mt-12 grid max-w-(--breakpoint-lg) grid-cols-1 items-center gap-8 sm:mt-16 md:grid-cols-2 lg:grid-cols-4">
                {plans.map((plan) => (
                    <div data-aos="fade-right"
                        className={cn(
                            "relative border border-border/85 bg-card p-6 shadow-xs/3",
                            {
                                "border-2 border-primary py-10": plan.isPopular,
                            }
                        )}
                        key={plan.name}
                    >
                        {plan.isPopular && (
                            <Badge className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2">
                                Most Popular
                            </Badge>
                        )}
                        <h3 className="font-medium text-lg">{plan.name}</h3>
                        <p className="mt-2 font-satoshi font-semibold text-4xl">
                            Rs{plan.price}
                        </p>
                        <p className="mt-4 font-medium text-muted-foreground">
                            {plan.description}
                        </p>
                        <Separator className="my-4" />
                        <ul className="space-y-2">
                            {plan.features.map((feature) => (
                                <li className="flex items-start gap-2" key={feature}>
                                    <CircleCheck className="mt-1 h-4 w-4 text-green-600" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <a href="tel:+923046954705">
                            <Button
                                className="mt-6 w-full"
                                size="lg"
                                variant={plan.isPopular ? "default" : "outline"}
                            >
                                {plan.buttonText}
                            </Button>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Pricing;

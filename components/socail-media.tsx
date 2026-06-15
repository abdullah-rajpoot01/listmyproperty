import { ArrowRight, Blocks, Settings2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const SocailMedia = () => {
    return (
        <div id="socail-media-handling" data-aos="fade-right" className="mx-auto w-full max-w-(--breakpoint-lg) px-6 py-10">
            <h2 className="font-medium text-3xl text-center leading-10 tracking-[-0.04em] sm:text-4xl md:text-[40px] md:leading-13">
                Social Media Add-On: <br />
                <span className="text-muted-foreground/80 text-center">
                    Extend your property listings beyond Zameen and OLX
                </span>
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 ">
                {/* Card 1 */}
                <div className="bg-muted p-6">
                    {/* Media 1 Mobile */}
                    <div className="mb-6 relative aspect-square w-full bg-background md:hidden" >
                        <Image alt="social addons" src={"/socail-media-addons.png"} fill />
                    </div>

                    <span className="font-medium text-xl tracking-[-0.01em]">
                        Same Price Per Platform
                    </span>

                    <ul className="mt-6 space-y-5">
                        <li>
                            <div className="flex items-start gap-3">
                                <Settings2 className="shrink-0" />
                                <p className="-mt-0.5">
                                    We can post the same property listings to Facebook, Instagram,
                                    WhatsApp Channels, and other supported platforms.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-start gap-3">
                                <Blocks className="shrink-0" />
                                <p className="-mt-0.5">
                                    Social media pricing is exactly equal to your current plan price for
                                    each additional platform you add.
                                </p>
                            </div>
                        </li>
                    </ul>
                    <a href="tel:+23046954705">
                    <Button className="mt-8 w-full">
                        Call Now To Add Social Media Posting<ArrowRight />
                    </Button>
                    </a>
                </div>
                {/* Media 1 Desktop */}
                <div className="hidden rounded-xl bg-muted  md:block relative w-full aspect-square" >
                    <Image alt="social addons" src={"/socail-media-addons.png"} fill />
                </div>

            </div>
        </div>
    );
};

export default SocailMedia;

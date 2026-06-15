import { MessageCircle, PhoneIcon } from "lucide-react";
import Link from "next/link";

const Contact = () => (
    <div id="contact-us" className="pb-10">
        <div className="mx-auto w-full max-w-(--breakpoint-xl) px-6 xl:px-0 ">
            <strong className="w-full block font-medium text-muted-foreground text-sm uppercase tracking-wide text-center">
                Contact Us
            </strong>
            <h2 className="mt-3 font-medium text-4xl tracking-[-0.035em] text-center">
                Chat with our friendly team!
            </h2>
            <p className="mt-3 text-lg text-muted-foreground md:text-xl text-center">
                We&apos;d love to hear from you.
            </p>
            <div className="mt-16 flex flex-col gap-16 md:gap-10 lg:flex-row">
                <div className="grid w-full max-w-3xl grid-cols-1 gap-1  border bg-muted p-1 *:border *:bg-background *:p-6 sm:grid-cols-2 lg:col-span-2 dark:*:border-foreground/20">
                    <div data-aos="fade-left">
                        <div className="flex h-12 w-12 items-center justify-center  border border-foreground/3 bg-foreground/5 text-foreground dark:border-foreground/20 dark:bg-foreground/10">
                            <MessageCircle />
                        </div>
                        <h3 className="mt-6 font-medium text-xl">Whatsapp</h3>
                        <p className="my-2.5 text-muted-foreground">
                            Our friendly team is here to help.
                        </p>
                        <Link
                            className="font-medium text-primary"
                            href="https://wa.me/923046954705"
                        >
                            +92 (304) 695-4705
                        </Link>
                    </div>
                    <div data-aos="fade-left">
                        <div className="flex h-12 w-12 items-center justify-center  border border-foreground/3 bg-foreground/5 text-foreground dark:bg-foreground/10">
                            <PhoneIcon />
                        </div>
                        <h3 className="mt-6 font-medium text-xl">Phone</h3>
                        <p className="my-2.5 text-muted-foreground">
                            Mon-Fri from 8am to 5pm.
                        </p>
                        <Link
                            className="font-medium text-primary"
                            href="tel:+923046954705"
                        >
                            +92 (304) 695-4705
                        </Link>
                    </div>
                </div>


            </div>
        </div>
    </div>
);

export default Contact;

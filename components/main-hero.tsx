
"use client";

import { Button } from "@/components/ui/button";
import { MessageCircle, } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


const HeroSection2 = () => {
  return (
    <section id="hero-section" className="w-full py-8 pt-25 mx-auto">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center lg:grid-cols-2 gap-2 ">
          <div className="flex flex-col gap-6 items-center lg:items-start">

            <div className="flex flex-col gap-4 text-center lg:text-left">
              <h1 className="text-2xl font-bold tracking-tight text-balance md:text-5xl text-foreground">
                Zameen & OLX Property Listing Management Service
              </h1>
              <p className="text-muted-foreground text-sm text-balance md:text-lg">
                We post and manage your property listings so you don’t waste time uploading ads manually.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <Link href={"tel:+923046954705"} >
                <Button
                  size="lg"
                  className="h-10 px-12 md:px-8 cursor-pointer hover:animate-tada hover:animate-iteration-count-once"
                >
                  Call Now
                </Button>
              </Link>
              <Link href={"https://wa.me/923046954705"} >
                <Button
                  size="lg" variant={"outline"}
                  className="h-10 px-8 cursor-pointer hover:animate-tada hover:animate-iteration-count-once"
                >
                  <MessageCircle className="size-5" /> Whatsapp
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative mx-auto aspect-square w-full max-w-md lg:max-w- rounded-xl bg-accent " >
            <Image alt="hero-image" className="size-full" fill src={"/hero-section.png"} priority />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection2;



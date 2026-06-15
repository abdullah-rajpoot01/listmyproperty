import Contact from "@/components/contact-us";
import HowItWorks from "@/components/how-it-works";
import HeroSection2 from "@/components/main-hero";
import Pricing from "@/components/pricing";
import SocailMedia from "@/components/socail-media";
import WhatWeDo from "@/components/what-we-do";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans overflow-hidden mx-auto">
      <HeroSection2 />
      <WhatWeDo/>
      <Pricing/>
      <SocailMedia/>
      <HowItWorks/>
      <Contact/>
    </div>
  );
}

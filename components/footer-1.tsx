import Link from "next/link";
import { Avatar, AvatarFallback } from "./ui/avatar";

interface FooterLink {
  label: string
  url: string
}
interface FooterLinksSection {
  title: string
  links: FooterLink[]
}

const Footer1 = () => {

  const linkSections: FooterLinksSection[] = [
    {
      title: "Quick Links",
      links: [{ label: "Home", url: "/#hero-section" },
      { label: "Our Service", url: "/#what-we-handle" },
      { label: "Pricing", url: "/#pricing" },
      { label: "Social Media Management", url: "/#socail-media-handling" },
      { label: "How We Works", url: "/#how-it-works" },
      { label: "Contact us", url: "/#contact-us" },
      ],
    },
    {
      title: "Contact Us",
      links: [
        { label: "Whatsapp : 0304-6954705", url: "https://wa.me/923046954705" },
        { label: "Phone : 0304-6954705", url: "tel:+923046954705" },
      ],
    },
  ];

  return (
    <div className="px-6 w-full relative text-foreground">
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-primary-foreground relative! overflow-hidden">
        <div className="">
          <a href={"/"} className="inline-flex items-center justify-center gap-2  rounded-full ">
            <div className="flex items-center gap-3">
              <Avatar className="size-9">
                {/* <AvatarImage alt="@shadcn" src="https://github.com/shadcn.png" /> */}
                <AvatarFallback className="bg-black text-white">L</AvatarFallback>
              </Avatar>
              <div className="flex items-center gap-1 font-bold leading-none tracking-wider text-xl text-foreground">
                ListMyProperty
              </div>
            </div>
          </a>
          <p className="max-w-102 mt-6 text-foreground/80">
            Zameen & OLX Property Listing Management Service.
            We post and manage your property listings so you don’t waste time uploading ads manually.          </p>
        </div>

        <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
          {linkSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-base text-foreground md:mb-5 mb-2">
                {section.title}
              </h3>
              <ul className="text-sm space-y-1 text-foreground">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <Link href={link.url} className="hover:underline transition text-foreground/80">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <p className="py-4 text-center text-sm md:text-base text-foreground/80 border-t border-t-primary-foreground/50">
        Copyright 2026 © <Link href="/">ListMyProperty .</Link> All
        Right Reserved.
      </p>
    </div>
  );
};

export default Footer1;

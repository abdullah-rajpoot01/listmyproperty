import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import AOSInit from "@/components/init-aos";
import Navbar from "@/components/navbar";
import Footer1 from "@/components/footer-1";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ListMyProperty – Zameen & OLX Property Listing Management Service",
  description:
    "We post and manage your property listings so you don’t waste time uploading ads manually.",

  metadataBase: new URL("https://listmyproperty.pages.dev"),

  openGraph: {
    title: "ListMyProperty – Zameen & OLX Property Listing Management Service",
    description:
      "We post and manage your property listings so you don’t waste time uploading ads manually.",
    url: "/",
    siteName: "ListMyProperty",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "ListMyProperty Og Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "ListMyProperty – Zameen & OLX Property Listing Management Service",
    description:
      "We post and manage your property listings so you don’t waste time uploading ads manually.",
    images: ["/og-default.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en" suppressHydrationWarning={true}
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable)}
    >
      <body className="min-h-full flex flex-col max-w-7xl mx-auto">
        <Navbar />
        {children}
        <Footer1 />
        <AOSInit />
      </body>
    </html>
  );
}

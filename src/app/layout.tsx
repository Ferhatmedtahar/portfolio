import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { Merriweather, Poppins } from "next/font/google";
import "./globals.css";
import ogImage from "@/public/og-image.png";
import favIcon from "@/public/favicon.ico";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Ferhat | Fullstack Developer",
  metadataBase: new URL("https://portfolio-chi-nine-57.vercel.app/"),
  description:
    "Experienced fullstack developer with a strong foundation in frontend and backend technologies. Crafting seamless, visually stunning, and highly functional web applications with a focus on exceptional user experiences.",
  keywords:
    "Ferhat Mohamed Tahar, Fullstack Developer, Web Development, Frontend, Backend, React, Next.js, Tailwind CSS, JavaScript, TypeScript",
  openGraph: {
    title: "Ferhat Mohamed Tahar | Fullstack Web Developer",
    description:
      "Creating intuitive, high-performance web applications. Passionate about merging creativity with functionality.",
    url: "https://portfolio-chi-nine-57.vercel.app/",
    siteName: "Ferhat's Portfolio",
    images: [
      {
        url: ogImage.src,
        width: 1200,
        height: 630,
        alt: "Ferhat Mohamed Tahar - Fullstack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Ferhat Mohamed Tahar | Fullstack Developer",
    description:
      "Experienced fullstack developer passionate about creating intuitive web solutions.",
    images: [
      {
        url: ogImage.src,
        width: 1200,
        height: 630,
        alt: "Ferhat Mohamed Tahar - Fullstack Developer",
      },
    ],
  },
  icons: {
    shortcut: favIcon.src,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased ${merriweather.className}  ${poppins.className} `}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}

import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { Merriweather, Poppins } from "next/font/google";
import "./globals.css";
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
  description:
    "Experienced fullstack developer with a strong foundation in frontend and backend technologies. Crafting seamless, visually stunning, and highly functional web applications with a focus on exceptional user experiences.",
  keywords:
    "Ferhat Mohamed Tahar, Fullstack Developer, Web Development, Frontend, Backend, React, Next.js, Tailwind CSS, JavaScript, TypeScript",
  openGraph: {
    title: "Ferhat Mohamed Tahar | Fullstack Web Developer",
    description:
      "Creating intuitive, high-performance web applications. Passionate about merging creativity with functionality.",
    type: "website",
    locale: "en_US",
    siteName: "Ferhat's Portfolio",
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

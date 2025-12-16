import type { Metadata } from "next";
import { Inter, Montserrat, Bai_Jamjuree } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";

const bai = Bai_Jamjuree({
  subsets: ["latin"],
  variable: "--font-bai",
  weight: ["700"],
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Montaj Aer Condiționat Timișoara | ClimInstall",
  description:
    "Montaj rapid și profesionist pentru aparate de aer condiționat.",
  openGraph: {
    title: "ClimInstall – Montaj Aer Condiționat",
    description: "Profesioniști în montaj AC, garanție 24 luni.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body
        className={` antialiased w-full min-h-screen bg-gradient-to-tr from-[#F8FBFF] via-[#D9F4FF] to-[#1A73E8]`}
      >
        {children}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2044px-WhatsApp.svg.png"
          alt=""
          target="_blank"
          className="fixed right-1 sm:right-5 bottom-2 sm:bottom-5 w-10 sm:w-14 cursor-pointer"
        />
        <Footer />
      </body>
    </html>
  );
}

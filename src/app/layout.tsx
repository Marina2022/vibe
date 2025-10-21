import type { Metadata } from "next";
import {Inter, Manrope, Plus_Jakarta_Sans} from "next/font/google";
import "./globals.scss";
import localFont from "next/font/local";


const uncage = localFont({
  src: [
    {
      path: "../assets/fonts/uncage-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/uncage-medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-uncage",
  display: "swap",
});

const sfPro = localFont({
  src: [
    {
      path: "../assets/fonts/sf-pro-display-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/sf-pro-text-bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sfpro",
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
});


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "700"]
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin", "cyrillic-ext"],
  weight: ["400", "600"], // только нужные веса
});

export const metadata: Metadata = {
  title: "VIBE — энергия жизни, которую выбираешь ты",
  description: "Экосистема для тех, кто выбирает жить осознанно: заботиться о себе, зарабатывать и развиваться в сильном сообществе",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={`${manrope.variable} ${inter.variable} ${plusJakartaSans.variable} ${uncage.variable} ${sfPro.variable}`}>
    {children}
    </body>
    </html>
  );
}

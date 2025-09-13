import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat, Quicksand, League_Spartan} from 'next/font/google';
import "./globals.css";
import CursorGlow from "./components/glow";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: "--font-montserrat",
});

const quicksand = Quicksand({
  subsets: ['latin'],
  variable: "--font-quicksand",
});

const leagueSpartan = League_Spartan({
  subsets: ['latin'],
  variable: "--font-league-spartan",
});

export const metadata: Metadata = {
  title: "Kavish Shah - Portfolio",
  description: "Kabbage's Patch",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${quicksand.variable}`}>
      <body>
        <CursorGlow />
        {children}
        </body>
    </html> 
  );
}

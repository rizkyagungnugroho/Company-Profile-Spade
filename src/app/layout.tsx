import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Playfair_Display, Lora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsappFloat from "@/components/WhatsappFloat";
import { Providers } from "@/components/Providers";
import StartupLoader from "@/components/StartupLoader"; // ✅ import ini

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${lora.variable} font-serif`}>
        <Providers>
          <StartupLoader>
            <Navbar />
            <WhatsappFloat />
            {children}
            <Footer />
          </StartupLoader>
        </Providers>
      </body>
    </html>
  );
}

import Footer from "@/components/footer";

import { GoogleAnalytics } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import Navbar from "@/components/nav";
import { Toaster } from "@/components/ui/sonner";
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "Jobs",
  description: "Site that offers job services in Algeria",
  applicationName: "JobSite",
  keywords: [
    "jobs",
    "algeria",
    "service",
    "employment",
    "career",
    "job search",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Providers>
        <body className={`${inter.variable}`}>
          <Navbar />

          {children}
          <Footer />
          <Toaster richColors />
        </body>
      </Providers>
      <GoogleAnalytics gaId="G-TLG68X6W23" />
    </html>
  );
}

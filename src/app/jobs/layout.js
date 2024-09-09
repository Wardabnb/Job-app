import { Inter } from "next/font/google";

import Providers from "../providers";
import Information from "@/components/information";
import Search from "@/components/search";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function Layout({ children }) {
  return (
    <>
      <div className="flex justify-around mt-5 border-b pb-5">
        <Search />

        <Information />
      </div>

      {children}
    </>
  );
}

import { Montserrat, Caveat } from "next/font/google";

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-montserrat",
});

export const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500", "700"],
  display: "swap",
  variable: "--font-caveat",
});

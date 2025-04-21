import type { Metadata } from "next";
import { caveat, montserrat } from "./theme/fonts";

export const metadata: Metadata = {
  title: "Software Engineer Tharunda Dewmin",
  description: "Trashan Tharunda dewmin Next.js / React developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${caveat.variable}`}>
      <body>{children}</body>
    </html>
  );
}

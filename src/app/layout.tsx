import type { Metadata } from "next";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trashan Tharunda dewmin next react developer",
  description: "Trashan Tharunda dewmin next react developer",
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

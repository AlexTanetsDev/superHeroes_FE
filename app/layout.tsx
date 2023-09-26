import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Superheroes DB",
  description: "Superheroes database",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

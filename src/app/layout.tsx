import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Analytics from "./components/Analytics/Analytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vetra App",
  description: "For Startups, Scaleups, and Storytellers Who Refuse to Be Ignored.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Analytics />
      <body className={inter.className}>{children}</body>
      </head>
    </html>
  );
}

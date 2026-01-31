import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pranav Chandra | Full-Stack Developer",
  description:
    "Full-stack developer specializing in Node.js, React, Next.js, and modern web technologies. Building scalable, performant applications.",
  keywords: ["Full-Stack Developer", "Node.js", "React", "Next.js", "TypeScript", "MongoDB", "PostgreSQL"],
  authors: [{ name: "Pranav Chandra" }],
  openGraph: {
    title: "Pranav Chandra | Full-Stack Developer",
    description: "Full-stack developer specializing in Node.js, React, Next.js, and modern web technologies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

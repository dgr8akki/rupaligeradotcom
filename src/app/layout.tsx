import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rupali Gera | Content Writer & Strategist",
  description:
    "Content Writer & Strategist with 6+ years of experience helping brands tell clearer stories, connect with the right audiences, and drive meaningful results.",
  keywords: [
    "content writer",
    "content strategist",
    "SEO specialist",
    "B2B SaaS",
    "technical writing",
    "Dublin",
  ],
  authors: [{ name: "Rupali Gera" }],
  openGraph: {
    title: "Rupali Gera | Content Writer & Strategist",
    description:
      "Content Writer & Strategist with 6+ years of experience helping brands tell clearer stories.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main className="pt-16 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

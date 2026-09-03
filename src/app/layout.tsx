import type { Metadata } from "next";
import localFont from "next/font/local";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import "./globals.css";

const albertSans = localFont({
  variable: "--font-sans",
  display: "swap",
  fallback: ["ui-sans-serif", "system-ui", "Arial", "sans-serif"],
  src: [
    {
      path: "../fonts/AlbertSans-normal.woff2",
      weight: "300 700",
      style: "normal",
    },
    {
      path: "../fonts/AlbertSans-italic.woff2",
      weight: "300 700",
      style: "italic",
    },
  ],
});

export const metadata: Metadata = {
  title: {
    default: "Converting 101 — A Guide to Roll-to-Roll Converting",
    template: "%s | Converting 101",
  },
  description:
    "A plain-language guide to roll-to-roll (R2R) converting — coating, laminating, printing, web handling, and the processes behind the industry.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${albertSans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-white text-foreground">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Satisfy,
  Roboto,
  Kulim_Park,
} from "next/font/google";
import "./globals.css";

const satisfy = Satisfy({
  variable: "--font-satisfy",
  subsets: ["latin"],
  weight: "400",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700", "100", "200", "300", "600", "800", "900"],
});

const kulim_park = Kulim_Park({
  variable: "--font-kulim-park",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Yash Suthar",
  description: "Yash Suthar's Portfolio",
  keywords: [
    "Yash Suthar",
    "Portfolio",
    "Yash Suthar Portfolio",
    "Yash",
    "Suthar",
    "Software Engineer",
    "Developer",
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Frontend Developer vadodara",
    "Frontend developer india",
  ],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Yash Suthar",
    description: "Yash Suthar's Portfolio",
    url: "https://yashsuthar.com",
    siteName: "Yash Suthar",
    images: ["/favicon.ico"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yash Suthar",
    description: "Yash Suthar's Portfolio",
    images: ["/favicon.ico"],
  },
  metadataBase: new URL("https://yashsuthar.com"),
  alternates: {
    canonical: "https://yashsuthar.com",
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/manifest.json",
  themeColor: "#000000",
  formatDetection: {
    telephone: false,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  authors: [{ name: "Yash Suthar", url: "https://yashsuthar.com" }],
  creator: "Yash Suthar",
  publisher: "Yash Suthar",
  applicationName: "Yash Suthar",
  appleWebApp: {
    title: "Yash Suthar",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${satisfy.variable} ${roboto.variable} ${kulim_park.variable} antialiased font-roboto`}
      >
        {children}
      </body>
    </html>
  );
}

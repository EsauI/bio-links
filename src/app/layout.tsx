import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Esaul | Bio Links",
  description:
    "Personal profile card that aggregates all the important links in one place. Easily access social media, projects, and content through this sleek, user-friendly page.",
  openGraph: {
    title: "Esaul | Bio Links",
    description:
      "Personal profile card that aggregates all the important links in one place. Easily access social media, projects, and content through this sleek, user-friendly page.",
    url: "https://esaul.dev",
    siteName: "Esaul | Bio Links",
  },
  icons: {
    icon: [
      {
        url: "/logo-light.svg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/logo-dark.svg",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main>{children}</main>

          <Toaster />

          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}

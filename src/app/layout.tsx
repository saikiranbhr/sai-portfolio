import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sai Kiran B | Lead Software Engineer",
  description:
    "Senior Application Developer with 7+ years of experience in designing, developing, and delivering robust end-to-end applications.",
  keywords: [
    "Sai Kiran", "Software Engineer", "Full Stack Developer",
    "React", ".NET", "AWS", "Azure", "Portfolio",
  ],
  authors: [{ name: "Sai Kiran B" }],
  openGraph: {
    title: "Sai Kiran B | Lead Software Engineer",
    description: "7+ years building scalable, user-friendly solutions.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${dmSans.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

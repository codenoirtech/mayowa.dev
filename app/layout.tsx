import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/sonner"
import Sidebar from "@/components/sidebar"
import Cursor from "@/components/cursor"
import { SpeedInsights } from "@vercel/speed-insights/next"
import LoadingScreen from "@/components/loading-screen"
import { ThemeProvider } from "@/app/providers"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://mayowa.dev"),
  title: {
    default: "Favour Mayowa | Core Software Engineer & Full-Stack Developer",
    template: "%s | Favour Mayowa"
  },
  description:
    "Favour Mayowa is a Core Software Engineer and Full-Stack Developer with 3+ years of experience specializing in high-performance web applications, scalable system architecture, and modern TypeScript technologies.",
  keywords: [
    "Core Software Engineer",
    "Full-Stack Developer",
    "Senior Software Engineer",
    "Frontend Engineer",
    "Backend Engineer",
    "TypeScript",
    "React Expert",
    "Next.js Specialist",
    "Node.js Developer",
    "Vue.js",
    "Scalable Architecture",
    "System Design",
    "Web Performance Optimization",
    "Favour Mayowa portfolio"
  ],
  authors: [{ name: "Favour Mayowa", url: "https://mayowa.dev" }],
  creator: "Favour Mayowa",
  openGraph: {
    title: "Favour Mayowa | Core Software Engineer & Full-Stack Developer",
    description: "Building scalable backend systems and high-performance frontend applications with modern web technologies.",
    url: "https://mayowa.dev",
    siteName: "Favour Mayowa | Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Favour Mayowa | Core Software Engineer",
    description: "Building high-performance, scalable web applications with TypeScript, Next.js, and Node.js.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://mayowa.dev",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#09090b" />
      </head>
      <body className="bg-background text-foreground font-sans selection:bg-primary/20 selection:text-primary transition-colors duration-300">
        <ThemeProvider>
          <LoadingScreen />
          <div className="flex h-screen overflow-hidden bg-background">
            <Sidebar />
            <main className="flex-1 overflow-y-auto relative scroll-smooth">
              {children}
            </main>
            <Toaster />
            <Cursor />
            <SpeedInsights />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

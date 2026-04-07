import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog",
  description: "Technical articles, guides, and thoughts on web development and engineering by Favour Mayowa.",
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

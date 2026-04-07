import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Experience",
  description: "Career path and professional working experience of Favour Mayowa, demonstrating expertise as a Core Software Engineer.",
}

export default function ExperienceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

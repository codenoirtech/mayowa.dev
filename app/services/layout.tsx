import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Services",
  description: "Technical services provided by Favour Mayowa including frontend development, backend architecture, and full-stack solutions.",
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

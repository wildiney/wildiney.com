import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Wildiney — Product Manager',
  description: 'Product Manager com raízes em design, focado em impacto real.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

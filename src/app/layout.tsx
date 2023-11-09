import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'Lab №7',
  description: 'chezee',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-gotham ">{children}</body>
    </html>
  )
}

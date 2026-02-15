import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '500na700 - Креативное агентство',
  description: 'Новости креативного агентства 500na700',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}
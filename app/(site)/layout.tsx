import type { Metadata } from 'next'
// import { Anuphan as Font } from 'next/font/google'
import { Andika as Font } from 'next/font/google'
// import { Abel as Font } from 'next/font/google'
import '../globals.css'

const font = Font({
  subsets: ['latin'],
  weight: '400'
})

export const metadata: Metadata = {
  title: 'Mohamed Elmesery',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-slate-900 text-white tracking-wide`}>{children}</body>
    </html>
  )
}

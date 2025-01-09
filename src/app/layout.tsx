import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cadmos',
  description: 'Building the future of financial technology',
  metadataBase: new URL('https://cadmos.io'),
  icons: {
    icon: [
      { url: './favicon/favicon.ico' },
      { url: './favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: './favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: './favicon/favicon.png' }
    ],
    apple: [
      { url: './favicon/logo.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      {
        rel: 'android-chrome',
        url: './favicon/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        rel: 'android-chrome',
        url: './favicon/android-chrome-256x256.png',
        sizes: '256x256',
        type: 'image/png'
      },
      {
        rel: 'android-chrome',
        url: './favicon/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ]
  },
  openGraph: {
    title: 'Cadmos',
    description: 'Disintermediating capital markets and cross-border payments globally',
    url: 'https://cadmos.io',
    siteName: 'Cadmos',
    images: [
      {
        url: './favicon/favicon.png',
        width: 1200,
        height: 630,
        alt: 'Cadmos - Disintermediating capital markets and cross-border payments globally',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cadmos',
    description: 'Disintermediating capital markets and cross-border payments globally',
    images: ['./favicon/favicon.png'],
    creator: '@CadmosIO',
  },
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
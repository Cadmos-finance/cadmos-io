import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'               // ①  add this

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
    // ②  organisation schema as a plain object
  const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Cadmos",
  "legalName": "Cadmos Ltd.",
  "url": "https://cadmos.io/",
  "logo": "https://www.cadmos.io/CADMOS-logo-vertical.png",
  "sameAs": [
    "https://cadmos.finance",
    "https://cadmos.io",
    "https://cadmospay.com",
    "https://x.com/CadmosIO",
    "https://www.linkedin.com/company/cadmosam",
    "https://github.com/Cadmos-finance",
    "https://www.youtube.com/@Cadmos_IO",
    "https://www.instagram.com/cadmos.io"
  ],
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "email": "support@cadmos.finance",
      "url": "https://cadmos.finance/contact-us"
    }
  ],
  "foundingDate": "2021-06-01",
  "founders": [
    { "@type": "Person", "name": "Nassib Boueri" }
  ],
  "brand": [
    {
      "@type": "Brand",
      "@id": "https://cadmos.finance/#cadmosFinance",
      "name": "Cadmos Finance",
      "url": "https://cadmos.finance"
    },
    {
      "@type": "Brand",
      "@id": "https://cadmospay.com/#cadmosPay",
      "name": "Cadmos Pay",
      "url": "https://cadmospay.com"
    }
  ]
}
  return (
    <html lang="en">
            <head>
        {/* ③  inject JSON-LD once per page */}
        <Script
          id="org-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
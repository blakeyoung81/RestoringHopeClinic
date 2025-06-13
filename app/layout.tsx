import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Restoring Hope Clinic | Student-Led Healthcare at 7Hills | Launching August 2025',
  description: 'Restoring Hope Clinic is a revolutionary nonprofit healthcare initiative launching August 2025 at 7Hills Homeless Center in Fayetteville, AR. Our student-led, physician-mentored model provides comprehensive medical, dental, and mental health services while addressing housing insecurity through integrated care.',
  keywords: [
    'homeless healthcare',
    'Fayetteville Arkansas',
    '7Hills Homeless Center',
    'student-led clinic',
    'medical student training',
    'UAMS partnership',
    'Alice Walton School of Medicine',
    'Washington Regional Medical Center',
    'integrated healthcare',
    'transitional housing',
    'Northwest Arkansas',
    'free medical care',
    'physician mentored',
    'healthcare innovation',
    'community health',
    'medical education',
    'sustainable healthcare',
    'August 2025 launch'
  ],
  authors: [{ name: 'Restoring Hope Clinic' }],
  creator: 'Restoring Hope Clinic',
  publisher: 'Restoring Hope Clinic',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://restoringhopeclinic.org'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Restoring Hope Clinic | Student-Led Healthcare at 7Hills',
    description: 'Revolutionary nonprofit healthcare initiative launching August 2025 at 7Hills Homeless Center. Student-led, physician-mentored care addressing healthcare and housing together.',
    url: 'https://restoringhopeclinic.org',
    siteName: 'Restoring Hope Clinic',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Restoring Hope Clinic - Student-Led Healthcare at 7Hills',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Restoring Hope Clinic | Student-Led Healthcare at 7Hills',
    description: 'Revolutionary nonprofit healthcare launching August 2025 at 7Hills Homeless Center. Student-led, physician-mentored integrated care.',
    images: ['/twitter-image.jpg'],
    creator: '@RestoringHopeAR',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0ea5e9" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Restoring Hope Clinic" />
        <meta name="application-name" content="Restoring Hope Clinic" />
        <meta name="msapplication-TileColor" content="#0ea5e9" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-white dark:bg-gray-900">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
} 
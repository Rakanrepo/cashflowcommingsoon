import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CashFlow.sa - Coming Soon',
  description: 'Revolutionizing financial management in Saudi Arabia. Stay tuned for the future of cash flow management.',
  keywords: 'cash flow, financial management, Saudi Arabia, fintech, business solutions',
  authors: [{ name: 'CashFlow.sa' }],
  openGraph: {
    title: 'CashFlow.sa - Coming Soon',
    description: 'Revolutionizing financial management in Saudi Arabia',
    url: 'https://cashflow.sa',
    siteName: 'CashFlow.sa',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CashFlow.sa - Coming Soon',
    description: 'Revolutionizing financial management in Saudi Arabia',
  },
  robots: {
    index: true,
    follow: true,
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

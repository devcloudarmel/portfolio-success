import type { Metadata } from 'next'
import './globals.css'
import { Inter, Calistoga } from 'next/font/google'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const calistoga = Calistoga({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: '400',
})

export const metadata: Metadata = {
  title: 'DCA - Build something great!',
  description: 'This is my official website',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'bg-gray-900 text-white antialiased font-sans',
          inter.variable,
          calistoga.variable
        )}
      >
        {children}
      </body>
    </html>
  )
}

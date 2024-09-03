
import type { Metadata } from 'next'
import { Inter, Lexend } from 'next/font/google'
import './globals.css'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'


const lexend = Lexend({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  return (
    <html lang="en">
      <body className={`${lexend.className} bg-gray-100/30`}>
        <div className="flex">
          <Sidebar />
          <div className="flex-1">
            <Header />
            <main>{children}</main>
          </div>
        </div>
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import './dist/css/main.css'
import Header from './components/headers/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <div className="body-container w-full md:w-10/12 mx-auto  ">
       <Header/>
        {children}
        </div>
      </body>
    </html>
  )
}

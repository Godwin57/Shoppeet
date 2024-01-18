import type { Metadata } from 'next'
import Header from '@/components/Header'
import "./globals.css"
import { Roboto } from 'next/font/google'
 
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Shoppeet",
  description: 'Your leading e-commerce platform to buy quality and cherishable goods',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header/>
        <div className='mt-10'>{children}</div>
        </body>
    </html>
  )
}

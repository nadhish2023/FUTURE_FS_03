import type { Metadata } from 'next'
import './globals.css'
import Footer from './components/layout/Footer';

export const metadata: Metadata = {
  title: 'BMW M Sport | The Apex of Performance',
  description: 'An immersive showcase of BMW M Series, where design meets relentless power.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans bg-base-dark">
        
        <div className="relative z-0">
          <main>{children}</main>
          <Footer />
        </div>

        <div className="fixed bottom-0 left-0 w-full h-1.5 flex z-50">
          <div className="w-1/3 h-full bg-bmw-light-blue"></div>
          <div className="w-1/3 h-full bg-bmw-dark-blue"></div>
          <div className="w-1/3 h-full bg-bmw-red"></div>
        </div>
      </body>
    </html>
  )
}
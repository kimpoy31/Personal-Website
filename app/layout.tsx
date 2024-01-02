import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ChakraComponentProvider } from './ChakraUi/providers'
import { ColorModeScript } from '@chakra-ui/react'
import theme from './ChakraUi/theme'

// Components
import Navbar from './Navbar/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kim Harold',
  description: 'Personal Website of Kim.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <ChakraComponentProvider>

          <Navbar />
          {children}
          
        </ChakraComponentProvider>
      </body>
    </html>
  )
}

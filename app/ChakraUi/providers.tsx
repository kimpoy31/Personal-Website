// app/providers.tsx
'use client'

import { ChakraProvider, createLocalStorageManager } from '@chakra-ui/react'
import theme from './theme'

export function ChakraComponentProvider({ children }: { children: React.ReactNode }) {
  

  return (
    <ChakraProvider theme={theme}>
      {children}
    </ChakraProvider> 
  )
}
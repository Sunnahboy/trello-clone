// src/app/providers.tsx
'use client'

import React, { useEffect, useState } from 'react'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../theme'

export function Providers({ children }: { children: React.ReactNode }) {
  // This prevents hydration errors by only rendering on the client
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    // Return a placeholder with the same structure to avoid layout shifts
    return <div style={{ visibility: 'hidden' }}>{children}</div>
  }

  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        {children}
      </ChakraProvider>
    </CacheProvider>
  )
}
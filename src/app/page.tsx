'use client'

import { Box } from '@chakra-ui/react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <Box minH="100vh">
      <Navbar />
      <Hero />
    </Box>
  )
}
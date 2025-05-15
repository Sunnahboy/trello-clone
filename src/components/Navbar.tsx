'use client'

import {
  Box,
  Flex,
  Button,
  HStack,
  Image,
  Link,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  VStack,
  Container,
} from '@chakra-ui/react'
import NextLink from 'next/link'

// Simple hamburger icon component
const HamburgerIcon = () => (
  <Box>
    <Box as="span" display="block" w="24px" h="2px" bg="currentColor" mb="5px" />
    <Box as="span" display="block" w="24px" h="2px" bg="currentColor" mb="5px" />
    <Box as="span" display="block" w="24px" h="2px" bg="currentColor" />
  </Box>
)

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box as="nav" py={4} px={{ base: 4, md: 8 }} bg="white">
      <Container maxW="1200px">
        <Flex justify="space-between" align="center">
          {/* Logo with Atlassian */}
          <Flex align="center">
            <NextLink href="/" passHref>
              <Flex align="center">
                <Image 
                  src="/images/logos/atlassian-logo.svg"
                  alt="Atlassian Logo"
                  h="20px"
                  mr={2}
                />
                <Image 
                  src="/images/logos/trello-logo-blue.svg"
                  alt="Trello Logo"
                  h="24px"
                />
              </Flex>
            </NextLink>
          </Flex>

          {/* Desktop Menu */}
          <HStack spacing={6} display={{ base: "none", md: "flex" }}>
            <Box position="relative">
              <Link href="#" fontSize="sm" fontWeight="medium" color="gray.700" _hover={{ color: "brand.500" }}>
                Features ▾
              </Link>
            </Box>
            <Box position="relative">
              <Link href="#" fontSize="sm" fontWeight="medium" color="gray.700" _hover={{ color: "brand.500" }}>
                Solutions ▾
              </Link>
            </Box>
            <Box position="relative">
              <Link href="#" fontSize="sm" fontWeight="medium" color="gray.700" _hover={{ color: "brand.500" }}>
                Plans ▾
              </Link>
            </Box>
            <Link href="#" fontSize="sm" fontWeight="medium" color="gray.700" _hover={{ color: "brand.500" }}>
              Pricing
            </Link>
            <Box position="relative">
              <Link href="#" fontSize="sm" fontWeight="medium" color="gray.700" _hover={{ color: "brand.500" }}>
                Resources ▾
              </Link>
            </Box>
          </HStack>

          {/* Right side buttons */}
          <HStack spacing={4}>
            <NextLink href="/login" passHref>
              <Button variant="ghost" colorScheme="gray" fontWeight="medium">
                Log in
              </Button>
            </NextLink>
            <NextLink href="/signup" passHref>
              <Button 
                bg="brand.500" 
                color="white" 
                _hover={{ bg: "brand.600" }}
                fontWeight="medium"
                px={6}
              >
                Get Trello for free
              </Button>
            </NextLink>
            
            {/* Mobile Menu Button */}
            <IconButton
              aria-label="Open menu"
              icon={<HamburgerIcon />}
              display={{ base: "flex", md: "none" }}
              onClick={onOpen}
              variant="ghost"
              size="sm"
            />
          </HStack>

          {/* Mobile Menu Drawer */}
          <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="full">
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerBody mt={12} px={6}>
                <VStack align="start" spacing={6}>
                  <Link fontWeight="medium" fontSize="lg" color="gray.700">Features</Link>
                  <Link fontWeight="medium" fontSize="lg" color="gray.700">Solutions</Link>
                  <Link fontWeight="medium" fontSize="lg" color="gray.700">Plans</Link>
                  <Link fontWeight="medium" fontSize="lg" color="gray.700">Pricing</Link>
                  <Link fontWeight="medium" fontSize="lg" color="gray.700">Resources</Link>
                  <Box pt={6} pb={6} w="full" borderTopWidth="1px" borderBottomWidth="1px">
                    <Button 
                      w="full" 
                      bg="brand.500" 
                      color="white" 
                      _hover={{ bg: "brand.600" }}
                      mb={4}
                    >
                      Get Trello for free
                    </Button>
                    <Button 
                      w="full" 
                      variant="outline" 
                      borderColor="gray.300"
                    >
                      Log in
                    </Button>
                  </Box>
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Flex>
      </Container>
    </Box>
  )
}
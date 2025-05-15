'use client'

import {
  Box,
  Heading,
  Text,
  Button,
  Input,
  Flex,
  Link,
  Image,
  Container,
  FormControl,
} from '@chakra-ui/react'

export default function Hero() {
  return (
    <Box bg="blue.50" py={{ base: 12, md: 16 }} overflow="hidden">
      <Container maxW="1200px">
        <Flex
          direction={{ base: "column", md: "row" }}
          align={{ base: "flex-start", md: "center" }}
          justify="space-between"
        >
          {/* Left Side Content */}
          <Box 
            maxW={{ base: "100%", md: "45%" }} 
            pr={{ base: 0, md: 10 }}
            mb={{ base: 10, md: 0 }}
            mt={{ base: 4, md: 0 }}
          >
            <Heading
              as="h1"
              fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
              fontWeight="bold"
              lineHeight="1.2"
              mb={6}
              color="gray.900"
            >
              Capture, organize, and tackle your to-dos from anywhere.
            </Heading>

            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="gray.700"
              mb={8}
            >
              Escape the clutter and chaos—unleash your productivity with Trello.
            </Text>

            <FormControl mb={4} maxW="450px">
              <Flex 
                direction={{ base: "column", sm: "row" }}
                width="100%"
                mb={4}
              >
                <Input
                  placeholder="Email"
                  bg="white"
                  borderColor="gray.300"
                  borderRadius="md"
                  size="md"
                  mr={{ base: 0, sm: 2 }}
                  mb={{ base: 2, sm: 0 }}
                  _focus={{ borderColor: "brand.500" }}
                  p={6}
                />
                <Button
                  bg="brand.500"
                  color="white"
                  _hover={{ bg: "brand.600" }}
                  size="lg"
                  flexShrink={0}
                  width={{ base: "100%", sm: "auto" }}
                  p={6}
                >
                  Sign up - it's free!
                </Button>
              </Flex>
              
              <Text fontSize="xs" color="gray.600">
                By entering my email, I acknowledge the{" "}
                <Link color="blue.500" href="#" fontWeight="medium">
                  Atlassian Privacy Policy
                </Link>
              </Text>
            </FormControl>

            <Link 
              color="blue.500" 
              fontSize="sm" 
              fontWeight="medium" 
              href="#" 
              display="flex"
              alignItems="center"
              mt={10}
            >
              Watch video{" "}
              <Box 
                as="span" 
                ml={1} 
                color="blue.500" 
                fontSize="md"
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                bg="blue.100"
                w="18px"
                h="18px"
                borderRadius="full"
              >
                ▶
              </Box>
            </Link>
          </Box>

          {/* Right Side Image */}
          <Box
            maxW={{ base: "100%", md: "55%" }}
            position="relative"
          >
            <Image
              src="/images/hero/trello-mobile-app.png"
              alt="Trello mobile app with cards"
              w="full"
              h="auto"
              objectFit="contain"
            />
            
            {/* Background colored shapes */}
            <Box
              position="absolute"
              bottom="-10%"
              right="5%"
              width="70%"
              height="40%"
              bg="#9D8FEF" // Purple
              transform="rotate(-15deg)"
              opacity="0.6"
              zIndex="-1"
            />
            <Box
              position="absolute"
              bottom="-5%"
              right="15%"
              width="60%"
              height="30%"
              bg="#FF9F30" // Orange
              transform="rotate(-10deg)"
              opacity="0.6"
              zIndex="-2"
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}
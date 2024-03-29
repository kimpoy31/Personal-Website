import { Container, HStack, Heading, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { LuSquareCode } from "react-icons/lu";
import ColorModeToggle from './ColorModeToggle';

const Navbar = () => {
  return (
    <Container maxW="xxl" py={{base:"3",md:"4"}} px={{base:"2", md:"16"}} position="fixed" bg="inherit" zIndex="99"> 
        <HStack justify="space-between">
            <Link href="/">
                <HStack gap="0">
                    <Text fontSize="lg" as="b">KHP</Text>
                    <LuSquareCode size="24" />
                </HStack>
            </Link>
            <ColorModeToggle />
        </HStack>
    </Container>
  )
}

export default Navbar
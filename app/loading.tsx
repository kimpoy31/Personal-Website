import { Box, Button, Card, CardBody, Container, Heading, Img, Spinner, Text, VStack } from '@chakra-ui/react'
import Link from 'next/link';
import React from 'react'
import { IoMdArrowRoundBack } from "react-icons/io";

const loading = () => {
  return (
    <Container maxW="xxx-large" height="100vh" display='flex' justifyContent="center">
        <Box pt={{base:"4rem", md:"0"}} width={{base:"100%", md:"50%"}} display="flex" justifyContent="center" alignItems="center">
        <Spinner
            thickness='4px'
            speed='1s'
            emptyColor='gray.200'
            color='red.500'
            size='xl'
        />
        </Box>
    </Container>
  )
}

export default loading
import { Box, Button, Card, CardBody, Container, Heading, Img, Show, Text, VStack } from '@chakra-ui/react'
import Link from 'next/link';
import React from 'react'
import { IoMdArrowRoundBack } from "react-icons/io";

const NotFoundPage = () => {
  return (
    <Container maxW="xxx-large" height="100vh" display='flex' justifyContent="end">
        <Box pt={{base:"4rem", md:"0"}} width={{base:"100%", md:"50%"}} display="flex" justifyContent="center" alignItems={{base:"start",md:"center"}}>
            <Box>
                <Text fontSize={{base:"6vw", md:"3vw"}}>Oops!</Text>
                <VStack justify="center">
                    <Heading fontSize={{base:"45vw", md:"25vw"}} lineHeight=".8">404</Heading>
                    <Text fontSize={{base:"8vw", md:"4vw"}}>Page not found</Text>
                    <Link href="/">
                        <Button 
                            leftIcon={<IoMdArrowRoundBack />} 
                            colorScheme='red' 
                            variant='solid'
                        >Back to Homepage</Button>
                    </Link>
                </VStack>
            </Box>
        </Box>
        <Box position="absolute" left="0" bottom="0" zIndex="-1">
            <Img src='/frog.png' maxH={{base:"380px", md:"500px"}} />
        </Box>
    </Container>
  )
}

export default NotFoundPage
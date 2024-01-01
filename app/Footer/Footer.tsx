import { Box, Button, Card, CardBody, Center, Container, Divider, Text } from '@chakra-ui/react'
import Link from 'next/link';
import React from 'react'
import { FaQuoteLeft, FaInstagram, FaFacebookF,FaGithub,FaLinkedinIn  } from "react-icons/fa";


const Footer = () => {
    const socials = [
        {href:"https://www.facebook.com/kimharold.pinanonang/" ,icon: <FaFacebookF size="18" />, },
        {href:"https://www.instagram.com/notkimmpoy/" ,icon: <FaInstagram size="18" />},
        {href:"https://github.com/kimpoy31" ,icon: <FaGithub  size="18" />},
        {href:"https://www.linkedin.com/in/kim-harold-pinanonang-a2ab8b280/" ,icon: <FaLinkedinIn  size="18" />},
    ]

  return (
    <Container 
    maxW="full" 
    bg="RGBA(0, 0, 0, 0.08)" 
    px={{base:"2", md:"16"}}
    py="8"
    centerContent
    display="flex"
    flexDirection="column"
    gap="2"
    >
        <Box display='flex' gap="2" maxW="full">
            {socials.map((social,index) => 
                <Link href={social.href} key={index} target='_blank'>
                    <Button variant="outline" color="tomato" size="sm" >
                        {social.icon}
                    </Button>
                </Link>
            )}
            <Text></Text>
        </Box>
        <Text color="gray">Follow me on my socials!</Text>
        <Divider />
        <Box alignSelf="start">
            <Text color="gray" fontSize="small">Created with: Nextjs,Typescript, and ChakraUi  </Text>
            <Text color="gray" fontSize="small">Created by: <Text as={"span"} color="tomato" >Kim Harold Pinanonang ©</Text></Text>
        </Box>
    </Container>
  )
}

export default Footer
import { Box, Button, Divider, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { FaQuoteLeft, FaInstagram, FaFacebookF,FaGithub,FaLinkedinIn  } from "react-icons/fa";

const Credentials = () => {
    const socials = [
        {href:"https://www.facebook.com/kimharold.pinanonang/" ,icon: <FaFacebookF size="18" />, },
        {href:"https://www.instagram.com/notkimmpoy/" ,icon: <FaInstagram size="18" />},
        {href:"https://github.com/kimpoy31" ,icon: <FaGithub  size="18" />},
        {href:"https://www.linkedin.com/in/kim-harold-pinanonang-a2ab8b280/" ,icon: <FaLinkedinIn  size="18" />},
    ]

  return (
    <Box 
        display="flex" 
        flexDirection={{base:"column", md:"row"}}
        justifyContent="space-between" 
        gap="2rem" 
        w="full" 
        px={{base:"2", md:"16"}}
        mt="2rem"
    >
        <Box maxW="450px">
            <FaQuoteLeft size="36" />
            <Text mt="5" fontSize="large">
                Im a Web Developer with a Bachelors Degree in Information Technology.
                My expertise is creating and maintaining websites using NextJs.
            </Text>
        </Box>
        <Box display="flex" flexDirection="column" alignItems={{base:"start", md:"end"}} >
            <Heading color="tomato">Hire Me</Heading>
            <Text>Follow me on my socials</Text>
            <Divider mb="2" />
            <Box display="flex" gap="1">
                {socials.map((social,index) => 
                <Button variant="outline" color="tomato" key={index}>
                    {social.icon}
                </Button>
                )}
            </Box>
        </Box>
    </Box>
  )
}

export default Credentials
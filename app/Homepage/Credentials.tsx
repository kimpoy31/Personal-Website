import { Box, Button, Divider, HStack, Heading, Highlight, Stack, Text, Tooltip, VStack } from '@chakra-ui/react'
import Link from 'next/link';
import React from 'react'
import { FaQuoteLeft, FaInstagram, FaFacebookF,FaGithub,FaLinkedinIn  } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Credentials = () => {
    const socials = [
        {href:"https://www.facebook.com/kimharold.pinanonang/" ,icon: <FaFacebookF size="18" />, },
        {href:"https://www.instagram.com/notkimmpoy/" ,icon: <FaInstagram size="18" />},
        {href:"https://github.com/kimpoy31" ,icon: <FaGithub  size="18" />},
        {href:"https://www.linkedin.com/in/kim-harold-pinanonang-a2ab8b280/" ,icon: <FaLinkedinIn  size="18" />},
    ]

    const sendEmail = () => {
    const email = 'pinanonangkim000@gmail.com'; // Replace with your actual email address
    const subject = 'Hiring Request for Kim Harold';
    const body = '';

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, '_blank');
    }

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
                I create blazingly fast websites! using latest technologies
                like NextJs, TypeScript, TailwindCss, and More!
            </Text>
        </Box>
        <Box display="flex" flexDirection="column" alignItems={{base:"start", md:"end"}} >
            <HStack flexDirection={{base:"row-reverse", md:"row"}}>
                <Tooltip label="pinanonangkim000@gmail.com" aria-label='A tooltip'>
                    <Button 
                        rightIcon={<SiGmail />} 
                        colorScheme='red' 
                        variant='solid' 
                        onClick={()=>sendEmail()}
                    >Email</Button>
                </Tooltip>
                <Heading color="tomato">Hire Me</Heading>
            </HStack>
            <Text>Follow me on my socials</Text>
            <Divider mb="2" />
            <Box display="flex" gap="1">
                {socials.map((social,index) => 
                <Link key={index} href={social.href} target='_blank'>
                    <Button variant="outline" color="tomato">
                        {social.icon}
                    </Button>
                </Link>
                )}
            </Box>
        </Box>
    </Box>
  )
}

export default Credentials
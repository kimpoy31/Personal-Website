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

    const openResume = () => {
        const pdfUrl = "/resume.pdf";
        window.open(pdfUrl, '_blank');
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
            <Box display="flex" flexDirection={{base:"column-reverse", md:"row"}} alignItems={{base:"start", md:"center"}}>
                <Stack direction="row" gap='2' mx={{base:"0", md:"2"}}>
                    <Tooltip label="pinanonangkim000@gmail.com" aria-label='A tooltip'>
                        <Button 
                            rightIcon={<SiGmail />} 
                            colorScheme='red' 
                            variant='solid' 
                            onClick={()=>sendEmail()}
                            size="sm"
                        >Email</Button>
                    </Tooltip>
                    <Tooltip label="Resume" aria-label='A tooltip'>
                        <Button 
                            colorScheme='red' 
                            variant='link' 
                            onClick={()=>openResume()}
                            size="sm"
                        >Resume</Button>
                    </Tooltip>
                </Stack>
                <Box>
                    <Heading color="tomato">Hire&nbsp;Me</Heading>
                </Box> 
            </Box>
            <Divider my="2" />
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
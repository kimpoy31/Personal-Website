import { Box, Img } from '@chakra-ui/react'
import React from 'react'

const AboutImg = () => {
  return (
    <Box 
        display="flex"
        justifyContent="center"
        position="relative"
        w={{base:"100%", md:"300px"}} 
        overflow="hidden"
        borderRadius="2rem"
    >
        <Img src='/pp2.png' zIndex="3"/>
        <Box 
            bg="tomato" 
            width={{base:"300px", md:"300px", sm:"400px"}}
            height={{base:"300px", md:"300px", sm:"400px"}}
            position="absolute"
            left="-5rem"
            top="-8rem"
            borderRadius="full"
            zIndex="-1"
        ></Box>
        <Box 
            bg="tomato" 
            width={{base:"300px", md:"300px", sm:"400px"}}
            height={{base:"300px", md:"300px", sm:"400px"}}
            position="absolute"
            right="-8rem"
            bottom="-5rem"
            borderRadius="full"
            zIndex="-1"
        ></Box>
    </Box>
  )
}

export default AboutImg
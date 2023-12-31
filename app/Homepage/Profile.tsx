import { Box, Img } from '@chakra-ui/react'
import React from 'react'

const Profile = () => {
  return (
    <Box
     position="absolute" 
     bottom="0"
     display="flex" 
     alignItems="end" 
     justifyContent="center" 
     w="full"
     overflow="hidden"
    >
        <Box 
            w="500px" 
            height="500px" 
            bg="tomato" 
            position="absolute"
            zIndex="-1"
            borderRadius="full"
            top="50%"
        >
        </Box>

        <Box>
        <Img 
            src={"/pp.png"} 
            alt='Profile'
            zIndex="2"
            maxW={{base:"280px", md:"400px"}}
        />
        </Box>
    </Box>
  )
}

export default Profile
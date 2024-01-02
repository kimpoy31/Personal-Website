import { Box, Card, CardBody, Container, HStack, Heading, Img, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import AboutImg from './AboutImg'
import Credentials from './Credentials'

const About = () => {
  return (
    <Container 
      maxW="full" 
      py="6" 
      px={{base:"2", md:"16"}}
      bg="blackAlpha.200" 
    >
        <Heading fontSize="xxx-large" mb="6">About Me</Heading>
        <Box display="flex" gap="2" maxW="full" flexDirection={{base:"column-reverse", md:"row"}}>
          <AboutImg />
          <Box width={{base:"100%", md:"calc(100% - 300px)"}} display="flex" flexDirection="column" gap="4" mb="4">
            <Card>
              <CardBody>
                <Text fontSize="lg" as="b" color="tomato">Education</Text>
                <Text fontSize="sm">Bachelor of Science in Information Technology</Text>
                <Text fontSize="sm">Negros Oriental State University, BSC</Text>
                <Text fontSize="sm">Graduated: <Text as="b">June , 2023</Text></Text>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <Text fontSize="lg" as="b" color="tomato">Leadership Experience</Text>
                <Text fontSize="sm">Philippines I Transform! Young Leaders Convention</Text>
                <Text fontSize="sm">Teachers Camp, Baguio City</Text>
                <Text fontSize="sm">Year: <Text as="b">2022</Text></Text>
              </CardBody>
            </Card>
          </Box>
        </Box>
    </Container>
  )
}

export default About
"use client"
import { Box, Container, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import Profile from './Profile'
import Credentials from './Credentials'

const Homepage = () => {
  return (
    <Container maxW="xxl" display="flex" flexDirection="column">
        <Box w="full" display="flex" flexDirection='column' alignItems="center">
          <Heading fontSize="10vw">Im <Text as="span" color='tomato'>Kim</Text>,</Heading>
          <Heading fontSize="12vw">Web Developer</Heading>
        </Box>
        <Credentials />
        <Profile />
    </Container>
  )
}

export default Homepage
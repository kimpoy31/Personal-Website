"use client"
import { Container, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import Profile from './Profile'
import Credentials from './Credentials'

const Homepage = () => {
  return (
    <Container maxW="xxl" centerContent height="92.2vh" display="flex">
        <Heading fontSize="10vw">Im <Text as="span" color='tomato'>Kim</Text>,</Heading>
        <Heading fontSize="12vw">Web Developer</Heading>
        <Credentials />
        <Profile />
    </Container>
  )
}

export default Homepage
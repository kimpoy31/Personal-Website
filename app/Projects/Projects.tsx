import { Badge, Box, Button, Card, CardBody, CardFooter, Container, Heading, Image, Stack, Text, VStack } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { TiArrowBack  } from "react-icons/ti";

const Projects = () => {
  return (
    <Container pt="2rem" pb="4rem" maxW="full" px={{base:"2", md:"16"}} bg="blackAlpha.200" >
        <Heading fontSize="xxx-large" mb="6">Projects</Heading>
        <Container maxW="full" centerContent>
            <Card
                direction={{ base: 'column', lg: 'row' }}
                overflow='hidden'
                variant='outline'
                size={{base:"sm", md:"lg"}}
            >
                <CardBody>
                    <Link href="https://issue-tracker-v2.vercel.app/" target='_blank' className="shadow-lg">
                        <Image
                            objectFit='cover'
                            maxW={{ base: '100%', md:'300px' }}
                            src='/issue-tracker.png'
                            alt='Caffe Latte'
                        />
                    </Link>
                </CardBody>
                <CardFooter>
                    <VStack align="start">
                        <Link href="https://issue-tracker-v2.vercel.app/" target='_blank' className="underline underline-offset-2 flex">
                            <Text fontSize="x-large" as="b">Issue-Tracker</Text>
                            <TiArrowBack size="18" />
                        </Link>
                        <Text>
                            Issue-Tracker: Streamline your web development workflow with
                            this essential platform. Log, prioritize, and collaborate on
                            tasks, bugs, and feature requests in real-time. Stay organized
                            and boost productivity in your projects.
                        </Text>
                        <Text fontSize="xs" color='tomato'>Created with:</Text>
                        <Box display="flex" flexWrap="wrap" gap="1">
                        {tools.map(tool => 
                            <Badge key={tool} variant='subtle'>{tool}</Badge>
                        )}
                        </Box>
                    </VStack>
                </CardFooter>
            </Card>
        </Container>
    </Container>
  )
}

const tools = [
    "NextJs","Typescript","Prisma","MySql","TailwindCss","RadixUi","Zod","Hot-Toast","SimpleMDE",
]

export default Projects
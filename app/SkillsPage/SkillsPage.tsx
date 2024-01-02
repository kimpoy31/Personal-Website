import { Badge, Box, Card, CardBody, Container, Grid, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { TbBrandNextjs,TbBrandTypescript,TbBrandMysql } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { SiPrisma,SiZod,SiExpress,SiChakraui , SiMui,SiTailwindcss,SiRadixui,SiDaisyui,SiPhp,SiJquery,SiAdobephotoshop  } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { BiLogoMongodb } from "react-icons/bi";

const SkillsPage = () => {
  return (
    <Container pt="2rem" pb="6rem" maxW="full" px={{base:"2", md:"16"}}>
      <Heading fontSize="xxx-large" mb="6">Skills</Heading>
      <Box
        display="flex"
        gap="4"
        flexWrap="wrap"
        justifyContent="center"
      >
        {skills.map((skill,index) => 
            <Card key={index} w="130px" variant="elevated">
              <CardBody display="flex" flexDirection="column" alignItems="center" gap="4">
                {skill.icon}
                <Text>{skill.label}</Text>
                <Badge colorScheme={skill.color} size="large">{skill.rating}</Badge>
              </CardBody>
            </Card>
        )}
      </Box>
    </Container>
  )
}

const skills = [
  {
      icon: <TbBrandNextjs size="48" />, 
      label: "NextJs", 
      rating: "intermediate",
      color: "purple",
  },
  {
      icon: <FaReact size="48" />, 
      label: "ReactJs", 
      rating: "intermediate",
      color: "purple",
  },
  {
      icon: <TbBrandTypescript size="48" />, 
      label: "Typescript", 
      rating: "intermediate",
      color: "purple",
  },
  {
      icon: <IoLogoJavascript size="48" />, 
      label: "Javascript", 
      rating: "advanced",
      color: "red",
  },
  {
      icon: <SiExpress size="48" />, 
      label: "ExpressJs", 
      rating: "intermediate",
      color: "purple",
  },
  {
      icon: <SiJquery size="48" />, 
      label: "JQuery", 
      rating: "beginner",
      color: "blue",
  },
  {
      icon: <SiPhp size="48" />, 
      label: "Php", 
      rating: "beginner",
      color: "blue",
  },
  {
      icon: <SiPrisma size="48" />, 
      label: "Prisma", 
      rating: "intermediate",
      color: "purple",
  },
  {
      icon: <BiLogoMongodb size="48" />, 
      label: "MongoDb", 
      rating: "intermediate",
      color: "purple",
  },
  {
      icon: <TbBrandMysql size="48" />, 
      label: "MySql", 
      rating: "intermediate",
      color: "purple",
  },
  {
      icon: <SiZod size="48" />, 
      label: "Zod", 
      rating: "intermediate",
      color: "purple",
  },
  {
      icon: <SiTailwindcss size="48" />, 
      label: "TailwindCss", 
      rating: "advanced",
      color: "red",
  },
  {
      icon: <SiChakraui size="48" />, 
      label: "ChakraUi", 
      rating: "advanced",
      color: "red",
  },
  {
      icon: <SiMui size="48" />, 
      label: "MUi", 
      rating: "beginner",
      color: "blue",
  },
  {
      icon: <SiRadixui size="48" />, 
      label: "RadixUi", 
      rating: "intermediate",
      color: "purple",
  },
  {
      icon: <SiDaisyui  size="48" />, 
      label: "DaisyUi", 
      rating: "advanced",
      color: "red",
  },
  {
      icon: <SiAdobephotoshop  size="48" />, 
      label: "Photoshop", 
      rating: "advanced",
      color: "red",
  },
]

export default SkillsPage
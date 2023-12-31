"use client"
import React from 'react'
import { Button, useColorMode } from "@chakra-ui/react";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

const ColorModeToggle = () => {
    const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Button onClick={toggleColorMode} size="sm" >
        {colorMode === 'light' ? <MdDarkMode /> : <MdLightMode />}
    </Button>
  )
}

export default ColorModeToggle
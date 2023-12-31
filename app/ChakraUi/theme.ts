import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import '@fontsource/bungee';
import '@fontsource/righteous';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

// 3. extend the theme
const theme = extendTheme({
   config,
   fonts: {
    // heading: `'Bungee', sans-serif`,
    heading: `'Righteous', sans-serif`,
  },
})

export default theme
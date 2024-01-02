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
  colors:{
    blackAlpha: {
      200: "RGBA(0, 0, 0, 0.08)",
    }
  }
})

export default theme
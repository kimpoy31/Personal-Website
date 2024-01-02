import { AbsoluteCenter, Box, Divider } from "@chakra-ui/react";
import Footer from "./Footer/Footer";
import Homepage from "./Homepage/Homepage";
import Projects from "./Projects/Projects";
import SkillsPage from "./SkillsPage/SkillsPage";
import About from "./About/About";

export default function Home() {
   return (
    <>
      <Homepage />
      <About />
      <SkillsPage />
      <Projects />
      <Footer />
    </>
  )
}

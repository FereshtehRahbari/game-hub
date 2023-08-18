import { HStack, Image, Text } from "@chakra-ui/react"
import logo from "../assets/Logo.webp"


const NavBar = () => {
  return (

    <HStack>
      <Image src={logo} boxSize='150px'></Image>
      <Text>Welcome to FreshMazzeh</Text>
    </HStack>
  )
}

export default NavBar
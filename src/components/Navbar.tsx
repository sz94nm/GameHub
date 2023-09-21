import { HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo.webp";
const Navbar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize={"50px"} />
      <Text>Navbar</Text>
    </HStack>
  );
};

export default Navbar;

import { HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
const Navbar = () => {
  return (
    <HStack justifyContent={"space-between"} padding={"8px"}>
      <Image src={logo} boxSize={"50px"} />
      <Text>Navbar</Text>
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;

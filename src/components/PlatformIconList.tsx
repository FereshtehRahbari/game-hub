import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon } from "@chakra-ui/react";
import { platform } from "../hooks/useGames";
import { IconType } from "react-icons";


interface Props {
  platforms: platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const IconMap:{[key:string]: IconType}={
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios:MdPhoneIphone,
    android: FaAndroid,
    web:BsGlobe
  }
  return (
    <HStack margin={1}>
      {platforms.map((platform) => (
        <Icon as={IconMap[platform.slug]} color='gray.500'/>

      ))}
    </HStack>
  );
};

export default PlatformIconList;

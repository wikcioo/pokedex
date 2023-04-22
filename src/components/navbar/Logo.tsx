import { Image } from "@chakra-ui/react";
import logo from "../../assets/img/logo.webp";

const Logo = () => {
  return <Image rounded={5} boxSize={50} src={logo} mr={3} />;
};

export default Logo;

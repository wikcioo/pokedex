import { Button, Flex, HStack } from "@chakra-ui/react";
import SearchBar from "./SearchBar";
import Logo from "./Logo";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Flex dir="column" justifyContent="space-between" m={3}>
      <HStack>
        <Logo />
        <SearchBar />
      </HStack>
      <HStack mr={20}>
        <Link to="/about">
          <Button>About</Button>
        </Link>
      </HStack>
    </Flex>
  );
};

export default NavBar;

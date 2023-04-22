import { Box, HStack } from "@chakra-ui/react";
import SearchBar from "./SearchBar";
import Logo from "./Logo";

const NavBar = () => {
  return (
    <Box m={3}>
      <HStack>
        <Logo />
        <SearchBar />
      </HStack>
    </Box>
  );
};

export default NavBar;

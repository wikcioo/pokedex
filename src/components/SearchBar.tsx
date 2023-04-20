import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

const SearchBar = () => {
  return (
    <InputGroup width="400px">
      <InputLeftElement pointerEvents="none">
        <SearchIcon color="gray.300" />
      </InputLeftElement>
      <Input type="text" placeholder="Search for pokemon..." />
    </InputGroup>
  );
};

export default SearchBar;

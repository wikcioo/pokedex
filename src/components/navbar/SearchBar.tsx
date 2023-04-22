import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  List,
  ListItem,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import {
  fetchGenericApiResponse,
  fetchGenericApiResponseCountOfResults,
} from "../../services/fetchGenericResult";
import PokemonModal from "../PokemonModal";
import fetchPokemon from "../../services/fetchPokemon";
import { Pokemon } from "../../models/Pokemon";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [searchedPokemon, setSearchedPokemon] = useState<Pokemon>();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const listRef = useRef<HTMLDivElement>(null);
  const searchBarRef = useRef<HTMLInputElement>(null);
  const listItemBg = useColorModeValue("white", "gray.800");
  const listItemHoverBg = useColorModeValue("gray.50", "gray.700");

  const handleSearch = async (event: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);

    if (searchTerm.length === 0) {
      setSearchResults([]);
      return;
    }

    const count = await fetchGenericApiResponseCountOfResults("/pokemon");
    const response = await fetchGenericApiResponse("/pokemon?limit=" + count);
    setSearchResults(
      response.data.results
        .filter((result) => result.name.includes(searchTerm))
        .map((result) => result.name)
    );
  };

  const handleSearchResultClick = async (item: string) => {
    setSearchedPokemon(undefined);
    setSearchTerm(item);
    setSearchResults([]);
    const pokemon = (await fetchPokemon({ names: [item] }))[0];
    setSearchedPokemon(pokemon);
  };

  const handleClickOutsideSearchResult = (event: MouseEvent) => {
    if (
      listRef.current &&
      searchBarRef.current &&
      !listRef.current.contains(event.target as Node) &&
      !searchBarRef.current.contains(event.target as Node)
    ) {
      setSearchResults([]);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutsideSearchResult);
    return () =>
      document.removeEventListener("click", handleClickOutsideSearchResult);
  }, []);

  return (
    <Box position="relative">
      <InputGroup width="400px">
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.300" />
        </InputLeftElement>
        <Input
          type="text"
          value={searchTerm}
          placeholder="Search for pokemon..."
          onChange={handleSearch}
          ref={searchBarRef}
        />
      </InputGroup>
      {searchedPokemon !== undefined && (
        <PokemonModal
          isOpen={isOpen}
          onClose={onClose}
          pokemon={searchedPokemon}
        />
      )}
      {searchResults.length > 0 && (
        <Box
          position="absolute"
          top="50px"
          left="0px"
          zIndex="10"
          border="1px solid gray"
          borderRadius="md"
          maxHeight="400px"
          overflowY="auto"
          ref={listRef}
        >
          <List>
            {searchResults.map((result) => (
              <Box
                key={result}
                p="2"
                bg={listItemBg}
                _hover={{ bg: listItemHoverBg }}
                width="300px"
                cursor="pointer"
                onClick={() => {
                  handleSearchResultClick(result);
                  onOpen();
                }}
              >
                <ListItem>{result}</ListItem>
              </Box>
            ))}
          </List>
        </Box>
      )}
    </Box>
  );
};

export default SearchBar;

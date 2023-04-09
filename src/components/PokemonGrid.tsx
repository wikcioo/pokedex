import { SimpleGrid, Text } from "@chakra-ui/react";
import usePokemon from "../hooks/usePokemon";
import PokemonCard from "./PokemonCard";

const PokemonGrid = () => {
  const { pokemon, error } = usePokemon();

  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={2}
      >
        {error && <Text>{error}</Text>}
        {pokemon.map((p) => (
          <PokemonCard key={p.id} pokemon={p} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default PokemonGrid;

import { SimpleGrid, Text } from "@chakra-ui/react";
import PokemonCard from "./PokemonCard";
import { useEffect, useState } from "react";
import fetchPokemon from "../services/fetchPokemon";
import { Type } from "../models/Type";
import { Pokemon } from "../models/Pokemon";
import fetchTypes from "../services/fetchTypes";

interface Props {
  selectedType: Type | null;
}

const PokemonGrid = ({ selectedType }: Props) => {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);

  useEffect(() => {
    async function fetchData() {
      if (selectedType === null) {
        const result = await fetchPokemon();
        setPokemon(result);
      } else {
        const type = await fetchTypes([selectedType.name]);
        let names: string[] = [];
        type[0].pokemon.forEach((p) => names.push(p.pokemon.name));
        const result = await fetchPokemon(names);
        setPokemon(result);
      }
    }

    fetchData();
  }, [selectedType]);

  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={2}
      >
        {pokemon.map((p) => (
          <PokemonCard key={p.id} pokemon={p} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default PokemonGrid;

import { SimpleGrid } from "@chakra-ui/react";
import PokemonCard from "./PokemonCard";
import { useEffect, useState } from "react";
import fetchPokemon from "../services/fetchPokemon";
import { Type } from "../models/Type";
import { Pokemon } from "../models/Pokemon";
import fetchTypes from "../services/fetchTypes";
import SkeletonCard from "./SkeletonCard";

interface Props {
  offset: number;
  limit: number;
  selectedType: Type | null;
}

const PokemonGrid = ({ offset, limit, selectedType }: Props) => {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      if (selectedType === null) {
        const result = await fetchPokemon({ offset, limit });
        setPokemon(result);
        setIsLoading(false);
      } else {
        const type = await fetchTypes([selectedType.name]);
        let names: string[] = [];
        type[0].pokemon
          .slice(offset, offset + limit)
          .forEach((p) => names.push(p.pokemon.name));
        const result = await fetchPokemon({ names });
        setPokemon(result);
        setIsLoading(false);
      }
    }

    fetchData();
  }, [selectedType, offset, limit]);

  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={2}
      >
        {isLoading &&
          Array.from({ length: limit }).map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        {!isLoading &&
          pokemon.map((p) => <PokemonCard key={p.id} pokemon={p} />)}
      </SimpleGrid>
    </>
  );
};

export default PokemonGrid;

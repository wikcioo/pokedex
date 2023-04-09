import { useState, useEffect } from "react";

export interface Pokemon {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
  stats: [
    {
      base_stat: number;
      stat: {
        name: string;
      };
    }
  ];
  types: [
    {
      type: {
        name: string;
      };
    }
  ];
  weight: number;
  height: number;
  base_experience: number;
}

interface FetchPokemonData {
  count: number;
  next: string | null;
  previous: string | null;
  results: [
    {
      name: string;
      url: string;
    }
  ];
}

const pokeApiBaseUrl = "https://pokeapi.co/api/v2/pokemon";

const usePokemon = () => {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [url, setUrl] = useState(pokeApiBaseUrl);
  const [error, setError] = useState("");

  const fetchPokemon = async (
    url: string,
    controller: AbortController
  ): Promise<FetchPokemonData> => {
    const data: FetchPokemonData = await fetch(url, {
      signal: controller.signal,
    })
      .then((res) => res.json())
      .catch((err) => setError(err.message));

    return data;
  };

  const fetchPokemonDetails = async (
    url: string,
    controller: AbortController
  ): Promise<Pokemon> => {
    const data = await fetch(url, { signal: controller.signal })
      .then((res) => res.json())
      .catch((err) => setError(err.message));
    return data;
  };

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      const fetchPokemonResponse = await fetchPokemon(url, controller);

      fetchPokemonResponse?.results.forEach(async (r) => {
        const details = await fetchPokemonDetails(r.url, controller);
        setPokemon((oldArray) => [...oldArray, details]);
      });
    };

    fetchData();

    return () => controller.abort();
  }, []);

  return { pokemon, error };
};

export default usePokemon;

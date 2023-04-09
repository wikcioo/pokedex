import { Grid, GridItem, Show, Text } from "@chakra-ui/react";
import PokemonCard from "./components/PokemonCard";
import usePokemon from "./hooks/usePokemon";

function App() {
  const { pokemon, error } = usePokemon();

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "sidebar main"`,
      }}
    >
      <GridItem area="nav" bg="orange">
        Nav
      </GridItem>
      <Show above="lg">
        <GridItem area="sidebar" bg="tomato">
          Sidebar
        </GridItem>
      </Show>
      <GridItem area="main" bg="papayawhip">
        {error.length !== 0 && <Text>{error}</Text>}
        {pokemon.map((p) => (
          <PokemonCard key={p.id} pokemon={p} />
        ))}
      </GridItem>
    </Grid>
  );
}

export default App;

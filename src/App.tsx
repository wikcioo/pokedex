import { Grid, GridItem, Show } from "@chakra-ui/react";
import PokemonGrid from "./components/PokemonGrid";
import PokemonTypeList from "./components/PokemonTypeList";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "sidebar main"`,
      }}
    >
      <GridItem area="nav">Nav</GridItem>
      <Show above="lg">
        <GridItem area="sidebar">
          <PokemonTypeList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <PokemonGrid />
      </GridItem>
    </Grid>
  );
}

export default App;

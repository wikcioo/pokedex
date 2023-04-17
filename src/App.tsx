import { Grid, GridItem, Show } from "@chakra-ui/react";
import PokemonGrid from "./components/PokemonGrid";
import PokemonTypeList from "./components/PokemonTypeList";
import { useState } from "react";
import { Type } from "./models/Type";

function App() {
  const [selectedType, setSelectedType] = useState<Type | null>(null);

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
          <PokemonTypeList onSelectType={setSelectedType} />
        </GridItem>
      </Show>
      <GridItem area="main">
        <PokemonGrid selectedType={selectedType} />
      </GridItem>
    </Grid>
  );
}

export default App;

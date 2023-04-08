import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
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
        Main
      </GridItem>
    </Grid>
  );
}

export default App;

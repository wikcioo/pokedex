import { Grid, GridItem, Show } from "@chakra-ui/react";
import PokemonGrid from "./components/PokemonGrid";
import { useEffect, useState } from "react";
import { Type } from "./models/Type";
import Filter from "./components/filters/Filter";
import PaginationButtons from "./components/PaginationButtons";
import { fetchGenericApiResponse } from "./services/fetchGenericResult";
import NavBar from "./components/NavBar";

function App() {
  const [selectedType, setSelectedType] = useState<Type | null>(null);
  const [offset, setOffset] = useState<number>(0);
  const [limit, setLimit] = useState<number>(30);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    async function fetchData() {
      const res = await fetchGenericApiResponse("/pokemon");
      setTotal(res.data.count);
    }

    fetchData();
  }, []);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "sidebar main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="sidebar">
          <Filter
            initialDisplayCount={limit}
            onDisplayCountChange={(count) => {
              setLimit(count);
            }}
            onSelectType={(type) => {
              setTotal(type.pokemon.length);
              setOffset(0);
              setSelectedType(type);
            }}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <PokemonGrid
          offset={offset}
          limit={limit}
          selectedType={selectedType}
        />
        <PaginationButtons
          isPrevBtnVisible={offset + limit > limit}
          isNextBtnVisible={offset + limit < total}
          onPrevClick={() => setOffset(offset - limit)}
          onNextClick={() => setOffset(offset + limit)}
        />
      </GridItem>
    </Grid>
  );
}

export default App;

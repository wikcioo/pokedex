import { Accordion, Box, Text } from "@chakra-ui/react";
import PokemonTypeFilter from "./PokemonTypeFilter";
import { Type } from "../../models/Type";
import PokemonDisplayCountFilter from "./PokemonDisplayCountFilter";

interface Props {
  initialDisplayCount: number;
  onDisplayCountChange: (count: number) => void;
  onSelectType: (type: Type) => void;
}

const Filter = ({
  initialDisplayCount,
  onDisplayCountChange,
  onSelectType,
}: Props) => {
  return (
    <Box>
      <Text>Filters</Text>
      <Box m={2}>
        <PokemonDisplayCountFilter
          initialCount={initialDisplayCount}
          onDisplayCountChange={onDisplayCountChange}
        />
      </Box>
      <Accordion allowMultiple m={2}>
        <PokemonTypeFilter onSelectType={onSelectType} />
      </Accordion>
    </Box>
  );
};

export default Filter;

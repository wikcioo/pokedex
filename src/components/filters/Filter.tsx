import { Accordion, Text } from "@chakra-ui/react";
import PokemonTypeFilter from "./PokemonTypeFilter";
import { Type } from "../../models/Type";

interface Props {
  onSelectType: (type: Type) => void;
}

const Filter = ({ onSelectType }: Props) => {
  return (
    <>
      <Text>Filters</Text>
      <Accordion allowMultiple>
        <PokemonTypeFilter onSelectType={onSelectType} />
      </Accordion>
    </>
  );
};

export default Filter;

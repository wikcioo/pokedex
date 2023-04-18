import { Accordion } from "@chakra-ui/react";
import PokemonTypeList from "./PokemonTypeList";
import { Type } from "../models/Type";

interface Props {
  onSelectType: (type: Type) => void;
}

const Filter = ({ onSelectType }: Props) => {
  return (
    <>
      <Accordion allowMultiple>
        <PokemonTypeList onSelectType={onSelectType} />
      </Accordion>
    </>
  );
};

export default Filter;

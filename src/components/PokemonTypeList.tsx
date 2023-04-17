import { Button, List, ListItem } from "@chakra-ui/react";
import { Type } from "../models/Type";
import { useEffect, useState } from "react";
import fetchTypes from "../services/fetchTypes";

interface Props {
  onSelectType: (type: Type) => void;
}

const PokemonTypeList = ({ onSelectType }: Props) => {
  const [types, setTypes] = useState<Type[]>([]);

  useEffect(() => {
    async function fetchData() {
      const types = await fetchTypes();
      setTypes(types);
    }

    fetchData();
  }, []);

  return (
    <>
      <List>
        {types
          .filter((type) => type.name !== "unknown" && type.name !== "shadow")
          .map((type) => (
            <ListItem key={type.id}>
              <Button onClick={() => onSelectType(type)}>{type.name}</Button>
            </ListItem>
          ))}
      </List>
    </>
  );
};

export default PokemonTypeList;

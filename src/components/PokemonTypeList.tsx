import { Text } from "@chakra-ui/react";
import useTypes from "../hooks/useTypes";

const PokemonTypeList = () => {
  const { data: types, error } = useTypes();

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {types
          .filter((t) => t.name !== "unknown" && t.name !== "shadow")
          .map((t) => (
            <li key={t.id}>{t.name}</li>
          ))}
      </ul>
    </>
  );
};

export default PokemonTypeList;

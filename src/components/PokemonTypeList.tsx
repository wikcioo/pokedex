import { Text } from "@chakra-ui/react";
import useTypes from "../hooks/useTypes";

const PokemonTypeList = () => {
  const { types, error } = useTypes();

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {types.map((t) => (
          <li key={t.id}>{t.name}</li>
        ))}
      </ul>
    </>
  );
};

export default PokemonTypeList;

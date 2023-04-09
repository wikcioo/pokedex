import useData from "./useData";

export interface Type {
  id: number;
  name: string;
}

const pokeApiBaseUrl = "https://pokeapi.co/api/v2/type";

const useTypes = () => useData<Type>(pokeApiBaseUrl);

export default useTypes;

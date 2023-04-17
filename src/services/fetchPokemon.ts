import { AxiosResponse } from "axios";
import apiClient from "./api-client";
import fetchGenericApiResponse from "./fetchGenericResult";
import { Pokemon } from "../models/Pokemon";

const fetchPokemon = async (names?: string[]): Promise<Array<Pokemon>> => {
  if (names !== undefined) {
    const requests = names.map((name) =>
      apiClient.get<Pokemon>("/pokemon/" + name)
    );
    const responses: Array<AxiosResponse<Pokemon>> = await Promise.all(
      requests
    );
    const data = responses.map((response) => response.data);
    return data;
  } else {
    const res = await fetchGenericApiResponse("/pokemon");
    const requests = res.data.results.map((result) =>
      apiClient.get<Pokemon>(result.url)
    );
    const responses: Array<AxiosResponse<Pokemon>> = await Promise.all(
      requests
    );
    const data = responses.map((response) => response.data);
    return data;
  }
};

export default fetchPokemon;

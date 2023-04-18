import { AxiosResponse } from "axios";
import apiClient from "./api-client";
import fetchGenericApiResponse from "./fetchGenericResult";
import { Pokemon } from "../models/Pokemon";

interface Props {
  offset?: number;
  limit?: number;
  names?: string[];
}

const fetchPokemon = async ({
  offset,
  limit,
  names,
}: Props): Promise<Array<Pokemon>> => {
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
    const res = await fetchGenericApiResponse(
      "/pokemon?offset=" + offset + "&limit=" + limit
    );
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

import { AxiosResponse } from "axios";
import { Type } from "../models/Type";
import apiClient from "./api-client";
import fetchGenericApiResponse from "./fetchGenericResult";

const fetchTypes = async (names?: string[]): Promise<Array<Type>> => {
  if (names !== undefined) {
    const requests = names.map((name) => apiClient.get<Type>("/type/" + name));
    const responses: Array<AxiosResponse<Type>> = await Promise.all(requests);
    const data = responses.map((response) => response.data);
    return data;
  } else {
    const res = await fetchGenericApiResponse("/type");
    const requests = res.data.results.map((result) =>
      apiClient.get<Type>(result.url)
    );
    const responses: Array<AxiosResponse<Type>> = await Promise.all(requests);
    const data = responses.map((response) => response.data);
    return data;
  }
};

export default fetchTypes;

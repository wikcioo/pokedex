import { AxiosResponse } from "axios";
import apiClient from "./api-client";

export interface GenericApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: [
    {
      name: string;
      url: string;
    }
  ];
}

const fetchGenericApiResponse = (
  endpoint: string,
  controller?: AbortController
): Promise<AxiosResponse<GenericApiResponse>> => {
  return apiClient.get<GenericApiResponse>(endpoint, {
    signal: controller?.signal,
  });
};

export default fetchGenericApiResponse;

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

export const fetchGenericApiResponse = async (
  endpoint: string,
  controller?: AbortController
): Promise<AxiosResponse<GenericApiResponse>> => {
  return apiClient.get<GenericApiResponse>(endpoint, {
    signal: controller?.signal,
  });
};

export const fetchGenericApiResponseCountOfResults = async (
  endpoint: string,
  controller?: AbortController
) => {
  let result = await apiClient.get<GenericApiResponse>(endpoint, {
    signal: controller?.signal,
  });
  return result.data.count;
};

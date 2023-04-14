import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface FetchDataResponse {
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

const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchDataResponse>(endpoint, { signal: controller.signal })
      .then((res) => {
        res.data.results.forEach((result) => {
          apiClient
            .get<T>(result.url, { signal: controller.signal })
            .then((resType) => {
              setData((oldArray) => [...oldArray, resType.data]);
            })
            .catch((err) => {
              if (err instanceof CanceledError) return;
              setError(err.message);
            });
        });
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { data, error };
};

export default useData;

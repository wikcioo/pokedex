import { useState, useEffect } from "react";

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

  const fetchData = async (
    url: string,
    controller: AbortController
  ): Promise<FetchDataResponse> => {
    const data: FetchDataResponse = await fetch(url, {
      signal: controller.signal,
    })
      .then((res) => res.json())
      .catch((err) => {
        if (err.message === "The user aborted a request.") return;
        setError(err.message);
      });

    return data;
  };

  const fetchDataDetails = async (
    url: string,
    controller: AbortController
  ): Promise<T> => {
    const data = await fetch(url, { signal: controller.signal })
      .then((res) => res.json())
      .catch((err) => {
        if (err.message === "The user aborted a request.") return;
        setError(err.message);
      });
    return data;
  };

  useEffect(() => {
    const controller = new AbortController();

    const fetchDataAsync = async () => {
      const fetchDataResponse = await fetchData(endpoint, controller);

      fetchDataResponse?.results.forEach(async (r) => {
        const details = await fetchDataDetails(r.url, controller);
        setData((oldArray) => [...oldArray, details]);
      });
    };

    fetchDataAsync();

    return () => controller.abort();
  }, []);

  return { data, error };
};

export default useData;

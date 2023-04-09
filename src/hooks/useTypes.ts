import { useState, useEffect } from "react";

export interface Type {
  id: number;
  name: string;
}

interface FetchTypesData {
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

const pokeApiBaseUrl = "https://pokeapi.co/api/v2/type";

const useTypes = () => {
  const [types, setTypes] = useState<Type[]>([]);
  const [error, setError] = useState("");

  const fetchTypes = async (
    url: string,
    controller: AbortController
  ): Promise<FetchTypesData> => {
    const data: FetchTypesData = await fetch(url, {
      signal: controller.signal,
    })
      .then((res) => res.json())
      .catch((err) => {
        if (err.message === "The user aborted a request.") return;
        setError(err.message);
      });

    return data;
  };

  const fetchTypeDetails = async (
    url: string,
    controller: AbortController
  ): Promise<Type> => {
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

    const fetchData = async () => {
      const fetchTypesResponse = await fetchTypes(pokeApiBaseUrl, controller);

      fetchTypesResponse?.results.forEach(async (r) => {
        if (r.name === "unknown" || r.name === "shadow") return;
        const details = await fetchTypeDetails(r.url, controller);
        setTypes((oldArray) => [...oldArray, details]);
      });
    };

    fetchData();

    return () => controller.abort();
  }, []);

  return { types, error };
};

export default useTypes;

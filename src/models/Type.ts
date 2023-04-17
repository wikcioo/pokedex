import { Pokemon } from "./Pokemon";

export interface Type {
  id: number;
  name: string;
  pokemon: [
    {
      pokemon: {
        name: string;
        url: string;
      };
    }
  ];
}

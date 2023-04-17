export interface Pokemon {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
  stats: [
    {
      base_stat: number;
      stat: {
        name: string;
      };
    }
  ];
  types: [
    {
      type: {
        name: string;
      };
    }
  ];
  weight: number;
  height: number;
  base_experience: number;
}

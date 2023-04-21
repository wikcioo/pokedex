import bug from "./bug.webp";
import dark from "./dark.webp";
import dragon from "./dragon.webp";
import electric from "./electric.webp";
import fairy from "./fairy.webp";
import fighting from "./fighting.webp";
import fire from "./fire.webp";
import flying from "./flying.webp";
import ghost from "./ghost.webp";
import grass from "./grass.webp";
import ground from "./ground.webp";
import ice from "./ice.webp";
import normal from "./normal.webp";
import poison from "./poison.webp";
import psychic from "./psychic.webp";
import rock from "./rock.webp";
import steel from "./steel.webp";
import water from "./water.webp";

interface Mapper {
  [key: string]: string;
}

export const pokemonTypeImages: Mapper = {
  bug: bug,
  dark: dark,
  dragon: dragon,
  electric: electric,
  fairy: fairy,
  fighting: fighting,
  fire: fire,
  flying: flying,
  ghost: ghost,
  grass: grass,
  ground: ground,
  ice: ice,
  normal: normal,
  poison: poison,
  psychic: psychic,
  rock: rock,
  steel: steel,
  water: water,
};

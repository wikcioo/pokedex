import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Pokemon } from "../models/Pokemon";

interface Props {
  pokemon: Pokemon;
}

const PokemonCard = ({ pokemon }: Props) => {
  return (
    <Card width="250px" borderRadius={10} align="center">
      <Image src={pokemon.sprites.front_default} boxSize={75} />
      <CardBody>
        <Heading>{pokemon.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default PokemonCard;

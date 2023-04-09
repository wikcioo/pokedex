import { Pokemon } from "../App";
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";

interface Props {
  pokemon: Pokemon;
}

const PokemonCard = ({ pokemon }: Props) => {
  return (
    <Card backgroundColor="chakra-subtle-bg" margin={2}>
      <Image src={pokemon.sprites.front_default} boxSize={75} />
      <CardBody>
        <Heading>{pokemon.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default PokemonCard;

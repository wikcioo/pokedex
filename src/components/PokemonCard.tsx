import {
  Card,
  CardBody,
  Heading,
  Image,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Pokemon } from "../models/Pokemon";
import PokemonModal from "./PokemonModal";

interface Props {
  pokemon: Pokemon;
}

const PokemonCard = ({ pokemon }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Card
      width="250px"
      borderRadius={10}
      align="center"
      onClick={onOpen}
      cursor="pointer"
    >
      <PokemonModal isOpen={isOpen} onClose={onClose} pokemon={pokemon} />
      <Image src={pokemon.sprites.front_default} boxSize={100} />
      <CardBody>
        <Heading>{pokemon.name}</Heading>
        <Text mt={3} align="center">
          #{pokemon.id.toString().padStart(4, "0")}
        </Text>
      </CardBody>
    </Card>
  );
};

export default PokemonCard;

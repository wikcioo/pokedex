import {
  Badge,
  Box,
  Flex,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Progress,
  Text,
} from "@chakra-ui/react";
import { Pokemon } from "../models/Pokemon";
import {
  getPokemonTypeColor,
  getPokemonTypeColorMix,
  getQualityPokemonImage,
  getShortStatName,
  getStatNameColorScheme,
} from "../utils/pokemonUtils";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  pokemon: Pokemon;
}

const PokemonModal = ({ isOpen, onClose, pokemon }: Props) => {
  return (
    <>
      <Modal isCentered motionPreset="scale" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          sx={{
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <ModalCloseButton />
          <ModalBody textAlign="center" width="100%" p={0}>
            <Box
              bg={getPokemonTypeColorMix(
                pokemon.types.map((type) => type.type.name)
              )}
              display="flex"
              alignItems="center"
              justifyContent="center"
              roundedBottom={10}
              mb={5}
            >
              <Image src={getQualityPokemonImage(pokemon.id)} boxSize={250} />
            </Box>
            <Heading mb={2}>{pokemon.name}</Heading>
            <Box mb={5}>
              {pokemon.types.map((type) => (
                <Badge
                  fontSize={15}
                  key={type.type.name}
                  backgroundColor={getPokemonTypeColor(type.type.name)}
                  mr={2}
                >
                  {type.type.name}
                </Badge>
              ))}
            </Box>
            <Flex justify="center" mb={5}>
              <Box w="80%">
                <Flex justify="space-between">
                  <Box w="45%">
                    <Text fontSize={25} fontWeight="bold">
                      {pokemon.weight / 10} KG
                    </Text>
                    <Text color="gray.400">Weight</Text>
                  </Box>
                  <Box w="45%">
                    <Text fontSize={25} fontWeight="bold">
                      {pokemon.height / 10} M
                    </Text>
                    <Text color="gray.400">Height</Text>
                  </Box>
                </Flex>
              </Box>
            </Flex>
            <List spacing={3} width="80%" margin="auto" mb={5}>
              <Text fontSize={20} fontWeight="bold">
                Base Stats
              </Text>
              {pokemon.stats.map((item, index) => (
                <ListItem key={index}>
                  <HStack>
                    <Text align="left" width="20%">
                      {getShortStatName(item.stat.name).toUpperCase()}
                    </Text>
                    <Progress
                      max={100}
                      rounded={10}
                      colorScheme={getStatNameColorScheme(item.stat.name)}
                      value={(item.base_stat / 150) * 100}
                      width="80%"
                    />
                    <Text align="right" width="8%">
                      {item.base_stat}
                    </Text>
                  </HStack>
                </ListItem>
              ))}
            </List>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PokemonModal;

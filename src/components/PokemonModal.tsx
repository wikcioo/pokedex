import {
  Button,
  Image,
  List,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { Pokemon } from "../models/Pokemon";
import idToQualityImgUrl from "../utils/idToQualityImgUrl";

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
        <ModalContent>
          <ModalHeader>{pokemon.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image src={idToQualityImgUrl(pokemon.id)} boxSize={400} />
            <List spacing={3}>
              {pokemon.stats.map((item, index) => (
                <ListItem key={index}>
                  <Text>
                    {item.stat.name}: {item.base_stat}
                  </Text>
                </ListItem>
              ))}
            </List>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PokemonModal;

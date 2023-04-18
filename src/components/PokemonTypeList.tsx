import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  HStack,
  Image,
  VStack,
} from "@chakra-ui/react";
import { Type } from "../models/Type";
import { useEffect, useState } from "react";
import fetchTypes from "../services/fetchTypes";
import typeToIcon from "../utils/typeToIcon";

interface Props {
  onSelectType: (type: Type) => void;
}

const PokemonTypeList = ({ onSelectType }: Props) => {
  const [types, setTypes] = useState<Type[]>([]);
  const [selectedType, setSelectedType] = useState<Type | null>();

  useEffect(() => {
    async function fetchData() {
      const types = await fetchTypes();
      setTypes(types);
    }

    fetchData();
  }, []);

  return (
    <>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              Type
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel>
          <Flex justifyContent="flex-start">
            <VStack align="left">
              {types
                .filter(
                  (type) => type.name !== "unknown" && type.name !== "shadow"
                )
                .map((type) => (
                  <HStack key={type.id}>
                    <Button
                      size="m"
                      variant="link"
                      colorScheme={selectedType === type ? "green" : ""}
                      onClick={() => {
                        setSelectedType(type);
                        onSelectType(type);
                      }}
                    >
                      <Image boxSize={10} src={typeToIcon[type.name]} />
                      {type.name}
                    </Button>
                  </HStack>
                ))}
            </VStack>
          </Flex>
        </AccordionPanel>
      </AccordionItem>
    </>
  );
};

export default PokemonTypeList;

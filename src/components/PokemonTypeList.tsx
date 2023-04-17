import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  VStack,
} from "@chakra-ui/react";
import { Type } from "../models/Type";
import { useEffect, useState } from "react";
import fetchTypes from "../services/fetchTypes";

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
            <VStack>
              {types
                .filter(
                  (type) => type.name !== "unknown" && type.name !== "shadow"
                )
                .map((type) => (
                  <Button
                    key={type.id}
                    size="sm"
                    variant="link"
                    colorScheme={selectedType === type ? "green" : ""}
                    onClick={() => {
                      setSelectedType(type);
                      onSelectType(type);
                    }}
                  >
                    {type.name}
                  </Button>
                ))}
            </VStack>
          </Flex>
        </AccordionPanel>
      </AccordionItem>
    </>
  );
};

export default PokemonTypeList;

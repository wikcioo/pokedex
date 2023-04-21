import {
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  onDisplayCountChange: (count: number) => void;
}

const PokemonDisplayCountFilter = ({ onDisplayCountChange }: Props) => {
  const [currentCount, setCurrentCount] = useState<number>(20);
  const maxCount = 200;

  return (
    <>
      <Text>Display count: {currentCount}</Text>
      <Slider
        aria-label="slider-ex-1"
        defaultValue={30}
        min={1}
        max={maxCount}
        onChange={(value) => setCurrentCount(value)}
        onChangeEnd={(value) => onDisplayCountChange(value)}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </>
  );
};

export default PokemonDisplayCountFilter;

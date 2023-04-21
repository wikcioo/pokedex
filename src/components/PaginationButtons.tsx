import { Box, Button } from "@chakra-ui/react";

interface Props {
  isPrevBtnVisible: boolean;
  isNextBtnVisible: boolean;
  onPrevClick: () => void;
  onNextClick: () => void;
}

const PaginationButtons = ({
  isPrevBtnVisible,
  isNextBtnVisible,
  onPrevClick,
  onNextClick,
}: Props) => {
  return (
    <Box padding="10px">
      <Button onClick={onPrevClick} mr="5px" isDisabled={!isPrevBtnVisible}>
        Previous
      </Button>
      <Button onClick={onNextClick} isDisabled={!isNextBtnVisible}>
        Next
      </Button>
    </Box>
  );
};

export default PaginationButtons;

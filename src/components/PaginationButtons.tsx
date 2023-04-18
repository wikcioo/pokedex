import { Button } from "@chakra-ui/react";

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
    <>
      {isPrevBtnVisible && (
        <Button onClick={onPrevClick} mr="5px">
          Previous
        </Button>
      )}
      {isNextBtnVisible && <Button onClick={onNextClick}>Next</Button>}
    </>
  );
};

export default PaginationButtons;

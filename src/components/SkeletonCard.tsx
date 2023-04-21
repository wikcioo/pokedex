import { Card, Skeleton } from "@chakra-ui/react";

const SkeletonCard = () => {
  return (
    <Card width="250px" borderRadius={10} align="center">
      <Skeleton boxSize={75} mb={3} mt={3} rounded="5px" />
      <Skeleton height="45px" width="90%" mb={3} rounded="5px" />
    </Card>
  );
};

export default SkeletonCard;

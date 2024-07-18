import { Box, Progress, Text } from "@chakra-ui/react";

const ProgressBar = ({ progress }) => {
  return (
    <Box w="100%" p={4}>
      <Text mb={2}>Progresso verso lacquisto di 1 BTC</Text>
      <Progress value={progress} colorScheme="teal" size="lg" />
      <Text mt={2}>{progress}% completato</Text>
    </Box>
  );
};

export default ProgressBar;

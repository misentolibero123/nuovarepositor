import { Box, SimpleGrid, Text } from "@chakra-ui/react";

const HoldingsSummary = ({ holdings }) => {
  return (
    <Box w="100%" p={4} bg="gray.100" borderRadius="md">
      <Text fontSize="lg" fontWeight="bold" mb={4}>Riepilogo Holdings</Text>
      <SimpleGrid columns={2} spacing={4}>
        <Box>
          <Text>BTC:</Text>
          <Text fontSize="2xl">{holdings.btc_amount} BTC</Text>
        </Box>
        <Box>
          <Text>USDT:</Text>
          <Text fontSize="2xl">{holdings.usdt_amount} USDT</Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default HoldingsSummary;

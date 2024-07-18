import { Box, Text, VStack } from "@chakra-ui/react";

const PassiveEarnings = ({ earnings }) => {
  return (
    <Box w="100%" p={4} bg="gray.100" borderRadius="md">
      <Text fontSize="lg" fontWeight="bold" mb={4}>Guadagni Passivi Ricevuti</Text>
      <VStack spacing={2} align="start">
        {earnings.map((earning, index) => (
          <Box key={index} p={2} bg="white" borderRadius="md" shadow="md">
            <Text>Data: {earning.date}</Text>
            <Text>Importo: {earning.amount} USDT</Text>
            <Text>Interesse: {earning.rate}%</Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default PassiveEarnings;

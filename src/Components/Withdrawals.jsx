import { Box, Text, VStack, Button } from "@chakra-ui/react";
import { useState } from "react";

const Withdrawals = ({ withdrawalData, onRequestWithdrawal }) => {
  return (
    <Box w="100%" p={4} bg="gray.100" borderRadius="md">
      <Text fontSize="lg" fontWeight="bold" mb={4}>Gestione dei Prelievi</Text>
      <VStack spacing={2} align="start">
        {withdrawalData.map((withdrawal, index) => (
          <Box key={index} p={2} bg="white" borderRadius="md" shadow="md">
            <Text>Data: {withdrawal.date}</Text>
            <Text>Importo: {withdrawal.amount} {withdrawal.currency}</Text>
            <Text>Stato: {withdrawal.status}</Text>
          </Box>
        ))}
      </VStack>
      <Button colorScheme="teal" mt={4} onClick={onRequestWithdrawal}>Richiedi Prelievo</Button>
    </Box>
  );
};

export default Withdrawals;

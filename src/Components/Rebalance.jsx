import { Box, Text, VStack, Button } from "@chakra-ui/react";
import { useState } from "react";

const Rebalance = ({ rebalanceData, onRebalance }) => {
  return (
    <Box w="100%" p={4} bg="gray.100" borderRadius="md">
      <Text fontSize="lg" fontWeight="bold" mb={4}>Ribilanciamento del Portafoglio</Text>
      <VStack spacing={2} align="start">
        {rebalanceData.map((rebalance, index) => (
          <Box key={index} p={2} bg="white" borderRadius="md" shadow="md">
            <Text>Data: {rebalance.date}</Text>
            <Text>BTC a USDT: {rebalance.btc_to_usdt} BTC</Text>
            <Text>USDT a BTC: {rebalance.usdt_to_btc} USDT</Text>
          </Box>
        ))}
      </VStack>
      <Button colorScheme="teal" mt={4} onClick={onRebalance}>Esegui Ribilanciamento</Button>
    </Box>
  );
};

export default Rebalance;

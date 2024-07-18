import { Box, VStack, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const generateFakePurchase = () => {
  const amount = (Math.random() * 0.01).toFixed(4); // Simula un acquisto tra 0 e 0.01 BTC
  return `Acquisto di ${amount} BTC`;
};

const Sidebar = () => {
  const [purchases, setPurchases] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPurchases((prevPurchases) => {
        const newPurchase = generateFakePurchase();
        return [newPurchase, ...prevPurchases].slice(0, 10); // Mantiene solo gli ultimi 10 acquisti
      });
    }, 600000); // 10 minuti in millisecondi

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Box
      w="250px"
      p={4}
      bg="white"
      borderLeft="1px solid"
      borderColor="gray.200"
      position="fixed"
      right={0}
      h="100vh"
      overflowY="auto"
      boxShadow="lg"
    >
      <Text fontSize="xl" mb={4} fontWeight="bold">Acquisti Recenti</Text>
      <VStack spacing={4} align="start">
        {purchases.map((purchase, index) => (
          <Text key={index}>{purchase}</Text>
        ))}
      </VStack>
    </Box>
  );
};

export default Sidebar;

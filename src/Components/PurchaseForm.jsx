import { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, VStack, Select, useToast } from "@chakra-ui/react";

const PurchaseForm = () => {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("EUR");
  const toast = useToast();

  const handleChange = (e) => {
    setAmount(e.target.value);
  };

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };

  const handlePurchase = async () => {
    try {
      const response = await fetch('/api/transactions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount, currency }),
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Reindirizzamento in corso.",
          description: "Verrai reindirizzato per completare l'acquisto.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        window.location.href = data.data.hosted_url;
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      toast({
        title: "Errore durante l'acquisto.",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box w="100%" p={4} bg="white" borderRadius="md" boxShadow="md">
      <VStack spacing={4}>
        <FormControl id="amount">
          <FormLabel>Importo in EUR</FormLabel>
          <Input type="number" value={amount} onChange={handleChange} />
        </FormControl>
        <FormControl id="currency">
          <FormLabel>Seleziona Valuta</FormLabel>
          <Select value={currency} onChange={handleCurrencyChange}>
            <option value="EUR">Euro (EUR)</option>
            <option value="USD">US Dollar (USD)</option>
          </Select>
        </FormControl>
        <Button colorScheme="teal" onClick={handlePurchase}>Acquista</Button>
      </VStack>
    </Box>
  );
};

export default PurchaseForm;

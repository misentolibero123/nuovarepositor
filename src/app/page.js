"use client"
import { useState, useEffect } from "react";
import { Box, Heading, VStack, Flex } from "@chakra-ui/react";
import ProgressBar from "../components/ProgressBar";
import HoldingsSummary from "../components/HoldingsSummary";
import PerformanceChart from "../components/PerformanceChart";
import Sidebar from "../components/Sidebar";
import PassiveEarnings from "../components/PassiveEarnings";
import Rebalance from "../components/Rebalance";
import Withdrawals from "../components/Withdrawals";
import PurchaseForm from "../components/PurchaseForm";
import Navbar from "@/Components/Navbar";

export default function Dashboard() {
  const [progress, setProgress] = useState(0);
  const [holdings, setHoldings] = useState({ btc_amount: 0, usdt_amount: 0 });
  const [performanceData, setPerformanceData] = useState([]);
  const [earnings, setEarnings] = useState([]);
  const [rebalanceData, setRebalanceData] = useState([]);
  const [withdrawalData, setWithdrawalData] = useState([]);

  useEffect(() => {
    // Simulazione di chiamata API per ottenere i dati dell'utente
    const fetchData = async () => {
      // Esempio di dati mock
      const userProgress = 30; // 30% completato verso 1 BTC
      const userHoldings = { btc_amount: 0.3, usdt_amount: 1000 };
      const userPerformance = [
        { date: "2023-07-01", value: 1000 },
        { date: "2023-08-01", value: 1200 },
        { date: "2023-09-01", value: 1500 },
        { date: "2023-10-01", value: 1800 },
      ];
      const userEarnings = [
        { date: "2024-01-01", amount: 10, rate: 2 },
        { date: "2024-02-01", amount: 12, rate: 2 },
        { date: "2024-03-01", amount: 15, rate: 2.5 },
      ];
      const userRebalanceData = [
        { date: "2024-01-01", btc_to_usdt: 0.01, usdt_to_btc: 500 },
        { date: "2024-02-01", btc_to_usdt: 0.02, usdt_to_btc: 1000 },
      ];
      const userWithdrawalData = [
        { date: "2024-01-01", amount: 0.01, currency: "BTC", status: "completed" },
        { date: "2024-02-01", amount: 500, currency: "USDT", status: "pending" },
      ];

      setProgress(userProgress);
      setHoldings(userHoldings);
      setPerformanceData(userPerformance);
      setEarnings(userEarnings);
      setRebalanceData(userRebalanceData);
      setWithdrawalData(userWithdrawalData);
    };

    fetchData();
  }, []);

  const handleRebalance = () => {
    // Logica per eseguire il ribilanciamento
    alert("Ribilanciamento eseguito!");
  };

  const handleRequestWithdrawal = () => {
    // Logica per richiedere un prelievo
    alert("Richiesta di prelievo inviata!");
  };

  return (
   <>
   <Navbar></Navbar>
      <Flex direction={{ base: "column", lg: "row" }} mx="auto" maxW="7xl" p={4} w="100%">
        <Box flex="1" maxW={{ lg: "4xl" }} mx="auto" p={4}>
          <Heading as="h1" mb={6} textAlign="center">Dashboard Utente</Heading>
          <VStack spacing={8}>
            <ProgressBar progress={progress} />
            <HoldingsSummary holdings={holdings} />
            <PerformanceChart data={performanceData} />
            <PassiveEarnings earnings={earnings} />
            <Rebalance rebalanceData={rebalanceData} onRebalance={handleRebalance} />
            <Withdrawals withdrawalData={withdrawalData} onRequestWithdrawal={handleRequestWithdrawal} />
            <PurchaseForm />
          </VStack>
        </Box>
        <Sidebar />
      </Flex>
   </>
  );
}

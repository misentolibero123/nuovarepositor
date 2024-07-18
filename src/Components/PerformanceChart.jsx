import { Box } from "@chakra-ui/react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Registra i componenti di Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const PerformanceChart = ({ data }) => {
  const chartData = {
    labels: data.map((d) => d.date),
    datasets: [
      {
        label: "Valore del Portafoglio",
        data: data.map((d) => d.value),
        fill: false,
        backgroundColor: "teal",
        borderColor: "teal",
      },
    ],
  };

  return (
    <Box w="100%" p={4} bg="gray.100" borderRadius="md">
      <Line data={chartData} />
    </Box>
  );
};

export default PerformanceChart;

import React from "react";
import {
  Container,
  Title,
  ChartsRow,
  ChartBox,
  TableSection,
  Table,
  Th,
  Td,
  StatusBadge,
  Filter
} from "./style";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title as ChartTitle,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ChartTitle,
  Tooltip,
  Legend
);

const ReportsAnalytics = () => {
  // Sales data
  const salesData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Daily Sales",
        data: [120, 190, 300, 250, 200, 300, 400],
        borderColor: "var(--color-primary)",
        backgroundColor: "rgba(83, 199, 190, 0.2)",
        fill: true,
      },
    ],
  };

  // Best-selling products
  const bestSellingData = {
    labels: ["Panadol", "Amoxicillin", "Brufen", "Vitamin C", "Cough Syrup"],
    datasets: [
      {
        label: "Units Sold",
        data: [300, 250, 180, 150, 120],
        backgroundColor: "var(--color-accent-green)",
      },
    ],
  };

  // Stock & Expiry data
  const stockData = [
    { name: "Panadol", stock: 10, expiry: "2025-09-15", status: "Low Stock" },
    { name: "Amoxicillin", stock: 5, expiry: "2025-09-05", status: "Expiring Soon" },
    { name: "Brufen", stock: 50, expiry: "2026-01-10", status: "Normal" },
    { name: "Vitamin C", stock: 7, expiry: "2025-09-03", status: "Expiring Soon" },
    { name: "Cough Syrup", stock: 8, expiry: "2025-09-20", status: "Low Stock" },
  ];

  return (
    <Container>
      <Title>Reports & Analytics</Title>

      {/* Charts in one row */}
      <ChartsRow>
        <ChartBox>
          <div>
            <h3> Total Sales</h3>
            <Filter>Filter</Filter>
          </div>
          <Line data={salesData} />
        </ChartBox>
        <ChartBox>
          <h3>Best Selling Products</h3>
          <Bar data={bestSellingData} />
        </ChartBox>
      </ChartsRow>

      {/* Stock & Expiry Table */}
      <TableSection>
        <h3>Stock & Expiry Report</h3>
        <Table>
          <thead>
            <tr>
              <Th>Medicine</Th>
              <Th>Stock</Th>
              <Th>Expiry Date</Th>
              <Th>Status</Th>
            </tr>
          </thead>
          <tbody>
            {stockData.map((item, index) => (
              <tr key={index}>
                <Td>{item.name}</Td>
                <Td>{item.stock}</Td>
                <Td>{item.expiry}</Td>
                <Td>
                  <StatusBadge status={item.status}>{item.status}</StatusBadge>
                </Td>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableSection>
    </Container>
  );
};

export default ReportsAnalytics;

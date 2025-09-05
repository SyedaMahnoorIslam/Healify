import React, { useState } from "react";
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
  Filter,
  Dropdown,
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
  const [filter, setFilter] = useState("Daily");

  // Dynamic sales data based on filter
  const getSalesData = () => {
    switch (filter) {
      case "Weekly":
        return {
          labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
          datasets: [
            {
              label: "Weekly Sales",
              data: [1200, 1900, 1500, 2200],
              // borderColor: "var(--color-primary)",
              // backgroundColor: "rgba(83, 199, 190, 0.2)",
              borderColor: "#1c9f94",
              backgroundColor: "#53c7be",
              fill: true,
            },
          ],
        };
      case "Yearly":
        return {
          labels: [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
          ],
          datasets: [
            {
              label: "Yearly Sales",
              data: [12000, 15000, 17000, 13000, 18000, 22000, 20000, 24000, 21000, 25000, 27000, 30000],
              // borderColor: "var(--color-primary)",
              // backgroundColor: "rgba(83, 199, 190, 0.2)",
              borderColor: "#1c9f94",
              backgroundColor: "#53c7be",
              fill: true,
            },
          ],
        };
      default:
        return {
          labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          datasets: [
            {
              label: "Daily Sales",
              data: [120, 190, 300, 250, 200, 300, 400],
              // borderColor: "var(--color-primary)",
              // backgroundColor: "rgba(83, 199, 190, 0.2)",
              borderColor: "#1c9f94",
              backgroundColor: "#53c7be",
              fill: true,
            },
          ],
        };
    }
  };

  // Best-selling products
  const bestSellingData = {
    labels: ["Panadol", "Amoxicillin", "Brufen", "Vitamin C", "Cough Syrup"],
    datasets: [
      {
        label: "Units Sold",
        data: [300, 250, 180, 150, 120],
        backgroundColor: "#1c9f94",
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
            <h3>Total Sales</h3>
            <Dropdown value={filter} onChange={(e) => setFilter(e.target.value)}>
              <option value="Daily">Daily</option>
              <option value="Weekly">Weekly</option>
              <option value="Yearly">Yearly</option>
            </Dropdown>
          </div>
          <Line data={getSalesData()} />
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
              <Th className="td-date">Expiry Date</Th>
              <Th>Status</Th>
            </tr>
          </thead>
          <tbody>
            {stockData.map((item, index) => (
              <tr key={index}>
                <Td>{item.name}</Td>
                <Td>{item.stock}</Td>
                <Td className="td-date">{item.expiry}</Td>
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

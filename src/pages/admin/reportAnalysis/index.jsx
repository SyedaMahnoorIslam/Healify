

import React, { useEffect, useState } from "react";
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
  Dropdown,
  BestSellingSection,
  CardRow,
  ProductCard,
  RankBadge,
} from "./style";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title as ChartTitle,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { UseAdmin } from "../useHooks";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ChartTitle,
  Tooltip,
  Legend
);

const ReportsAnalytics = () => {
  const [filter, setFilter] = useState("Daily");
  const [stockData, setStockData] = useState([]);
  const [bestSellingData, setBestSellingData] = useState([]);
  const [salesGraphData, setSalesGraphData] = useState(null);
  const [loadingGraph, setLoadingGraph] = useState(false);

  const { stock_and_expiry, getBestSellingProducts, getStock } = UseAdmin();

  // Fetch Stock & Expiry Data
  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const response = await stock_and_expiry();
        console.log("API Stock and Report Response:", response);
        setStockData(response || []);
      } catch (err) {
        console.error("Error fetching stock data:", err);
      }
    };
    fetchStockData();
  }, []);

  // Fetch Best Selling Products Data
  useEffect(() => {
    const fetchBestSelling = async () => {
      try {
        const response = await getBestSellingProducts();
        console.log("Best Selling Products Response:", response);
        setBestSellingData(response?.slice(0, 5) || []);
      } catch (err) {
        console.error("Error fetching best selling products:", err);
      }
    };
    fetchBestSelling();
  }, []);

  // Fetch Sales Graph Data (Dynamic by Filter)
  useEffect(() => {
    const fetchGraphData = async () => {
      setLoadingGraph(true);
      try {
        const period =
          filter === "Daily"
            ? "daily"
            : filter === "Weekly"
            ? "weekly"
            : "yearly";

        const response = await getStock(null, period);
        console.log("Sales Graph API Response:", response);

        if (response?.chartData?.length > 0) {
          const labels = response.chartData.map((item) => item.label);
          const values = response.chartData.map((item) => item.totalOrders);

          setSalesGraphData({
            labels,
            datasets: [
              {
                label: `${filter} Sales`,
                data: values,
                borderColor: "#1c9f94",
                backgroundColor: "rgba(83, 199, 190, 0.4)",
                fill: true,
                tension: 0.4,
              },
            ],
          });
        } else {
          setSalesGraphData({
            labels: [],
            datasets: [
              {
                label: `${filter} Sales`,
                data: [],
                borderColor: "#1c9f94",
                backgroundColor: "#53c7be",
                fill: true,
              },
            ],
          });
        }
      } catch (error) {
        console.error("Error fetching graph data:", error);
      } finally {
        setLoadingGraph(false);
      }
    };

    fetchGraphData();
  }, [filter]);

  return (
    <Container>
      <Title>Reports & Analytics</Title>

      {/* Best Selling Products */}
      <BestSellingSection>
        <h3>Top 5 Best Selling Products</h3>
        <CardRow>
          {bestSellingData.length > 0 ? (
            bestSellingData.map((item, index) => (
              <ProductCard key={index}>
                <RankBadge>#{index + 1}</RankBadge>
                <h4>{item.name}</h4>
                <p>{item.total_sold} units sold</p>
              </ProductCard>
            ))
          ) : (
            <p style={{ textAlign: "center", width: "100%", padding: "20px" }}>
              Loading best selling products...
            </p>
          )}
        </CardRow>
      </BestSellingSection>
      <Title>Sales Overview</Title>

      {/* Sales Chart */}
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

          {loadingGraph ? (
            <p style={{ textAlign: "center", padding: "20px" }}>Loading chart...</p>
          ) : salesGraphData ? (
            <Line data={salesGraphData} />
          ) : (
            <p style={{ textAlign: "center", padding: "20px" }}>No chart data available</p>
          )}
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
            {stockData.length > 0 ? (
              stockData.map((item, index) => (
                <tr key={index}>
                  <Td>{item.name}</Td>
                  <Td>{item.inventory_quantity ?? "N/A"}</Td>
                  <Td className="td-date">{item.expiry_date ?? "N/A"}</Td>
                  <Td>
                    <StatusBadge status={item.inventory_status}>
                      {item.inventory_status ?? "N/A"}
                    </StatusBadge>
                  </Td>
                </tr>
              ))
            ) : (
              <tr>
                <Td colSpan="4" style={{ textAlign: "center", padding: "20px" }}>
                  No data available
                </Td>
              </tr>
            )}
          </tbody>
        </Table>
      </TableSection>
    </Container>
  );
};

export default ReportsAnalytics;

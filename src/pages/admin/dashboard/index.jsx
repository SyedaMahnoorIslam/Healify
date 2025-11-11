
import React, { useEffect, useState } from "react";
import { FaShoppingCart, FaClipboardList, FaPills, FaBoxOpen } from "react-icons/fa";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import {
  Container,
  Main,
  DashboardGrid,
  Card,
  CardHeader,
  ChartWrapper,
  FadeIn,
  ChartsDiv,
} from "./style";
import { UseAdmin } from "../useHooks";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function AdminDashboard() {
  const { dashboardStats, getStock, getOrder } = UseAdmin();
  const [dashboardStat, setDashboardStat] = useState();
  const [yearlySalesData, setYearlySalesData] = useState(null);
  const [dailyOrdersData, setDailyOrdersData] = useState(null);

  const [loadingGraph, setLoadingGraph] = useState(false);

  // Fetch Dashboard Stats
  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const data = await dashboardStats();
        setDashboardStat(data);
      } catch (err) {
        console.error("Error fetching dashboard stats:", err);
      }
    };
    fetchDashboardData();
  }, []);

  // Fetch Yearly Sales Graph Data
  useEffect(() => {
    const fetchYearlyGraph = async () => {
      setLoadingGraph(true);
      try {
        const response = await getStock(null, "yearly");
        console.log("Yearly Sales Graph:", response);

        if (response?.chartData?.length > 0) {
          const labels = response.chartData.map((item) => item.label);
          const values = response.chartData.map((item) => item.totalOrders);

          setYearlySalesData({
            labels,
            datasets: [
              {
                label: "Yearly Sales",
                data: values,
                borderColor: "#1c9f94",
                backgroundColor: "rgba(83, 199, 190, 0.5)",
                borderWidth: 2,
                fill: true,
                tension: 0.4,
              },
            ],
          });
        } else {
          setYearlySalesData({
            labels: [],
            datasets: [
              {
                label: "Yearly Sales",
                data: [],
                borderColor: "#1c9f94",
                backgroundColor: "rgba(83, 199, 190, 0.4)",
                fill: true,
              },
            ],
          });
        }
      } catch (err) {
        console.error("Error fetching yearly graph data:", err);
      } finally {
        setLoadingGraph(false);
      }
    };

    fetchYearlyGraph();
  }, []);
  // Fetch Daily Orders Graph Data
  useEffect(() => {
    const fetchDailyOrdersGraph = async () => {
      setLoadingGraph(true);
      try {
        const response = await getOrder(null, "daily");
        console.log("Daily orders Graph:", response);

        if (response?.chartData?.length > 0) {
          const labels = response.chartData.map((item) => item.label);
          const values = response.chartData.map((item) => item.totalOrders);

          setDailyOrdersData({
            labels,
            datasets: [
              {
                label: "Weekly Orders",
                data: values,
                borderColor: "#1c9f94",
                backgroundColor: "rgba(83, 199, 190, 0.5)",
                borderWidth: 2,
                fill: true,
                tension: 0.4,
              },
            ],
          });
        } else {
          setDailyOrdersData({
            labels: [],
            datasets: [
              {
                label: "Yearly Sales",
                data: [],
                borderColor: "#1c9f94",
                backgroundColor: "rgba(83, 199, 190, 0.4)",
                fill: true,
              },
            ],
          });
        }
      } catch (err) {
        console.error("Error fetching yearly graph data:", err);
      } finally {
        setLoadingGraph(false);
      }
    };

    fetchDailyOrdersGraph();
  }, []);

  return (
    <Container>
      <Main>
        <FadeIn>
          <h1>Dashboard Overview</h1>
          <DashboardGrid>
            <Card>
              <CardHeader>
                <FaShoppingCart color="var(--color-primary)" /> Sales
              </CardHeader>
              <p className="stat-value">${dashboardStat?.totalSales ?? 0}</p>
            </Card>

            <Card>
              <CardHeader>
                <FaClipboardList color="var(--color-primary)" /> Orders
              </CardHeader>
              <p className="stat-value">{dashboardStat?.totalOrders ?? 0}</p>
            </Card>

            <Card>
              <CardHeader>
                <FaPills color="var(--color-primary)" /> Pending Prescriptions
              </CardHeader>
              <p className="stat-value">{dashboardStat?.pendingPrescriptions ?? 0}</p>
            </Card>

            <Card>
              <CardHeader>
                <FaBoxOpen color="var(--color-primary)" /> Low Inventory
              </CardHeader>
              <p className="stat-value">{dashboardStat?.lowStockItems ?? 0}</p>
            </Card>
          </DashboardGrid>

          {/* Charts */}
          <ChartsDiv>
            <ChartWrapper>
              <h2>Yearly Sales Overview</h2>
              {loadingGraph ? (
                <p style={{ textAlign: "center", padding: "20px" }}>Loading chart...</p>
              ) : yearlySalesData ? (
                <Line data={yearlySalesData} />
              ) : (
                <p style={{ textAlign: "center", padding: "20px" }}>No chart data available</p>
              )}
            </ChartWrapper>
            <ChartWrapper>
              <h2>Order this Week</h2>
              {loadingGraph ? (
                <p style={{ textAlign: "center", padding: "20px" }}>Loading chart...</p>
              ) : dailyOrdersData ? ( 
                <Line data={dailyOrdersData} />
              ) : (
                <p style={{ textAlign: "center", padding: "20px" }}>No chart data available</p>
              )}
            </ChartWrapper>

            {/* <ChartWrapper>
              <h2>Orders This Week</h2>
              <Line data={yearlySalesData} />
            </ChartWrapper> */}

          </ChartsDiv>
        </FadeIn>
      </Main>
    </Container>
  );
}
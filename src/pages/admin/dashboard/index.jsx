import React from "react";
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

const salesData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Sales ($)",
      data: [1200, 1900, 1500, 2200, 1800, 2400],
      // borderColor: "#1c9f94",
      backgroundColor: "#53c7be",
      borderRadius: 19,
    },
  ],
};

const ordersData = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "Orders",
      data: [50, 70, 60, 90, 100, 80, 120],
      borderColor: "#1c9f94",
      backgroundColor: "#53c7be",
      tension: 0.4,
      // fill: true,
    },
  ],
};
export default function AdminDashboard() {
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
              <p className="stat-value">$12,400</p>
            </Card>

            <Card>
              <CardHeader>
                <FaClipboardList color="var(--color-primary)" /> Orders
              </CardHeader>
              <p className="stat-value">320</p>
            </Card>

            <Card>
              <CardHeader>
                <FaPills color="var(--color-primary)" /> Pending Prescriptions
              </CardHeader>
              <p className="stat-value">14</p>
            </Card>

            <Card>
              <CardHeader>
                <FaBoxOpen color="var(--color-primary)" /> Low Inventory
              </CardHeader>
              <p className="stat-value">8 Items</p>
            </Card>
          </DashboardGrid>
          {/* Charts */}
          <ChartsDiv>
            <ChartWrapper>
              <h2>Sales Overview</h2>
              <Bar data={salesData} />
            </ChartWrapper>
            <ChartWrapper>
              <h2>Orders This Week</h2>
              <Line data={ordersData} />
            </ChartWrapper>
          </ChartsDiv>
        </FadeIn>
      </Main>
    </Container>
  );
}

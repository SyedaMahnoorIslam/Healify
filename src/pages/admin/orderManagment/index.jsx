import React, { useState } from "react";
import {
  Container,
  Title,
  OrderTable,
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  Status,
  ActionButton,
  ActionGroup,
} from "./style";

const OrderManagement = () => {
  const [orders, setOrders] = useState([
    {
      id: 101,
      customer: "Ali Khan",
      items: "Paracetamol, Vitamin C",
      total: "PKR 1200",
      status: "New",
    },
    {
      id: 102,
      customer: "Sara Ahmed",
      items: "Amoxicillin",
      total: "PKR 900",
      status: "Packed",
    },
    {
      id: 103,
      customer: "Bilal Hussain",
      items: "Ibuprofen",
      total: "PKR 500",
      status: "Shipped",
    },
  ]);

  const updateStatus = (id, newStatus) => {
    setOrders(
      orders.map((order) =>
        order.id === id ? { ...order, status: newStatus } : order
      )
    );
  };

  const handleCancel = (id) => {
    setOrders(
      orders.map((order) =>
        order.id === id ? { ...order, status: "Cancelled" } : order
      )
    );
  };

  return (
    <Container>
      <Title>Order Management</Title>
      <OrderTable>
        <thead>
          <TableHead>
            <TableHeader>Order ID</TableHeader>
            <TableHeader>Customer</TableHeader>
            <TableHeader>Items</TableHeader>
            <TableHeader>Total</TableHeader>
            <TableHeader>Status</TableHeader>
            <TableHeader>Actions</TableHeader>
          </TableHead>
        </thead>
        <tbody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell>{order.id}</TableCell>
              <TableCell>{order.customer}</TableCell>
              <TableCell>{order.items}</TableCell>
              <TableCell>{order.total}</TableCell>
              <TableCell>
                <Status status={order.status}>{order.status}</Status>
              </TableCell>
              <TableCell>
                <ActionGroup>
                  {order.status === "New" && (
                    <ActionButton
                      onClick={() => updateStatus(order.id, "Packed")}
                      color="#4caf50"
                    >
                      Mark Packed
                    </ActionButton>
                  )}
                  {order.status === "Packed" && (
                    <ActionButton
                      onClick={() => updateStatus(order.id, "Shipped")}
                      color="#2196f3"
                    >
                      Mark Shipped
                    </ActionButton>
                  )}
                  {order.status === "Shipped" && (
                    <ActionButton
                      onClick={() => updateStatus(order.id, "Delivered")}
                      color="#673ab7"
                    >
                      Mark Delivered
                    </ActionButton>
                  )}
                  {order.status !== "Cancelled" &&
                    order.status !== "Delivered" && (
                      <ActionButton
                        onClick={() => handleCancel(order.id)}
                        color="#f44336"
                      >
                        Cancel
                      </ActionButton>
                    )}
                </ActionGroup>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </OrderTable>
    </Container>
  );
};

export default OrderManagement;

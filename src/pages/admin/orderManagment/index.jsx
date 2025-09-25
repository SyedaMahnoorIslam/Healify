
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
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
  ModalOverlay,
  ModalContent,
  ModalTitle,
  ModalClose,
  FormRow,
  FormLabel,
  FormSelect,
} from "./style";

const OrderManagement = () => {
  const [orders, setOrders] = useState([
    {
      id: 101,
      customer: "Ali Khan",
      items: "Paracetamol, Vitamin C",
      total: "PKR 1200",
      status: "New",
      address: "Lahore, Pakistan",
      agent: "Unassigned",
    },
    {
      id: 102,
      customer: "Sara Ahmed",
      items: "Amoxicillin",
      total: "PKR 900",
      status: "Packed",
      address: "Karachi, Pakistan",
      agent: "Unassigned",
    },
    {
      id: 103,
      customer: "Bilal Hussain",
      items: "Ibuprofen",
      total: "PKR 500",
      status: "Shipped",
      address: "Islamabad, Pakistan",
      agent: "Unassigned",
    },
  ]);

  const [selectedOrder, setSelectedOrder] = useState(null);
  const { control, handleSubmit } = useForm();

  const updateStatus = (id, newStatus) => {
    setOrders(
      orders.map((order) =>
        order.id === id ? { ...order, status: newStatus } : order
      )
    );
  };

  const assignAgent = (id, agent) => {
    setOrders(
      orders.map((order) =>
        order.id === id ? { ...order, agent } : order
      )
    );
  };

  const onSubmit = (data) => {
    if (selectedOrder) {
      updateStatus(selectedOrder.id, data.status);
      assignAgent(selectedOrder.id, data.agent);
      setSelectedOrder(null);
    }
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
            <TableHeader>Agent</TableHeader>
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
              <TableCell>{order.agent}</TableCell>
              <TableCell>
                <ActionGroup>
                  <ActionButton
                    color="#2196f3"
                    onClick={() => setSelectedOrder(order)}
                  >
                    View Details
                  </ActionButton>
                </ActionGroup>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </OrderTable>

      {selectedOrder && (
        <ModalOverlay>
          <ModalContent>
            <ModalClose onClick={() => setSelectedOrder(null)}>✕</ModalClose>
            <ModalTitle>Order #{selectedOrder.id} Details</ModalTitle>

            <p>
              <b>Customer:</b> {selectedOrder.customer}
            </p>
            <p>
              <b>Items:</b> {selectedOrder.items}
            </p>
            <p>
              <b>Total:</b> {selectedOrder.total}
            </p>
            <p>
              <b>Address:</b> {selectedOrder.address}
            </p>

            <form onSubmit={handleSubmit(onSubmit)}>
              <FormRow>
                <FormLabel>Status</FormLabel>
                <Controller
                  name="status"
                  control={control}
                  defaultValue={selectedOrder.status}
                  render={({ field }) => (
                    <FormSelect {...field}>
                      <option value="New">New</option>
                      <option value="Packed">Packed</option>
                      <option value="Shipped">Shipped</option>
                      <option value="Delivered">Delivered</option>
                      <option value="Cancelled">Cancelled</option>
                    </FormSelect>
                  )}
                />
              </FormRow>

              <FormRow>
                <FormLabel>Assign Delivery Agent</FormLabel>
                <Controller
                  name="agent"
                  control={control}
                  defaultValue={selectedOrder.agent}
                  render={({ field }) => (
                    <FormSelect {...field}>
                      <option value="Unassigned">Unassigned</option>
                      <option value="Agent A">Agent A</option>
                      <option value="Agent B">Agent B</option>
                      <option value="Agent C">Agent C</option>
                    </FormSelect>
                  )}
                />
              </FormRow>

              <ActionButton type="submit" color="#4caf50">
                Save Changes
              </ActionButton>
            </form>
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
  );
};

export default OrderManagement;

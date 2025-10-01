import React, { useEffect, useState } from "react";
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
import { UseAdmin } from "../useHooks";
import { toast } from "react-toastify";

const OrderManagement = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [agents, setAgents] = useState([]);

  const { control, handleSubmit } = useForm();
  const { getOrders, getDeliveryAgents, assignDeliveryAgent, updateOrderStatus } = UseAdmin();
  
  const onSubmit = async (data) => {
  if (!selectedOrder) return;
  try {
    await updateOrderStatus(selectedOrder.id, { status: data.status });

    if (data.agent) {
      await assignDeliveryAgent({ orderId: selectedOrder.id, agentId: data.agent });
    }
    setOrders(prev =>
      prev.map(order =>
        order.id === selectedOrder.id
          ? { 
              ...order, 
              status: data.status, 
              agent: agents.find(a => a.id === data.agent)?.name || "Unassigned"
            }
          : order
      )
    );

    toast.success("Order updated successfully");
    setSelectedOrder(null);

  } catch (error) {
    console.error("Error in odr api:", error);
  }
};



  // Orders fetch
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await getOrders();
        if (Array.isArray(data)) {
          setOrders(data);
        } else {
          setOrders([]);
        }
      } catch (error) {
        console.error("Error fetching odrs:", error);
        setOrders([]);
      }
    };
    fetchOrders();
  }, []);

  // DA LIST fetch
  useEffect(() => {
    const fetchDeliveryAgents = async () => {
      try {
        const data = await getDeliveryAgents();
        console.log("DA api Response:", data);
        if (Array.isArray(data)) {
          setAgents(data);
        } else {
          setAgents([]);
        }
      } catch (error) {
        console.error("Error fetching DA :", error);
        setAgents([]);
      }
    };
    fetchDeliveryAgents();
  }, []);

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
          {orders.length > 0 ? (
            orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.customer?.name}</TableCell>
                <TableCell>{order.item_count}</TableCell>
                <TableCell>{order.total_amount}</TableCell>
                <TableCell>
                  <Status status={order.status}>{order.status}</Status>
                </TableCell>
                <TableCell>{order.delivery_agent_id || "Unassigned"}</TableCell>
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
            ))
          ) : (
            <TableRow>
              <TableCell colSpan="7">No orders found</TableCell>
            </TableRow>
          )}
        </tbody>
      </OrderTable>

      {selectedOrder && (
        <ModalOverlay>
          <ModalContent>
            <ModalClose onClick={() => setSelectedOrder(null)}>✕</ModalClose>
            <ModalTitle>Order #{selectedOrder.id} Details</ModalTitle>

            <p>
              <b>Customer:</b> {selectedOrder.customer?.name} (
              {selectedOrder.customer?.email})
            </p>
            <p>
              <b>Items:{selectedOrder.item_count}</b>
            </p>
            <p>
              <b>Total:</b> {selectedOrder.total_amount}
            </p>
            <p>
              <b>Address:</b> {selectedOrder.shipping_address}
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
                      <option value="Pending">New</option>
                      <option value="Processing">New</option>
                      <option value="Assigned">Packed</option>
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
                  defaultValue={selectedOrder.agentId || ""}
                  render={({ field }) => (
                    <FormSelect {...field}>
                      <option value="">Unassigned</option>
                      {agents.length > 0 ? (
                        agents.map((agent) => (
                          <option key={agent.id} value={agent.id}>
                            {agent.name}
                          </option>
                        ))
                      ) : (
                        <option disabled>No agents available</option>
                      )}
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

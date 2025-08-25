import React from "react";
import { orders } from "../../../../helpers/dummyData";
import { Container, OrderCard ,Button} from "./style";
import { Link, useNavigate } from "react-router-dom";

const OrderHistory = () => {
    const navigate = useNavigate();
     const goToOrderDetail = () => {
    navigate('/');
  };
  return (
    <Container>
      <h2>Your Orders</h2>
      {orders.map((order) => (
        <OrderCard key={order.id}>
          <div>
            <h3>Order #{order.id}</h3>
            <p>Date: {order.date}</p>
            <p>Status: <strong>{order.status}</strong></p>
            <p>Total: Rs {order.total}</p>
          </div>
          <Button onClick={goToOrderDetail} >View Details</Button>
        </OrderCard>
      ))}
    </Container>
  );
};

export default OrderHistory;

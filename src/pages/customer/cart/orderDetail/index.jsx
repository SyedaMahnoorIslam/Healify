import React from "react";
// import { useParams } from "react-router-dom";
import { orders } from "../../../../helpers/dummyData";
import { Container, Section, StatusBar, InvoiceBtn } from "./style";

const ordersDetail = () => {
//   const { id } = useParams();
//   const orders = orderss.find((o) => o.id === id);

//   if (!orderss) return <h2>orders not found!</h2>;

  const downloadInvoice = () => {
    const element = document.createElement("a");
    const file = new Blob([JSON.stringify(orders, null, 2)], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `${orders.id}_invoice.txt`;
    document.body.appendChild(element);
    element.click();
  };

  return (
    <Container>
      <h2>orders Details - #{orders.id}</h2>

      <StatusBar status={orders.status}>
        <span>{orders.status}</span>
      </StatusBar>

      <Section>
        <h3>Items</h3>
        {orders.items.map((item, index) => (
          <p key={index}>
            {item.name} x{item.qty} - Rs {item.price}
          </p>
        ))}
      </Section>

      <Section>
        <h3>Shipping Info</h3>
        <p>{orders.shipping.name}</p>
        <p>{orders.shipping.address}</p>
        <p>{orders.shipping.phone}</p>
      </Section>

      <Section>
        <h3>Payment</h3>
        <p>{orders.payment}</p>
        <p><strong>Total:</strong> Rs {orders.total}</p>
      </Section>

      <InvoiceBtn onClick={downloadInvoice}>Download Invoice</InvoiceBtn>
    </Container>
  );
};

export default ordersDetail;

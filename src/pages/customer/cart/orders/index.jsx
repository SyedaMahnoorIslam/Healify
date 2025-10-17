import React, { useRef, useState, useEffect } from "react";
import Logo from "../../../../assets/images/logo-image.png";
import {
  Container, OrderCard, Button, ModalOverlay,
  ModalContent, ModalFooter, SaveButton, CancelButton,
  InvoiceContainer, Header, CompanyInfo, InvoiceTitle, InvoiceDetails,
  DetailsRow, Table, TableHead, TableBody, TableRow, TableCell, Footer,
  TotalRow, StatusButton
} from "./style";
import { useCustomer } from "../../useHooks";

const OrderHistory = () => {


  const [orders, setOrders] = useState([]);
  const [isViewDetailOpen, setisViewDetailOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const invoiceRef = useRef();
  const { getOrderHistory,getInvoice } = useCustomer();
  useEffect(() => {
    const fetchOrders = async () => {
      const data = await getOrderHistory();
      console.log("Orders from API:", data);
      if (Array.isArray(data)) {
        setOrders(data);
      }

    };
    fetchOrders();
  }, []);
  useEffect(() => {
    const fetchInvoice = async () => {
      const res = await getInvoice();
      console.log("Orders from API:", res);
   
      
    };
    fetchInvoice();
  }, []);

  const handleDownload = () => {
    const printContents = invoiceRef.current.innerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    window.location.reload();
  };

  return (
    <Container>
      <h2>Your Orders</h2>
      {orders.map((order) => (
        <OrderCard key={order.id}>
          <div className="order-info">
            <h3>Order #{order.id}</h3>
            <p><strong>Date:</strong> {new Date(order.createdAt).toLocaleDateString()}</p>
            <p><strong>Shipping:</strong> {order.shipping_address}</p>
            <p><strong>Delivery Status:</strong> {order.status}</p>
            <p><strong>Payment Status:</strong> {order.payment_status}</p>
            <p><strong>Total:</strong> Rs {order.total_amount}</p>

            {/* Medicine details */}
            {order.items.length > 0 && (
              <>
                 
                <p><strong>Medicine:</strong> {order.items[0].Medicine.name}</p>
                <p><strong>Quantity:</strong> {order.items[0].quantity}</p>
                <p><strong>Price:</strong> Rs {order.items[0].price}</p>
              </>
            )}
          </div>

          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <Button onClick={() => { setSelectedOrder(order); setisViewDetailOpen(true); }}>View Invoice</Button>
            {/* <StatusButton >
              {order.status}
            </StatusButton> */}
          </div>
        </OrderCard>
      ))}

      {/*  Invoice Modal */}
      {isViewDetailOpen && selectedOrder && (
        <ModalOverlay>
          <ModalContent style={{ maxWidth: "700px" }}>
            <InvoiceContainer ref={invoiceRef}>
              <Header>
                <InvoiceTitle><img src={Logo} alt="logo" /> Healify</InvoiceTitle>
                <CompanyInfo>
                  <h3>Invoice</h3>
                  <p>{selectedOrder.shipping_address}</p>
                  <p>healify@example.com</p>
                </CompanyInfo>
              </Header>
              <InvoiceDetails>
                <DetailsRow>
                  <div>
                    <h4>Billed To:</h4>
                    <p>User #{selectedOrder.user_id}</p>
                  </div>
                  <div>
                    <h4>Invoice #</h4>
                    <p>INV-{selectedOrder.id}</p>
                    <h4>Order Placed</h4>
                    <p>{new Date(selectedOrder.createdAt).toLocaleDateString()}</p>
                  </div>
                </DetailsRow>
              </InvoiceDetails>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Description</TableCell>
                    <TableCell>Qty</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Total</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {selectedOrder.items.map((item, i) => (
                    <TableRow key={i}>
                      <TableCell>{item.Medicine.name}</TableCell>
                      <TableCell>{item.quantity}</TableCell>
                      <TableCell>Rs.{item.price}</TableCell>
                      <TableCell>Rs.{item.quantity * item.price}</TableCell>
                    </TableRow>
                  ))}
                  <TotalRow>
                    <TableCell colSpan={3}><strong>Total</strong></TableCell>
                    <TableCell><strong>Rs.{selectedOrder.total_amount}</strong></TableCell>
                  </TotalRow>
                </TableBody>
              </Table>
              <Footer>
                <p>Thank you for Shopping 🙌</p>
              </Footer>
            </InvoiceContainer>
            <ModalFooter>
              <SaveButton onClick={handleDownload}>Download Invoice</SaveButton>
              <CancelButton onClick={() => setisViewDetailOpen(false)}>Close</CancelButton>
            </ModalFooter>
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
  );
};

export default OrderHistory;

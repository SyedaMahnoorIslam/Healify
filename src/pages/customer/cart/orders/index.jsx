
import React, { useRef, useState } from "react";
import { orders as dummyOrders } from "../../../../helpers/dummyData";
import Logo from "../../../../assets/images/logo-image.png";
import {
  Container, OrderCard, Button, ModalOverlay,
  ModalContent, ModalBody, ModalFooter, SaveButton, CancelButton,
  InvoiceContainer, Header, CompanyInfo, InvoiceTitle, InvoiceDetails,
  DetailsRow, Table, TableHead, TableBody, TableRow, TableCell, Footer,
  TotalRow, TrackingContainer, Step, StepIcon, StepLabel, ProgressLine
} from "./style";
import { useNavigate } from "react-router-dom";

const OrderHistory = () => {
  const navigate = useNavigate();

  const [orders, setOrders] = useState(dummyOrders);
  const [isViewDetailOpen, setisViewDetailOpen] = useState(false);
  const [isTrackingOpen, setIsTrackingOpen] = useState(false);
  const [isCancelOpen, setIsCancelOpen] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState(null);

  const [currentStep, setCurrentStep] = useState(2); // Example: 0=pending,1=packed,2=shipped,...

  const items = [
    { description: "Vitamin D3 Drops", quantity: 2, price: 1250 },
    { description: "Aspirin 300mg", quantity: 1, price: 100 },
    { description: "Ibuprofen 400mg", quantity: 3, price: 75 },
  ];

  const subtotal = items.reduce((acc, item) => acc + item.quantity * item.price, 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  const invoiceRef = useRef();
  const handleDownload = () => {
    const printContents = invoiceRef.current.innerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    window.location.reload();
  };

  const handleCancelOrder = () => {
    setOrders(prev =>
      prev.map(order =>
        order.id === selectedOrderId ? { ...order, status: "Cancelled" } : order
      )
    );
    setIsCancelOpen(false);
  };

  return (
    <Container>
      <h2>Your Orders</h2>
      {orders.map((order) => (
        <OrderCard key={order.id}>
          <div className="order-info">
            <h3>Order #{order.id}</h3>
            <p>Date: {order.date}</p>
            <p>Status: <strong>{order.status}</strong></p>
            <p>Total: Rs {order.total}</p>
          </div>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <Button onClick={() => setisViewDetailOpen(true)}>View Details</Button>
            <Button onClick={() => setIsTrackingOpen(true)} style={{ background: "#10B981" }}>Track Order</Button>
            {order.status !== "Delivered" && order.status !== "Cancelled" && (
              <Button
                style={{ background: "#EF4444" }}
                onClick={() => {
                  setSelectedOrderId(order.id);
                  setIsCancelOpen(true);
                }}
              >
                Cancel Order
              </Button>
            )}
          </div>
        </OrderCard>
      ))}

      {/* 🔹 Tracking Modal */}
      {isTrackingOpen && (
        <ModalOverlay>
          <ModalContent>
            <h3 style={{ textAlign: "center", marginBottom: "20px" }}>Track My Order</h3>
            <ModalBody>
              <TrackingContainer>
                {["Packed", "Shipped", "On the Way", "Out for Delivery", "Delivered"].map((label, index) => (
                  <Step key={index} active={index <= currentStep}>
                    <StepIcon active={index <= currentStep}>{index + 1}</StepIcon>
                    <StepLabel>{label}</StepLabel>
                    {index < 4 && <ProgressLine active={index < currentStep} />}
                  </Step>
                ))}
              </TrackingContainer>
            </ModalBody>
            <ModalFooter>
              <CancelButton onClick={() => setIsTrackingOpen(false)}>Close</CancelButton>
            </ModalFooter>
          </ModalContent>
        </ModalOverlay>
      )}

      {/* 🔹 Invoice Modal */}
      {isViewDetailOpen && (
        <ModalOverlay>
          <ModalContent style={{ maxWidth: "700px" }}>
            <InvoiceContainer ref={invoiceRef}>
              <Header>
                <InvoiceTitle><img src={Logo} alt="logo" />Healify</InvoiceTitle>
                <CompanyInfo>
                  <h3>Invoice</h3>
                  <p>Business St, Karachi</p>
                  <p>healify@example.com</p>
                </CompanyInfo>
              </Header>
              <InvoiceDetails>
                <DetailsRow>
                  <div>
                    <h4>Billed To:</h4>
                    <p>WanFateh</p>
                    <p>Rahim Yar Khan, PK</p>
                  </div>
                  <div>
                    <h4>Invoice #</h4>
                    <p>INV-2025-01</p>
                    <h4>Order Placed</h4>
                    <p>22 Aug, 2025</p>
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
                  {items.map((item, i) => (
                    <TableRow key={i}>
                      <TableCell>{item.description}</TableCell>
                      <TableCell>{item.quantity}</TableCell>
                      <TableCell>Rs.{item.price}</TableCell>
                      <TableCell>Rs.{item.quantity * item.price}</TableCell>
                    </TableRow>
                  ))}
                  <TotalRow>
                    <TableCell colSpan={3}>Subtotal</TableCell>
                    <TableCell>Rs.{subtotal}</TableCell>
                  </TotalRow>
                  <TotalRow>
                    <TableCell colSpan={3}>Tax (2%)</TableCell>
                    <TableCell>Rs.{tax}</TableCell>
                  </TotalRow>
                  <TotalRow>
                    <TableCell colSpan={3}><strong>Total</strong></TableCell>
                    <TableCell><strong>Rs.{total}</strong></TableCell>
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

      {/* 🔹 Cancel Order Confirmation Modal */}
      {isCancelOpen && (
        <ModalOverlay>
          <ModalContent>
            <h3 style={{ textAlign: "center", marginBottom: "20px" }}>Cancel Order</h3>
            <ModalBody>
              <p>Are you sure you want to cancel this order?</p>
            </ModalBody>
            <ModalFooter>
              <SaveButton onClick={handleCancelOrder}>Yes, Cancel</SaveButton>
              <CancelButton onClick={() => setIsCancelOpen(false)}>No</CancelButton>
            </ModalFooter>
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
  );
};

export default OrderHistory;

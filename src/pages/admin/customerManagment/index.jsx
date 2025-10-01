

import React, { useEffect, useState } from "react";
import {
  Container,
  Title,
  Table,
  TableHeader,
  TableRow,
  TableData,
  ActionButton,
  ModalOverlay,
  ModalContent,
  CloseButton,
  ModalSection,
  PrescriptionImage,
} from "./style";
import { UseAdmin } from "../useHooks";

const CustomerManagement = () => {
  const { getCustomers, getCustomersbyid } = UseAdmin();
  const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [loadingDetails, setLoadingDetails] = useState(false);

  // Fetch all customers
  useEffect(() => {
    const fetchCustomers = async () => {
      const data = await getCustomers();
      setCustomers(data);
    };
    fetchCustomers();
  }, []);

  // Handle view details click
  const handleViewDetails = async (id) => {
    setLoadingDetails(true);
    const data = await getCustomersbyid(id);
    if (data) setSelectedCustomer(data);
    setLoadingDetails(false);
  };

  return (
    <Container>
      <Title>Customer Management</Title>

      <Table>
        <thead>
          <TableRow>
            <TableHeader>Name</TableHeader>
            <TableHeader>Email</TableHeader>
            <TableHeader>Phone</TableHeader>
            <TableHeader>Actions</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {customers.length > 0 ? (
            customers.map((cust) => (
              <TableRow key={cust.id}>
                <TableData>{cust.name}</TableData>
                <TableData>{cust.email}</TableData>
                <TableData>{cust.phone}</TableData>
                <TableData>
                  <ActionButton onClick={() => handleViewDetails(cust.id)}>
                    View Details
                  </ActionButton>
                </TableData>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableData colSpan={4}>No customers found</TableData>
            </TableRow>
          )}
        </tbody>
      </Table>

      {selectedCustomer && (
        <ModalOverlay>
          <ModalContent>
            <CloseButton onClick={() => setSelectedCustomer(null)}>×</CloseButton>
            <h2>{selectedCustomer.name}</h2>
            <p><strong>Email:</strong> {selectedCustomer.email}</p>
            <p><strong>Phone:</strong> {selectedCustomer.phone}</p>
            <p><strong>DOB:</strong> {selectedCustomer.dob}</p>
            <p><strong>Gender:</strong> {selectedCustomer.gender}</p>

            <ModalSection>
              <h3>Addresses</h3>
              {selectedCustomer.addresses?.length > 0 ? (
                <ul>
                  {selectedCustomer.addresses.map((addr) => (
                    <li key={addr.id}>
                      {addr.street}, {addr.city}, {addr.state} - {addr.zip_code}, {addr.country}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No addresses available</p>
              )}
            </ModalSection>

            <ModalSection>
              <h3>Orders</h3>
              {selectedCustomer.Orders?.length > 0 ? (
                <ul>
                  {selectedCustomer.Orders.map((order) => (
                    <li key={order.id}>
                      Order ID: {order.id}, Amount: Rs.{order.total_amount}, Status: {order.status}, Payment: {order.payment_status}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No orders available</p>
              )}
            </ModalSection>

            <ModalSection>
              <h3>Prescriptions</h3>
              {selectedCustomer.Prescriptions?.length > 0 ? (
                <ul>
                  {selectedCustomer.Prescriptions.map((presc) => (
                    <li key={presc.id}>
                      Status: {presc.status}, Notes: {presc.pharmacist_notes}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No prescriptions uploaded</p>
              )}
            </ModalSection>
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
  );
};

export default CustomerManagement;

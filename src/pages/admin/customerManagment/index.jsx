import React, { useEffect, useState } from "react";
import Prescription1 from '../../../assets/images/doc-prescription.jpeg';
import Prescription2 from '../../../assets/images/prescription2.jpeg';

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
  const { getCustomers } = UseAdmin();
  const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  // const customers = [
  //   {
  //     id: 1,
  //     name: "Wan Fateh",
  //     email: "wan.fateh@example.com",
  //     phone: "+92 300 1234567",
  //     history: ["Order #101 - Delivered", "Order #115 - Cancelled"],
  //     prescriptions: [
  //       { Prescription1 },
  //       { Prescription2 },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     name: "Taliya Murad",
  //     email: "taliya.murad@example.com",
  //     phone: "+92 322 9876543",
  //     history: ["Order #120 - Shipped"],
  //     prescriptions: { Prescription1 },
  //   },
  // ];
  useEffect(() => {
    const fetchAgents = async () => {
      const data = await getCustomers();
      console.log("API Response:", data); 
      setCustomers(data); 
    };
    fetchAgents();
  }, []);

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
          {customers && customers.length > 0 ? (
            customers.map((cust) => (
              <TableRow key={cust.id}>
                <TableData>{cust.name}</TableData>
                <TableData>{cust.email}</TableData>
                <TableData>{cust.phone}</TableData>
                <TableData>
                  <ActionButton onClick={() => setSelectedCustomer(cust)}>
                    View Details
                  </ActionButton>
                  <ActionButton>Email</ActionButton>
                  <ActionButton>Call</ActionButton>
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
            <ModalSection>
              <h3>Order History</h3>
              <ul>
                {selectedCustomer?.history?.length > 0 ? (
                  selectedCustomer.history.map((h, index) => (
                    <li key={index}>{h}</li>
                  ))
                ) : (
                  <li>No history available</li>
                )}
              </ul>
            </ModalSection>

            <ModalSection>
              <h3>Prescriptions</h3>
              <div>
                {selectedCustomer?.prescriptions?.length > 0 ? (
                  selectedCustomer.prescriptions.map((img, index) => (
                    <PrescriptionImage key={index} src={img} alt="Prescription" />
                  ))
                ) : (
                  <p>No prescriptions uploaded</p>
                )}
              </div>
            </ModalSection>
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
  );
};

export default CustomerManagement;

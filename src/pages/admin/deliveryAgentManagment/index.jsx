import React, { useState } from "react";
import {
  PageWrapper, Title, Button, Table, Th, Td, Tr,
  ActionBtn, ModalOverlay, ModalContent, Input,
  UploadLabel, PreviewImage
} from "./style";

export default function DeliveryAgentManagement() {
  const [agents, setAgents] = useState([
    { id: 1, name: "Ali Khan", phone: "0301-1234567", city: "Lahore", photo: "" },
    { id: 2, name: "Ahmed Raza", phone: "0302-9876543", city: "Karachi", photo: "" },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [showDetails, setShowDetails] = useState(null);

  const [newAgent, setNewAgent] = useState({
    name: "", phone: "", city: "", photo: ""
  });

  const handleRegister = () => {
    if (!newAgent.name || !newAgent.phone || !newAgent.city) return;
    setAgents([...agents, { id: Date.now(), ...newAgent }]);
    setNewAgent({ name: "", phone: "", city: "", photo: "" });
    setShowForm(false);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setNewAgent({ ...newAgent, photo: imageURL });
    }
  };

  return (
    <PageWrapper>
      <Title>Delivery Agent Management</Title>
      <Button onClick={() => setShowForm(true)}>+ Register New Agent</Button>

      {/* Table */}
      <Table>
        <thead>
          <Tr>
            <Th>Photo</Th>
            <Th>Name</Th>
            <Th>Phone</Th>
            <Th>City</Th>
            <Th>Actions</Th>
          </Tr>
        </thead>
        <tbody>
          {agents.map((agent) => (
            <Tr key={agent.id}>
              <Td>
                {agent.photo ? (
                  <PreviewImage src={agent.photo} alt={agent.name} />
                ) : (
                  "No Photo"
                )}
              </Td>
              <Td>{agent.name}</Td>
              <Td>{agent.phone}</Td>
              <Td>{agent.city}</Td>
              <Td>
                <ActionBtn onClick={() => setShowDetails(agent)}>View</ActionBtn>
              </Td>
            </Tr>
          ))}
        </tbody>
      </Table>

      {/* Register Form Modal */}
      {showForm && (
        <ModalOverlay>
          <ModalContent>
            <h2>Register Delivery Agent</h2>
            {newAgent.photo && <PreviewImage src={newAgent.photo} alt="preview" />}
            <UploadLabel>Upload Photo:</UploadLabel>
            <Input type="file" accept="image/*" onChange={handleFileChange} />

            <Input
              placeholder="Full Name"
              value={newAgent.name}
              onChange={(e) => setNewAgent({ ...newAgent, name: e.target.value })}
            />
            <Input
              placeholder="Phone Number"
              value={newAgent.phone}
              onChange={(e) => setNewAgent({ ...newAgent, phone: e.target.value })}
            />
            <Input
              placeholder="City"
              value={newAgent.city}
              onChange={(e) => setNewAgent({ ...newAgent, city: e.target.value })}
            />
            <Button onClick={handleRegister}>Save</Button>{" "}
            <Button onClick={() => setShowForm(false)} style={{ background: "gray" }}>Cancel</Button>
          </ModalContent>
        </ModalOverlay>
      )}

      {/* View Details Modal */}
      {showDetails && (
        <ModalOverlay>
          <ModalContent>
            <h2>Agent Details</h2>
            {showDetails.photo && <PreviewImage src={showDetails.photo} alt={showDetails.name} />}
            <p><b>Name:</b> {showDetails.name}</p>
            <p><b>Phone:</b> {showDetails.phone}</p>
            <p><b>City:</b> {showDetails.city}</p>
            <Button onClick={() => setShowDetails(null)}>Close</Button>
          </ModalContent>
        </ModalOverlay>
      )}
    </PageWrapper>
  );
}

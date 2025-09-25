import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  PageWrapper, Title, Button, Table, Th, Td, Tr,
  ActionBtn, ModalOverlay, ModalContent, Input,
} from "./style";
import { UseAdmin } from "../useHooks";

export default function DeliveryAgentManagement() {
  const { deliveryAgentRegister,getDeliveryAgents } = UseAdmin();
  const [showForm, setShowForm] = useState(false);
  const [showDetails, setShowDetails] = useState(null);
    const [deliveryAgent, setDeliveryAgent] = useState([]);
  
  // React Hook Form setup
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  // Submit Handler
  const onSubmit = (params) => {
  console.log("Form Submitted:", params);
  deliveryAgentRegister({
    ...params,
    role: "delivery_agent",
  });
};
 useEffect(() => {
    const fetchAgents = async () => {
      const data = await getDeliveryAgents();
      console.log("API Response:", data); 
      setDeliveryAgent(data); 
    };
    fetchAgents();
  }, []);
  return (
    <PageWrapper>
      <Title>Delivery Agent Management</Title>
      <Button onClick={() => setShowForm(true)}>+ Register New Agent</Button>

      {/* Table */}
      <Table>
        <thead>
          <Tr>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Phone</Th>
            {/* <Th>Password</Th> */}
            <Th>Role</Th>
            <Th>Actions</Th>
          </Tr>
        </thead>
        <tbody>
          {deliveryAgent.map((agent) => (
            <Tr key={agent.id}>
              <Td>{agent.name}</Td>
              <Td>{agent.email}</Td>
              <Td>{agent.phone}</Td>
              {/* <Td>{agent.password}</Td> */}
              <Td>{"Delivery Agent"}</Td>
              <Td>
                <ActionBtn onClick={() => setShowDetails(agent)}>View</ActionBtn>
              </Td>
            </Tr>
          ))}
        </tbody>
      </Table>

      {/* Register Popup Modal */}
      {showForm && (
        <ModalOverlay>
          <ModalContent>
            <h2>Register Delivery Agent</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                placeholder="Full Name"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}

              <Input
                placeholder="Email"
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" }
                })}
              />
              {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}

              <Input
                placeholder="Phone Number"
                {...register("phone", {
                  required: "Phone number is required",
                  minLength: { value: 11, message: "Phone must be at least 11 digits" }
                })}
              />
              {errors.phone && <p style={{ color: "red" }}>{errors.phone.message}</p>}

              <Input
                placeholder="Password"
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "Password must be at least 6 characters" }
                })}
              />
              {errors.password && <p style={{ color: "red" }}>{errors.password.message}</p>}

              {/* Role is fixed */}
              <Input value="delivery_agent" readOnly {...register("role")} />

              <Button type="submit">Save</Button>{" "}
              <Button
                type="button"
                onClick={() => { setShowForm(false); reset(); }}
                style={{ background: "gray" }}
              >
                Cancel
              </Button>
            </form>
          </ModalContent>
        </ModalOverlay>
      )}

      {/* View Details Modal */}
      {showDetails && (
        <ModalOverlay>
          <ModalContent>
            <h2>Agent Details</h2>
            <p><b>Name:</b> {showDetails.name}</p>
            <p><b>Email:</b> {showDetails.email}</p>
            <p><b>Phone:</b> {showDetails.phone}</p>
            <p><b>Password:</b> {showDetails.password}</p>
            <p><b>Role:</b> {showDetails.role}</p>
            <Button onClick={() => setShowDetails(null)}>Close</Button>
          </ModalContent>
        </ModalOverlay>
      )}
    </PageWrapper>
  );
}

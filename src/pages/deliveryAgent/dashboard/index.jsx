// src/pages/DeliveryDashboard.js
import React, { useState } from "react";
import{
DashboardWrapper,LHeaderSection,RHeaderSection,Greeting,Subtitle,TaskList,TaskCard,TaskTitle,TaskSubtitle ,StatusBadge,
ModalDetail,ModalOverlay,ModalContent,ModalHeader,ButtonRow,Button,GreetingSection,

} from './style'
import DateComponent from "../../../components/dateComponent";
export default function DeliveryDashboard() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      orderId: "ORD-101",
      customer: "Ali Khan",
      phone: "0301-1234567",
      address: "Street 5, DHA, Lahore",
      status: "Pending",
    },
    {
      id: 2,
      orderId: "ORD-102",
      customer: "Sara Ahmed",
      phone: "0333-9876543",
      address: "Model Town, Lahore",
      status: "Picked",
    },
    {
      id: 3,
      orderId: "ORD-103",
      customer: "Bilal Hussain",
      phone: "0322-1112233",
      address: "Johar Town, Lahore",
      status: "Delivered",
    },
  ]);

  const [selectedTask, setSelectedTask] = useState(null);

  // Update Status
  const updateStatus = (id, newStatus) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, status: newStatus } : t))
    );
    setSelectedTask(null); 
  };

  return (
    <DashboardWrapper>
      <div>
      <GreetingSection>
      <LHeaderSection>
        <div>
          <Greeting>Hello, WanFateh!</Greeting>
          <Subtitle>Here are your delivery tasks today</Subtitle>
        </div>
      </LHeaderSection>
      <RHeaderSection>
        <div>
          <DateComponent/>
        </div>
      </RHeaderSection>
      </GreetingSection>
      </div>
      <TaskList>
        {tasks.map((task) => (
          <TaskCard key={task.id} onClick={() => setSelectedTask(task)}>
            <div>
              <TaskTitle>Order #{task.orderId}</TaskTitle>
              <TaskSubtitle>{task.customer}</TaskSubtitle>
            </div>
            <StatusBadge status={task.status}>{task.status}</StatusBadge>
          </TaskCard>
        ))}
      </TaskList>
      {selectedTask && (
        <ModalOverlay onClick={() => setSelectedTask(null)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalHeader>Delivery Task Details</ModalHeader>
            <ModalDetail>
              <b>Order ID:</b> {selectedTask.orderId}
            </ModalDetail>
            <ModalDetail>
              <b>Customer:</b> {selectedTask.customer}
            </ModalDetail>
            <ModalDetail>
              <b>Phone:</b> {selectedTask.phone}
            </ModalDetail>
            <ModalDetail>
              <b>Address:</b> {selectedTask.address}
            </ModalDetail>
            <ModalDetail>
              <b>Status:</b> {selectedTask.status}
            </ModalDetail>

            <ButtonRow>
              {selectedTask.status !== "Picked" && selectedTask.status !== "Delivered" && (
                <Button bg="var(--color-accent-yellow)" onClick={() => updateStatus(selectedTask.id, "Picked")}>
                  Mark Picked
                </Button>
              )}
              {selectedTask.status !== "Delivered" && (
                <Button bg="var(--color-accent-green)" onClick={() => updateStatus(selectedTask.id, "Delivered")}>
                  Mark Delivered
                </Button>
              )}
              <Button bg="#718096" onClick={() => setSelectedTask(null)}>
                Close
              </Button>
            </ButtonRow>
          </ModalContent>
        </ModalOverlay>
      )}
    </DashboardWrapper>
  );
}
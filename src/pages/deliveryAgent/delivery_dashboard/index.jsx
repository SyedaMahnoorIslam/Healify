// import  { useEffect, useState } from "react";
// import {
//   DashboardWrapper,
//   LHeaderSection,
//   RHeaderSection,
//   Greeting,
//   Subtitle,
//   TaskList,
//   TaskCard,
//   TaskTitle,
//   TaskSubtitle,
//   StatusBadge,
//   ModalDetail,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ButtonRow,
//   Button,
//   GreetingSection,
//   DAImage,
// } from "./style";
// import { UseProfile } from "../../../components/useHooks";
// import { UseDeliveryAgent } from "../useHooks";
// import DateComponent from "../../../components/dateComponent";
// import DeliveryAgentPic from "../../../assets/images/Delivery-Agent1.png";
// function DeliveryDashboard() {
//   const [tasks, setTasks] = useState([]);
//   const [selectedTask, setSelectedTask] = useState(null);
//   const { getProfile } = UseProfile();
//   const { getTask } = UseDeliveryAgent();
//   const [profile, setProfile] = useState(null);

//   // Fetch Profile
//   const fetchProfile = async () => {
//     const res = await getProfile();
//     if (res) setProfile(res);
//   };

//   // Fetch Tasks
//   const fetchTasks = async () => {
//     const res = await getTask();
//     if (res) setTasks(res);
//   };

//   useEffect(() => {
//     fetchProfile();
//     fetchTasks();
//   }, []);

//   const updateStatus = (id, newStatus) => {
//     setTasks((prev) =>
//       prev.map((t) => (t.id === id ? { ...t, status: newStatus } : t))
//     );
//     setSelectedTask(null);
//   };

//   return (
//     <DashboardWrapper>
//       <GreetingSection>
//         <LHeaderSection>
//           <DAImage>
//             <img src={DeliveryAgentPic} alt="Delivery Agent" />
//           </DAImage>
//           <div>
//             <Greeting>
//               Hello, {profile?.name ? profile.name : "Loading..."}!
//             </Greeting>
//             <Subtitle>Have a Good Day at Work!</Subtitle>
//           </div>
//         </LHeaderSection>
//         <RHeaderSection>
//           <DateComponent />
//         </RHeaderSection>
//       </GreetingSection>

//       {/* ✅ Render tasks from API */}
//       <TaskList>
//         {tasks.length > 0 ? (
//           tasks.map((task) => (
//             <TaskCard key={task.id} onClick={() => setSelectedTask(task)}>
//               <div>
//                 <TaskTitle>Order #{task.id}</TaskTitle>
//                 <TaskSubtitle>{task.shipping_address}</TaskSubtitle>
//               </div>
//               <StatusBadge status={task.status}>{task.status}</StatusBadge>
//             </TaskCard>
//           ))
//         ) : (
//           <p>No tasks assigned yet.</p>
//         )}
//       </TaskList>

//       {/* ✅ Modal */}
//       {selectedTask && (
//         <ModalOverlay onClick={() => setSelectedTask(null)}>
//           <ModalContent onClick={(e) => e.stopPropagation()}>
//             <ModalHeader>Delivery Task Details</ModalHeader>
//             <ModalDetail>
//               <b>Order ID:</b> {selectedTask.id}
//             </ModalDetail>
//             <ModalDetail>
//               <b>Address:</b> {selectedTask.shipping_address}
//             </ModalDetail>
//             <ModalDetail>
//               <b>Status:</b> {selectedTask.status}
//             </ModalDetail>
//             <ModalDetail>
//               <b>Payment:</b> {selectedTask.payment_status}
//             </ModalDetail>
//             <ModalDetail>
//               <b>Total:</b> Rs. {selectedTask.total_amount}
//             </ModalDetail>

//             <ButtonRow>
//               {selectedTask.status !== "Picked" &&
//                 selectedTask.status !== "Delivered" && (
//                   <Button
//                     bg="var(--color-accent-yellow)"
//                     onClick={() => updateStatus(selectedTask.id, "Picked")}
//                   >
//                     Mark Picked
//                   </Button>
//                 )}
//               {selectedTask.status !== "Delivered" && (
//                 <Button
//                   bg="var(--color-accent-green)"
//                   onClick={() => updateStatus(selectedTask.id, "Delivered")}
//                 >
//                   Mark Delivered
//                 </Button>
//               )}
//               <Button bg="#718096" onClick={() => setSelectedTask(null)}>
//                 Close
//               </Button>
//             </ButtonRow>
//           </ModalContent>
//         </ModalOverlay>
//       )}
//     </DashboardWrapper>
//   );
// }
// export default DeliveryDashboard;
import { useEffect, useState } from "react";
import {
  DashboardWrapper,
  LHeaderSection,
  RHeaderSection,
  Greeting,
  Subtitle,
  TaskList,
  TaskCard,
  TaskTitle,
  TaskSubtitle,
  StatusBadge,
  ModalDetailRow,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ButtonRow,
  Button,
  GreetingSection,
  DAImage,
  StatusSelect,
} from "./style";
import { UseProfile } from "../../../components/useHooks";
import { UseDeliveryAgent } from "../useHooks";
import DateComponent from "../../../components/dateComponent";
import DeliveryAgentPic from "../../../assets/images/Delivery-Agent1.png";
import { ApiEndPoints } from '../../../libs/http-service/api/endPoint';
import { toast } from "react-toastify";


function DeliveryDashboard() {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [newStatus, setNewStatus] = useState(""); 
  const { getProfile } = UseProfile();
  const { getTask } = UseDeliveryAgent();
  const [profile, setProfile] = useState(null);

  // Fetch Profile
  const fetchProfile = async () => {
    const res = await getProfile();
    if (res) setProfile(res);
  };

  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await getTask();
    if (res) setTasks(res);
  };

  useEffect(() => {
    fetchProfile();
    fetchTasks();
  }, []);

  // Update Status API
  const handleSaveStatus = async () => {
    if (!newStatus || newStatus === selectedTask.status) {
      toast.info("Please select a different status to update.");
      return;
    }
    try {
      const body = { status: newStatus };
      const res = await ApiEndPoints.orderStatusUpdate(selectedTask.id, body);
      if (res) {
        toast.success("Order status updated successfully!");
        fetchTasks();
        setSelectedTask(null);
      } else {
        toast.error("Failed to update order status");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error updating order status");
    }
  };

  return (
    <DashboardWrapper>
      <GreetingSection>
        <LHeaderSection>
          <DAImage>
            <img src={DeliveryAgentPic} alt="Delivery Agent" />
          </DAImage>
          <div>
            <Greeting>
              Hello, {profile?.name ? profile.name : "Loading..."}!
            </Greeting>
            <Subtitle>Have a Good Day at Work!</Subtitle>
          </div>
        </LHeaderSection>
        <RHeaderSection>
          <DateComponent />
        </RHeaderSection>
      </GreetingSection>

      {/* Render tasks */}
      <TaskList>
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <TaskCard key={task.id}>
              <div>
                <TaskTitle>Order #{task.id}</TaskTitle>
                <TaskSubtitle>{task.shipping_address}</TaskSubtitle>
              </div>
              <StatusBadge status={task.status}>{task.status}</StatusBadge>
              <Button
                bg="var(--color-primary)"
                onClick={() => {
                  setSelectedTask(task);
                  setNewStatus(task.status);
                }}
              >
                View Details
              </Button>
            </TaskCard>
          ))
        ) : (
          <p>No tasks assigned yet.</p>
        )}
      </TaskList>

      {/* Modal */}
      {selectedTask && (
        <ModalOverlay onClick={() => setSelectedTask(null)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalHeader>Delivery Task Details</ModalHeader>

            <ModalDetailRow>
              <label>Order ID:</label> <span>{selectedTask.id}</span>
            </ModalDetailRow>
            <ModalDetailRow>
              <label>Customer Name:</label> <span>{selectedTask.customer_name || "N/A"}</span>
            </ModalDetailRow>
            <ModalDetailRow>
              <label>Email:</label> <span>{selectedTask.customer_email || "N/A"}</span>
            </ModalDetailRow>
            <ModalDetailRow>
              <label>Phone:</label> <span>{selectedTask.customer_phone || "N/A"}</span>
            </ModalDetailRow>
            <ModalDetailRow>
              <label>Address:</label> <span>{selectedTask.shipping_address}</span>
            </ModalDetailRow>
            <ModalDetailRow>
              <label>Payment:</label> <span>{selectedTask.payment_status}</span>
            </ModalDetailRow>
            <ModalDetailRow>
              <label>Total:</label> <span>Rs. {selectedTask.total_amount}</span>
            </ModalDetailRow>

            {/* Status dropdown */}
            <ModalDetailRow>
              <label>Update Status:</label>
              <StatusSelect
                value={newStatus}
                onChange={(e) => setNewStatus(e.target.value)}
              >
                <option value="Shipped">Shipped</option>
                <option value="Delivered">Delivered</option>
                <option value="Cancelled">Cancelled</option>
              </StatusSelect>
            </ModalDetailRow>

            {/* Save & Close buttons */}
            <ButtonRow>
              <Button bg="var(--color-accent-green)" onClick={handleSaveStatus}>
                Save Status
              </Button>
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

export default DeliveryDashboard;

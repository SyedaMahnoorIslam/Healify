import React, { useState } from "react";
import { FaCheckCircle, FaTimesCircle, FaPhone, FaEnvelope } from "react-icons/fa";
import DocPrescription from '../../../assets/images/doc-prescription.jpeg'
import DocPrescription2 from '../../../assets/images/prescription2.jpeg'

import {
  Container,
  Main,
  DashboardGrid,
  Card,
  CardHeader,
  FadeIn,
  CommentBox,
  ButtonGroup,
  ActionButton,
  ContactLinks,
  Image
} from "./style";
import { toast } from "react-toastify";


const prescriptions = [
  {
    id: 1,
    customer: "Wan Fateh",
    email: "pm@malysia.com",
    phone: "+1234567890",
    prescription: DocPrescription,
  },
  {
    id: 2,
    customer: "Taliya Murad",
    email: "conartist@example.com",
    phone: "+9876543210",
    prescription: DocPrescription2,
  },
];

export default function PrescriptionManagement() {
  const [comments, setComments] = useState({});

  const handleCommentChange = (id, value) => {
    setComments({ ...comments, [id]: value });
  };

  const handleApprove = () => {
     toast.success("Prescription Approved ✅", { autoClose: 2000 });
  };

  const handleReject = () => {
     toast.warning("Prescription Rejected ❌", { autoClose: 2000 });
  };

  return (
    <Container>
      <Main>
        <FadeIn>
          <h1>Prescription Management</h1>
          <DashboardGrid>
            {prescriptions.map((item) => (
              <Card key={item.id}>
                <CardHeader>
                  Prescription #{item.id} - {item.customer}
                </CardHeader>
                 <Image>
                        <img style={{ margin: "0.5rem 0" }} src={item.prescription}/>
                 </Image>
                

                <CommentBox
                  placeholder="Add comment..."
                  value={comments[item.id] || ""}
                  onChange={(e) => handleCommentChange(item.id, e.target.value)}
                  required
                />
                <ButtonGroup>
                  <ActionButton
                    bg="var(--color-accent-green)"
                    onClick={handleApprove}
                  >
                    <FaCheckCircle /> Approve
                  </ActionButton>

                  <ActionButton
                    bg="var(--color-accent-pink)"
                    onClick={handleReject}
                  >
                    <FaTimesCircle /> Reject
                  </ActionButton>
                </ButtonGroup>

                <ContactLinks>
                  <a href={`tel:${item.phone}`}>
                    <FaPhone /> Call
                  </a>
                  <a href={`mailto:${item.email}`}>
                    <FaEnvelope /> Email
                  </a>
                </ContactLinks>
              </Card>
            ))}
          </DashboardGrid>
        </FadeIn>
      </Main>
    </Container>
  );
}

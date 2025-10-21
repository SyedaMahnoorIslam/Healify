
import React, { useEffect, useState } from "react";
import { FaCheckCircle, FaTimesCircle, FaPhone, FaEnvelope } from "react-icons/fa";
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
  Image,
  StatusBadge
} from "./style";
import { toast } from "react-toastify";
import { UseAdmin } from "../useHooks";

export default function PrescriptionManagement() {
  const { getPrescription, prescriptionStatus } = UseAdmin();
  const [prescriptions, setPrescriptions] = useState([]);
  const [comments, setComments] = useState({});

  const BASE_URL = process.env.REACT_APP_API_URL;

  const fetchPrescriptions = async () => {
    try {
      const data = await getPrescription();
      if (Array.isArray(data)) setPrescriptions(data);
      else toast.error("No prescriptions found");
    } catch (error) {
      toast.error("Failed to fetch prescriptions");
    }
  };

  useEffect(() => {
    fetchPrescriptions();
  }, []);

  const handleCommentChange = (id, value) => {
    setComments({ ...comments, [id]: value });
  };

  const handleStatusUpdate = async (id, status) => {
    const comment = comments[id]?.trim();
    if (!comment) {
      toast.error("Please add a comment before updating status");
      return;
    }

    try {
      const body = {
        status,
        pharmacist_notes: comment
      };
      const res = await prescriptionStatus(id, body);
      if (res) {
        toast.success(`Prescription #${id} ${status}`);
        
        setPrescriptions(prev =>
          prev.map(p =>
            p.id === id ? { ...p, status, pharmacist_notes: comment } : p
          )
        );
        setComments({ ...comments, [id]: "" }); 
      }
    } catch (error) {
      toast.error(`Failed to ${status} prescription`);
      console.error(error);
    }
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
                  Prescription #{item.id} - {item.User?.name || "Unknown"}
                </CardHeader>

                {/* Status */}
                <StatusBadge status={item.status}>{item.status}</StatusBadge>

                {/* Images */}
                {item.images && item.images.length > 0 ? (
                  item.images.map(img => (
                    <Image key={img.id}>
                      <img
                        src={`${BASE_URL}/${img.file_path}`}
                        alt={`Prescription #${item.id}`}
                      />
                    </Image>
                  ))
                ) : (
                  <p>No images uploaded</p>
                )}

                {/* Pharmacist notes */}
                {item.pharmacist_notes && (
                  <p style={{ color: "red", fontStyle: "italic" }}>
                    Notes: {item.pharmacist_notes}
                  </p>
                )}

                {/*comment box & buttons show only if status is pending */}
                {item.status === "Pending" && (
                  <>
                    <CommentBox
                      placeholder="Add comment..."
                      value={comments[item.id] || ""}
                      onChange={(e) => handleCommentChange(item.id, e.target.value)}
                    />

                    <ButtonGroup>
                      <ActionButton
                        bg="var(--color-accent-green)"
                        onClick={() => handleStatusUpdate(item.id, "Approved")}
                      >
                        <FaCheckCircle /> Approve
                      </ActionButton>

                      <ActionButton
                        bg="var(--color-accent-pink)"
                        onClick={() => handleStatusUpdate(item.id, "Rejected")}
                      >
                        <FaTimesCircle /> Reject
                      </ActionButton>
                    </ButtonGroup>
                  </>
                )}

                {/* Contact Links */}
                <ContactLinks>
                  <a href={`tel:${item.User?.phone || ""}`}>
                    <FaPhone /> Call
                  </a>
                  <a href={`mailto:${item.User?.email || ""}`}>
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

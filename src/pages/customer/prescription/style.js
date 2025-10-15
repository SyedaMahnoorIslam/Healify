
import styled from "styled-components";

/* ====== Layout Wrapper ====== */
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 1.5rem;
  background-color: var(--color-section);
  min-height: 100vh;
  transition: background-color 0.3s ease;
`;

/* ====== Upload Card ====== */
export const UploadCard = styled.div`
  background: var(--color-bg);
  border-radius: 1rem;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
  padding: 2rem;
  max-width: 550px;
  width: 100%;
  text-align: center;
  margin-bottom: 3rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
  }
`;

export const Title = styled.h2`
  color: var(--color-text-primary);
  margin-bottom: 0.5rem;
  font-weight: 700;
  font-family: var(--font-primary);
`;

export const Description = styled.p`
  color: var(--color-text-secondary);
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
  font-family: var(--font-secondary);
`;

export const UploadArea = styled.div`
  border: 2px dashed var(--color-border);
  border-radius: 1rem;
  padding: 2rem;
  cursor: pointer;
  transition: all 0.3s;
  margin-bottom: 1.5rem;
  background: var(--color-section);

  &:hover {
    border-color: var(--color-primary);
    background-color: var(--color-accent-yellow);
  }

  span {
    display: block;
    color: var(--color-text-secondary);
    font-size: 0.95rem;
    margin-top: 0.5rem;
  }
`;

export const UploadLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const HiddenInput = styled.input`
  display: none;
`;

export const UploadButton = styled.button`
  background-color: var(--color-primary);
  color: white;
  font-weight: 600;
  padding: 0.75rem 1.75rem;
  border: none;
  border-radius: 0.75rem;
  cursor: pointer;
  font-family: var(--font-secondary);
  transition: 0.3s;

  &:hover {
    background-color: var(--color-primary-light);
    transform: translateY(-2px);
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

/* ====== Status Section ====== */
export const StatusWrapper = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  align-items: center;
  color: var(--color-text-secondary);
`;

export const StatusBadge = styled.span`
  padding: 0.5rem 1.2rem;
  border-radius: 2rem;
  font-weight: 600;
  font-size: 0.9rem;
  text-transform: uppercase;
  background-color: ${({ status }) =>
    status === "Approved"
      ? "rgba(127, 216, 177, 0.25)" // mint-green pastel
      : status === "Rejected"
      ? "rgba(220, 53, 69, 0.15)" // soft red pastel
      : "rgba(255, 243, 201, 0.4)" // yellow pastel
  };
  color: ${({ status }) =>
    status === "Approved"
      ? "#16a34a"
      : status === "Rejected"
      ? "var(--color-alert)"
      : "#d97706"};
  border: 1px solid
    ${({ status }) =>
      status === "Approved"
        ? "var(--color-accent-green)"
        : status === "Rejected"
        ? "var(--color-alert)"
        : "var(--color-accent-yellow)"};
`;

/* ====== Uploaded Prescriptions Section ====== */
export const SectionCard = styled.div`
  background: var(--color-bg);
  border-radius: 1rem;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
  padding: 2rem;
  width: 100%;
  max-width: 900px;
`;

export const SectionTitle = styled.h3`
  color: var(--color-text-primary);
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-align: center;
`;

/* ====== Prescription Cards Grid ====== */
export const PrescriptionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`;

export const PrescriptionCard = styled.div`
  background-color: var(--color-section);
  border: 1px solid var(--color-border);
  border-radius: 0.75rem;
  padding: 1rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: 0.3s;

  &:hover {
    transform: translateY(-4px);
    background-color: var(--color-bg);
  }
`;

export const PrescriptionImage = styled.img`
  width: 100%;
  max-width: 200px;
  height: 160px;
  object-fit: cover;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid var(--color-border);
`;

export const Comment = styled.div`
  margin-bottom: 0.5rem;

  strong {
    color: var(--color-text-primary);
  }

  p {
    color: var(--color-text-secondary);
    font-size: 0.9rem;
  }
`;
export const Image= styled.div`
 /* display: flex;
 align-items: center;
 justify-content: center;
 img{
    width: 80%;
 } */
`
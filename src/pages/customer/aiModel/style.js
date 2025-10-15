
import styled from "styled-components";

export const Wrapper = styled.div` 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--color-section);
  gap: 2rem;
`;

export const Card = styled.div`
  background-color: var(--color-bg);
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  max-width: 500px;
  width: 100%;
  text-align: center;
  margin: 3rem;
`;

export const Title = styled.h2`
  font-family: var(--font-secondary);
  color: var(--color-text-primary);
  margin-bottom: 0.5rem;
`;

export const Description = styled.p`
  color: var(--color-text-secondary);
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
`;

export const UploadArea = styled.div`
  border: 3px dashed var(--color-border);
  padding: 2rem;
  border-radius: 1rem;
  cursor: pointer;
  transition: all 0.2s;
  margin-bottom: 1.5rem;

  &:hover {
    border-color: var(--color-primary);
    background-color: var(--color-section);
  }

  span {
    display: block;
    color: var(--color-text-secondary);
    font-size: 0.95rem;
    margin-top: 0.5rem;
  }
`;

export const HiddenInput = styled.input`
  display: none;
`;

export const UploadLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const UploadButton = styled.button`
  background-color: var(--color-primary);
  color: #fff;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.75rem;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: var(--color-primary-light);
  }
`;

/* ========== STATUS SHOW UI ========== */
export const StatusWrapper = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
`;

export const StatusBadge = styled.span`
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-weight: 600;
  font-size: 0.95rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  background-color: ${({ status }) =>
    status === "Approved"
      ? "rgba(0, 200, 83, 0.15)" // green light bg
      : status === "Rejected"
      ? "rgba(244, 67, 54, 0.15)" // red light bg
      : "rgba(255, 152, 0, 0.15)"}; // orange light bg
  color: ${({ status }) =>
    status === "Approved"
      ? "green"
      : status === "Rejected"
      ? "red"
      : "orange"};
  border: 1px solid
    ${({ status }) =>
      status === "Approved"
        ? "green"
        : status === "Rejected"
        ? "red"
        : "orange"};
`;

export const SectionCard = styled.div`
  background-color: var(--color-bg);
  padding: 1.5rem 2rem;
  border-radius: 1rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  width: 100%;
  max-width: 600px;
  margin-bottom: 2rem;
`;

export const SectionTitle = styled.h3`
  font-family: var(--font-secondary);
  color: var(--color-text-primary);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

export const PillsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

export const Pill = styled.span`
  background-color: var(--color-primary-light);
  color: #fff;
  font-weight: 600;
  border-radius: 2rem;
  padding: 0.5rem 1.2rem;
  font-size: 0.9rem;
`;

export const InteractionCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const InteractionBox = styled.div`
  background-color: var(--color-section);
  padding: 1rem;
  border-radius: 0.75rem;
  border: 1px solid var(--color-border);
  transition: all 0.2s ease;

  h4 {
    color: var(--color-text-primary);
    font-size: 1rem;
    margin-bottom: 0.3rem;
  }

  p {
    color: var(--color-text-secondary);
    font-weight: 500;
    margin-bottom: 0.2rem;
  }

  small {
    color: var(--color-text-secondary);
    font-size: 0.8rem;
  }

  &:hover {
    border-color: var(--color-primary);
    background-color: rgba(0, 128, 0, 0.05);
  }
`;
// ===== Intro Section =====
export const IntroSection = styled.div`
  text-align: center;
  max-width: 700px;
  margin: 3rem auto 1rem auto;
  padding: 1rem;
  color: var(--color-text-primary);

  h1 {
    font-size: 2rem;
    font-family: var(--font-secondary);
    margin-bottom: 0.8rem;
    color: var(--color-primary);
  }

  p {
    font-size: 1rem;
    color: var(--color-text-secondary);
    line-height: 1.6;
  }
`;

// ===== File Preview =====
export const PreviewContainer = styled.div`
  margin-top: 1rem;
  text-align: center;
  display: flex;
  justify-content: center;
`;

export const PreviewImage = styled.img`
  max-width: 100%;
  max-height: 250px;
  border-radius: 1rem;
  border: 2px solid var(--color-border);
  object-fit: contain;
`;

export const PreviewInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;

  p {
    font-weight: 600;
    color: var(--color-text-primary);
  }

  small {
    color: var(--color-text-secondary);
    font-size: 0.85rem;
  }
`;

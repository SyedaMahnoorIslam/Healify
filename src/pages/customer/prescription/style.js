import styled from "styled-components";

export const Wrapper = styled.div` 
  display: flex;
  /* flex-direction: column; */
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

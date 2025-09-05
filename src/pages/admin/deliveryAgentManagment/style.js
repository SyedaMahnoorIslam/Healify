import styled from "styled-components";

export const PageWrapper = styled.div`
  background: var(--color-bg);
  min-height: 100vh;
  padding: 2rem;
  font-family: var(--font-primary);
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: 1.5rem;
`;

export const Button = styled.button`
  background: var(--color-primary);
  color: #fff;
  padding: 0.8rem 1.2rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background: var(--color-primary-light);
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 2rem;
  background: var(--color-section);
  border-radius: 12px;
  overflow: hidden;
`;

export const Th = styled.th`
  background: var(--color-primary);
  color: white;
  text-align: left;
  padding: 1rem;
`;

export const Td = styled.td`
  padding: 1rem;
  border-bottom: 1px solid var(--color-border);
  color: var(--color-text-secondary);
`;

export const Tr = styled.tr`
  &:hover {
    background: #f9fdfd;
  }
`;

export const ActionBtn = styled.button`
  background: var(--color-accent-green);
  border: none;
  padding: 0.5rem 0.8rem;
  margin-right: 0.5rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  &:hover {
    background: var(--color-primary-light);
    color: #fff;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.5);
  display: flex; justify-content: center; align-items: center;
`;

export const ModalContent = styled.div`
  background: var(--color-bg);
  padding: 2rem;
  border-radius: 12px;
  width: 400px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.7rem;
  margin-bottom: 1rem;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  font-family: var(--font-primary);
`;

export const UploadLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

export const PreviewImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
  border: 2px solid var(--color-border);
`;


import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  background: var(--color-bg);
  min-height: 100vh;
  color: var(--color-text-primary);
`;

export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  font-weight: 600;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: var(--color-section);
  border-radius: 10px;
  overflow: hidden;
`;

export const TableHeader = styled.th`
  background: var(--color-primary);
  color: #fff;
  padding: 12px;
  text-align: left;
  font-family: var(--font-secondary);
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background: #f9f9f9;
    [data-theme="dark"] & {
      background: var(--color-section);
    }
  }
`;

export const TableData = styled.td`
  padding: 12px;
  border-bottom: 1px solid var(--color-border);
  color: var(--color-text-secondary);
`;

export const ActionButton = styled.button`
  padding: 6px 12px;
  margin-right: 8px;
  background: var(--color-primary);
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.3s ease;
  &:hover {
    background: var(--color-primary-light);
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(28, 28, 28, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;


export const ModalContent = styled.div`
  background-color: var(--color-bg);
  padding: 2rem;
  border-radius: 12px;
  width: 90%;
  max-width: 800px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
  position: relative;
  color: var(--color-text-primary);
  max-height: 90vh;
  overflow-y: auto;
`;


export const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: var(--color-alert);
  color: #fff;
  border: none;
  font-size: 1.2rem;
  font-weight: bold;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background-color: #b52b30;
  }
`;


export const ModalSection = styled.div`
  margin-top: 1.5rem;

  h3 {
    margin-bottom: 0.75rem;
    color: var(--color-primary);
    font-size: 1.25rem;
    font-weight: 600;
  }

  ul {
    list-style-type: disc;
    padding-left: 1.5rem;
    color: var(--color-text-secondary);
    li {
      margin-bottom: 0.5rem;
    }
  }

  p {
    color: var(--color-text-secondary);
  }
`;

export const PrescriptionImage = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 0.75rem;
  margin-bottom: 0.75rem;
  border-radius: 8px;
  object-fit: cover;
  border: 1px solid var(--color-border);
`;

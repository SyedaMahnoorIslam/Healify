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
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalContent = styled.div`
  background: var(--color-bg);
  color: var(--color-text-primary);
  padding: 30px;
  border-radius: 12px;
  width: 600px;
  max-width: 95%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 10px 25px rgba(0,0,0,0.2);
  animation: slideIn 0.3s ease forwards;

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 24px;
  background: transparent;
  border: none;
  color: var(--color-text-primary);
  cursor: pointer;
`;

export const ModalSection = styled.div`
  margin-top: 20px;
`;

export const PrescriptionImage = styled.img`
  width: 120px;
  height: auto;
  margin: 10px;
  border: 1px solid var(--color-border);
  border-radius: 6px;
  transition: transform 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

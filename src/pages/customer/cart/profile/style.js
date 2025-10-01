
import styled from "styled-components";

export const Heading = styled.div`
  padding: 1px 0;
  background: var(--color-primary);
  color: #fff;
  text-align: center;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 { margin: 0; font-size: 1.8rem; font-weight: 600; }
`;

export const ProfileSection = styled.section`
  padding: 2rem;
  display: flex;
  justify-content: center;
`;

export const ProfileCard = styled.div`
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  padding: 2rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
  .profile-img {
    width: 100px; height: 100px;
    border-radius: 50%;
    border: 3px solid var(--color-primary);
    object-fit: cover;
  }
`;

export const UserInfo = styled.div`
  h2 { margin: 0; color: var(--color-text-primary); }
  p { margin: 0.2rem 0; color: var(--color-text-secondary); }
`;

export const AddressBookSection = styled.section`
  background: var(--color-bg);
  padding: 2rem;
  margin: 2rem;
  border: 1px solid var(--color-border);
  border-radius: 1rem;
`;

export const SectionTitle = styled.h3`
  margin-bottom: 1rem;
  color: var(--color-text-primary);
`;

export const AddressList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 1rem;
`;

export const AddressItem = styled.li`
  background: var(--color-section);
  padding: 0.8rem;
  margin-bottom: 0.5rem;
  border-radius: 0.6rem;
  border: 1px solid var(--color-border);
  display: flex;
  justify-content: space-between;
  align-items: center;
  .actions { display: flex; gap: 0.3rem; }
`;

export const AddButton = styled.button`
  background: var(--color-primary);
  color: #fff;
  padding: 0.8rem 1.2rem;
  border: none;
  border-radius: 0.6rem;
  cursor: pointer;
  font-weight: bold;
  &:hover { background: var(--color-primary-light); }
`;

export const OrderTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
  th, td {
    padding: 0.8rem 1rem;
    border: 1px solid var(--color-border);
    text-align: left;
  }
  th {
    background: var(--color-section);
    color: var(--color-text-primary);
    font-weight: 600;
  }
  tbody tr:nth-child(even) { background: var(--color-section); }
`;

export const StatusBadge = styled.span`
  padding: 0.3rem 0.7rem;
  border-radius: 0.5rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: #fff;
  background: ${({ status }) =>
    status === "Delivered" ? "#52c41a" :
    status === "Pending"   ? "#faad14" :
    status === "Shipped"   ? "#1890ff" :
    status === "Paid"      ? "#389e0d" :
    status === "Unpaid"    ? "#ff4d4f" : "#d9d9d9"};
`;

/* ---------- Modal Styling ---------- */
export const ModalOverlay = styled.div`
  position: fixed; inset: 0;
  background: rgba(0,0,0,0.6);
  display: flex; justify-content: center; align-items: center;
  z-index: 999;
`;

export const ModalContent = styled.div`
  background: var(--color-bg);
  padding: 2rem;
  border-radius: 1rem;
  width: 420px;
  max-width: 95%;
  box-shadow: 0 6px 18px rgba(0,0,0,0.3);
  animation: fadeIn 0.25s ease;
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-20px);}
    to   { opacity: 1; transform: translateY(0);}
  }
`;

export const ModalHeader = styled.div`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--color-text-primary);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 1.6rem;
  color: var(--color-text-secondary);
  cursor: pointer;
  &:hover { color: var(--color-primary); }
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const Label = styled.label`
  font-size: 0.9rem;
  color: var(--color-text-primary);
  font-weight: 500;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.7rem 0.9rem;
  border: 1px solid var(--color-border);
  border-radius: 0.6rem;
  background: var(--color-bg);
  color: var(--color-text-primary);
  font-size: 0.95rem;
  &:focus {
    border-color: var(--color-primary);
    box-shadow: 0 0 0 2px rgba(59,130,246,0.2);
    outline: none;
  }
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1rem;
`;

export const SaveButton = styled.button`
  background: var(--color-primary);
  color: #fff;
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 0.6rem;
  cursor: pointer;
  font-weight: 600;
  &:hover { background: var(--color-primary-light); }
`;

export const CancelButton = styled.button`
  background: var(--color-border);
  color: var(--color-text-primary);
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 0.6rem;
  cursor: pointer;
  &:hover {
    background: var(--color-section);
    color: var(--color-text-primary);
  }
`;

export const EditButton = styled.button`
  margin-top: 1rem;
  background: var(--color-primary);
  color: #fff;
  padding: 0.6rem 1rem;
  border: none;
  border-radius: 0.6rem;
  cursor: pointer;
  &:hover { background: var(--color-primary-light); }
`;

export const SmallButton = styled.button`
  background: ${({ del }) => (del ? "#ff4d4f" : "var(--color-primary)")};
  color: #fff;
  border: none;
  border-radius: 0.4rem;
  padding: 0.3rem 0.6rem;
  cursor: pointer;
  font-size: 0.8rem;
  &:hover {
    background: ${({ del }) => (del ? "#d9363e" : "var(--color-primary-light)")};
  }
`;

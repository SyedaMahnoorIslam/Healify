import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  padding: 30px;
  max-width: 900px;
  margin: auto;
  font-family: var(--font-primary);

  h2 {
    margin-bottom: 20px;
    font-size: 26px;
    font-weight: 600;
    color: var(--color-text-primary);
  }
`;

export const OrderCard = styled.div`
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  transition: all 0.3s ease;
  flex-wrap: wrap;

  &:hover {
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.08);
    transform: translateY(-3px);
    background-color: var(--color-section);
  }

  h3 {
    margin: 0;
    font-size: 18px;
    font-weight: 600;
    color: var(--color-primary);
  }

  p {
    margin: 4px 0;
    font-size: 14px;
    color: var(--color-text-secondary);
  }

  strong {
    color: var(--color-text-primary);
  }
`;

export const Button = styled.button`
  padding: 10px 18px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  background: var(--color-primary);
  color: #fff;
  transition: all 0.3s ease;
  font-family: var(--font-secondary);

  &:hover {
    background: var(--color-primary-light);
  }
`;
export const StatusButton = styled.button`
  padding: 10px 18px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  background: var(--color-primary);
  color: #fff;
  transition: all 0.3s ease;
  font-family: var(--font-secondary);

  &:hover {
    background: var(--color-primary-light);
  }
`;
export const DangerButton = styled(Button)`
  background: #EF4444;
  &:hover {
    background: #DC2626;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto;  
  padding: 20px;
  
`;

export const ModalContent = styled.div`
  background: var(--color-bg);
  padding: 2rem;
  border-radius: 1rem;
  width: 400px;
  max-width: 90%;
  max-height: 90vh;  
  overflow-y: auto;   
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  margin-bottom: 3rem;
`;

export const ModalHeader = styled.h3`
  margin: 0 0 1rem 0;
  font-family: var(--font-secondary);
  color: var(--color-text-primary);
`;

export const ModalBody = styled.div`
  margin-bottom: 1rem;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid var(--color-border);
  border-radius: 0.6rem;
  font-family: var(--font-primary);
`;

export const SaveButton = styled.button`
  background: var(--color-primary);
  color: #fff;
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 0.6rem;
  cursor: pointer;

  &:hover {
    background: var(--color-primary-light);
  }
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
  font-size: 0.9rem;

  &:hover {
    background: var(--color-primary-light);
  }
`;
export const SmallButton = styled.button`
  background: ${(props) => (props.del ? "#ff4d4f" : "var(--color-primary)")};
  color: #fff;
  border: none;
  border-radius: 0.4rem;
  padding: 0.3rem 0.6rem;
  margin-left: 0.4rem;
  cursor: pointer;
  font-size: 0.8rem;

  &:hover {
    background: ${(props) => (props.del ? "#d9363e" : "var(--color-primary-light)")};
  }
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

  .actions {
    display: flex;
    gap: 0.3rem;
  }
`;

// Invoice 



export const InvoiceContainer = styled.div`
  max-width: 1100px; 
  margin: 2rem auto;
  padding: 2rem;
  background: var(--color-bg);
  color: var(--color-text-primary);
  border: 1px solid var(--color-border);
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  font-family: var(--font-primary);
  width: 90%;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid var(--color-border);
  padding-bottom: 1rem;
  margin-bottom: 1rem;
`;

export const InvoiceTitle = styled.h1`
  display: flex;
  font-size: 2rem;
  color: var(--color-primary);
  font-family: var(--font-secondary);
  justify-content: center;
  align-items: start;
  gap: 2px;
  img{
    height: 2rem;
    width: 2rem;
  }
`;

export const CompanyInfo = styled.div`
  text-align: right;
  h3 {
    margin: 0;
    color: var(--color-text-primary);
  }
  p {
    margin: 2px 0;
    color: var(--color-text-secondary);
  }
`;

export const InvoiceDetails = styled.div`
  margin: 1rem 0;
`;

export const DetailsRow = styled.div`
  display: flex;
  justify-content: space-between;
  div {
    h4 {
      margin: 0;
      color: var(--color-primary-light);
    }
    p {
      margin: 2px 0;
      color: var(--color-text-secondary);
    }
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 2rem 0;
`;

export const TableHead = styled.thead`
  background: var(--color-section);
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
  border-bottom: 1px solid var(--color-border);
`;

export const TableCell = styled.td`
  padding: 12px;
  text-align: ${(props) => (props.align ? props.align : "left")};
`;

export const TotalRow = styled.tr`
  td {
    font-weight: 600;
    color: var(--color-primary);
  }
`;

export const Footer = styled.div`
  text-align: center;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 2px solid var(--color-border);
  p {
    font-family: var(--font-secondary);
    color: var(--color-text-secondary);
  }
`;

// Tracking Order

export const TrackingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0;
  position: relative;
`;


const glow = keyframes`
  0% { box-shadow: 0 0 5px #10B981, 0 0 10px #10B981; }
  50% { box-shadow: 0 0 15px #10B981, 0 0 25px #10B981; }
  100% { box-shadow: 0 0 5px #10B981, 0 0 10px #10B981; }
`;

export const Step = styled.div`
  position: relative;
  text-align: center;
  flex: 1;
`;

export const StepIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${(props) => (props.active ? "#10B981" : "#D1D5DB")};
  color: #fff;
  font-weight: bold;
  line-height: 40px;
  margin: auto;
  animation: ${(props) => props.active && glow} 1.5s infinite;
`;

export const StepLabel = styled.p`
  margin-top: 8px;
  font-size: 14px;
  color: var(--color-text-secondary);
`;

export const ProgressLine = styled.div`
  position: absolute;
  top: 20px;
  left: 50%;
  width: 100%;
  height: 4px;
  background: ${(props) => (props.active ? "#10B981" : "#E5E7EB")};
  z-index: -1;
`;
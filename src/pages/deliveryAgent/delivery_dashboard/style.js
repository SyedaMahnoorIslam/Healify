import styled from "styled-components";
export const DashboardWrapper = styled.div`
  margin-top: 1rem;
  background: var(--color-bg);
  min-height: 100vh;
`;


export const GreetingSection = styled.div`
 display: flex;
 gap: 2rem;
 justify-content: space-between;
 align-items:center;
 width: 100%;
 @media (max-width: 768px) {
  flex-wrap: wrap;
  gap: 1rem;
    }
`;
export const LHeaderSection = styled.div`
background: var(--color-primary);
  color: white;
  padding: 1.5rem 2rem 1.5rem 0rem;
  border-radius: 16px;
  margin-bottom: 2rem;
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 65%;
  @media (max-width: 768px) {
    width: 100%;
      
    }
  
`;
export const DAImage = styled.div`
  padding-bottom: 1.9rem;
  img{
     height: 15rem;
  }
 `;

export const RHeaderSection = styled.div`
  background: var(--color-primary);
  color: white;
  padding: 1.5rem 2rem;
  border-radius: 16px;
  margin-bottom: 2rem;
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
  @media (max-width: 768px) {
    width: 100%;
      
    }
  
`;
export const Greeting = styled.h2`
  font-size: 1.6rem;
  margin: 0;
`;

export const Subtitle = styled.p`
  font-size: 1rem;
  margin: 0.2rem 0 0;
  opacity: 0.9;
`;

export const TaskList = styled.div`
  display: grid;
  gap: 1rem;
`;

export const TaskCard = styled.div`
  background: var(--color-section);
  border: 1px solid var(--color-border);
  border-radius: 14px;
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.08);
  }
`;

export const TaskTitle = styled.h3`
  margin: 0;
  font-size: 1.1rem;
  color: var(--color-text-primary);
`;

export const TaskSubtitle = styled.p`
  margin: 0.2rem 0 0;
  font-size: 0.9rem;
  color: var(--color-text-secondary);
`;

export const StatusBadge = styled.span`
  padding: 0.3rem 0.8rem;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: bold;
  color: white;
  background: ${(props) =>
    props.status === "Pending"
      ? "var(--color-accent-pink)"
      : props.status === "Packed"
      ? "var(--color-accent-green)"
      : props.status === "Shipped"
      ? "var(--color-primary-light)"
      : props.status === "Delivered"
      ? "#53b653"
      : "var(--color-alert)"};
`;

 export const StatusSelect = styled.select`
  padding: 0.5rem 1rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 0.95rem;
  outline: none;
  margin-left: 0.5rem;
  &:focus {
    border-color: var(--color-primary);
    box-shadow: 0 0 5px rgba(83, 199, 190, 0.4);
  }
`;

 export const ModalDetailRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.7rem;
  font-size: 0.95rem;
  label {
    font-weight: 600;
    margin-right: 1rem;
  }
`;
// === Modal ===
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  
`;

export const ModalContent = styled.div`
  background: var(--color-bg);
  padding: 2rem;
  border-radius: 16px;
  width: 450px;
  max-width: 50%;
  border: 1px solid var(--color-border);
  box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.3);
`;

export const ModalHeader = styled.h3`
  margin: 0 0 1rem;
  color: var(--color-primary);
`;

export const ModalDetail = styled.p`
  margin: 0.4rem 0;
  font-size: 0.95rem;
  color: var(--color-text-secondary);
`;

export const ButtonRow = styled.div`
  display: flex;
  gap: 0.8rem;
  margin-top: 1.2rem;
`;

export const Button = styled.button`
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 500;
  color: white;
  background: ${(props) => props.bg || "var(--color-primary)"};
  transition: 0.2s;
  &:hover {
    opacity: 0.9;
  }
`;
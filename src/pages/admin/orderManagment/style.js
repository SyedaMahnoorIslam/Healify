
// import styled from "styled-components";

// export const Container = styled.div`
//   padding: 2rem;
//   background: var(--color-section);
//   border-radius: 16px;
//   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
//   margin: 1rem;
//   overflow-x: auto;
//   transition: background 0.3s ease;
// `;

// export const Title = styled.h2`
//   font-size: 1.8rem;
//   color: var(--color-text-primary);
//   margin-bottom: 1.5rem;
//   font-weight: 600;
//   font-family: var(--font-secondary);
// `;

// export const OrderTable = styled.table`
//   width: 100%;
//   border-collapse: collapse;
//   background: var(--color-bg);
//   border-radius: 12px;
//   overflow: hidden;
// `;

// export const TableHead = styled.tr`
//   background: var(--color-primary);
//   color: #fff;
// `;

// export const TableRow = styled.tr`
//   border-bottom: 1px solid var(--color-border);
//   transition: background 0.2s ease;

//   &:hover {
//     background: var(--color-accent-yellow);
//   }
// `;

// export const TableHeader = styled.th`
//   padding: 14px;
//   text-align: left;
//   font-size: 0.95rem;
//   font-weight: 600;
//   font-family: var(--font-primary);
// `;

// export const TableCell = styled.td`
//   padding: 14px;
//   font-size: 0.9rem;
//   color: var(--color-text-secondary);
// `;

// export const Status = styled.span`
//   padding: 6px 12px;
//   border-radius: 8px;
//   font-size: 0.8rem;
//   font-weight: bold;
//   color: #fff;
//   background: ${(props) =>
//     props.status === "New"
//       ? "var(--color-accent-pink)"
//       : props.status === "Packed"
//       ? "var(--color-accent-green)"
//       : props.status === "Shipped"
//       ? "var(--color-primary-light)"
//       : props.status === "Delivered"
//       ? "#53b653"
//       : "#e63946"};
// `;

// export const ActionGroup = styled.div`
//   display: flex;
//   gap: 0.5rem;
//   flex-wrap: wrap;
// `;

// export const ActionButton = styled.button`
//   padding: 6px 14px;
//   border: none;
//   border-radius: 8px;
//   font-size: 0.85rem;
//   font-weight: 500;
//   cursor: pointer;
//   transition: transform 0.2s ease, background 0.3s ease;
//   background: ${(props) => props.color || "var(--color-primary)"};
//   color: #fff;
//   font-family: var(--font-secondary);

//   &:hover {
//     transform: scale(1.05);
//     background: var(--color-primary-light);
//   }
// `;
import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem;
  background: var(--color-section);
  border-radius: 16px;
  margin: 1rem;
  overflow-x: auto;
`;

export const Title = styled.h2`
  font-size: 1.8rem;
  color: var(--color-text-primary);
  margin-bottom: 1.5rem;
  font-weight: 600;
`;

export const OrderTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: var(--color-bg);
  border-radius: 12px;
  overflow: hidden;
`;

export const TableHead = styled.tr`
  background: var(--color-primary);
  color: #fff;
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid var(--color-border);
  &:hover {
    background: var(--color-accent-yellow);
  }
`;

export const TableHeader = styled.th`
  padding: 14px;
  text-align: left;
`;

export const TableCell = styled.td`
  padding: 14px;
  color: var(--color-text-secondary);
`;

export const Status = styled.span`
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: bold;
  color: #fff;
  background: ${(props) =>
    props.status === "New"
      ? "var(--color-accent-pink)"
      : props.status === "Packed"
      ? "var(--color-accent-green)"
      : props.status === "Shipped"
      ? "var(--color-primary-light)"
      : props.status === "Delivered"
      ? "#53b653"
      : "#e63946"};
`;

export const ActionGroup = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const ActionButton = styled.button`
  padding: 6px 14px;
  border: none;
  border-radius: 8px;
  font-size: 0.85rem;
  cursor: pointer;
  background: ${(props) => props.color || "var(--color-primary)"};
  color: #fff;

  &:hover {
    transform: scale(1.05);
  }
`;

/* Modal Styles */
export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.6);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.div`
  background: var(--color-bg);
  padding: 2rem;
  border-radius: 12px;
  width: 400px;
  max-width: 90%;
  position: relative;
`;

export const ModalTitle = styled.h3`
  margin-bottom: 1rem;
  color: var(--color-text-primary);
`;

export const ModalClose = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  border: none;
  background: transparent;
  font-size: 1.2rem;
  cursor: pointer;
`;

export const FormRow = styled.div`
  margin-bottom: 1rem;
`;

export const FormLabel = styled.label`
  display: block;
  font-size: 0.9rem;
  margin-bottom: 6px;
  color: var(--color-text-primary);
`;

export const FormSelect = styled.select`
  width: 100%;
  padding: 8px;
  border-radius: 6px;
  border: 1px solid var(--color-border);
  background: var(--color-section);
  color: var(--color-text-primary);
`;

import styled from "styled-components";

export const CartContainer = styled.div`
  font-family: var(--font-primary);
  background: var(--color-bg);
  color: var(--color-text-primary);
  max-width: 100%;
  align-items: center;
  margin: 1rem;
  
`;

export const Tabs = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 1.5rem;
`;

export const TabButton = styled.button`
  flex: 1;
  padding: 0.75rem 1rem;
  background: ${({ active }) =>
        active ? "var(--color-primary)" : "transparent"};
  color: ${({ active }) =>
        active ? "#fff" : "var(--color-text-secondary)"};
  border: 1px solid var(--color-border);
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ active }) =>
        active ? "var(--color-primary)" : "var(--color-primary-light)"};
    color: #fff;
  }
`;

export const TabContent = styled.div`
  background: var(--color-section);
  padding: 1.5rem;
  border-radius: 10px;
`;

export const Heading = styled.h2`
  font-family: var(--font-secondary);
  margin-bottom: 1rem;
`;

export const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.75rem;
  border-bottom: 1px solid var(--color-border);

  p {
    margin: 0;
    font-weight: 500;
  }

  span {
    color: var(--color-text-secondary);
  }
`;

export const OrderItem = styled(CartItem)`
  span {
    font-weight: 600;
  }
`;

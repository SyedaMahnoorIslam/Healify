import styled from "styled-components";

export const CartWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--color-bg);
  font-family: var(--font-primary);
`;

export const Header = styled.div`
  padding: 1.5rem 2rem;
  background-color: var(--color-primary);
  color: #fff;
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
`;

export const CartContent = styled.div`
  flex: 1;
  padding: 2rem;
  background-color: var(--color-section);
`;

export const CartSummary = styled.div`
  margin: 2rem 4.1rem 2rem 5.8rem ;

  padding: 1.5rem;
  border: 1px solid var(--color-border);
  border-radius: 12px;
  background-color: var(--color-bg);
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);

  h3 {
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--color-text-primary);
    margin-bottom: 1rem;
  }

  .row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    font-size: 0.95rem;
    color: var(--color-text-secondary);
  }

  .total {
    font-weight: 700;
    font-size: 1.1rem;
    color: var(--color-text-primary);
  }
`;

export const CheckoutButton = styled.button`
  width: 100%;
  padding: 1rem;
  background-color: var(--color-primary);
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 10px;
  margin-top: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--color-primary-light);
  }
`;

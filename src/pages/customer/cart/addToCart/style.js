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
  margin: 2rem 3.5rem;
  padding: 1.5rem ;
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
export const EmptyState = styled.div`
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--color-text-secondary);
  font-size: 1.1rem;
  text-align: center;

  p {
    margin-top: 0.5rem;
  }

  button {
    margin-top: 1.2rem;
    padding: 0.8rem 1.5rem;
    background-color: var(--color-primary);
    color: #fff;
    font-weight: 600;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background-color: var(--color-primary-light);
    }
  }
`;

export const CartItem = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 1.2rem;
  margin: 1rem 4rem;
  box-shadow: 0 3px 8px rgba(0,0,0,0.05);
`;

export const ItemRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

export const ItemImage = styled.div`
  width: 80px;
  height: 80px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const ItemInfo = styled.div`
  flex: 1;
  min-width: 180px;

  h3 {
    font-size: 1.1rem;
    color: var(--color-text-primary);
    margin-bottom: 0.2rem;
  }

  p {
    color: var(--color-text-secondary);
    margin: 0.1rem 0;
  }

  .prescription {
    display: inline-block;
    margin-top: 0.4rem;
    font-size: 0.8rem;
    background-color: #ffe9e9;
    color: var(--color-alert);
    padding: 2px 8px;
    border-radius: 5px;
  }
`;

export const ItemPrice = styled.div`
  text-align: right;

  span {
    font-weight: 600;
    color: var(--color-primary);
    display: block;
  }

  .old {
    text-decoration: line-through;
    color: #999;
    font-size: 0.85rem;
  }
`;

export const ItemQuantity = styled.div`
  font-size: 0.95rem;
  color: var(--color-text-secondary);
`;

export const ItemTotal = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text-primary);
`;

export const RemoveButton = styled.button`
  background: var(--color-alert);
  color: white;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: color 0.2s;
  padding: 10px 8px;
  border-radius: 5px;
   transition: all 0.2s ease;

  &:hover {
    background-color: var(--color-alert);
    color: white;
  }
`;
export const AddMoreButton = styled.button`
  background: transparent;
  color: var(--color-primary);
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: color 0.2s;
  

  &:hover {
    background-color: var(--color-primary);
    color: white;
  }
`;
export const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background: #f8f8f8;
  border-radius: 8px;
  padding: 0.4rem 0.8rem;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.05);

  span {
    font-size: 1rem;
    font-weight: 600;
    color: var(--color-text-primary);
    min-width: 25px;
    text-align: center;
  }
`;

export const QuantityButton = styled.button`
  background: var(--color-primary);
  color: #fff;
  border: none;
  border-radius: 6px;
  width: 28px;
  height: 28px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  line-height: 1;
  transition: 0.2s;

  &:hover {
    background: var(--color-primary-light);
  }
`;

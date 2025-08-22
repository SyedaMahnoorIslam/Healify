import styled from "styled-components";

export const WishlistWrapper = styled.div`
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

export const WishlistContent = styled.div`
  flex: 1;
  padding: 2rem;
  background-color: var(--color-section);
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

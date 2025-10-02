import styled from "styled-components";
export const Wrapper = styled.div`
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

export const Content = styled.div`
  flex: 1;
  padding: 2rem;
  background-color: var(--color-section);
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 60px 20px;
  color: var(--color-text);
  
  h3 {
    font-size: 22px;
    margin-bottom: 10px;
  }
  p {
    font-size: 16px;
    margin-bottom: 20px;
    color: gray;
  }
  button {
    padding: 10px 20px;
    background: var(--color-primary);
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: 0.2s;
    &:hover {
      background: var(--color-primary);
    }
  }
`;
import styled from "styled-components";
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
      background: var(--color-primary-dark);
    }
  }
`;
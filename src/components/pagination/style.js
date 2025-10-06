import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  flex-wrap: wrap;
  gap: 6px;
`;

export const PageButton = styled.button`
  padding: 8px 14px;
  background-color: ${(props) => (props.active ? "var(--color-primary)" : "white")};
  color: ${(props) => (props.active ? "white" : "black")};
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${(props) => (props.active ? "var(--color-primary)" : "white")};
  }

  &:disabled {
    background-color: #e0e0e0;
    color: #999;
    cursor: not-allowed;
  }
`;
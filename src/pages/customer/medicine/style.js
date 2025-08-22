import styled from "styled-components";
export const MainDiv =styled.div`
 overflow-x: hidden;
`;
export const CategoryRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 1.5rem;
  background-color: var(--color-section);
  z-index: 1;
  
  @media (max-width: 1000px) {
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
  }
`;
export const CategoryButton = styled.button`
  border: 1px solid var(--color-border);
  background-color: var(--color-bg);
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.875rem;
  color: var(--color-primary);
  transition: all 0.2s;
  &:hover {
    box-shadow: 0 6px 9px rgba(33, 141, 194, 0.1);
    background-color: var(--color-primary);
    color: white;
  }
`;
export const SearchWrapper = styled.div`
  width: 180px;
  max-width: 60%;

   @media (max-width: 880px) {
    width: 100%;
    order: 3;
  }
    @media (max-width: 500px) {
    width: 50px;
  }
`;
export const StyledInput = styled.input`
  width: 100%;
  padding: 0.5rem 2.5rem 0.5rem 1rem;
  border-radius: 1rem;
  border: 1px solid var(--color-border);
  background-color: var(--color-section);
  color: var(--color-text-primary);
  &:focus {
    outline: none;
  }
`;
export const Main =styled.div`

`;
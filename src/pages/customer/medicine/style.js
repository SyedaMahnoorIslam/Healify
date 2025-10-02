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
  width: 20rem;
  max-width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid var(--color-border);
  border-radius: 5rem;

   @media (max-width: 880px) {
    width: 100%;
    order: 3;
  }
    @media (max-width: 500px) {
    width: 100%;
  }

  div{
    background-color: var(--color-primary);
    width: 4rem;
    height: 2rem;
    border-top-right-radius: 5rem;
    border-bottom-right-radius: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
  }
`;
export const StyledInput = styled.input`
  width: 100%;
  padding: 0.5rem 2.5rem 0.5rem 1rem;
  border-radius: 1rem;
  /* border: 1px solid var(--color-border); */
  border: none;
  background-color: var(--color-section);
  color: var(--color-text-primary);
  &:focus {
    outline: none;
  }
`;
export const Main =styled.div`

`;

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
  div{
  
  }
  h3 {
    font-size: 22px;
    margin-bottom: 10px;
  }
  p {
    font-size: 16px;
    margin-bottom: 20px;
    color: gray;
    text-align: center;
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
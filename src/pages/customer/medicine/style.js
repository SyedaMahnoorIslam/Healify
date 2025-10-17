import styled from "styled-components";

export const MainDiv = styled.div`
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

  span {
    font-weight: 600;
    color: var(--color-primary);
    font-size: 0.95rem;
  }
`;

export const CategoryButton = styled.button`
  border: 1px solid var(--color-border);
  background-color: var(--color-bg);
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.875rem;
  color: var(--color-primary);
  transition: all 0.2s ease;

  &:hover {
    box-shadow: 0 6px 9px rgba(33, 141, 194, 0.1);
    background-color: var(--color-primary);
    color: white;
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
  width: 20rem;
  max-width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid var(--color-border);
  border-radius: 5rem;
  background-color: var(--color-bg);
  transition: all 0.2s ease;

  &:focus-within {
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(33, 141, 194, 0.15);
  }

  @media (max-width: 880px) {
    width: 100%;
    order: 3;
  }

  div {
    background-color: var(--color-primary);
    width: 3rem;
    height: 2.5rem;
    border-top-right-radius: 5rem;
    border-bottom-right-radius: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1rem;
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 0.6rem 1rem;
  border-radius: 5rem;
  border: none;
  background-color: transparent;
  color: var(--color-text-primary);
  font-size: 0.95rem;
  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #a1a1a1;
  }
`;

export const Dropdown = styled.ul`
  position: absolute;
  top: 105%;
  left: 0;
  right: 0;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15);
  margin-top: 6px;
  padding: 6px 0;
  list-style: none;
  z-index: 15;
  max-height: 230px;
  overflow-y: auto;
  animation: fadeIn 0.2s ease-in;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-5px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  li {
    padding: 10px 15px;
    cursor: pointer;
    transition: all 0.2s ease;
    font-size: 14px;
    font-weight: 600;
    color: var(--color-primary);

    &:hover {
      background-color: var(--color-border);
    }
  }

  li.more-results {
    text-align: center;
    color: var(--color-primary);
    font-size: 13px;
    padding: 8px 15px;
  }
`;

export const Main = styled.div``;

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
      opacity: 0.9;
    }
  }
`;

export const DropdownItem = styled.li`
  padding: 10px 15px;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 14px;
  font-weight: 700;
  color: var(--color-primary);

  &:hover {
    background-color: var(--color-border);
  }
`;

export const MoreResults = styled.li`
  padding: 8px 15px;
  text-align: center;
  color: var(--color-primary);
  font-size: 13px;
`;
import styled from "styled-components";

export const SidebarContainer = styled.div`
  width: 250px;
  height: 100vh;
  background-color: var(--color-section);
  border-right: 1px solid var(--color-border);
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  border-radius: 2rem;
  margin: 1rem 1rem;
  /* box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.05); */
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);


   @media (max-width: 675px) {
    width: 50px;
  }
`;

export const Logo = styled.h2`
  /* font-family: var(--font-secondary);
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-primary); */
  margin-bottom: 2rem;
  text-align: center;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  gap: 0.5rem;
  padding-left: 1rem;

 @media (max-width: 675px) {
    padding-left: 0;
  }
`;
export const Image =styled.div`
   justify-content: center;
  img{
    height: 3rem;
    width: 3rem;
     @media (max-width: 675px) {
    height: 3.5rem;
    width: 3.5rem;
  }
  }
  
`;

export const Name =styled.span`
font-family: var(--font-secondary);
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-primary);
  /* margin-bottom: 2rem;  */
  text-align: center;
   @media (max-width: 675px) {
    display: none;
  }
`;
export const Menu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  flex: 1;
`;

export const MenuItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: var(--color-text-primary);
  padding: 0.75rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 0.5rem;
  transition: background 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: var(--color-primary-light);
    color: #fff;

    svg {
      color: #fff;
    }
  }
`;

export const IconWrapper = styled.div`
  margin-right: 10px;
  font-size: 1.2rem;
  color: var(--color-primary);
`;

export const Label = styled.span`
  font-family: var(--font-primary);
  font-weight: 500;
   @media (max-width: 690px) {
    display: none;
  }
`;

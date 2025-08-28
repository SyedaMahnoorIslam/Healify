import styled from "styled-components";

export const NavbarContainer=styled.div`
  height: 10vh;
  background-color: var(--color-section);
  border-right: 1px solid var(--color-border);
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 1rem;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  margin-bottom: 1rem;


   @media (max-width: 675px) {
    /* width: 50px; */
  }
`;

export const Left=styled.div`
 display: flex;
 flex-direction: column;
 gap: 5px;

 span{
  font-size: 25px;
  font-weight: bold;
  color: var(--color-primary);
  /* color: var(--color-text-primary); */
  margin: 0;
  font-family: "Poppins", sans-serif;
  text-align: start;
 }

`
export const Right=styled.div`

`
export const Profile = styled.div`
  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    justify-content: center;
    padding-left: 10rem;

    @media (max-width: 768px) {
      margin-left: auto;
      justify-content: flex-start;
    }
  }

  img {
    height: 2rem;
    width: 2rem;
    cursor: pointer;
  }

  span {
    display: flex;
    color: var(--color-primary);
    font-weight: bold;
    cursor: pointer;

    @media (max-width: 590px) {
      display: none;
    }
  }
`;

export const DropdownMenu = styled.ul`
  background-color: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: 0.5rem;
  list-style: none;
  padding: 0.5rem 0;
  margin-top: 0.5rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  position: absolute;
  right: 1rem;
  width: 10rem;
   gap: 5px;

  li {
    padding: 0.5rem 1rem;
    cursor: pointer;
    font-size: 0.875rem;
    color: var(--color-text-primary);
    border: 1px solid rgba(148, 146, 146, 0.08);
    

    &:hover {
      background-color: var(--color-section);
    }
  }
`;

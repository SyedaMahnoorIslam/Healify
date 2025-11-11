
import styled from "styled-components";

export const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  /* left: 30%; */
  width: 73%;
  /* right: 10px; */
  z-index: 9999;
  height: 10vh;
  background-color: var(--color-section);
  border-bottom: 1px solid var(--color-border);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2); */

  @media (max-width: 997px) {
    /* left: 0; */
    width: 73%;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-size: 25px;
    font-weight: bold;
    color: var(--color-primary);
    font-family: "Poppins", sans-serif;
  }
`;

export const Right = styled.div``;

export const Profile = styled.div`
  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    justify-content: center;

  }

  img {
    height: 2rem;
    width: 2rem;
    cursor: pointer;
    border-radius: 50%;

    @media (max-width: 650px) {
      height: 10px;
      width: 10px;
    }
  }

  span {
    color: var(--color-primary);
    font-weight: bold;
    cursor: pointer;

    @media (max-width: 650px) {
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

  li {
    padding: 0.5rem 1rem;
    cursor: pointer;
    font-size: 0.875rem;
    color: var(--color-text-primary);
    border-bottom: 1px solid rgba(148, 146, 146, 0.08);

    &:hover {
      background-color: var(--color-section);
    }

    &:last-child {
      border-bottom: none;
    }
  }
`;

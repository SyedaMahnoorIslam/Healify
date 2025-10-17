
import styled from "styled-components";

export const StyledNav = styled.nav`
  width: 100%;
  background-color: var(--color-bg);
  border-bottom: 1px solid var(--color-border);
  padding: 0.5rem 0; 
  position: sticky;
  top: 0;
`;

export const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1.5rem;
  flex-wrap: wrap;
  gap: 1rem;

  .Logo-Search {
    display: flex;
    gap: 2rem;
    align-items: center;

    @media (max-width: 900px) {
      gap: 1rem;
      flex-wrap: wrap;
    }
  }

  .Nav-Right-Section {
    display: flex;
    align-items: center;
    gap: 1.5rem; 

    @media (max-width: 768px) {
      gap: 1rem; 
      margin-left: auto; 
    }
  }
`;

export const LogoName = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  img {
    height: 2rem;
    width: 2rem;
  }

  span {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--color-primary);
  }
`;

export const Nav = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;

  @media (max-width: 900px) {
    gap: 1rem;
    display: none;
  }

  @media (max-width: 768px) {
    display: none; 
  }
`;

export const Navlinks = styled.div`
  ul {
    display: flex;
    list-style: none;
    gap: 2rem;
    flex-wrap: wrap;

    li{
      align-items: center;
      justify-content: center;
    }

    li a {
      font-size: 0.95rem;
      font-weight: 500;
      color: var(--color-text-primary);
      cursor: pointer;
      /* position: relative; */
      padding-bottom: 3px;

      &:hover {
        color: var(--color-primary);
      }

      &.active {
        color: var(--color-primary);
        font-weight: 600;
      }
      &.active::after {
        content: "";
        display: block;
        height: 2px;
        width: 100%;
        background: var(--color-primary);
        border-radius: 2px;
        margin-top: 3px;
      }
    }
  }
`;

export const NavIcons = styled.div`
  ul {
    display: flex;
    list-style: none;
    gap: 1.2rem;

    li a {
      font-size: 1.3rem;
      color: var(--color-text-primary);
      cursor: pointer;
      position: relative;
      padding-bottom: 3px;

      &:hover {
        color: var(--color-primary);
      }

      &.active {
        color: var(--color-primary);
      }
      &.active::after {
        content: "";
        display: block;
        height: 2px;
        width: 100%;
        background: var(--color-primary);
        border-radius: 2px;
        margin-top: 3px;
      }
    }
  }
`;

export const Profile = styled.div`
  display: flex; 
  align-items: center;
  gap: 0.5rem;
  position: relative; 
  cursor: pointer;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  img {
    height: 2rem;
    width: 2rem;
    border-radius: 50%; 
    object-fit: cover;
  }

  span {
    font-weight: bold;
    color: var(--color-text-primary); 

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
  top: 100%; 
  right: 0; 
  width: 10rem;
  z-index: 10; 

  li {
    padding: 0.75rem 1rem;
    cursor: pointer;
    font-size: 0.875rem;
    color: var(--color-text-primary);
    transition: background-color 0.2s ease;
    border-bottom: 1px solid var(--color-border); 

    &:last-child {
      border-bottom: none; 
    }

    &:hover {
      background-color: var(--color-section);
    }
  }
`;

/* Hamburger */
export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  gap: 4px;
  cursor: pointer;
  position: relative;
  padding: 5px; 

  span {
    width: 22px; 
    height: 3px;
    background-color: var(--color-text-primary);
    border-radius: 2px;
    transition: all 0.3s ease-in-out;
  }


  @media (max-width: 900px) {
    display: flex;
    margin-left: 0.5rem; 
  }
`;
// /* Mobile Dropdown Menu */
export const MobileMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: ${({ open }) => (open ? "block" : "none")};
    width: 30%;
    background-color: var(--color-bg);
    border-top: 1px solid var(--color-border);
    position: absolute;
    top: 10%;
    right: 0;
    z-index: 25;
    border-radius: 1rem;

    animation: slideDown 0.3s ease;

    @keyframes slideDown {
      from {
        opacity: 0;
        transform: translateY(-10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      padding: 0.75rem 1rem;
      margin: 0;
    }

    li a {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      font-size: 1rem;
      color: var(--color-text-primary);
      cursor: pointer;
      padding: 0.6rem 0.9rem;
      border-radius: 6px;
      transition: all 0.3s ease;

      svg {
        font-size: 1.2rem;
      }

      &:hover {
        background: var(--color-section);
        color: var(--color-primary);
        svg {
          color: var(--color-primary);
        }
      }

      &.active {
        background: var(--color-primary);
        color: white;
        svg {
          color: white;
        }
      }
    }
  }
`;

/* Mobile Menu */
// export const MobileMenu = styled.div`
//   display: none;
 
//   @media (max-width: 768px) {
//     display: ${({ open }) => (open ? "block" : "none")};
//     width: 30%;
//     background-color: var(--color-bg);
//     border-top: 1px solid var(--color-border);
//     padding-top: 0.5rem; 
//     padding-bottom: 0.5rem; 
//     background-color: var(--color-bg);


//     ul {
//       list-style: none;
//       display: flex;
//       flex-direction: column;
//       gap: 0.75rem; 
//       padding: 0; 
//       margin: 0;
//     }

//     li {
//       padding: 0.5rem 1rem; 
//     }

//     li a {
//       font-size: 1rem;
//       color: var(--color-text-primary);
//       cursor: pointer;
//       display: block;
//       padding: 0.5rem 0; 
//     }

//     li a.active {
//       color: var(--color-primary);
//       font-weight: 600;
      
//     }
//   }
// `;
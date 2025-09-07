import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  padding: 1.5rem 1rem;
  display: flex;
  justify-content: center;
`;

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: space-evenly;
  align-items: center;
  margin: 0rem 5.5rem;
`;

export const Card = styled.div`
  flex: 1 1 calc(22% - 1rem); 
  max-width: 220px;
  min-width: 200px;
  background: var(--color-bg);
  border-radius: 0.6rem;
  padding: 0.8rem;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.05);
  border: 1px solid var(--color-border);
  transition: box-shadow 0.2s ease,
  transform 0.2s ease;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  &:hover {
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.08);
    transform: translateY(-2px);
    border-color: var(--color-primary);
    cursor: pointer; 
}

  @media (max-width: 1024px) {
    flex: 1 1 calc(28% - 1rem);
  }
  @media (max-width: 768px) {
    flex: 1 1 calc(45% - 1rem);
  }
  @media (max-width: 480px) {
    flex: 1 1 100%;
    max-width: 50%;
  }
`;
export const Top = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
`;
export const Discount = styled.div`
  align-self: flex-start;
  background: var(--color-primary);
  color: #fff;
  font-size: 0.65rem;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 0.5rem;
`;

export const Wishlist =styled.button`
  align-self: center;
  background: var(--color-primary);
  color: #fff;
  padding: 2px 8px;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  &:hover {
      background: var(--color-primary-light);
    }
`

export const Image = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-height: 100%;
    max-width: 100%;
    object-fit: contain;
  }
`;

export const ProductName = styled.div`
  h3 {
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--color-text-primary);
    text-align: center;
    font-family: var(--font-primary);
  }
`;

export const Detail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* gap: 0.5rem; */
  font-size: 0.95rem;
  color: var(--color-text-secondary);
  font-family: var(--font-secondary);
  p{
    margin: 5px;
  }
`;

export const Price = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  gap: 0.4rem;

  h3 {
    /* font-size: 0.9rem; */
    color: var(--color-primary);
    font-weight: 700;
  }
  h6 {
    font-size: 0.75rem;
    color: var(--color-text-secondary);
    text-decoration: line-through;
    
  }
`;
export const PrescriptionTag = styled.div`
  position: absolute; /* Position it relative to the Card */
  top: 0.5rem; /* Adjust as needed */
  right: 0.5rem; /* Adjust as needed */
  background: var(--color-alert); /* Using a distinct color for alerts */
  color: #fff;
  font-size: 0.65rem;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 0.5rem;
  z-index: 1; /* Ensure it's above other elements */
`;
// export const Button = styled.div`
//   display: flex;
//   justify-content: center;
//   margin-top: auto;

//   button {
//     background: var(--color-primary);
//     border: none;
//     color: #fff;
//     padding: 0.8rem 1.5rem;
//     font-size: 0.85rem;
//     font-weight: 600;
//     border-radius: 0.5rem;
//     cursor: pointer;
//     transition: background 0.2s ease;

//     &:hover {
//       background: var(--color-primary-light);
//     }
//   }
// `;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const Button = styled.button`
  border: 2px solid var(--color-primary);
  font-size: 1rem;
  font-weight: 600;
  padding: 0.3rem 0.9rem;
  border-radius: 0.6rem;
  cursor: pointer;
  transition: all 0.2s ease;
  background-color: var(--color-primary-light); 
  &:hover {
    background: var(--color-secondary-light);
  }
`;
export const Button1 = styled.button`
  border: 2px solid var(--color-primary);
  font-size: 1rem;
  font-weight: 400;
  padding: 0.3rem 0.9rem;
  border-radius: 0.6rem;
  cursor: pointer;
  transition: all 0.2s ease;
  background: var(--color-secondary-light);


 
  &:hover {
    background: var(--color-primary);
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center;
  font-family: "Poppins", sans-serif;
  gap: 1rem;
`;
export const DateText = styled.h4`

  font-size: 22px;
  font-weight: bold;
  /* color: var(--color-primary); */
  color: white;

  margin: 0;
  font-family: "Poppins", sans-serif;
  
`;

export const TimeText = styled.h6`
  font-size: 20px;
  font-weight: bold;
  /* color: var(--color-primary); */
  color: white;
  margin-top: 0;
  text-shadow: 0 0 10px white;
  font-family: "Poppins", sans-serif;
  /* padding-left: 1rem; */

`;


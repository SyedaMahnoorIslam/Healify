import styled from "styled-components";
export const Heading =styled.div`
 padding: 1px 0px;
  background-color: var(--color-primary);
  color: #fff;
  /* font-size: 1.5rem; */
  /* font-weight: 600; */
  text-align: center;
  height:5rem ;
  
`
export const CheckoutWrapper = styled.div`
  background: var(--color-bg);
  color: var(--color-text-primary);
  font-family: var(--font-primary);
  padding: 2rem;
  max-width: 600px;
  margin: 2rem auto;
  border: 1px solid var(--color-border);
  border-radius: 1rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
`;

export const StepHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 1rem;
`;

export const BackArrow = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: var(--color-text-primary);
  display: flex;
  align-items: center;
`;

export const Title = styled.h2`
  text-align: center;
  flex: 1;
  margin: 0;
  color: var(--color-primary);
`;

export const Section = styled.div`
  margin-bottom: 2rem;
  background: var(--color-section);
  padding: 1.5rem;
  border-radius: 1rem;
`;

export const Option = styled.div`
  margin: 0.8rem 0;
  display: flex;
  align-items: center;
  gap: 0.8rem;

  input {
    accent-color: var(--color-primary);
    cursor: pointer;
  }

  label {
    cursor: pointer;
    font-family: var(--font-secondary);
    color: var(--color-text-secondary);
  }
`;

export const AddAddress = styled.p`
  color: var(--color-primary);
  font-family: var(--font-secondary);
  font-size: 0.95rem;
  margin-top: 1rem;
  cursor: pointer;
  text-decoration: underline;
`;

export const Button = styled.button`
  background: var(--color-primary);
  border: none;
  padding: 0.8rem 1.5rem;
  margin-top: 1rem;
  color: #fff;
  font-size: 1rem;
  border-radius: 0.8rem;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: var(--color-primary-light);
  }
`;

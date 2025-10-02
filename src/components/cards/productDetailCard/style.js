import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: var(--color-section);
  display: flex;
  justify-content: center;
  /* padding: 2rem; */
  overflow-x: hidden;
  
`;

export const Container = styled.div`
  background: var(--color-bg);
  margin: 2rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  max-width: 1100px;
  width: 100%;
  padding: 2rem;
  box-shadow: 0px 4px 12px rgba(0,0,0,0.08);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const BackArrow = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: var(--color-primary);
  display: flex;
  align-items: start;
`;
export const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: start;
  margin-top: 2rem;

  img {
    max-width: 100%;
    max-height: 580px;
    border-radius: 0.8rem;
    object-fit: contain;
  }
`;

export const InfoWrapper = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--color-text-primary);
  font-family: var(--font-primary);
`;

export const Company = styled.h3`
  font-size: 1rem;
  color: var(--color-text-secondary);
  font-family: var(--font-secondary);
`;

export const Category = styled.span`
  font-size: 0.9rem;
  color: white;
  background: var(--color-primary);
  padding: 0.3rem 0.6rem;
  border-radius: 0.4rem;
  align-self: flex-start;
  font-weight: 600;
`;

export const Description = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: var(--color-text-secondary);
  margin-top: 0.5rem;
`;

export const DetailRow = styled.div`
  display: flex;
  gap: 0.5rem;
  font-size: 0.95rem;
`;

export const Label = styled.span`
  font-weight: 700;
  color: var(--color-text-primary);
`;

export const Value = styled.span`
  color: var(--color-text-secondary);
`;

export const PriceBox = styled.div`
  display: flex;
  align-items: baseline;
  gap: 1rem;
  margin: 1rem 0;

  h2 {
    color: var(--color-primary);
    font-size: 1.6rem;
    font-weight: 700;
  }

  h4 {
    text-decoration: line-through;
    color: var(--color-text-secondary);
  }

  span {
    font-size: 0.9rem;
    background: var(--color-accent-pink);
    color: #fff;
    font-weight: 600;
    padding: 0.3rem 0.6rem;
    border-radius: 0.4rem;
  }
`;

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
  padding: 0.7rem 1.4rem;
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
  font-weight: 600;
  padding: 0.7rem 1.4rem;
  border-radius: 0.6rem;
  cursor: pointer;
  transition: all 0.2s ease;

 
  &:hover {
    background: var(--color-secondary-light);
  }
`;

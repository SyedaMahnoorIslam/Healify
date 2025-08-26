import styled from "styled-components";

export const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
  font-family: var(--font-primary);
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  h1 {
    font-size: 2.5rem;
    color: var(--color-primary);
    font-family: var(--font-secondary);
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Section = styled.div`
  background: var(--color-section);
  padding: 1.5rem 2rem;
  border-radius: 12px;
  border: 1px solid var(--color-border);
  
  h2 {
    font-size: 1.8rem;
    color: var(--color-primary);
    margin-bottom: 1rem;
    font-family: var(--font-secondary);
  }

  p {
    font-size: 1rem;
    color: var(--color-text-primary);
    line-height: 1.6;
  }
`;

export const Team = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;

  img {
    max-width: 300px;
    width: 100%;
    border-radius: 12px;
    border: 1px solid var(--color-border);
  }

  p {
    flex: 1;
    font-size: 1rem;
    color: var(--color-text-primary);
    line-height: 1.6;
  }
`;

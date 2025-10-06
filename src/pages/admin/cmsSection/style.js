import styled from "styled-components";

export const PageContainer = styled.div`
  background: var(--color-bg);
  padding: 2rem;
  min-height: 100vh;
`;

export const Card = styled.div`
  background: var(--color-section);
  border: 1px solid var(--color-border);
  border-radius: 1rem;
  padding: 2rem;
  max-width: 800px;
  margin: 2rem auto;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
`;

export const Title = styled.h2`
  font-family: var(--font-primary);
  color: var(--color-text-primary);
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  text-align: center;
`;

export const Label = styled.label`
  font-family: var(--font-secondary);
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text-secondary);
  display: block;
  margin-bottom: 0.5rem;
`;

export const Select = styled.select`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid var(--color-border);
  border-radius: 0.6rem;
  font-family: var(--font-primary);
  font-size: 1rem;
  margin-bottom: 1.5rem;
  outline: none;
  background: var(--color-bg);
  color: var(--color-text-primary);
 option{
  background-color: var(--color-bg);
  &:hover{
    background-color: var(--color-primary);
  }
 }
`;

export const SaveButton = styled.button`
  background: var(--color-primary);
  color: #fff;
  font-family: var(--font-primary);
  font-size: 1rem;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 0.6rem;
  cursor: pointer;
  margin-top: 1.5rem;
  transition: background 0.3s ease;

  &:hover {
    background: var(--color-primary-light);
  }
`;

import styled from "styled-components";
export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--color-section);
  border: 1px solid var(--color-border);
  border-radius: 1rem;
  padding: 2rem;
  max-width: 800px;
  margin: 2rem auto;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
`;

export const Title = styled.h1`
  font-family: var(--font-secondary);
  color: var(--color-primary);
  font-size: 2rem;
  text-align: center;
  margin-bottom: 1rem;
`;

export const Form = styled.form`
  background-color: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: 1.5rem;
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
`;

export const Input = styled.input`
  padding: 0.8rem 1rem;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  font-family: var(--font-primary);
  font-size: 1rem;
  outline: none;
  color: var(--color-text-primary);
  &:focus {
    border-color: var(--color-primary);
    box-shadow: 0 0 0 2px rgba(83, 199, 190, 0.2);
  }
`;

export const TextArea = styled.textarea`
  padding: 0.8rem 1rem;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  font-family: var(--font-primary);
  font-size: 1rem;
  resize: none;
  color: var(--color-text-primary);
  &:focus {
    border-color: var(--color-primary);
    box-shadow: 0 0 0 2px rgba(83, 199, 190, 0.2);
  }
`;

export const Button = styled.button`
  padding: 0.8rem 1rem;
  background-color: var(--color-primary);
  color: white;
  border: none;
  border-radius: 8px;
  font-family: var(--font-primary);
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: var(--color-primary-light);
  }
`;

export const FAQList = styled.div`
  width: 100%;
  max-width: 650px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
`;


export const EmptyText = styled.p`
  color: var(--color-text-secondary);
  text-align: center;
  font-style: italic;
`;


export const ActionButtons = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: flex-start;
`;

export const IconButton = styled.button`
  background: ${({ deletebtn }) =>
    deletebtn ? "var(--color-alert)" : "var(--color-primary-light)"};
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 0.4rem 0.6rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ deletebtn }) =>
    deletebtn ? "var(--color-alert)" : "var(--color-primary)"};
  }
`;

export const FAQItem = styled.div`
  background-color: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: 10px;
  padding: 1rem 1.2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.07);
  }
`;

export const Question = styled.h3`
  color: var(--color-primary);
  font-family: var(--font-secondary);
  font-size: 1.1rem;
  margin-bottom: 0.4rem;
`;

export const Answer = styled.p`
  color: var(--color-text-secondary);
  margin: 0;
  line-height: 1.5;
  font-size: 0.95rem;
`;

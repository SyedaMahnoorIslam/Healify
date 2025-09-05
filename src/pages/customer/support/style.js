import styled from "styled-components";

export const PageContainer = styled.div`
  background: var(--color-bg);
  color: var(--color-text-primary);
  font-family: var(--font-primary);
  min-height: 100vh;
  padding: 2rem;
  line-height: 1.7;
`;

export const Header = styled.header`
  text-align: center;
  margin-bottom: 3rem;

  h1 {
    font-family: var(--font-secondary);
    color: var(--color-primary);
    font-size: 2.8rem;
    margin: 0;
  }

  h2 {
    font-size: 1.2rem;
    color: var(--color-text-secondary);
    margin-top: 0.5rem;
  }
`;

export const Section = styled.section`
  max-width: 800px;
  margin: 2rem auto;
  background: var(--color-section);
  border: 1px solid var(--color-border);
  padding: 2rem;
  border-radius: 12px;

  h3 {
    color: var(--color-primary);
    margin-bottom: 1rem;
  }

  p {
    color: var(--color-text-secondary);
    margin-bottom: 1rem;
  }
`;

export const FAQBox = styled.div`
  border: 1px solid var(--color-border);
  border-radius: 10px;
  padding: 1rem;
  margin-bottom: 1rem;
  background: var(--color-bg);
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: var(--color-section);
  }

  .faq-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h4 {
    margin: 0;
    font-size: 1.1rem;
    color: var(--color-text-primary);
  }

  .faq-icon {
    font-size: 1.4rem;
    color: var(--color-primary);
  }

  .faq-answer {
    margin-top: 0.8rem;
    color: var(--color-text-secondary);
    line-height: 1.6;
  }
`;

export const Footer = styled.footer`
  text-align: center;
  margin-top: 3rem;
  font-size: 0.9rem;
  color: var(--color-text-secondary);
`;

import styled, { keyframes } from "styled-components";
const fadeInAnim = keyframes`
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: var(--color-bg);
  color: var(--color-text-primary);
  font-family: var(--font-primary);
  overflow-x: hidden;
`;

export const Main = styled.div`
  flex: 1;
  padding: 2rem;
  background-color: var(--color-bg);
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
`;

export const Card = styled.div`
  background-color: var(--color-section);
  border: 1px solid var(--color-border);
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.12);
  }

  .stat-value {
    font-size: 1.6rem;
    font-weight: bold;
    margin-top: 1rem;
    color: var(--color-text-primary);
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-text-secondary);
  margin-bottom: 0.5rem;
`;
export const Image= styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 img{
    width: 80%;
 }
`
export const ChartWrapper = styled.div`
  margin-top: 2rem;
  background: var(--color-section);
  border-radius: 1rem;
  padding: 1.5rem;
  border: 1px solid var(--color-border);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.01);
  }

  h2 {
    margin-bottom: 1rem;
    font-size: 1.3rem;
    color: var(--color-text-primary);
  }
`;

export const FadeIn = styled.div`
  animation: ${fadeInAnim} 0.8s ease forwards;
`;

// ===== Prescription Specific Styles =====
export const CommentBox = styled.textarea`
  width: 100%;
  min-height: 60px;
  margin-top: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid var(--color-border);
  padding: 0.5rem;
  font-family: var(--font-primary);
  font-size: 0.9rem;
  resize: vertical;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 0.8rem;
  margin-top: 1rem;
`;

export const ActionButton = styled.button`
  background: ${(props) => props.bg || "var(--color-primary)"};
  color: #fff;
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-weight: 600;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    opacity: 0.9;
  }
`;

export const ContactLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  a {
    color: var(--color-primary);
    display: flex;
    align-items: center;
    gap: 0.4rem;
    text-decoration: none;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }
`;

import styled from "styled-components";

export const NotificationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: var(--color-bg);
  font-family: var(--font-primary);
`;

export const Header = styled.div`
  padding: 1.5rem 2rem;
  background-color: var(--color-primary);
  color: #fff;
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
`;

export const NotificationList = styled.div`
  flex: 1;
  padding: 1rem 2rem;
  background-color: var(--color-section);
`;

export const NotificationItem = styled.div`
  background-color: var(--color-bg);
  border: 1px solid var(--color-border);
  padding: 1rem;
  border-radius: 12px;
  margin-bottom: 1rem;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
  transition: all 0.3s ease;
  

  &:hover {
    background-color: var(--color-primary-light);
    color: #fff;
    transform: translateY(-2px);
  }

  .title {
    font-weight: 600;
    font-size: 1.1rem;
    color: var(--color-text-primary);
  }

  .message {
    font-size: 0.95rem;
    color: var(--color-text-secondary);
    margin-top: 0.25rem;
  }

  .time {
    font-size: 0.8rem;
    color: var(--color-text-secondary);
    margin-top: 0.5rem;
    text-align: right;
  }
`;

export const EmptyState = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-text-secondary);
  font-size: 1.1rem;
`;

import styled from 'styled-components';
import { FaTools, FaRedo, FaUndo } from 'react-icons/fa'; // Icons for visual appeal

// --- STYLED COMPONENTS ---

export const PageWrapper = styled.div`
  min-height: 100vh;
  padding: 80px 0; /* Header/Footer ke liye space */
  background-color: var(--color-bg);
  color: var(--color-text-primary);
  transition: all 0.3s ease; /* Theme change transition */
`;

export const ContentContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const Title = styled.h1`
  font-family: var(--font-secondary);
  color: var(--color-primary);
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 30px;
  border-bottom: 3px solid var(--color-primary-light);
  padding-bottom: 10px;
  display: inline-block;
`;

export const PolicySection = styled.div`
  background-color: var(--color-section); /* Light/Dark theme neutral background */
  border-radius: 8px;
  padding: 30px;
  margin-bottom: 40px;
  border-left: 5px solid var(--color-accent-green);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  
  /* Dummy section ko alag color code karne ke liye */
  ${(props) => props.accentPink && `
    border-left-color: var(--color-accent-pink);
  `}
`;

export const SectionTitle = styled.h2`
  font-family: var(--font-secondary);
  color: var(--color-text-primary);
  font-size: 1.8rem;
  margin-top: 0;
  margin-bottom: 15px;
  display: flex;
  align-items: center;

  svg {
    color: var(--color-primary);
    margin-right: 10px;
  }
`;

export const PolicyText = styled.p`
  line-height: 1.6;
  color: var(--color-text-secondary);
  margin-bottom: 15px;
`;

// --- UNDER MAINTENANCE BANNER ---

export const MaintenanceBanner = styled.div`
  background-color: var(--color-alert); /* Alert Red/Error color */
  color: #ffffff;
  padding: 20px;
  text-align: center;
  position: fixed; /* Bottom par fix rahega */
  bottom: 0;
  left: 0;
  width: 100%;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.2);
  z-index: 1000; /* Sabse upar dikhe */

  h3 {
    font-family: var(--font-primary);
    font-size: 1.5rem;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  svg {
    margin-right: 10px;
    font-size: 1.8rem;
  }
`;
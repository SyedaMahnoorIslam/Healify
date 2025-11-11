import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  overflow: hidden;
`;

export const LeftDiv = styled.div`
  width: 20%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9000;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;     
  background-color: var(--color-section);

  @media (max-width: 980px) {
    width: 20%;
  }

  @media (max-width: 675px) {
    width: 70px;
  }
`;

export const RightDiv = styled.div`
  margin-left: 20%;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  background-color: var(--color-bg);

  @media (max-width: 980px) {
    margin-left: 20%;
    width: 80%;
  }

  @media (max-width: 675px) {
    margin-left: 70px;
    width: calc(100% - 70px);
  }
`;

export const ContentWrapper = styled.div`
  margin-top: 10vh; 
  padding: 1.5rem;
  min-height: 90vh;
  box-sizing: border-box;
  overflow-y: auto;
`;

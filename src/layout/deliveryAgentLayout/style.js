// import styled from "styled-components";

// export const Main = styled.div`
//  display: flex;
//  width: 100%;
//  box-sizing: border-box;
// .sidebar {
 
// }

// .dA-content {
//   width: 100%;
//   max-height: 100vh;
//   overflow-y: auto;
//   @media (max-width:769px) {
//     padding: 1px;
//   }
// }
// `;
// export const LeftDiv = styled.div`
//   max-height: 100vh;
//   overflow: hidden;
//   width: 25%;
//   justify-content: start;
//   align-items: start;

// div{
//   width: 95%;
//   display: flex;
//   justify-content: start;
// }
// `
// style.js
import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: row;   /* Explicitly set */
  width: 100%;
  box-sizing: border-box;

  .dA-content {
    flex: 1;  /* Take remaining space */
    max-height: 100vh;
    overflow-y: auto;

    @media (max-width: 769px) {
      padding: 1px;
    }
  }
`;

export const LeftDiv = styled.div`
  max-height: 100vh;
  overflow-y: hidden;  
  width: 22%;
  display: flex;    
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  > div {
    width: 90%;
  }
`;

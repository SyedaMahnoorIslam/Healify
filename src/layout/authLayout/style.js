import styled from "styled-components";

export const Main=styled.div`
.auth-container {
  display: flex;
  align-items: stretch;    
  justify-content: center;
  width: 100%;

}

.auth-image {
  width: 50%;
  overflow: hidden;
}


.auth-image img {
  width: 100%;
  height: 100%;
  object-fit: cover; 
}

.auth-content {
  width: 50%;
  display: flex;
  align-items: center; 
  justify-content: center;
  padding: 40px;
  box-sizing: border-box;
}
`;


// import styled from "styled-components";

// export const Main = styled.div`
//   .auth-container {
//     display: flex;
//     width: 100%;
//     min-height: 100vh;
//     overflow: hidden;
//   }

//   .auth-image {
//     width: 50%;
//     overflow: hidden;
//   }

//   .auth-image img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//   }

//   .auth-content {
//     width: 50%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     box-sizing: border-box;
//   }

//   /* ----------- Responsive ----------- */
//   @media (max-width: 900px) {
//     .auth-image {
//       display: none;
//     }

//     .auth-content {
//       width: 100%;
//       padding: 30px;
//     }
//   }
// `;


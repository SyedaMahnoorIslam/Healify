import styled from "styled-components";

export const Main=styled.div`
.dA-container {
  /* display: flex;
  align-items: stretch;    
  justify-content: center;
  width: 100%; */
  display: flex;
  min-height: 100vh;
  width: 100%;
  /* overflow-x: hidden; */

  /* @media (max-width: 960px) {
    flex-direction: column;
  } */
}

/* .auth-image {
  width: 50%;
  overflow: hidden;
  width: 50%;
  object-fit: cover;
    @media (max-width: 960px) {
    display: none;
  }
}  */


.sidebar {
 width: 30%;
 object-fit: cover;
 /* height: 80vh; */
  
  /* @media (max-width: 690px) {
  width: 20%;
 object-fit: cover;

  }  */
}

.dA-content {
  width: 100%;
  padding:1rem;
  
 
  /* @media (max-width: 960px) {
    width: 100%;
  } */

  div{
    width: 98%;
  }
}
`;

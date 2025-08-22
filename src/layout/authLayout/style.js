import styled from "styled-components";

export const Main=styled.div`
.auth-container {
  /* display: flex;
  align-items: stretch;    
  justify-content: center;
  width: 100%; */
  display: flex;
  min-height: 100vh;
  overflow: hidden;

  @media (max-width: 960px) {
    flex-direction: column;
  }
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


.auth-img {
 width: 50%;
 object-fit: cover;
 height: 100vh;
  
  @media (max-width: 960px) {
    display: none;
  } 
}

.auth-content {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--color-bg);
  
 
  @media (max-width: 960px) {
    width: 100%;
  }

  div{
    width: 100%;
    /* margin-top: 5px; */
  }
}
`;

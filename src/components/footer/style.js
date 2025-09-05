import styled from "styled-components";

export const Foooter = styled.div`
 background-color:var( --color-primary);
 color:black;
 overflow: hidden;
 height: auto;
`;
export const TopDiv = styled.div`
    display:flex;
    justify-content: space-around;
    gap: 20%;
    padding:3%;
     @media (max-width: 1200px) {
    flex-wrap:wrap;
    padding: 3%;
 }

`;

export const First = styled.div`
   display: flex;
   flex-direction: column;
   text-align:left;
   font-family:sans-serif;
   padding: 0%;
   gap: 4rem;
   justify-content: space-between;
   align-items: center;
     @media (max-width: 1200px) {
    padding: 3%;
 }
 div{
   display: flex;
   text-align:left;
   font-family:sans-serif;
   padding: 0%;
   gap: 1rem;
   justify-content: center;
   align-items: center;
     @media (max-width: 1200px) {
    padding: 3%;
 }
    img{
    height: 5rem;
    width: 5rem;
  }
 h3{
    color:black;
 }
 }
  
`;
export const SocialLinks = styled.div`
  background-color: white;
  height: 2rem;
  width:2rem;
  border-radius: 5px;
  transition: transform 0.3s ease-out;
  box-shadow: 0px 4px 8px rgba(255, 255, 255, 0.8);

 &:hover{
   transform: translateY(-5px);
   transform: scale(1.6);
 }
   
`
export const Second = styled.div`

  display:flex;
  justify-content:space-evenly;
  gap: 4rem;
  color:black;
  font-family:sans-serif;
  padding: 0%;

 @media (max-width: 700px) {
    gap: 1rem;
 }
 @media (max-width: 550px) {
    flex-wrap: wrap;
    justify-content: left;
 }

ul{
    display: flex;
    flex-direction: column;
    list-style-type:none;
    gap: 0.5rem;
}
li{
    
}

ul li a{
    text-decoration:none;
    color:black;
    line-height:2
    
}
`;
export const Detail = styled.p`

`;
export const Logo = styled.img`
height: 5rem;
width: 5rem;

`;
export const Line = styled.div`
  height:2px;
  width:90%;
  background-color:black;
`;
export const LastDiv = styled.div`
    padding-left: 5%;
    
`;



export const LText = styled.h6`
   text-align: center;
`;
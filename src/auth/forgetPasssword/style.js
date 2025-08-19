
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const ImageSide = styled.img`
  width: 50%;
  object-fit: cover;

  
  @media (max-width: 900px) {
    display: none;
  }
 
`;

export const FormSide = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--color-bg);
  padding: 1rem;
   /* img{
    height: 8rem;
    width: 8rem;
  } */
 
  @media (max-width: 900px) {
    width: 100%;
    padding: 30px;
    margin-top: 3rem;
  }
`;

export const Card = styled.div`
  background: var(--color-section);
  padding: 30px;
  max-width: 420px;
  width: 100%;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0, 0.20, 0, 0.20);
  margin-top: 2rem;
  
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  margin-top: 5px;
  font-family: var(--font-secondary);
  font-size: 1.4rem;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 1rem;
  color: var(--color-text-primary);
   img{
    height: 6.2rem;
    width: 6.2rem;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;

  .loginButton {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    p {
      text-align: center;

      a {
        /* color: rgba(53, 99, 233, 1); */
        color: var(--color-primary-light);
        cursor: pointer;
      }
    }
    h3 {
      text-align: center;
      margin: 0;
    }


    button {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.8rem;
      height: 45px;
      background: var(--color-primary);
      color: #fff;
      border: none;
      border-radius: 8px;
      padding: 12px;
      cursor: pointer;
      transition: 0.2s;

      &:hover {
        background: var(--color-primary-light);
      }

      img {
        height: 1.2rem;
      }
    }
  }
`;

export const Input = styled.input`
  padding: 12px;
  border: 1px solid #ccdce8;
  border-radius: 8px;
  background: #f8fbff;
`;

export const Button = styled.button`
  background: var(--color-primary);
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 12px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: var(--color-primary-light);
  }
`;


export const BackText = styled.p`
  text-align: center;
  margin-top: 1rem;

  a {
    color: var(--color-primary-light);
    cursor: pointer;
  }
`;
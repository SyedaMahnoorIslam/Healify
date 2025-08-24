import styled from "styled-components";

export const Container = styled.div`
  padding: 30px;
  max-width: 900px;
  margin: auto;

  h2 {
    margin-bottom: 20px;
    font-size: 26px;
    font-weight: bold;
    color: #2c3e50;
  }
`;

export const OrderCard = styled.div`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s;

  &:hover {
    box-shadow: 0 6px 12px rgba(0,0,0,0.1);
    transform: translateY(-3px);
  }

  h3 {
    margin: 0;
    font-size: 18px;
    color: #2980b9;
  }

  a {
    text-decoration: none;
    padding: 8px 14px;
    background: #27ae60;
    color: white;
    border-radius: 8px;
    font-weight: 500;
    transition: 0.3s;

    &:hover {
      background: #2ecc71;
    }
  }
`;
export const Button =styled.button`

`

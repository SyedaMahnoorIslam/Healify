import styled from "styled-components";

export const Container = styled.div`
  padding: 30px;
  max-width: 800px;
  margin: auto;
  background: #fefefe;
  border-radius: 12px;
  box-shadow: 0 6px 14px rgba(0,0,0,0.1);

  h2 {
    margin-bottom: 20px;
    font-size: 24px;
    color: #2c3e50;
  }
`;

export const StatusBar = styled.div`
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 20px;
  background: ${({ status }) =>
    status === "Delivered"
      ? "#2ecc71"
      : status === "Shipped"
      ? "#f39c12"
      : "#e74c3c"};
  color: white;
  font-weight: bold;
  text-align: center;
`;

export const Section = styled.div`
  margin-bottom: 20px;

  h3 {
    margin-bottom: 8px;
    color: #34495e;
  }

  p {
    margin: 5px 0;
    font-size: 15px;
  }
`;

export const InvoiceBtn = styled.button`
  background: #2980b9;
  color: white;
  padding: 10px 18px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #3498db;
  }
`;

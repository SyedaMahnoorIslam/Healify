import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  background: var(--color-section);
  min-height: 100vh;
  font-family: var(--font-primary);
  
`;

export const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 20px;
  color: var(--color-text-primary);
`;

export const ChartsRow = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap; /* responsive */
  margin-bottom: 20px;
  width: 100%;
    @media (max-width: 1000px){
    width: 80%;
  }
`;

export const Filter = styled.button`
  background-color: var(--color-accent-pink);
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-family: var(--font-secondary);
  font-weight: bold;
  transition: 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

export const Dropdown = styled.select`
  padding: 8px 12px;
  border-radius: 5px;
  border: none;
  background: var(--color-primary);
  color: white;
  font-weight: bold;
  font-family: var(--font-secondary);
  cursor: pointer;

  &:hover {
    /* transform: scale(1.05); */
  }
`;

export const ChartBox = styled.div`
  flex: 1;
  min-width: 300px;
  background: var(--color-bg);
  padding: 15px;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.08);
  transition: 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap; /* mobile me wrap */
    gap: 10px;
  }

  h3 {
    margin-bottom: 15px;
    color: var(--color-primary);
    font-family: var(--font-secondary);
    font-weight: 700;
  }
`;

export const TableSection = styled.div`
  background: var(--color-bg);
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  h3 {
    margin-bottom: 15px;
    color: var(--color-primary);
    font-family: var(--font-secondary);
    font-weight: 700;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    padding: 12px;
    text-align: left;
    font-family: var(--font-primary);
  }

  th {
    background: var(--color-primary);
    color: #fff;
  }

  tr:nth-child(even) {
    background: var(--color-section);
  }
  .td-date{
    display: flex;
    @media (max-width: 969px){
      display: none;
    }
  }
`;

export const Th = styled.th``;
export const Td = styled.td`


`;

export const StatusBadge = styled.span`
  padding: 5px 10px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  color: #fff;

  background: ${({ status }) =>
    status === "Low Stock"
      ? "#E67E22"
      : status === "Expiring Soon"
      ? "#E74C3C"
      : "#2ECC71"};
`;
import styled from "styled-components";
export const Container = styled.div`
  padding: 2rem;
  background: var(--color-bg);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  font-family: var(--font-primary);
`;

export const HeaderCard = styled.div`
  background: var(--color-primary);
  padding: 2rem;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  color: white;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
`;

export const ProfileImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 4px solid white;
  object-fit: cover;
`;

export const UserInfo = styled.div`
  h2 {
    margin: 0;
    font-size: 1.8rem;
    font-weight: 700;
  }
  p {
    margin: 0.3rem 0 0;
    font-size: 1rem;
    opacity: 0.9;
  }
`;

export const DetailsCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.08);

  h3 {
    margin-bottom: 1.5rem;
    color: var(--color-text-primary);
    font-size: 1.4rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const FormRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;

  label {
    width: 100px;
    font-weight: 600;
    color: var(--color-text-secondary);
  }

  .edit-icon {
    position: absolute;
    right: 15px;
    color: var(--color-primary-light);
    cursor: pointer;
  }
`;

export const Input = styled.input`
  flex: 1;
  padding: 0.8rem 1rem;
  border: 1px solid var(--color-border);
  border-radius: 12px;
  font-size: 0.95rem;
  outline: none;

  &:focus {
    border-color: var(--color-primary);
    box-shadow: 0 0 5px rgba(83, 199, 190, 0.4);
  }
`;

export const RadioGroup = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 5px;
`;

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 16px;
  cursor: pointer;
`;

export const SaveButton = styled.button`
  margin-top: 2rem;
  padding: 0.9rem 1.5rem;
  background: var(--color-primary);
  color: white;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: 0.2s ease-in;

  &:hover {
    background: var(--color-primary-light);
  }
`;
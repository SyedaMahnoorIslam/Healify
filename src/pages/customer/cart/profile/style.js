import styled from "styled-components";
export const Heading =styled.div`
 padding: 1px 0px;
  background-color: var(--color-primary);
  color: #fff;
  /* font-size: 1.5rem; */
  /* font-weight: 600; */
  text-align: center;
  height:5rem ;
  
`
export const ProfileSection = styled.section`
  /* background: var(--color-section); */
  padding: 2rem;
  display: flex;
  justify-content: center;
`;

export const ProfileCard = styled.div`
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  padding: 2rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  /* max-width: 600px; */
  width: 100%;

  .profile-img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 3px solid var(--color-primary);
    object-fit: cover;
  }
`;

export const UserInfo = styled.div`
  h2 {
    margin: 0;
    font-family: var(--font-secondary);
    color: var(--color-text-primary);
  }
  p {
    margin: 0.2rem 0;
    color: var(--color-text-secondary);
  }
`;

export const AddressBookSection = styled.section`
  background: var(--color-bg);
  padding: 2rem;
  margin: 2rem;
  border: 1px solid var(--color-border);
  border-radius: 1rem;
`;

export const SectionTitle = styled.h3`
  margin-bottom: 1rem;
  font-family: var(--font-secondary);
  color: var(--color-text-primary);
`;

export const AddressList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 1rem;
`;

// export const AddressItem = styled.li`
//   background: var(--color-section);
//   padding: 0.8rem;
//   margin-bottom: 0.5rem;
//   border-radius: 0.6rem;
//   border: 1px solid var(--color-border);
// `;

export const AddButton = styled.button`
  background: var(--color-primary);
  color: #fff;
  padding: 0.8rem 1.2rem;
  border: none;
  border-radius: 0.6rem;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background: var(--color-primary-light);
  }
`;

/* Modal Styling */
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background: var(--color-bg);
  padding: 2rem;
  border-radius: 1rem;
  width: 400px;
  max-width: 90%;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
`;

export const ModalHeader = styled.h3`
  margin: 0 0 1rem 0;
  font-family: var(--font-secondary);
  color: var(--color-text-primary);
`;

export const ModalBody = styled.div`
  margin-bottom: 1rem;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid var(--color-border);
  border-radius: 0.6rem;
  font-family: var(--font-primary);
`;

export const SaveButton = styled.button`
  background: var(--color-primary);
  color: #fff;
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 0.6rem;
  cursor: pointer;

  &:hover {
    background: var(--color-primary-light);
  }
`;

export const CancelButton = styled.button`
  background: var(--color-border);
  color: var(--color-text-primary);
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 0.6rem;
  cursor: pointer;

  &:hover {
    background: var(--color-section);
  }
`;

export const EditButton = styled.button`
  margin-top: 1rem;
  background: var(--color-primary);
  color: #fff;
  padding: 0.6rem 1rem;
  border: none;
  border-radius: 0.6rem;
  cursor: pointer;
  font-size: 0.9rem;

  &:hover {
    background: var(--color-primary-light);
  }
`;
export const SmallButton = styled.button`
  background: ${(props) => (props.del ? "#ff4d4f" : "var(--color-primary)")};
  color: #fff;
  border: none;
  border-radius: 0.4rem;
  padding: 0.3rem 0.6rem;
  margin-left: 0.4rem;
  cursor: pointer;
  font-size: 0.8rem;

  &:hover {
    background: ${(props) => (props.del ? "#d9363e" : "var(--color-primary-light)")};
  }
`;

export const AddressItem = styled.li`
  background: var(--color-section);
  padding: 0.8rem;
  margin-bottom: 0.5rem;
  border-radius: 0.6rem;
  border: 1px solid var(--color-border);
  display: flex;
  justify-content: space-between;
  align-items: center;

  .actions {
    display: flex;
    gap: 0.3rem;
  }
`;
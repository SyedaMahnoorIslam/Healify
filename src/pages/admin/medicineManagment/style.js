// import styled from "styled-components";

// export const PageContainer = styled.div`
//   padding: 2rem;
//   max-width: 900px;
//   margin: auto;
// `;

// export const Title = styled.h1`
//   font-size: 1.8rem;
//   margin-bottom: 1.5rem;
//   text-align: center;
//   color: var(--color-primary, #2e7d32);
// `;
// export const Top = styled.div`
// display: flex;
// justify-content: space-between;
// align-items: start;
// `
// export const MedicineCard = styled.div`
//   background: var(--color-primary);
//   border-radius: 1rem;
//   padding: 1rem 1.5rem;
//   margin: 1rem 0;
//   box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.08);
//   display: flex;
//   flex-direction: column;
//   gap: 1rem;
//   justify-content: space-between;
//   /* align-items: center; */
//   transition: 0.3s;
//   &:hover {
//     transform: translateY(-5px);
//     box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.15);
//   }
// `;
// export const MedicineImage = styled.img`
// width: 50%;
// /* height: 10rem; */
// align-items: start;

// `;
// export const MedicineInfo = styled.div`
//   font-size: 1rem;
//   color: #444;
// `;

// export const ButtonGroup = styled.div`
//   display: flex;
//   gap: 0.8rem;

// `;

// export const ActionButton = styled.button`
//   background: ${(props) =>
//     props.delete ? "#e53935" : "var(--color-primary, #2e7d32)"};
//   color: #fff;
//   border: none;
//   border-radius: 0.5rem;
//   padding: 0.5rem 1rem;
//   cursor: pointer;
//   transition: 0.3s;

//   &:hover {
//     background: ${(props) =>
//     props.delete ? "#c62828" : "var(--color-primary-dark, #1b5e20)"};
//     transform: scale(1.05);
//   }
// `;

// export const AddButton = styled.button`
//   background: #0288d1;
//   color: #fff;
//   border: none;
//   border-radius: 0.6rem;
//   padding: 0.6rem 1.2rem;
//   cursor: pointer;
//   margin-bottom: 1rem;
//   font-weight: bold;
//   transition: 0.3s;

//   &:hover {
//     background: #01579b;
//     transform: scale(1.05);
//   }
// `;

// export const FormOverlay = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: rgba(0, 0, 0, 0.5);
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// export const FormContainer = styled.div`
//   background: #fff;
//   padding: 2rem;
//   border-radius: 1rem;
//   width: 400px;
//   /* position: relative; */
//   animation: fadeIn 0.3s ease-in-out;

//   @keyframes fadeIn {
//     from {
//       opacity: 0;
//       transform: scale(0.95);
//     }
//     to {
//       opacity: 1;
//       transform: scale(1);
//     }
//   }
// `;


// export const FormTextarea = styled.div`

// `;
// export const FormTitle = styled.h2`
//   margin-bottom: 1rem;
//   color: var(--color-primary, #2e7d32);
// `;

// export const FormInput = styled.input`
//   width: 100%;
//   padding: 0.6rem;
//   margin: 0.4rem 0;
//   border-radius: 0.5rem;
//   border: 1px solid #ccc;
// `;

// export const FormRow = styled.div`
//   margin-bottom: 1rem;
// `;

// export const CheckboxLabel = styled.label`
//   display: flex;
//   align-items: center;
//   gap: 0.5rem;
// `;

// export const CloseButton = styled.button`
//   position: absolute;
//   top: 10px;
//   right: 15px;
//   background: transparent;
//   font-size: 1.5rem;
//   cursor: pointer;
//   border: none;
//   color: #666;
//   transition: 0.2s;

//   &:hover {
//     color: #000;
//     transform: rotate(90deg);
//   }
// `;

// style.js
import styled from "styled-components";

export const PageContainer = styled.div`
  padding: 2rem;
  max-width: 950px;
  margin: auto;
  background: var(--color-bg);
  font-family: var(--font-primary);
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-align: center;
  font-weight: 700;
  color: var(--color-primary);
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
`;

export const MedicineCard = styled.div`
  background: var(--color-section);
  border: 1px solid var(--color-border);
  border-radius: 1rem;
  padding: 1.2rem 1.5rem;
  margin: 1rem 0;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 8px 18px rgba(0, 0, 0, 0.12);
  }
`;

export const MedicineImage = styled.img`
  width: 40%;
  /* height: 10rem; */
  object-fit: contain;
  /* border-radius: 0.8rem; */
  /* background: #fff; */
  /* padding: 0.4rem; */
  /* border: 1px solid var(--color-border); */
`;

export const MedicineInfo = styled.div`
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--color-text-secondary);

  strong {
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--color-text-primary);
  }

  b {
    color: var(--color-text-primary);
  }

  em {
    color: var(--color-accent-pink);
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 0.8rem;
`;

export const ActionButton = styled.button`
  background: ${(props) =>
    props.delete ? "#e53935" : "var(--color-primary)"};
  color: #fff;
  border: none;
  border-radius: 0.6rem;
  padding: 0.6rem 1.2rem;
  font-weight: 600;
  font-family: var(--font-secondary);
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background: ${(props) =>
      props.delete ? "#c62828" : "var(--color-primary-light)"};
    transform: scale(1.05);
  }
`;

export const AddButton = styled.button`
  background: var(--color-accent-green);
  color: #fff;
  border: none;
  border-radius: 0.8rem;
  padding: 0.7rem 1.4rem;
  cursor: pointer;
  margin-bottom: 1.5rem;
  font-weight: bold;
  font-size: 1rem;
  transition: 0.3s;
  font-family: var(--font-secondary);

  &:hover {
    background: var(--color-primary-light);
    transform: scale(1.05);
  }
`;

export const FormOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background: rgba(28, 28, 28, 0.55); */
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(3px);
  z-index: 999; 
`;

export const FormContainer = styled.div`
  background: var(--color-bg);
  padding: 2rem;
  border-radius: 1rem;
  width: 420px;
  max-height: 90vh;  
  overflow-y: auto;   
  border: 1px solid var(--color-border);
  position: relative;
  box-shadow: 0px 8px 20px rgba(0,0,0,0.12);
  animation: fadeIn 0.3s ease-in-out;
  

  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--color-primary-light);
    border-radius: 4px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

export const UploadArea = styled.div`

`;

export const HiddenInput = styled.input`
  
`;

export const UploadLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const UploadButton = styled.button`
  background-color: var(--color-primary);
  color: #fff;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.75rem;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: var(--color-primary-light);
  }
`;
export const FormTitle = styled.h2`
  margin-bottom: 1.2rem;
  font-weight: 700;
  font-family: var(--font-primary);
  text-align: center;
  color: var(--color-primary);
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin: 0.4rem 0;
  border-radius: 0.6rem;
  border: 1px solid var(--color-border);
  font-size: 0.95rem;
  font-family: var(--font-secondary);

  &:focus {
    border-color: var(--color-primary);
    outline: none;
    box-shadow: 0px 0px 4px var(--color-primary-light);
  }
`;

export const FormTextarea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  min-height: 80px;
  border-radius: 0.6rem;
  border: 1px solid var(--color-border);
  resize: vertical;
  font-size: 0.95rem;
  font-family: var(--font-secondary);

  &:focus {
    border-color: var(--color-primary);
    outline: none;
    box-shadow: 0px 0px 4px var(--color-primary-light);
  }
`;

export const FormRow = styled.div`
  margin-bottom: 1rem;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.9rem;
  color: var(--color-text-secondary);

  input {
    accent-color: var(--color-primary);
    width: 16px;
    height: 16px;
    cursor: pointer;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 18px;
  background: transparent;
  font-size: 1.6rem;
  cursor: pointer;
  border: none;
  color: var(--color-text-secondary);
  transition: 0.2s;

  &:hover {
    color: var(--color-text-primary);
    transform: rotate(90deg);
  }
`;


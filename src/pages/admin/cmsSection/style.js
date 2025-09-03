import styled from "styled-components";

export const PageContainer = styled.div`
  padding: 20px;
`;

export const Title = styled.h2`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 20px;
  color: var(--color-text-primary);
`;

export const ContentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const ContentItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 18px;
  border-radius: 10px;
  background: var(--color-section);
  border: 1px solid var(--color-border);
`;

export const ContentTitle = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: var(--color-text-primary);
`;

export const ActionGroup = styled.div`
  display: flex;
  gap: 10px;
`;

export const ActionButton = styled.button`
  background: var(--color-primary);
  color: #fff;
  padding: 6px 14px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  transition: 0.3s;

  &:hover {
    background: var(--color-primary-light);
  }
`;

export const DeleteButton = styled(ActionButton)`
  background: #dc3545;
  

  &:hover {
    background: #b02a37;
  }
`;

export const AddButton = styled.button`
  background: var(--color-accent-green);
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 20px;
  transition: 0.3s;

  &:hover {
    background: var(--color-primary-light);
  }
`;

export const EditorOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const EditorContainer = styled.div`
  background: var(--color-bg);
  width: 50%;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const EditorTitle = styled.h3`
  margin-bottom: 10px;
  color: var(--color-text-primary);
  width: "100%";
  padding : "10px";
  margin-bottom: "10px";
  border-radius: "8px";
  border: "1px solid var(--color-border)";
`;

export const EditorTextarea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid var(--color-border);
  font-size: 14px;
  margin-bottom: 10px;
`;

export const SaveButton = styled.button`
  background: var(--color-primary);
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  gap: 1rem;
  transition: 0.3s;
  margin-right: 1rem;

  &:hover {
    background: var(--color-primary-light);
  }
`;

export const CancelButton = styled.button`
  background: #6c757d;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #5a6268;
  }
`;

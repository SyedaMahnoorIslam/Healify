import React, { useState } from "react";
import {
  PageContainer,
  Title,
  ContentList,
  ContentItem,
  ContentTitle,
  ActionGroup,
  ActionButton,
  EditorOverlay,
  EditorContainer,
  EditorTitle,
  EditorTextarea,
  SaveButton,
  CancelButton,
  DeleteButton,
} from "./style";

const CmsSection = () => {
  const [pages, setPages] = useState([
    { id: 1, title: "About Us", content: "Write about us here..." },
    { id: 2, title: "Privacy Policy", content: "Write privacy policy here..." },
    { id: 3, title: "Terms & Conditions", content: "Write terms here..." },
    { id: 4, title: "FAQs", content: "Add frequently asked questions here..." },
  ]);

  const [editingPage, setEditingPage] = useState(null);
  const [newContent, setNewContent] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [deleteConfirm, setDeleteConfirm] = useState(null);

  // Handle Edit
  const handleEdit = (page) => {
    setEditingPage(page);
    setNewContent(page.content);
    setNewTitle(page.title);
  };

  // Save Changes
  const handleSave = () => {
    if (editingPage) {
      setPages(
        pages.map((p) =>
          p.id === editingPage.id ? { ...p, title: newTitle, content: newContent } : p
        )
      );
    }
    setEditingPage(null);
    setNewTitle("");
    setNewContent("");
  };

  // Confirm Delete
  const handleDelete = (id) => {
    setPages(pages.filter((p) => p.id !== id));
    setDeleteConfirm(null);
  };

  return (
    <PageContainer>
      <Title>CMS Section</Title>

      <ContentList>
        {pages.map((page) => (
          <ContentItem key={page.id}>
            <ContentTitle>{page.title}</ContentTitle>
            <ActionGroup>
              <ActionButton onClick={() => handleEdit(page)}>Edit</ActionButton>
              <DeleteButton onClick={() => setDeleteConfirm(page)}>Delete</DeleteButton>
            </ActionGroup>
          </ContentItem>
        ))}
      </ContentList>

      {/* Edit Modal */}
      {editingPage && (
        <EditorOverlay>
          <EditorContainer>
            <EditorTitle>Edit {editingPage.title}</EditorTitle>
            <input
              type="text"
              placeholder="Page Title"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "10px",
                borderRadius: "8px",
                border: "1px solid var(--color-border)",
              }}
            />
            <EditorTextarea
              value={newContent}
              onChange={(e) => setNewContent(e.target.value)}
            />
            <div className="Container">
              <SaveButton onClick={handleSave}>Save</SaveButton>
              <CancelButton
                onClick={() => {
                  setEditingPage(null);
                  setNewTitle("");
                  setNewContent("");
                }}
              >
                Cancel
              </CancelButton>
            </div>
          </EditorContainer>
        </EditorOverlay>
      )}
      {deleteConfirm && (
        <EditorOverlay>
          <EditorContainer>
            <EditorTitle>
              Are you sure you want to delete "{deleteConfirm.title}"?
            </EditorTitle>
            <div className="Container">
              <DeleteButton onClick={() => handleDelete(deleteConfirm.id)} 
              style={{
                marginRight:"1rem",
              }}>
                Yes, Delete
              </DeleteButton>
              <CancelButton onClick={() => setDeleteConfirm(null)}>
                Cancel
              </CancelButton>
            </div>
          </EditorContainer>
        </EditorOverlay>
      )}
    </PageContainer>
  );
};

export default CmsSection;

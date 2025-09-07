// import React, { useState } from "react";
// import {
//   PageContainer,
//   Title,
//   ContentList,
//   ContentItem,
//   ContentTitle,
//   ActionGroup,
//   ActionButton,
//   EditorOverlay,
//   EditorContainer,
//   EditorTitle,
//   EditorTextarea,
//   SaveButton,
//   CancelButton,
//   DeleteButton,
// } from "./style";

// const CmsSection = () => {
//   const [pages, setPages] = useState([
//     { id: 1, title: "About Us", content: "Write about us here..." },
//     { id: 2, title: "Privacy Policy", content: "Write privacy policy here..." },
//     { id: 3, title: "Terms & Conditions", content: "Write terms here..." },
//     { id: 4, title: "FAQs", content: "Add frequently asked questions here..." },
//   ]);

//   const [editingPage, setEditingPage] = useState(null);
//   const [newContent, setNewContent] = useState("");
//   const [newTitle, setNewTitle] = useState("");
//   const [deleteConfirm, setDeleteConfirm] = useState(null);

//   // Handle Edit
//   const handleEdit = (page) => {
//     setEditingPage(page);
//     setNewContent(page.content);
//     setNewTitle(page.title);
//   };

//   // Save Changes
//   const handleSave = () => {
//     if (editingPage) {
//       setPages(
//         pages.map((p) =>
//           p.id === editingPage.id ? { ...p, title: newTitle, content: newContent } : p
//         )
//       );
//     }
//     setEditingPage(null);
//     setNewTitle("");
//     setNewContent("");
//   };

//   // Confirm Delete
//   const handleDelete = (id) => {
//     setPages(pages.filter((p) => p.id !== id));
//     setDeleteConfirm(null);
//   };

//   return (
//     <PageContainer>
//       <Title>CMS Section</Title>

//       <ContentList>
//         {pages.map((page) => (
//           <ContentItem key={page.id}>
//             <ContentTitle>{page.title}</ContentTitle>
//             <ActionGroup>
//               <ActionButton onClick={() => handleEdit(page)}>Edit</ActionButton>
//               <DeleteButton onClick={() => setDeleteConfirm(page)}>Delete</DeleteButton>
//             </ActionGroup>
//           </ContentItem>
//         ))}
//       </ContentList>

//       {/* Edit Modal */}
//       {editingPage && (
//         <EditorOverlay>
//           <EditorContainer>
//             <EditorTitle>Edit {editingPage.title}</EditorTitle>
//             <input
//               type="text"
//               placeholder="Page Title"
//               value={newTitle}
//               onChange={(e) => setNewTitle(e.target.value)}
//               style={{
//                 width: "100%",
//                 padding: "10px",
//                 marginBottom: "10px",
//                 borderRadius: "8px",
//                 border: "1px solid var(--color-border)",
//               }}
//             />
//             <EditorTextarea
//               value={newContent}
//               onChange={(e) => setNewContent(e.target.value)}
//             />
//             <div className="Container">
//               <SaveButton onClick={handleSave}>Save</SaveButton>
//               <CancelButton
//                 onClick={() => {
//                   setEditingPage(null);
//                   setNewTitle("");
//                   setNewContent("");
//                 }}
//               >
//                 Cancel
//               </CancelButton>
//             </div>
//           </EditorContainer>
//         </EditorOverlay>
//       )}
//       {deleteConfirm && (
//         <EditorOverlay>
//           <EditorContainer>
//             <EditorTitle>
//               Are you sure you want to delete "{deleteConfirm.title}"?
//             </EditorTitle>
//             <div className="Container">
//               <DeleteButton onClick={() => handleDelete(deleteConfirm.id)} 
//               style={{
//                 marginRight:"1rem",
//               }}>
//                 Yes, Delete
//               </DeleteButton>
//               <CancelButton onClick={() => setDeleteConfirm(null)}>
//                 Cancel
//               </CancelButton>
//             </div>
//           </EditorContainer>
//         </EditorOverlay>
//       )}
//     </PageContainer>
//   );
// };

// export default CmsSection;
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styled from "styled-components";

// ==== Styled Components ====
const PageContainer = styled.div`
  background: var(--color-bg);
  padding: 2rem;
  min-height: 100vh;
`;

const Card = styled.div`
  background: var(--color-section);
  border: 1px solid var(--color-border);
  border-radius: 1rem;
  padding: 2rem;
  max-width: 800px;
  margin: 2rem auto;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
`;

const Title = styled.h2`
  font-family: var(--font-primary);
  color: var(--color-text-primary);
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  text-align: center;
`;

const Label = styled.label`
  font-family: var(--font-secondary);
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text-secondary);
  display: block;
  margin-bottom: 0.5rem;
`;

const Select = styled.select`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid var(--color-border);
  border-radius: 0.6rem;
  font-family: var(--font-primary);
  font-size: 1rem;
  margin-bottom: 1.5rem;
  outline: none;
  background: var(--color-bg);
  color: var(--color-text-primary);
`;

const SaveButton = styled.button`
  background: var(--color-primary);
  color: #fff;
  font-family: var(--font-primary);
  font-size: 1rem;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 0.6rem;
  cursor: pointer;
  margin-top: 1.5rem;
  transition: background 0.3s ease;

  &:hover {
    background: var(--color-primary-light);
  }
`;

// ==== Component ====
const CmsManagement = () => {
  const [selectedPage, setSelectedPage] = useState("About Us");
  const [content, setContent] = useState("");

  const handleSave = () => {
    console.log("Saving Page:", selectedPage, "Content:", content);
    alert(`${selectedPage} page updated successfully!`);
  };

  return (
    <PageContainer>
      <Card>
        <Title>CMS Management</Title>

        <div>
          <Label>Select Page</Label>
          <Select
            value={selectedPage}
            onChange={(e) => setSelectedPage(e.target.value)}
          >
            <option>About Us</option>
            <option>Privacy Policy</option>
            <option>Terms</option>
            <option>FAQs</option>
          </Select>
        </div>

        <div>
          <Label>Edit Content</Label>
          <ReactQuill
            value={content}
            onChange={setContent}
            theme="snow"
            style={{ height: "200px", marginBottom: "2rem" }}
          />
        </div>

        <SaveButton onClick={handleSave}>Save Changes</SaveButton>
      </Card>
    </PageContainer>
  );
};

export default CmsManagement;

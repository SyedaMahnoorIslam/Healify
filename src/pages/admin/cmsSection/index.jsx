
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styled from "styled-components";
import{

PageContainer,Card,Title,Label,Select,SaveButton,
} from './style'

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

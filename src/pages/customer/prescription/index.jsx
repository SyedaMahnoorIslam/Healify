// import { useState } from "react";
// import { FcOldTimeCamera } from "react-icons/fc";
// import {
// Wrapper,Card,Title,Description,UploadArea,UploadButton,UploadLabel,HiddenInput
// } from './style'

// export default function UploadPrescription() {
//   const [file, setFile] = useState(null);

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleUpload = () => {
//     if (!file) {
//       alert("Please select a file to upload!");
//       return;
//     }
//     alert(`File ${file.name} uploaded successfully!`);
//   };

//   return (
//     <Wrapper>
      
//       <Card>
//         <Title>Upload Your Prescription</Title>
//         <Description>
//           Please upload a clear image of your prescription. Accepted formats: JPG, PNG, PDF.
//         </Description>

//         <UploadArea>
//           <UploadLabel  htmlFor="fileInput">
//             <FcOldTimeCamera />
//             <span>{file ? file.name : "Click or Drag to Upload"}</span>
//           </UploadLabel>
//           <HiddenInput
//             id="fileInput"
//             type="file"
//             accept="image/*,application/pdf"
//             onChange={handleFileChange}
//           />
//         </UploadArea>

//         <UploadButton onClick={handleUpload}>Upload</UploadButton>
//       </Card>
//     </Wrapper>
//   );
// }
import { useState } from "react";
import { FcOldTimeCamera } from "react-icons/fc";
import {
  Wrapper,
  Card,
  Title,
  Description,
  UploadArea,
  UploadButton,
  UploadLabel,
  HiddenInput,
  StatusWrapper,
  StatusBadge,
} from "./style";

 function UploadPrescription() {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState(null); 

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setStatus(null); 
  };

  const handleUpload = () => {
    if (!file) {
      alert("Please select a file to upload!");
      return;
    }
    // Backend API call hoga aur status wahan se aayega
    // Filhal demo ke liye I apply "Pending"
    setStatus("Pending");
    // alert(`File ${file.name} uploaded successfully! Status is now set to Pending.`);
  };

  return (
    <Wrapper>
      <Card>
        <Title>Upload Your Prescription</Title>
        <Description>
          Please upload a clear image of your prescription. Accepted formats:
          JPG, PNG, PDF.
        </Description>

        <UploadArea>
          <UploadLabel htmlFor="fileInput">
            <FcOldTimeCamera size={40} />
            <span>{file ? file.name : "Click or Drag to Upload"}</span>
          </UploadLabel>
          <HiddenInput
            id="fileInput"
            type="file"
            accept="image/*,application/pdf"
            onChange={handleFileChange}
          />
        </UploadArea>

        <UploadButton onClick={handleUpload}>Upload</UploadButton>

        {status && (
          <StatusWrapper>
            <p>Your prescription status:</p>
            <StatusBadge status={status}>{status}</StatusBadge>
          </StatusWrapper>
        )}
      </Card>
    </Wrapper>
  );
}export default UploadPrescription


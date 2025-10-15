import { useState } from "react";
import { FcOldTimeCamera } from "react-icons/fc";
import { toast } from "react-toastify";
import {
  Wrapper,
  Card,
  Title,
  Description,
  UploadArea,
  UploadButton,
  UploadLabel,
  HiddenInput,
  SectionCard,
  SectionTitle,
  PillsWrapper,
  Pill,
  InteractionCard,
  InteractionBox,
  PreviewContainer,
  PreviewImage,
  IntroSection,
} from "./style";
import { useCustomer } from "../useHooks";

function AiModel() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [medicines, setMedicines] = useState([]);
  const [interactions, setInteractions] = useState([]);
  const [extractedText, setExtractedText] = useState("");
  const { aiModelUploadPrescription } = useCustomer();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;
    if (!selectedFile.type.startsWith("image/")) {
      toast.warn("Please upload an image file (JPG or PNG only)!");
      return;
    }
    setFile(selectedFile);
  };
  const handleUpload = async () => {
  if (!file) {
    toast.warn("Please select an image to upload!");
    return;
  }

  setLoading(true); 

  try {
    const formData = new FormData();
    formData.append("prescription", file);

    const response = await aiModelUploadPrescription(formData); 

    console.log("AI Model Response:", response);

    if (response?.success) {
      setExtractedText(response?.extracted_text || "");
      setMedicines(response?.detected_medicines || []);
      setInteractions(response?.interactions || []);
      toast.success("Prescription analyzed successfully!");
    } else {
      toast.error("Failed prescription Analyzation.");
    }
  } catch (error) {
    console.error("AI Model Error:", error);
    toast.error("Error analyzing prescription.");
  } finally {
    setLoading(false); 
  }
};


  // Image preview URL
  const imageURL = file ? URL.createObjectURL(file) : null;

  return (
    <Wrapper>
      {/* ===== Intro Section ===== */}
      <IntroSection>
        <h1>AI Prescription Analyzer</h1>
        <p>
          Upload your prescription image, and our AI model will automatically
          detect the medicines listed. It will also check for any potential drug
          interactions to help ensure your safety.
        </p>
      </IntroSection>

      {/* ===== Upload Section ===== */}
      <Card>
        <Title>Upload Your Prescription (Image Only)</Title>
        <Description>
          Please upload a clear image of your prescription. Supported formats:
          JPG, JPEG, PNG.
        </Description>

        <UploadArea>
          <UploadLabel htmlFor="fileInput">
            <FcOldTimeCamera size={45} />
            <span>{file ? file.name : "Click or Drag to Upload Image"}</span>
          </UploadLabel>
          <HiddenInput
            id="fileInput"
            type="file"
            accept="image/*" 
            onChange={handleFileChange}
          />
        </UploadArea>

        {/* ===== Image Preview ===== */}
        {file && (
          <PreviewContainer>
            <PreviewImage src={imageURL} alt="Prescription Preview" />
          </PreviewContainer>
        )}

        <br />

        <UploadButton onClick={handleUpload} disabled={loading}>
          {loading ? "Analyzing..." : "Upload & Analyze"}
        </UploadButton>
      </Card>

      {/* ===== Extracted Text ===== */}
      {/* {extractedText && (
        <SectionCard>
          <SectionTitle> Extracted Text</SectionTitle>
          <p style={{ color: "gray", whiteSpace: "pre-line" }}>
            {extractedText}
          </p>
        </SectionCard>
      )} */}

      {/* ===== Detected Medicines ===== */}
      {medicines.length > 0 && (
        <SectionCard>
          <SectionTitle> Detected Medicines</SectionTitle>
          <PillsWrapper>
            {medicines.map((m, i) => (
              <Pill key={i}>{m}</Pill>
            ))}
          </PillsWrapper>
        </SectionCard>
      )}

      {/* ===== Drug Interactions ===== */}
      {interactions.length > 0 && (
        <SectionCard>
          <SectionTitle> Drug Interactions</SectionTitle>
          <InteractionCard>
            {interactions.map((item, index) => (
              <InteractionBox key={index}>
                <h4>
                  {item.medicine1} + {item.medicine2}
                </h4>
                <p>
                  Interaction: <strong>{item.interaction}</strong>
                </p>
                <p>
                  Severity:{" "}
                  <strong
                    style={{
                      color:
                        item.severity === "none"
                          ? "grey"
                          : item.severity === "major"
                          ? "red"
                          : item.severity === "moderate"
                          ? "orange"
                          : "green",
                    }}
                  >
                    {item.severity}
                  </strong>
                </p>
              </InteractionBox>
            ))}
          </InteractionCard>
        </SectionCard>
      )}
    </Wrapper>
  );
}

export default AiModel;

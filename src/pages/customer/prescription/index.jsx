
import { useState, useEffect } from "react";
import { FcOldTimeCamera } from "react-icons/fc";
import { toast } from "react-toastify";
import {
  Wrapper,
  UploadCard,
  Title,
  Description,
  UploadArea,
  UploadButton,
  UploadLabel,
  HiddenInput,
  SectionCard,
  SectionTitle,
  PrescriptionsGrid,
  PrescriptionCard,
  PrescriptionImage,
  Comment,
  StatusBadge,
  Image,
} from "./style";
import { useCustomer } from "../useHooks";

function UploadPrescription() {
  const [file, setFile] = useState(null);
  const [prescriptions, setPrescriptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [imageId, setImageId] = useState();
  const { getPrescriptions, uploadImage, createPrescription } = useCustomer();
  const BASE_URL = process.env.REACT_APP_API_URL;

  // ----------- FETCH PRESCRIPTIONS -----------
  const fetchPrescriptions = async () => {
    try {
      const data = await getPrescriptions();
      console.log("Prescription Response:", data);
      setPrescriptions(data);
    } catch (error) {
      console.error("Get prescription error:", error);
    }
  };
  useEffect(() => {
    fetchPrescriptions();
  }, []);

  const handleUpload = async () => {
    if (!file) {
      toast.warn("Please select a file to upload!");
      return;
    }

    setLoading(true);
    try {
      //  Upload image
      const imageId = await uploadImage(file);

      if (!imageId) {
        toast.error("Failed to get image ID!");
        setLoading(false);
        return;
      }

      // Send imageId to prescriptions API
      await createPrescription(imageId);

      // Refresh list
      await fetchPrescriptions();
    } catch (error) {
      console.error("Upload error:", error);
      toast.error("Something went wrong while uploading!");
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchPrescriptions();
  }, []);


  return (
    <Wrapper>
      {/* Upload Section */}
      <UploadCard>
        <Title>Upload Your Prescription</Title>
        <Description>
          Please upload a clear image of your prescription. Accepted formats:
          JPG, PNG, PDF.
        </Description>

        <UploadArea>
          <UploadLabel htmlFor="fileInput">
            <FcOldTimeCamera size={50} />
            <span>{file ? file.name : "Click or Drag to Upload"}</span>
          </UploadLabel>
          <HiddenInput
            id="fileInput"
            type="file"
            accept="image/*,application/pdf"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </UploadArea>

        <UploadButton onClick={handleUpload} disabled={loading}>
          {loading ? "Uploading..." : "Upload"}
        </UploadButton>
      </UploadCard>

      {/* Uploaded Prescriptions */}
      <SectionCard>
        <SectionTitle>Your Uploaded Prescriptions</SectionTitle>

        {prescriptions.length === 0 ? (
          <p style={{ color: "gray" }}>No prescriptions uploaded yet.</p>
        ) : (
          <PrescriptionsGrid>
            {prescriptions.map((item) => (
              <PrescriptionCard key={item.id}>
                {/* Images */}
                {item.images && item.images.length > 0 ? (
                  item.images.map(img => (
                    <Image key={img.id}>
                      <PrescriptionImage
                        src={`${BASE_URL}/${img.file_path}`}
                        alt={`Prescription #${item.id}`}
                      />
                    </Image>
                  ))
                ) : (
                  <p>No images uploaded</p>
                )}
                <Comment>
                  <strong>Admin Comment:</strong>
                  <p>{item.pharmacist_notes}</p>
                </Comment>
                <StatusBadge status={item.status}>{item.status}</StatusBadge>
              </PrescriptionCard>
            ))}
          </PrescriptionsGrid>
        )}
      </SectionCard>
    </Wrapper>
  );
}

export default UploadPrescription;

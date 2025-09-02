import React, { useState } from "react";
import { FcOldTimeCamera } from "react-icons/fc";
import {
  PageContainer,
  Title,
  MedicineCard,
  Top,
  MedicineImage,
  MedicineInfo,
  ButtonGroup,
  ActionButton,
  AddButton,
  FormOverlay,
  FormContainer,
  FormTitle,
  FormInput,
  FormTextarea,
  FormRow,
  CheckboxLabel,
  CloseButton,
  UploadArea,
  UploadLabel,
  HiddenInput,
} from "./style";
import { productCards } from "../../../helpers/dummyData";

const MedicineManagement = () => {
  const [medicines, setMedicines] = useState(productCards);

  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    id: null,
    image: "",
    name: "",
    type: "",
    packSize: "",
    discountPrice: "",
    originalPrice: "",
    discount: "",
    company: "",
    category: "",
    description: "",
    dosage: "",
    sideEffects: "",
    prescriptionRequired: false,
    quantity: "",
  });

  // input handler
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Add or update medicine
  const handleAddMedicine = () => {
    if (!formData.name || !formData.company) return;

    if (formData.id) {
      setMedicines(medicines.map((med) => (med.id === formData.id ? { ...formData } : med)));
    } else {
      setMedicines([...medicines, { ...formData, id: Date.now() }]);
    }

    resetForm();
  };

  // Edit
  const handleEdit = (med) => {
    setFormData(med);
    setIsFormVisible(true);
  };

  // Delete
  const handleDelete = (id) => {
    setMedicines(medicines.filter((med) => med.id !== id));
  };
  // Image Upload
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
  // Reset form
  const resetForm = () => {
    setFormData({
      id: null,
      image: "",
      name: "",
      type: "",
      packSize: "",
      discountPrice: "",
      originalPrice: "",
      discount: "",
      company: "",
      category: "",
      description: "",
      dosage: "",
      sideEffects: "",
      prescriptionRequired: false,
      quantity: "",
    });
    setIsFormVisible(false);
  };

  return (
    <PageContainer>
      <Title>Medicine Management</Title>
      <AddButton onClick={() => setIsFormVisible(true)}>+ Add Medicine</AddButton>

      {medicines.map((med) => (
        <MedicineCard key={med.id}>
          <Top>
            {med.image &&
              <MedicineImage src={med.image} alt={med.name} />

            }
            {/* <ButtonGroup>
            <ActionButton onClick={() => handleEdit(med)}>Edit</ActionButton>
            <ActionButton delete onClick={() => handleDelete(med.id)}>Delete</ActionButton>
          </ButtonGroup> */}
          </Top>
          <MedicineInfo>
            {/* {med.image && <MedicineImage src={med.image} alt={med.name} />} */}
            <strong>{med.name}</strong> ({med.type}) <br />
            Pack: {med.packSize} <br />
            Company: {med.company} <br />
            Category: {med.category} <br />
            <b>Description:</b><em>{med.description}</em> <br />
            <b>Dosage:</b> {med.dosage} <br />
            <b>Side Effects:</b> {med.sideEffects} <br />
            <b>Quantity:</b> {med.quantity || "N/A"} <br />
            <b>Prescription:</b> {med.prescriptionRequired ? "Yes" : "No"} <br />
            <b>Price:</b> Rs.{med.discountPrice}{" "}
            <s style={{ color: "gray" }}>{med.originalPrice}</s> ({med.discount})
          </MedicineInfo>
          <ButtonGroup>
            <ActionButton onClick={() => handleEdit(med)}>Edit</ActionButton>
            <ActionButton delete onClick={() => handleDelete(med.id)}>Delete</ActionButton>
          </ButtonGroup>
        </MedicineCard>
      ))}

      {isFormVisible && (
        <FormOverlay>
          <FormContainer>
            <CloseButton onClick={resetForm}>×</CloseButton>
            <FormTitle>{formData.id ? "Edit Medicine" : "Add Medicine"}</FormTitle>

            {/* Image */}
            <FormRow>
              {/* <FormInput
                type="text"
                name="image"
                placeholder="Image URL"
                value={formData.image}
                onChange={handleInputChange}
              /> */}
              <UploadArea>
                <UploadLabel htmlFor="fileInput">
                {/* Upload Img of Medicine */}
                </UploadLabel>
                <FormInput
                  id="fileInput"
                  type="file"
                  accept="image/*,application/pdf"
                  onChange={handleFileChange}
                />
              </UploadArea>
            </FormRow>

            {/* Name */}
            <FormRow>
              <FormInput
                type="text"
                name="name"
                placeholder="Medicine Name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </FormRow>

            {/* Type & Pack Size */}
            <FormRow>
              <FormInput
                type="text"
                name="type"
                placeholder="Type (tablet, syrup, etc.)"
                value={formData.type}
                onChange={handleInputChange}
              />
              <FormInput
                type="text"
                name="packSize"
                placeholder="Pack Size"
                value={formData.packSize}
                onChange={handleInputChange}
              />
            </FormRow>

            {/* Prices & Discount */}
            <FormRow>
              <FormInput
                type="number"
                name="discountPrice"
                placeholder="Discount Price"
                value={formData.discountPrice}
                onChange={handleInputChange}
              />
              <FormInput
                type="number"
                name="originalPrice"
                placeholder="Original Price"
                value={formData.originalPrice}
                onChange={handleInputChange}
              />
              <FormInput
                type="text"
                name="discount"
                placeholder="Discount (e.g., 20% off)"
                value={formData.discount}
                onChange={handleInputChange}
              />
            </FormRow>

            {/* Company & Category */}
            <FormRow>
              <FormInput
                type="text"
                name="company"
                placeholder="Company"
                value={formData.company}
                onChange={handleInputChange}
              />  
              <FormInput
                type="text"
                name="category"
                placeholder="Category"
                value={formData.category}
                onChange={handleInputChange}
              />
            </FormRow>

            {/* Description */}
            <FormRow>
              <FormTextarea
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleInputChange}
              />
            </FormRow>

            {/* Dosage & Side Effects */}
            <FormRow>
              <FormTextarea
                name="dosage"
                placeholder="Dosage"
                value={formData.dosage}
                onChange={handleInputChange}
              />
            </FormRow>
            <FormRow>
              <FormTextarea
                name="sideEffects"
                placeholder="Side Effects"
                value={formData.sideEffects}
                onChange={handleInputChange}
              />
            </FormRow>

            {/* Quantity & Prescription */}
            <FormRow>
              <FormInput
                type="number"
                name="quantity"
                placeholder="Quantity"
                value={formData.quantity}
                onChange={handleInputChange}
              />
              <CheckboxLabel>
                <input
                  type="checkbox"
                  name="prescriptionRequired"
                  checked={formData.prescriptionRequired}
                  onChange={handleInputChange}
                />
                Prescription Required
              </CheckboxLabel>
            </FormRow>

            <ActionButton onClick={handleAddMedicine}>
              {formData.id ? "Update" : "Add"}
            </ActionButton>
          </FormContainer>
        </FormOverlay>
      )}
    </PageContainer>
  );
};

export default MedicineManagement;

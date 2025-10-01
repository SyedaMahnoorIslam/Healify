import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
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
} from "./style";
import { UseAdmin } from "../useHooks";

const categoriesList = [
  "Health Care",
  "Wellness",
  "Supplement",
  "Painkiller",
  "Personal Care",
  "Baby Care",
  "Organic",
];
const MedicineManagement = () => {
  const [medicines, setMedicines] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [file, setFile] = useState(null);
  const [editingMedicine, setEditingMedicine] = useState(null);
  const [preview, setPreview] = useState(null);
  const [imageId, setImageId] = useState();


  const { getMedicines, addMedicines, deleteMedicine, editMedicine, uploadMedImage } = UseAdmin();
  const { register, handleSubmit, reset, control, setValue, getValues } = useForm({

  });

  // BASEURL for image
  const BASE_URL = process.env.REACT_APP_API_URL;

  // ek hi jagah fetch function
  const fetchMedicines = async () => {
    const meds = await getMedicines();
    setMedicines(meds || []);
  };
  useEffect(() => {
    fetchMedicines();
  }, []);


  const handleDelete = async (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this medicine?");
    if (!confirmed) return;
    const success = await deleteMedicine(id);
    if (success) {
      // fresh list laao after delete
      await fetchMedicines();
    }
  };

  // Edit handler
  const handleEdit = (med) => {
    reset(med);
    setEditingMedicine(med);

    if (med.images?.length > 0) {
      const imagePath = med.images[0]?.file_path
        ? `${BASE_URL}/${med.images[0].file_path}`
        : med.images[0]
      setPreview(imagePath);
    } else {
      setPreview(null);
    }

    setFile(null);
    setIsFormVisible(true);
  };
  // Form reset

  const handleFileChange = async (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    if (selectedFile) {
      const previewUrl = URL.createObjectURL(selectedFile);
      setPreview(previewUrl);
    }

    uploadMedImage(selectedFile, setImageId)

  };

  const onSubmit = async (params) => {
    console.log("on submit data:", params);
    console.log(params);

    try {

      if (editingMedicine) {
        const body = {
          ...params,
          ...(imageId ? { imageId } : {}),
          medicineId: editingMedicine.id
        }
        await editMedicine(body);
      } else {
        const body = {
          ...params,
          imageId: imageId
        }
        const newMed = await addMedicines(body);
        setMedicines((prev) => [...prev, newMed]);
      };

      await fetchMedicines();
      resetForm();
    } catch (error) {
      console.error("Save Medicine Error:", error);
    }
  };
  const resetForm = () => {
    reset();
    setIsFormVisible(false);
    setFile(null);
    setPreview(null);
    setEditingMedicine(null);
  };

  return (
    <PageContainer>
      <Title>Medicine Management</Title>
      <AddButton onClick={() => setIsFormVisible(true)}>+ Add Medicine</AddButton>

      {medicines.map((med) => (
        <MedicineCard key={med.id}>
          <Top>
            {med.images?.length > 0 ? (
              <MedicineImage
                src={`${BASE_URL}/${med.images[0].file_path}`}
                alt={med.name}
              />
            ) : (
              <MedicineImage
                src="/default-medicine.png"
                alt="No Image"
              />
            )}

          </Top>
          <MedicineInfo>
            <strong>{med.name}</strong> <br />
            Brand: {med.brand || "N/A"} <br />
            Category: {Array.isArray(med.category) ? med.category.join(", ") : med.category || "N/A"} <br />
            <b>Description:</b> {med.description || "N/A"} <br />
            <b>Dosage:</b> {med.dosage || "N/A"} <br />
            <b>Side Effects:</b> {med.side_effects || "N/A"} <br />
            <b>Quantity:</b> {med.inventory_quantity ?? "N/A"} <br />
            <b>Prescription:</b> {med.requires_prescription ? "Yes" : "No"} <br />
            <b>Price:</b> Rs.{med.final_price} <s>{med.price}</s> ({med.discount_percentage}%) <br />
            <b>Expiry Date:</b> {med.expiry_date}
          </MedicineInfo>
          <ButtonGroup>
            <ActionButton onClick={() => handleEdit(med)}>Edit</ActionButton>
            <ActionButton $delete onClick={() => handleDelete(med.id)}>Delete</ActionButton>
          </ButtonGroup>
        </MedicineCard>
      ))}

      {isFormVisible && (
        <FormOverlay>
          <FormContainer as="form" onSubmit={handleSubmit(onSubmit)}>
            <CloseButton onClick={resetForm}>×</CloseButton>
            <FormTitle>Add / Edit Medicine</FormTitle>

            {/* Image Upload */}

            <FormRow>
              <UploadArea>
                <UploadLabel htmlFor="fileInput">Upload Image</UploadLabel>
                <FormInput
                  id="fileInput"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                />
                <input type="hidden" {...register("imageId", { valueAsNumber: true, })} />

                {preview && (
                  <img
                    src={preview}
                    alt="Preview"
                    style={{ marginTop: "10px", width: "120px", borderRadius: "8px" }}
                  />
                )}
              </UploadArea>
            </FormRow>

            <FormRow>
              <label>Medicine Name</label>
              <FormInput {...register("name", { required: true })} placeholder="Medicine Name" />
            </FormRow>

            <FormRow>
              <label>Brand</label>
              <FormInput {...register("brand")} placeholder="Brand" />
            </FormRow>
            <FormRow>
              <label>Original Price</label>
              <FormInput
                {...register("price", {
                  valueAsNumber: true,
                  onChange: (e) => {
                    const price = parseFloat(e.target.value) || 0;
                    const discount = parseFloat(getValues("discount_percentage")) || 0;
                    setValue("final_price", price - (price * discount) / 100);
                  },
                })}
                type="number"
                placeholder="Original Price"
              />

              <label>Discount %</label>
              <FormInput
                {...register("discount_percentage", {
                  valueAsNumber: true,
                  onChange: (e) => {
                    const discount = parseFloat(e.target.value) || 0;
                    const price = parseFloat(getValues("price")) || 0;
                    setValue("final_price", price - (price * discount) / 100);
                  },
                })}
                type="number"
                placeholder="Discount %"
              />

              <label>Final Price</label>
              <FormInput
                {...register("final_price", { valueAsNumber: true })}
                type="number"
                placeholder="Final Price"
                readOnly
                style={{ backgroundColor: "#f0f0f0", cursor: "not-allowed" }}
              />
            </FormRow>

            <FormRow>
              <label>Category</label>
              <Controller
                name="category"
                control={control}
                render={({ field }) => (
                  <FormInput as="select" {...field}>
                    <option value="">Select Category</option>
                    {categoriesList.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </FormInput>
                )}
              />
            </FormRow>

            <FormRow>
              <label>Description</label>
              <FormTextarea {...register("description")} placeholder="Description" />
            </FormRow>

            <FormRow>
              <label>Dosage</label>
              <FormTextarea {...register("dosage")} placeholder="Dosage" />
            </FormRow>

            <FormRow>
              <label>Side Effects</label>
              <FormTextarea {...register("side_effects")} placeholder="Side Effects" />
            </FormRow>

            <FormRow>
              <label>Quantity</label>
              <FormInput {...register("inventory_quantity")} type="number" placeholder="Quantity" />

              <CheckboxLabel>
                <input type="checkbox" {...register("requires_prescription")} />
                Prescription Required
              </CheckboxLabel>
            </FormRow>

            <FormRow>
              <label>Expiry Date</label>
              <FormInput type="date" {...register("expiry_date")} />
            </FormRow>

            <ActionButton type="submit">Save</ActionButton>
          </FormContainer>
        </FormOverlay>
      )}
    </PageContainer>
  );
};

export default MedicineManagement;

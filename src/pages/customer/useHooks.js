import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import { ApiEndPoints } from '../../libs/http-service/api/endPoint';

export const useCustomer=()=>{
 //--------------- Get CMS Section ----------------
  const getCmsSection = async () => {
    try {
      const data = await ApiEndPoints.getCmsSection();
      console.log("Raw Medicines Response:", data);

      if (Array.isArray(data?.medicines)) {
        return data.medicines;
      } else {
        toast.error("No medicines found");
        return [];
      }
    } catch (error) {
      console.error("Get medicine error:", error);
      return [];
    }
  };
  //--------------- Get Medicines ----------------
  const medicinesList = async () => {
    try {
      const data = await ApiEndPoints.medicinesList();
      console.log("Raw Medicines Response:", data);

      if (Array.isArray(data?.medicines)) {
        return data.medicines;
      } else {
        toast.error("No medicines found");
        return [];
      }
    } catch (error) {
      console.error("Get medicine error:", error);
      return [];
    }
  };
  // ---------------- Upload Medicine Image ---------------

const uploadMedImage = async (image ,setImageId) => {
  try {
    const formData = new FormData();
    formData.append("image", image);

   const res = await ApiEndPoints.uploadMedImage(formData);
   const uploadedImageId = res?.imageIds?.[0] || null;

    console.log(uploadedImageId , "id in hook")

    setImageId(uploadedImageId);

  } catch (error) {
    console.error("Image upload failed:", error);
    return null;
  }
};
    return{
     getCmsSection,uploadMedImage,medicinesList,
    }
}




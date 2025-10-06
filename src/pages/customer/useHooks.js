import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import { ApiEndPoints } from '../../libs/http-service/api/endPoint';
import { getData } from '../../libs/http-service/methods';

export const useCustomer = () => {
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

  const uploadMedImage = async (image, setImageId) => {
    try {
      const formData = new FormData();
      formData.append("image", image);

      const res = await ApiEndPoints.uploadMedImage(formData);
      const uploadedImageId = res?.imageIds?.[0] || null;

      console.log(uploadedImageId, "id in hook")

      setImageId(uploadedImageId);

    } catch (error) {
      console.error("Image upload failed:", error);
      return null;
    }
  };
  // --------------- Add To WishList ----------------
  const addToWishlist = async (id) => {
    try {
      const response = await ApiEndPoints.addToWishlist(id);
      console.log(response.message);
    } catch (error) {
      console.error("Error:", error);
    }
  };
    //--------------- Search Medicines ----------------
 const searchMedicine = async (params) => {
    try {
      const res = await ApiEndPoints.searchMedicine(params);
      return res?.data || [];
    } catch (error) {
      console.error("Search medicine error:", error);
      return [];
    }
  };
    //--------------- Get CMS Section ----------------
    const getCmsSectionDetail = async (slug) => {
      try {
        const response = await getData(`/api/pages/${slug}`);
        console.log("CMS API Response:", response);
        return response || null; 
      } catch (err) {
        toast.error("Failed to fetch CMS content");
        return null;
      }
    };
    //--------------- Get Medicines ----------------
  const getOrderDetail = async () => {
    try {
      const data = await ApiEndPoints.getOrderDetail();
      console.log("Raw order Response:", data);

      if (Array.isArray(data?.medicines)) {
        return data.medicines;
      } else {
        toast.error("No order found");
        return [];
      }
    } catch (error) {
      console.error("Get order error:", error);
      return [];
    }
  };
  return {
    getCmsSection, uploadMedImage, medicinesList, addToWishlist,
    searchMedicine,getCmsSectionDetail,getOrderDetail
  }
}




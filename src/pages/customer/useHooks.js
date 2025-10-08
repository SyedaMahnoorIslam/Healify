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
  const medicinesList = async (page=1) => {
    try {
      const data = await ApiEndPoints.medicinesList(page);
      console.log("Raw Medicines Response:", data);

      if (Array.isArray(data?.medicines)) {
        return data;
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
  // --------------- get WishList ----------------
  const getWishlist = async () => {
    try {
      const response = await ApiEndPoints.getWishlist();
      console.log(response.message);
      return response;
    } catch (error) {
      console.error("Error:", error);
    }
  };
    // --------------- Add To WishList ----------------
  const addToWishlist = async (id) => {
    try {
      const response = await ApiEndPoints.addToWishlist(id);
      console.log(response.message);
      return response;
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
   // --------------- Add To Cart ----------------
  const addToCart = async (payload) => {
    try {
      const response = await ApiEndPoints.addToCart(payload);
      console.log(response.message);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  // --------------- Get Cart ----------------
  const getCart = async () => {
    try {
      const response = await ApiEndPoints.getCart();
      console.log(response.message);
      return response;
    } catch (error) {
      console.error("Error:", error);
    }
  };
   //--------------- GET FAQ ----------------
  const getFaqSection = async () => {
    try {
      const res = await ApiEndPoints.getFaqSection();
      if (Array.isArray(res)) return res;
      if (Array.isArray(res?.faqs)) return res.faqs;
      toast.info("No FAQs found");
      return [];
    } catch (error) {
      toast.error("Failed to fetch FAQs");
      return [];
    }
  };
  
    // -------------------- Add Adresses -----------------------
    const addAddress = async (params) => {
        try {
            const response = await ApiEndPoints.addAddress(params);
            return response?.data;
        } catch (error) {
            throw error;
        }
    };
     // -------------------- Get Adresses -----------------------
    const getAddress = async (body) => {
        try {
            const response = await ApiEndPoints.getAddress(body);
            console.log("response of Address in hook ",response)
            return response;
        } catch (error) {
            throw error;
        }
    }; 
    // -------------------- Delete Adresses -----------------------
    const deleteAddress = async (id) => {
        try {
            const response = await ApiEndPoints.deleteAdress(id);
            return response;
        } catch (error) {
            throw error;
        }
    };
     // -------------------- Get Order History -----------------------
    const getOrderHistory = async (body) => {
        try {
            const response = await ApiEndPoints.getOrderHistory(body);
            return response;
        } catch (error) {
            throw error;
        }
    }; 
  return {
    getCmsSection, uploadMedImage, medicinesList, addToWishlist,
    searchMedicine,getCmsSectionDetail,getOrderDetail,addToCart,getCart,getFaqSection,
    addAddress,deleteAddress,getAddress,getOrderHistory,getWishlist
  }
}




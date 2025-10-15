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
  const medicinesList = async (page = 1) => {
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
      return response;
    } catch (error) {
      console.error("Error:", error);
    }
  };
  // --------------- Update Cart Quantity ----------------
  const updateCartQuantity = async (id, payload) => {
    try {
      const response = await ApiEndPoints.updateCartQuantity(id, payload);
      console.log(response.message);
      return response;
    } catch (error) {
      console.error("Error:", error);
    }
  };
  // --------------- Remove From Cart ----------------
  const removeFromCart = async (id) => {
    try {
      const response = await ApiEndPoints.removeFromCart(id);
      console.log("remove api hit ", response);
      return response;
    } catch (error) {
      console.error("Error:", error);
    }
  };
  // --------------- Get Cart ----------------
  const getCart = async () => {
    try {
      const response = await ApiEndPoints.getCart();
      console.log(response);
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
      console.log("response of Address in hook ", response)
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
  // --------------- CheckOut ----------------
  const checkout = async (params) => {
    try {
      const response = await ApiEndPoints.checkout(params);
      console.log(response);
      return response;
    } catch (error) {
      console.error("Error:", error);
    }
  };
  // --------------- Stripe Payment ----------------
  const stripePayment = async (payload ) => {
    try {
      const response = await ApiEndPoints.stripePayment(payload);
      console.log("Api hit hook stripe",response);
      return response;
    } catch (error) {
      console.error("Error:", error);
    }
  };
  // --------------- Get Delivery Slots ----------------
  const getDeliverySlot = async (body) => {
    try {
      const response = await ApiEndPoints.getDeliverySlot(body);
      console.log(response);
      return response;
    } catch (error) {
      console.error("Error:", error);
    }
  };
  //--------------- Get Prescriptions ----------------
  const getPrescriptions = async () => {
    try {
      const data = await ApiEndPoints.getPrescriptions();
      console.log("Prescription Response:", data);

      if (Array.isArray(data)) {
        return data;
      } else {
        toast.error("No prescription found");
        return [];
      }
    } catch (error) {
      console.error("Get prescription error:", error);
      return [];
    }
  };
  // ---------------- Upload Image ---------------

  const uploadImage = async (file) => {
    try {
      const formData = new FormData();
      formData.append("image", file);

      // This uploads the image and returns { imageIds: [2] }
      const res = await ApiEndPoints.uploadMedImage(formData);
      const imageId = res?.imageIds?.[0];
      console.log("Uploaded image ID:", imageId);
      return imageId;
    } catch (error) {
      console.error("Image upload failed:", error);
      toast.error("Image upload failed");
      return null;
    }
  };
  // ---------------- Upload Prescription ---------------
  
  const createPrescription = async (imageId) => {
    try {
      const body = { imageId };
      const res = await ApiEndPoints.uploadPrescription(body);
      console.log("Prescription created:", res);
      toast.success("Prescription uploaded successfully!");
      return res;
    } catch (error) {
      console.error("Prescription creation failed:", error);
      toast.error("Failed to create prescription");
    }
  };
  
   // ---------------- AI Upload Prescription ---------------
  
  const aiModelUploadPrescription = async (body) => {
    try {
      const res = await ApiEndPoints.aiModelUploadPrescription(body);
      console.log("Prescription created:", res);
      toast.success("Prescription uploaded successfully!");
      return res;
    } catch (error) {
      console.error("Prescription creation failed:", error);
      toast.error("Failed to create prescription");
    }
  };
  
  return {
    getCmsSection, uploadMedImage, medicinesList, addToWishlist,
    searchMedicine, getCmsSectionDetail, getOrderDetail, addToCart, getCart, getFaqSection,
    addAddress, deleteAddress, getAddress, getOrderHistory, getWishlist, checkout,
    removeFromCart, getDeliverySlot, updateCartQuantity, uploadImage,
    getPrescriptions, createPrescription,aiModelUploadPrescription,stripePayment
  }
}




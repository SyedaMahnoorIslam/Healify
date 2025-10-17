import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import { ApiEndPoints } from '../../libs/http-service/api/endPoint';
import { getData, postData } from '../../libs/http-service/methods';

export const UseAdmin = () => {

  //--------------- Delivery Agent Register ----------------
  const deliveryAgentRegister = async (params) => {
    try {

      const response = await ApiEndPoints.deliveryAgentRegister(params)
      if (response?.message && response?.user) {
        toast.success(response.message || "Delivery Agent Registered!");
      } else {
        toast.error(response?.error || "Registration failed!");
      }
    } catch (error) {
      console.error("Register error:", error);
    }
  };


  //--------------- Get Customers ----------------
  const getCustomers = async (body) => {
    try {
      const response = await ApiEndPoints.getCustomers(body);
      if (Array.isArray(response)) {
        return response;
      } else {
        toast.error(response.message)
      }
    } catch (error) {
      console.error("Get customers error:", error.response?.data || error.message);
      return [];
    }
  };
  //--------------- Get Customers by id ----------------
  const getCustomersbyid = async (id) => {
    try {
      const response = await getData(`/api/admin/customers/${id}`);
      console.log("Customer detail response:", response);
      return response || null;
    } catch (err) {
      console.error("Get customer by ID error:", err.response?.data || err.message);
      return null;
    }
  };

  //--------------- Get DeliveryAgents ----------------
  const getDeliveryAgents = async (body) => {
    try {
      const response = await ApiEndPoints.getDeliveryAgent(body);
      if (Array.isArray(response)) {
        return response;
      } else {
        toast.error(response.message)
      }
    } catch (error) {
      console.error("Get customers error:", error.response?.data || error.message);
      return [];
    }
  };
  //--------------- Dashboard Stats ----------------
  const dashboardStats = async (body) => {
    try {
      const response = await ApiEndPoints.dashboardStats(body);
      console.log("response", response);
      return response;

    } catch (error) {
      console.error("Get customers error:", error.response?.data || error.message);
      return [];
    }
  };
  //--------------- Get Medicines ----------------
  const getMedicines = async (page=1) => {
    try {
      const data = await ApiEndPoints.getMedicines(page);
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

  //--------------- Add Medicines ----------------
  const addMedicines = async (params) => {
    try {

      const response = await ApiEndPoints.addMedicines(params)
      if (response?.message && response?.user) {
        toast.success(response.message || "Delivery Agent Registered!");
      } else {
        toast.error(response?.error || "Registration failed!");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration API failed!");
    }
  };

  //--------------- Delete Medicines ----------------
  const deleteMedicine = async (id) => {
    try {
      const response = await ApiEndPoints.deleteMedicine(id);
      console.log("Delete Medicine Response:", response);
      if (response?.success) {
        toast.success(response.message);
        return true;
      } else {
        toast.error(response?.message);
        return false;
      }
    } catch (error) {
      console.error("Delete medicine error:", error);
      return false;
    }
  };

  //--------------- Edit Medicines ----------------
  const editMedicine = async ( id , medicineData) => {
    try {
      const res = await ApiEndPoints.editMedicine(id, medicineData);
      console.log("Update Medicine Response:", res);

      if (res?.success) {
        toast.success("Medicine updated successfully");
        return res.data;
      } else {
        console.log(res?.message);
        return null;
      }
    } catch (error) {
      console.error("Update medicine error:", error);
      return null;
    }
  };

  //--------------- Get Orders ----------------
  const getOrders = async (body) => {
    try {
      const response = await ApiEndPoints.getOrders(body);
      if (Array.isArray(response)) {
        return response;
      } else {
        toast.error("Invalid response");
        return [];
      }
    } catch (error) {
      console.error("Get orders error:", error.response?.data || error.message);
      return [];
    }
  };

  //--------------- Assign Delivery Agent ----------------
  const assignDeliveryAgent = async ({ orderId, agentId }) => {
    try {
      const res = await ApiEndPoints.assignDeliveryAgent({ orderId, agentId });
      return res?.data || null;
    } catch (error) {
      console.error("Assign agent error:", error);
      return null;
    }
  };


  //--------------- Updata Order Status ----------------
  const updateOrderStatus = async (id, body) => {
    try {
      const { data, success, message } = await ApiEndPoints.updateOrderStatus(id, body);
      if (success) {
        return data;
      }
      console.log(message || "Failed to update order status");
      return null;

    } catch (error) {
      console.error("Update order status error:", error);
      return null;
    }
  };
  //--------------- Stock and Expiry ----------------
  const stock_and_expiry = async (body) => {
    try {
      const response = await ApiEndPoints.stock_and_expiry(body);
      console.log("response", response);
      return response;
    } catch (error) {
      console.error("Get customers error:", error.response?.data || error.message);
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
  //--------------- ADD CMS SECTION  ----------------

  const addCmsSection = async (payload) => {
    try {
      const res = await postData("/api/pages", payload);
      toast.success("CMS content saved successfully");
      return res;
    } catch (err) {
      toast.error("Failed to save CMS content");
      return null;
    }
  };

  //--------------- Get Prescriptions ----------------
  const getPrescription = async () => {
    try {
      const data = await ApiEndPoints.getPrescription();
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
  //--------------- Prescription Status Update ----------------
  const prescriptionStatus = async (id, body) => {
    try {
      const res = await ApiEndPoints.prescriptionStatus(id, body);
      console.log("Update Prescription Status:", res);
      if (res?.success) {
        toast.success("Prescription status updated successfully");
        return res.data;
      } else {
        toast.error(res?.message || "Failed to update prescription status");
        return null;
      }
    } catch (error) {
      console.error("Update Prescription Status error:", error);
      return null;
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

//--------------- ADD FAQ ----------------
  const addFaqSection = async (params) => {
    try {
      const res = await ApiEndPoints.addFaqSection(params);
      console.log("Add FAQ Response:", res);

      if (res?.success || res?.id) {
        toast.success("FAQ added successfully");
        return res;
      } else {
        toast.error(res?.message || "Failed to add FAQ");
        return null;
      }
    } catch (err) {
      console.error("Add FAQ Error:", err);
      toast.error("Failed to save FAQ");
      return null;
    }
  };

  //--------------- GET FAQ ----------------
  const getFaqSection = async () => {
    try {
      const res = await ApiEndPoints.getFaqSection();
      console.log("Raw FAQ Response:", res);

      // handle both array and object response
      if (Array.isArray(res)) return res;
      if (Array.isArray(res?.faqs)) return res.faqs;

      toast.info("No FAQs found");
      return [];
    } catch (error) {
      console.error("Get FAQ Error:", error);
      toast.error("Failed to fetch FAQs");
      return [];
    }
  };

  //--------------- DELETE FAQ ----------------
  const deleteFaqSection = async (id) => {
    try {
      const res = await ApiEndPoints.deleteFaqSection(id);
      console.log("Delete FAQ Response:", res);

      if (res?.success) {
        toast.success("FAQ deleted successfully");
        return true;
      } else {
        toast.error(res?.message || "Failed to delete FAQ");
        return false;
      }
    } catch (error) {
      console.error("Delete FAQ Error:", error);
      toast.error("Something went wrong");
      return false;
    }
  };

  //--------------- EDIT FAQ ----------------
  const editFaqSection = async (id, body) => {
    try {
      const res = await ApiEndPoints.editFaqSection(id, body);
      console.log("Edit FAQ Response:", res);

      if (res?.success || res?.data) {
        toast.success("FAQ updated successfully");
        return res?.data || res;
      } else {
        toast.error(res?.message || "Failed to update FAQ");
        return null;
      }
    } catch (error) {
      console.error("Edit FAQ Error:", error);
      toast.error("Something went wrong");
      return null;
    }
  };
  return {
    deliveryAgentRegister, getCustomers, getCustomersbyid, getDeliveryAgents,
    dashboardStats, getMedicines, addMedicines, deleteMedicine, editMedicine, getOrders,
    updateOrderStatus, assignDeliveryAgent, stock_and_expiry, addCmsSection, getPrescription,
    uploadMedImage, prescriptionStatus, getCmsSectionDetail, addFaqSection, getFaqSection,
    editFaqSection, deleteFaqSection,
  }

}


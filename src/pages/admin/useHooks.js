import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import { ApiEndPoints } from '../../libs/http-service/api/endPoint';

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
            toast.error(error.response?.data?.message || "Registration API failed!");
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
const getMedicines = async () => {
  try {
    const data = await ApiEndPoints.getMedicines();
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
            console.error("Register error:", error);
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
      toast.error(response?.message || "Failed to delete medicine");
      return false;
    }
  } catch (error) {
    console.error("Delete medicine error:", error);
    return false;
  }
};

  //--------------- Edit Medicines ----------------
    const editMedicine = async (id, medicineData) => {
  try {
    const res = await ApiEndPoints.editMedicine(id, medicineData);
    console.log("Update Medicine Response:", res);

    if (res?.success) {
      toast.success("Medicine updated successfully");
      return res.data;
    } else {
      toast.error(res?.message || "Failed to update medicine");
      return null;
    }
  } catch (error) {
    console.error("Update medicine error:", error);
    return null;
  }
};




    return { deliveryAgentRegister, getCustomers, getDeliveryAgents,dashboardStats ,getMedicines,addMedicines,deleteMedicine,editMedicine}

}


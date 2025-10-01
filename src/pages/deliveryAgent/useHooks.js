import { toast } from "react-toastify";
import { ApiEndPoints } from '../../libs/http-service/api/endPoint'

export const UseDeliveryAgent = () => {
    // ---------------------- Get Profile -------------------
    const getTask = async () => {
        try {
            const response = await ApiEndPoints.getTask();
            return response;
        } catch (error) {
            console.error("Get profile error:", error);
            return null;
        }
    };
     //--------------- Updata Order Status ----------------
  const orderStatusUpdate = async (id, body) => {
    try {
      const { data, success, message } = await ApiEndPoints.orderStatusUpdate(id, body);
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

    return { getTask ,orderStatusUpdate};
};

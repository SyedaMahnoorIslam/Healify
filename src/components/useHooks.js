import { toast } from "react-toastify";
import { ApiEndPoints } from '../../src/libs/http-service/api/endPoint'

export const UseProfile = () => {
    // ---------------------- Get Profile -------------------
    const getProfile = async () => {
        try {
            const response = await ApiEndPoints.getProfile();
            return response;
        } catch (error) {
            console.error("Get profile error:", error);
            return null;
        }
    };

    // -------------------- Update Profile -----------------------
    const updateProfile = async (body) => {
        try {
            const response = await ApiEndPoints.updateProfile(body);
            console.log("Update success:", response); 
            return response?.data;
        } catch (error) {
            console.error("Update profile error:", error.response?.data || error.message);
            toast.error("Failed to update profile");
            throw error;
        }
    };


    return { getProfile, updateProfile };
};

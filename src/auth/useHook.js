import React from 'react'
import { ApiEndPoints } from '../libs/http-service/api/endPoint'
import toastr from 'toastr'
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';
import { Roles } from '../enum/roles';
const UseAuth = () => {
    const navigate = useNavigate();
    const login = async (body) => {
        try {
            const response = await ApiEndPoints.login(body);

            if (response?.message) {
                toast.success(response.message);
            } else {
                toast.error(response?.error || "Something went wrong");
            }
            // For Role Base login
            const role = response?.data?.user?.role;
            if (role) {
                localStorage.setItem("role", role);
            }
            const verified = response?.data?.user?.isVerified;
            const isVerified = (verified === true || verified === "true");
            const isNotVerified = (verified === false || verified === "false");
            console.log("isVerified from backend:", response?.data?.isVerified);
            console.log("isVerified from backend 2:", response?.data?.user?.isVerified);


            if (isNotVerified) {
                toast.info("Please verify your account with OTP");
                setTimeout(() => navigate("/auth/otp"), 500);
                return;
            }
            else if (role === Roles.CUSTOMER && isVerified) {
                navigate("/customer/medicine");
            } else if (role === Roles.ADMIN && isVerified) {
                navigate("/admin/dashboard");
            } else if (role === Roles.DELIVERYAGENT && isVerified) {
                navigate("/delivery-agent/delivery-dashboard");
            } else {
                console.warn("No role found: ", response);
            }
        } catch (error) {
            toast.error("Login failed, please try again");
            console.error("Login error:", error);
        }
    };

    const signup = async (params) => {
        const response = await ApiEndPoints.signup(params)
        if (response?.data) {
            toastr.success(response.message);
            navigate("/auth/otp")
        } else {
            toastr.error(response.error);

        }
    }

    const otp = async (params) => {
        const response = await ApiEndPoints.otp(params)
        if (response?.data) {
            toastr.success(response.message);
            const role = response?.data?.user?.role;
            const verified = response?.data?.isVerified;

            const isVerified = (verified === true)
            if (role === Roles.CUSTOMER && isVerified) {
                navigate("/customer/medicine");
            } else if (role === Roles.ADMIN && isVerified) {
                navigate("/admin/dashboard");
            } else if (role === Roles.DELIVERYAGENT && isVerified) {
                navigate("/delivery-agent/delivery-dashboard");
            } else {
                console.warn("No role found: ", response);
            }
        } else {
            toastr.error(response.error);

        }
    }
    return { login, signup, otp, }
}

export default UseAuth

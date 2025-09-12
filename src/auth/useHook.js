import React from 'react'
import { ApiEndPoints } from '../libs/http-service/api/endPoint'
import toastr from 'toastr'
import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import { useLocation, useNavigate } from 'react-router-dom';
import { Roles } from '../enum/roles';
const UseAuth = () => {
    const navigate = useNavigate();
    const location = useLocation();

    //--------------- Login ----------------

    const login = async (body) => {
        try {
            const response = await ApiEndPoints.login(body);

            if (response?.message) {
                toast.success(response.message);
            } else {
                toast.error(response?.error || "Something went wrong");
            }
            // For Role Base and verified login
            const role = response?.data?.user?.role;
            if (role) {   //store Role
                localStorage.setItem("role", role);
            }
            // check user verification status
            const verified = response?.data?.isVerified;
            const Verified = (verified === true || verified === "true");
            const isNotVerified = (verified === false || verified === "false");
            console.log("isVerified from backend:", response?.data?.isVerified);
            //Navigation on base of Role and verification status
            if (role === Roles.CUSTOMER && Verified) {
                toast.success("Welcome to the HEALIFY");
                setTimeout(() => navigate("/customer/medicine"), 300);
                return;
            } else if (role === Roles.ADMIN && Verified) {
                toast.success("Welcome to the HEALIFY");
                setTimeout(() => navigate("/admin/dashboard"), 300);
                return;

            } else if (role === Roles.DELIVERYAGENT && Verified) {
                toast.success("Welcome to the HEALIFY");
                setTimeout(() => navigate("/delivery-agent/delivery-dashboard"), 300);
                return;

            } else if (isNotVerified) {
                toast.info("Please verify your account with OTP");
                setTimeout(() => navigate("/auth/otp"), 500);
                return;
            } else {
                console.warn("No role found: ", response);
            }
        } catch (error) {
            toast.error("Login failed, please try again");
            console.error("Login error:", error);
        }
    };


    //--------------- Signup ----------------
    const signup = async (params) => {
        const response = await ApiEndPoints.signup(params)
        if (response?.data) {
            toastr.success(response.message);
            navigate("/auth/otp")
        } else {
            toastr.error(response.error);

        }
    }

    const otp = async (body) => {
        const response = await ApiEndPoints.otp(body);
        const userEmail = response?.data?.email;
        const typeOnLocation = () => {
            if (location.pathname === '/auth/signup' || location.pathname === '/auth/login') {
                return 'registration'
            } else if (location.pathname === '/auth/forgetPassword') {
                return 'password-reset'
            } else {
                toast.error('Inavlid Path')
            }
        }
        const otpType = typeOnLocation();
        // console.log("OTP TYPE :", otpType);
        // console.log("USER EMAIL :", userEmail);
        body = { email:userEmail ,type: otpType , otp: otp}
    }
    return { login, signup, otp, }
}

export default UseAuth

import { ApiEndPoints } from '../libs/http-service/api/endPoint'
import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';
import { Roles } from '../enum/roles';

const UseAuth = () => {
    const navigate = useNavigate();

    // -------- Login ----------
    const login = async (data) => {
        try {
            const response = await ApiEndPoints.login(data);

            if (response?.success || response?.message?.includes("success")) {
                toast.success(response?.message || "Logged in successfully!");
                if (response?.data?.accessToken) {
                    localStorage.setItem("token", response?.data?.accessToken);
                    console.log("token", response?.data?.accessToken);
                }
                handleNavigation(response?.data);
            } else {
                toast.error(response?.error || "Login failed!");
            }
        } catch (error) {
            toast.error("Login API failed!");
            console.error("Login Error:", error);
        }
    };

    //--------------- Signup ----------------
    const signup = async (params) => {
        try {
            const response = await ApiEndPoints.signup(params);
            if (response?.data) {
                toast.success(response?.message);
                navigate("/auth/otp-verify", {
                    state: { email: response?.data?.email, type: "registration" }
                })
            } else {
                toast.error(response?.error || "Signup failed");
            }
        } catch (error) {
            toast.error("Signup API failed!");
            console.error(error);
        }
    };

    //--------------- Otp ----------------
    const otp = async ({ email, otp, type, isResend = false }) => {
        try {
            const body = { email, otp, type };
            const response = await ApiEndPoints.otp(body);

            if (isResend) {
                if (response?.success) {
                    toast.info(response?.message || "OTP Resent Successfully!");
                } else {
                    toast.error(response?.error || "Failed to resend OTP");
                }
                return;
            }

            if (response?.message?.includes("verified")) {
                toast.success(response.message);

                if (type === "registration") {
                    navigate("/customer/medicine");
                } else if (type === "password_reset") {
                    navigate("/auth/resetpassword", {
                        state: { resetToken: response?.data?.resetToken }
                    });
                }
            } else {
                toast.error(response?.message || "Invalid OTP");
            }
        } catch (error) {
            toast.error("OTP API failed, please try again!");
            console.error("OTP Error:", error);
        }
    };


    //--------------- Forget Password ----------------
    const forgetPassword = async (body) => {
        try {
            const response = await ApiEndPoints.forgetPassword(body);
            if (response?.data) {
                toast.success(response?.message || "Password reset link sent to your email");
                navigate("/auth/otp-verify", {
                    state: { email: response?.data?.email, type: "password_reset" }
                });
            } else {
                toast.error(response?.error || "Failed to send reset link");
            }
        } catch (error) {
            toast.error("Forget Password API failed!");
            console.error(error);
        }
    };

    //--------------- Reset Password ----------------
    const resetPassword = async ({ resetToken, password }) => {
        try {
            const response = await ApiEndPoints.resetPassword({ resetToken, password });

            if (response?.message === "Your password has been reset successfully.") {
                toast.success(response?.message || "Password reset successfully!");
                setTimeout(() => navigate("/auth/login"), 500);
            } else {
                toast.error(response?.error || response?.message || "Failed to reset password");
            }
        } catch (error) {
            toast.error("Reset Password API failed!");
            console.error(error);
        }
    };


    // -------- Google Login ----------
    const googleLogin = async (token) => {
        try {
            const response = await ApiEndPoints.googleLogin({ 'token': token  });
            
            if (response?.success || response?.message?.includes("success")) {
                toast.success(response?.message);
                navigate('/customer/medicine');
            } else {
                toast.error(response?.error);
            }
        } catch (error) {
            console.error("Google Login Error:", error);
        }
    };


    // -------- Navigation & Role Handling ----------
    const handleNavigation = (data) => {
        const role = data?.role;
        if (role) {
            localStorage.setItem("role", role);
        }

        const verified = data?.isVerified;
        const Verified = verified === true || verified === "true";

        if (role === Roles.CUSTOMER && Verified) {
            navigate("/customer/medicine");
        } else if (role === Roles.ADMIN && Verified) {
            navigate("/admin/dashboard");
        } else if (role === Roles.DELIVERYAGENT && Verified) {
            navigate("/delivery-agent/delivery-dashboard");
        } else if (!Verified) {
            toast.info("Please verify your account with OTP");
            setTimeout(() => navigate("/auth/otp-verify", {
                state: { email: data?.email, type: "registration" }
            }), 500);
            return;
        } else {
            console.warn("No role found: ", data?.message);
        }

    };

    return { login, signup, otp, forgetPassword, resetPassword, googleLogin }
}

export default UseAuth;

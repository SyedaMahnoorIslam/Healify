
import { ApiEndPoints } from '../libs/http-service/api/endPoint'
import toastr from 'toastr'
import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';
import { Roles } from '../enum/roles';
const UseAuth = () => {
    const navigate = useNavigate();


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
            if (role) {
                localStorage.setItem("role", role);
            } else {
                console.log("Role not found!")
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
                setTimeout(() => navigate("/auth/otp-verify", {
                    state: { email: response?.data?.email, type: "registration" }
                }), 500);
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
            navigate("/auth/otp-verify", {
                state: { email: response?.data?.email, type: "registration" }
            })
        } else {
            toastr.error(response.error);

        }
    }

    const otp = async ({ email, otp, type, isResend = false }) => {
        try {
            let body = { email, type };

            if (!isResend) {
                body.otp = otp;
            }


            const response = await ApiEndPoints.otp(body);
            console.log(response)
            // Agar resend case hai
            if (isResend) {
                if (response?.success) {
                    toast.info(response?.message || "OTP Resent Successfully!");
                } else {
                    toast.error(response?.error || "Failed to resend OTP");
                }
                return;
            }

            // OTP Verify case
            if (
                response?.message === "Email verified successfully! You can now log in." ||
                response?.message === "This account is already verified."
            ) {
                toast.success(response?.message);

                switch (type) {
                    case "registration":
                        setTimeout(() => navigate("/customer/medicine"), 500);
                        break;

                    case "password_reset":
                        setTimeout(() => navigate("/auth/resetPassword"), 500);
                        break;

                    default:
                        toast.error("Unknown OTP type");
                        break;
                }
            } else {
                toast.error(response?.message || "Invalid OTP");
            }
        } catch (error) {
            toast.error("OTP API failed, please try again!");
            console.error("OTP Error:", error);
        }
    };


    return { login, signup, otp, }
}

export default UseAuth

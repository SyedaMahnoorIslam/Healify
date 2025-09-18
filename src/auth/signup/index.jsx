import { useState } from "react";
import { useForm } from "react-hook-form";
import google from '../../assets/icons/google-icon.svg'
import facebook from '../../assets/icons/Vector.svg'
import logo from '../../assets/images/logo-image.png'
import {
  FormSide,
  Card,
  Title,
  StyledForm,
  Input,
  Button,
  InputWrapper,
  IconWrapper,
  PasswordInput
} from "./style";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import UseAuth from "../useHook";
import { useGoogleLogin } from "@react-oauth/google";


export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { signup,googleLogin } = UseAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const onSubmit = (params) => {
    console.log("Form Submitted:", params);
    signup(params)
    
  };

  const goToLogin = () => navigate('/auth/login');
  const googleLoginHandler = useGoogleLogin({
      onSuccess: (res) => {
        console.log("Google Token:", res.access_token);
        googleLogin(res.access_token);
      },
      onError: (err) => console.error("Google Login Error:", err),
    });
  return (
    <FormSide>
      <Card>
        <Title>
          <img src={logo} alt="logo" /> Create an Account
        </Title>

        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="text"
            placeholder="Full Name"
            {...register("name", { required: "Full name is required" })}
          />
          {errors.name && <p style={{ color: "red", fontSize: "0.8rem" }}>{errors.name.message}</p>}
          <Input
            type="tel"
            placeholder="Phone"
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]{10,15}$/,
                message: "Enter a valid phone number",
              },
            })}
          />
          {errors.phone && <p style={{ color: "red", fontSize: "0.8rem" }}>{errors.phone.message}</p>}
          <Input
            type="email"
            placeholder="Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Enter a valid email address",
              },
            })}
          />
          {errors.email && <p style={{ color: "red", fontSize: "0.8rem" }}>{errors.email.message}</p>}
          <InputWrapper>
            <PasswordInput
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
            <IconWrapper onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </IconWrapper>
          </InputWrapper>
          {errors.password && <p style={{ color: "red", fontSize: "0.8rem" }}>{errors.password.message}</p>}

          <Button type="submit">Signup</Button>

          <div className="loginButton">
            <p>Already have an account? <a onClick={goToLogin}>Login</a></p>
            <h3>Signup with</h3>
            <div>
              <button type="button" onClick={()=> googleLoginHandler()}>
                <img src={google} alt="google" />
              </button>
              <button type="button">
                <img src={facebook} alt="facebook" />
              </button>
            </div>
          </div>
        </StyledForm>
      </Card>
    </FormSide>
  );
}

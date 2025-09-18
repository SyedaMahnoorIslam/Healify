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
} from "./style";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import UseAuth from "../useHook";
import { useGoogleLogin } from "@react-oauth/google";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const { login ,googleLogin} = UseAuth()
  const navigate = useNavigate();


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
    login(data)

  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const goToSignup = () => navigate('/auth/signup');
  const goToForgetPassword = () => navigate('/auth/forgetPassword');
 
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
          <img src={logo} alt="logo" />
          Welcome Back! <br /> Login to Your Account
        </Title>

        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <InputWrapper>
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
          </InputWrapper>
          {errors.email && (
            <p style={{ color: "red", fontSize: "0.8rem" }}>{errors.email.message}</p>
          )}


          <InputWrapper>
            <Input
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
          {errors.password && (
            <p style={{ color: "red", fontSize: "0.8rem" }}>{errors.password.message}</p>
          )}

          <Button type="submit">Login</Button>


          <div className="checkbox">
            <label>
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              Remember Me!
            </label>
            <h4 onClick={goToForgetPassword}>Forgot Password?</h4>
          </div>


          <div className="loginButton">
            <p>
              Do you have an account? <a onClick={goToSignup}>SignUp</a>
            </p>
            <h3>OR</h3>
            <div>
              <button type="button" onClick={()=> googleLoginHandler()}><img src={google} alt="google" /></button>
              <button type="button"><img src={facebook} alt="facebook" /></button>
            </div>
          </div>

        </StyledForm>
      </Card>
    </FormSide>
  );
}

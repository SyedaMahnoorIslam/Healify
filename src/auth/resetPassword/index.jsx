import { useState } from "react";
import logo from "../../assets/images/logo-image.png";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
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
import { useForm } from "react-hook-form"; 

export default function ResetPassword() {
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const newPassword = watch("newPassword");

  const onSubmit = (data) => {
    console.log("Password Reset Data:", data);
    alert("Password reset successfully!");
    navigate("/auth/login");
  };

  return (
    <FormSide>
      <Card>
        <Title>
          <img src={logo} alt="logo" /> Reset Password
        </Title>

        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          
          <InputWrapper>
            <Input
              type={showNewPassword ? "text" : "password"}
              placeholder="Password"
              {...register("newPassword", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
            <IconWrapper onClick={() => setShowNewPassword(!showNewPassword)}>
              {showNewPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </IconWrapper>
          </InputWrapper>
          {errors.newPassword && (
            <p style={{ color: "red", fontSize: "0.8rem" }}>
              {errors.newPassword.message}
            </p>
          )}
          <InputWrapper>
            <Input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              {...register("confirmPassword", {
                required: "Confirm password is required",
                validate: (value) =>
                  value === newPassword || "Passwords do not match",
              })}
            />
            <IconWrapper
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </IconWrapper>
          </InputWrapper>
          {errors.confirmPassword && (
            <p style={{ color: "red", fontSize: "0.8rem" }}>
              {errors.confirmPassword.message}
            </p>
          )}

          <Button type="submit">Reset Password</Button>
        </StyledForm>
      </Card>
    </FormSide>
  );
}

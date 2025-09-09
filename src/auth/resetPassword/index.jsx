
import { useState } from "react";
// import authImg from "../../assets/images/auth-img.jpg";
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

export default function ResetPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // TODO: Call API to update password here
    alert("Password reset successfully!");
    navigate("/auth/login");
  };

  return (
    <FormSide>
      <Card>
        <Title>
          <img src={logo} alt="logo" /> Reset Password
        </Title>

        <StyledForm onSubmit={handleSubmit}>
          <InputWrapper>
            <Input
              type={showNewPassword ? "text" : "password"}
              placeholder="Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
            <IconWrapper onClick={() => setShowNewPassword(!showNewPassword)}>
              {showNewPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </IconWrapper>
          </InputWrapper>

          <InputWrapper>
            <Input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <IconWrapper
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </IconWrapper>
          </InputWrapper>

          <Button type="submit">Reset Password</Button>
        </StyledForm>
      </Card>
    </FormSide>
  );
}

import { useState } from "react";
import authImg from "../../assets/images/auth-img.jpg";
import logo from '../../assets/images/logo-image.png';
import {
  // Wrapper,
  // ImageSide,
  FormSide,
  Card,
  Title,
  StyledForm,
  Input,
  Button,
} from "./style";
import { useNavigate } from "react-router-dom";

export default function ResetPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
  };
  const navigate = useNavigate('');
        const goToLogin= ()=>{
          navigate('/auth/login')
        };

  return (
    // <Wrapper>
    //   <ImageSide src={authImg} />
      <FormSide>
        <Card>
          <Title><img src={logo} /> Reset Password</Title>

          <StyledForm onSubmit={handleSubmit}>
            <Input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />

            <Input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />

            <Button type="submit" onClick={goToLogin}>Reset Password</Button>
          </StyledForm>
        </Card>
      </FormSide>
    // </Wrapper>
  );
}

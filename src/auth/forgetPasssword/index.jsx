import { useState } from "react";
import authImg from "../../assets/images/auth-img.jpg";
import logo from '../../assets/images/logo-image.png';
import {
  Wrapper,
  ImageSide,
  FormSide,
  Card,
  Title,
  StyledForm,
  Input,
  Button,
  BackText
} from "./style";
import { useNavigate } from "react-router-dom";

export default function ForgetPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const navigate = useNavigate('');
  const goToResetPassword = () => {
    navigate('/resetPassword')
  };
  const goToLogin= ()=>{
            navigate('/login')
          };
  return (
    <Wrapper>
      <ImageSide src={authImg} />
      <FormSide>
        <Card>
          <Title><img src={logo} /> Forgot Password</Title>

          <StyledForm onSubmit={handleSubmit}>
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <Button type="submit" onClick={goToResetPassword}>Send Reset Link</Button>

            <BackText>
              <a onClick={goToLogin}>Back to Login</a>
            </BackText>
          </StyledForm>
        </Card>
      </FormSide>
    </Wrapper>
  );
}

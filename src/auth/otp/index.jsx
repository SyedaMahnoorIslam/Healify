
import { useState } from "react";
import logo from '../../assets/images/logo-image.png';
import {
  FormSide,
  Card,
  Title,
  StyledForm,
  Input,
  Button,
} from "./style";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function OtpVerify() {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://192.168.100.163:3000/api/auth/verify-otp",
        { otp }  
      );

      console.log("OTP Verified Successfully:", response.data);
      alert("OTP Verified Successfully!");

    
      navigate("/auth/login");

    } catch (error) {
      console.error("OTP Verification Failed:", error);
      alert("Invalid OTP, please try again.");
    }
  };

  return (
    <FormSide>
      <Card>
        <Title><img src={logo} alt="logo" /> OTP Verification</Title>

        <StyledForm onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Enter 6 digit OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
            maxLength={6}
          />

          <Button type="submit">Verify</Button>
        </StyledForm>
      </Card>
    </FormSide>
  );
}

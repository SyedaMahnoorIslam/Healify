import { useState } from "react";
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
import axios from "axios";
export default function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const [showPassword, setShowPassword] = useState(false);
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post('http://192.168.100.163:3000/api/auth/register', formData);
  //     console.log("Signup Succesfully done", response.data);
  //     alert("Signup Successfull");
  //   } catch (error) {
  //     console.log("Signup Failed!", error);
  //     alert("Signup Failed");

  //   }
  // };
  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post(
      "http://192.168.100.163:3000/api/auth/register",
      formData
    );
    console.log("Signup Successfully done", response.data);
    alert("Signup Successful");
    navigate("/auth/otp");
  } catch (error) {
    console.log("Signup Failed!", error);
    alert("Signup Failed");
  }
};
  const navigate = useNavigate('');
  const goToLogin = () => {
    navigate('/auth/login')
  };
  // const goToOtp = () => {
  //   navigate('/auth/otp')
  // };

  return (
    <FormSide>
      <Card>
        <Title><img src={logo} /> Create an Account</Title>
        <StyledForm onSubmit={handleSubmit}>

          <Input
            name="name"
            type="text"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <Input
            name="phone"
            type="tel"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <Input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <InputWrapper>
            <PasswordInput
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <IconWrapper onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </IconWrapper>
          </InputWrapper>

          <Button type="submit">Signup</Button>

          <div className='loginButton'>
            <p>Already have an account? <a onClick={goToLogin}>Login</a></p>
            <h3> Signup with</h3>
            <div >
              <button>
                <img src={google} alt="" />
              </button>
              <button>
                <img src={facebook} alt="" />
              </button>
            </div>
          </div>

        </StyledForm>
      </Card>
    </FormSide>
  );
}

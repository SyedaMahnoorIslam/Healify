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
} from "./style";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import axios from "axios";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const [isChecked, setIsChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate('');

  const handleSubmit =(e) => {
    e.preventDefault();  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const goToSignup = () => navigate('/auth/signup');
  const goToForgetPassword = () => navigate('/auth/forgetPassword');

  return (
    <FormSide>
      <Card>
        <Title> 
          <img src={logo} alt="logo"/>
          Welcome Back! <br/> Login to Your Account
        </Title>

        <StyledForm onSubmit={handleSubmit}>
          <InputWrapper>
            <Input
              type="email"
              name="email" 
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </InputWrapper>

          <InputWrapper>
            <Input
              type={showPassword ? "text" : "password"}
              name="password"   
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <IconWrapper onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </IconWrapper>
          </InputWrapper>

          <Button type="submit">Login</Button>
          
          <div className='checkbox'>
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

          <div className='loginButton'>
            <p>Do you have an account? <a onClick={goToSignup}>SignUp</a></p>
            <h3>OR</h3>
            <div>
              <button><img src={google} alt="google"/></button>
              <button><img src={facebook} alt="facebook"/></button>
            </div>
          </div>
        </StyledForm>
      </Card>
    </FormSide>
  );
}

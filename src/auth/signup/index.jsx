import { useState } from "react";
import google from '../../assets/icons/google-icon.svg'
import facebook from '../../assets/icons/Vector.svg'
import logo from '../../assets/images/logo-image.png'
import {
  // Wrapper,
  // ImageSide,
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
// import authImg from "../../assets/images/auth-img.jpg";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";


export default function Signup() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  const navigate = useNavigate('');
  const goToLogin = () => {
    navigate('/auth/login')
  };
  const goToOtp = () => {
    navigate('/auth/otp')
  };


  return (
    // <Wrapper>

    //   <ImageSide src={authImg} />
    <FormSide>
      <Card>
        <Title><img src={logo} /> Create an Account</Title>

        <StyledForm onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />

          <Input
            type="tel"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />

          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <InputWrapper>
            <PasswordInput
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <IconWrapper onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </IconWrapper>
          </InputWrapper>

          <Button type="submit" onClick={goToOtp}>Signup</Button>
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
    // </Wrapper>
  );
}

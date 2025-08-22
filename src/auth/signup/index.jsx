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
} from "./style";
// import authImg from "../../assets/images/auth-img.jpg";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  const navigate = useNavigate('');
  const goToLogin = () => {
    navigate('/login')
  };
  const goToOtp = () => {
    navigate('/otp')
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

            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <Button type="submit" onClick={goToOtp}>Signup</Button>
            <div className='loginButton'>
              <p>Already have an account? <a onClick={goToLogin}>Login</a></p>
              <h3> Signup with</h3>
              <div >
                <button>
                  <img src={google}  alt=""/>
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

// import { useState } from "react";
// import google from '../../assets/icons/google-icon.svg'
// // import apple from '../../assets/icons/Black.svg'
// import facebook from '../../assets/icons/Vector.svg'
// import logo from '../../assets/images/logo-image.png'
// import {
//   // Wrapper,
//   // ImageSide,
//   FormSide,
//   Card,
//   Title,
//   StyledForm,
//   Input,
//   Button,
// } from "./style";
// // import authImg from "../../assets/images/auth-img.jpg";
// import { useNavigate } from "react-router-dom";

// export default function LoginPage() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isChecked, setIsChecked] = useState(false);


//   const handleSubmit = async (e) => {
//     e.preventDefault();

//   };
//   const handleCheckboxChange = () => {
//     setIsChecked(!isChecked);
//   };
//   const navigate = useNavigate('');
//   const goToSignup= ()=>{
//     navigate('/auth/signup')
//   };

//  const goToHome= ()=>{
//     navigate('/customer/medicine')
//   };
//    const goToForgetPassword= ()=>{
//     navigate('/auth/forgetPassword')
//   };
  
//   return (
//     // <Wrapper>
//     //   <ImageSide src={authImg} />
//       <FormSide>
//         <Card>
//           <Title> <img src={logo}/>
//            Welcome Back! <br/> Login to Your Account</Title>
//           <StyledForm onSubmit={handleSubmit}>
//             <Input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//             <Input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//             <Button type="submit" onClick={goToHome}>Login</Button>
//               <div className='checkbox'>
//                 <label >
//                   <input
//                     type="checkbox"
//                     checked={isChecked}
//                     onChange={handleCheckboxChange}
//                   />
//                   Remember Me!
//                 </label>
//                 <h4 onClick={goToForgetPassword}>Forgot Password?</h4>
//               </div>

//             <div className='loginButton'>
//               <p>Do you have an account? <a onClick={goToSignup}>SignUp</a></p>
//               <h3>OR</h3>
//               <div>
//                  <button>
//                 <img src={google} />
                
//               </button>
//               <button>
//                 <img src={facebook} />
                

//               </button>
//               </div>
//               {/* <button>
//                 <img src={apple} />
//                 <p>SignIn with Apple</p>
//               </button> */}
//             </div>
//           </StyledForm>
//         </Card>
//       </FormSide>
//     // </Wrapper>
//   );
// }
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

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const navigate = useNavigate('');
  const goToSignup= ()=> navigate('/auth/signup');
  const goToHome= ()=> navigate('/customer/medicine');
  const goToForgetPassword= ()=> navigate('/auth/forgetPassword');

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
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </InputWrapper>

          
          <InputWrapper>
            <Input
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

          <Button type="submit" onClick={goToHome}>Login</Button>
          
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

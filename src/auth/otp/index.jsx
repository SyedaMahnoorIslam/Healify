// import { useState, useRef, useEffect } from "react";
// import authImg from "../../assets/images/auth-img.jpg";
// import logo from '../../assets/images/logo-image.png';
// import {
//   Wrapper,
//   ImageSide,
//   FormSide,
//   Card,
//   Title,
//   StyledForm,
//   Button,
//   OtpWrapper,
//   OtpInput,
//   TimerText,
//   ResendLink,
// } from "./style";

// export default function OtpVerify() {
//   const [otp, setOtp] = useState(["", "", "", "", ""]);
//   const [seconds, setSeconds] = useState(60);
//   const inputRefs = useRef([]);

//   useEffect(() => {
//     let interval = null;
//     if (seconds > 0) {
//       interval = setInterval(() => {
//         setSeconds((prev) => prev - 1);
//       }, 1000);
//     }
//     return () => clearInterval(interval);
//   }, [seconds]);

//   const handleResend = () => {
    
//     setSeconds(60);  
//     setOtp(["", "", "", "", ""]); 
//     inputRefs.current[0].focus();
//   };

//   const handleChange = (value, index) => {
//     const newOtp = [...otp];
//     newOtp[index] = value.slice(-1);
//     setOtp(newOtp);
//     if (value && index < inputRefs.current.length - 1) {
//       inputRefs.current[index + 1].focus();
//     }
//   };

//   const handleKeyDown = (e, index) => {
//     if (e.key === "Backspace" && !otp[index] && index > 0) {
//       const newOtp = [...otp];
//       newOtp[index - 1] = "";
//       setOtp(newOtp);
//       inputRefs.current[index - 1].focus();
//     }
//   };

//   const handlePaste = (e) => {
//     const pasteData = e.clipboardData.getData("text").replace(/\s+/g, "");
//     if (!pasteData) return;
//     const newOtp = pasteData.split("").slice(0, 5);
//     while (newOtp.length < 5) {
//       newOtp.push("");
//     }
//     setOtp(newOtp);
//     const lastIndex = newOtp.findIndex((v) => v === "");
//     const focusIndex = lastIndex === -1 ? 4 : lastIndex;
//     inputRefs.current[focusIndex].focus();
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const code = otp.join("");
//   };

//   return (
//     <Wrapper>
//       <ImageSide src={authImg} />
//       <FormSide>
//         <Card>
//           <Title><img src={logo} /> OTP Verification</Title>

//           <StyledForm onSubmit={handleSubmit}>
//             <OtpWrapper>
//               {otp.map((item, index) => (
//                 <OtpInput
//                   key={index}
//                   type="text"
//                   maxLength={1}
//                   value={item}
//                   ref={(el) => (inputRefs.current[index] = el)}
//                   onChange={(e) => handleChange(e.target.value, index)}
//                   onKeyDown={(e) => handleKeyDown(e, index)}
//                   onPaste={handlePaste}
//                 />
//               ))}
//             </OtpWrapper>

//             <Button type="submit">Verify</Button>

//             {seconds > 0 ? (
//               <TimerText>Resend code in {seconds}s</TimerText>
//             ) : (
//               <ResendLink onClick={handleResend}>Resend Code</ResendLink>
//             )}

           
//           </StyledForm>
//         </Card>
//       </FormSide>
//     </Wrapper>
//   );
// }



import { useState } from "react";
// import authImg from "../../assets/images/auth-img.jpg";
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

export default function OtpVerify() {
  const [otp, setOtp] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const navigate = useNavigate('');
      const goToHome= ()=>{
        navigate('/home')
      };
  return (
    // <Wrapper>
    //   <ImageSide src={authImg} />
      <FormSide>
        <Card>
          <Title><img src={logo} /> OTP Verification</Title>

          <StyledForm onSubmit={handleSubmit}>
            <Input
              type="text"
              placeholder="Enter 4 digit OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
              maxLength={4}
            />

            <Button type="submit" onClick={goToHome}>Verify</Button>

          </StyledForm>
        </Card>
      </FormSide>
    //  </Wrapper> 
  );
}

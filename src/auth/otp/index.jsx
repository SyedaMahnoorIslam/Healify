import logo from '../../assets/images/logo-image.png';
import {
  FormSide,
  Card,
  Title,
  StyledForm,
  Input,
  Button,
} from "./style";
import { useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import UseAuth from '../useHook';
import { useEffect, useState } from "react";

const OtpVerify = () => {
  const { otp } = UseAuth();
  const { register, handleSubmit, formState: { errors } } = useForm();
  // Timer for resend otp
  const [timer, setTimer] = useState(30);
  const [isResendDisabled, setIsResendDisabled] = useState(true);

  useEffect(() => {
    let countdown;
    if (timer > 0) {
      countdown = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else {
      setIsResendDisabled(false);
      clearInterval(countdown);
    }
    return () => clearInterval(countdown);
  }, [timer]);


  const location = useLocation();
  const { email, type } = location.state || {};
  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
    otp({
      email,
      otp: data.otp,
      type
    });
  };

  const handleResendOtp = () => {
    console.log("Resend OTP clicked");
    setTimer(30);
    setIsResendDisabled(true);

    otp({
      email,
      type,
      isResend: true
    });
  };
  return (
    <FormSide>
      <Card>
        <Title>
          <img src={logo} alt="logo" /> OTP Verification
        </Title>

        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="text"
            placeholder="Enter 6 digit OTP"
            {...register("otp", {
              required: "OTP is required",
              pattern: {
                value: /^[0-9]{6}$/,
                message: "OTP must be 6 digits",
              },
            })}
            maxLength={6}
            autoFocus
          />
          {errors.otp && <span style={{ color: "red" }}>{errors.otp.message}</span>}

          <Button type="submit">Verify</Button>
        </StyledForm>

        <div style={{ marginTop: "15px", textAlign: "center" }}>
          {isResendDisabled ? (
            <p style={{ color: "gray" }}>
              Resend OTP in {timer}s
            </p>
          ) : (
            <Button style={{ width: '100%', backgroundColor: 'var(--color-accent-pink)' }} onClick={handleResendOtp}>Resend OTP</Button>
          )}
        </div>
      </Card>
    </FormSide>
  )
}

export default OtpVerify

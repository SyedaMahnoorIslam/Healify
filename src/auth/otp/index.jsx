
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
import { useForm } from "react-hook-form";

export default function OtpVerify() {
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    alert("OTP Verified Successfully!");
    navigate("/auth/resetPassword");
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
      </Card>
    </FormSide>
  );
}

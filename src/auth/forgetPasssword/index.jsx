import Logo from '../../assets/images/logo-image.png';
import {
  FormSide,
  Card,
  Title,
  StyledForm,
  Input,
  Button,
  BackText
} from "./style";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function ForgetPassword() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    const { email } = data;

    alert("Reset link sent to " + email);
    navigate('/auth/resetPassword');
  };

  return (
    <FormSide>
      <Card>
        <Title>
          <img src={Logo} alt="logo" /> Forgot Password
        </Title>

        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="email"
            placeholder="Enter your email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address"
              }
            })}
          />
          {errors.email && <span style={{ color: "red" }}>{errors.email.message}</span>}

          <Button type="submit">Send Reset Link</Button>

          <BackText>
            <Link to="/auth/login">Back to Login</Link>
          </BackText>
        </StyledForm>
      </Card>
    </FormSide>
  );
}

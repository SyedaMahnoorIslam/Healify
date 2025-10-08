import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FiEdit2 } from "react-icons/fi";
import logo from "../../assets/images/logo-image.png";
import { UseProfile } from "../useHooks";
import {
  Container,
  HeaderCard,
  ProfileImage,
  UserInfo,
  DetailsCard,
  Form,
  FormRow,
  Input,
  SaveButton,
  RadioLabel,
  RadioGroup,
} from "./style";
import { toast } from "react-toastify";

const ProfilePage = () => {
  const { getProfile, updateProfile } = UseProfile();
  const [profileData, setProfileData] = useState(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  //  Fetch Profile Function
  const fetchProfile = async () => {
    const profile = await getProfile();
    if (profile) {
      setProfileData(profile);

      setValue("name", profile.name || "");
      setValue("email", profile.email || "");
      setValue("phone", profile.phone || "");
      // dob ko sahi format mn set krna
      setValue(
        "dob",
        profile.dob ? new Date(profile.dob).toISOString().split("T")[0] : ""
      );

      setValue("gender", profile.gender || "");
    }
  };


  useEffect(() => {
    fetchProfile();
  }, [setValue]);

  const onSubmit = async (data) => {
    try {
        console.log("Form submitted with data:", data);
      const payload = {
        name: profileData?.name,  
        email: profileData?.email, 
        dob: data.dob ? new Date(data.dob).toLocaleDateString("en-GB") : null,
        gender: data.gender,
        phone: data.phone,
        imageId: null,
      };
      const res = await updateProfile(payload);
      console.log("Update API response:", res);
     console.log("Payload sending to API:", payload);
      toast.success("Profile updated successfully!");

      fetchProfile();
    } catch (error) {
      toast.error("Failed to update profile");
      console.error(error);
    }
  };
  return (
    <Container>
      <HeaderCard>
        <ProfileImage src={logo} alt="Profile" />
        <UserInfo>
          <h2>{profileData?.name || "Loading..."}</h2>
          <p>{profileData?.role}</p>
        </UserInfo>
      </HeaderCard>

      <DetailsCard>
        <h3>Profile Details</h3>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormRow>
            <label>Name</label>
            <Input type="text" {...register("name")} readOnly />
          </FormRow>

          <FormRow>
            <label>Email</label>
            <Input type="email" {...register("email")} readOnly />
          </FormRow>

          <FormRow>
            <label>Phone</label>
            <Input
              type="text"
              {...register("phone", {
                required: "Phone number is required",
                minLength: { value: 7, message: "At least 7 digits" },
              })}
            />
            <FiEdit2 className="edit-icon" />
            {errors.phone && <span>{errors.phone.message}</span>}
          </FormRow>

          <FormRow>
            <label>Date of Birth</label>
            <Input
              type="date"
              {...register("dob", { required: "Date of Birth is required" })}
            />
            {errors.dob && <span>{errors.dob.message}</span>}
          </FormRow>

          <FormRow>
            <label>Gender</label>
            <RadioGroup>
              <RadioLabel>
                <input type="radio" value="male" {...register("gender")} />
                Male
              </RadioLabel>
              <RadioLabel>
                <input type="radio" value="female" {...register("gender")} />
                Female
              </RadioLabel>
              <RadioLabel>
                <input type="radio" value="other" {...register("gender")} />
                Other
              </RadioLabel>
            </RadioGroup>
            {errors.gender && <span>{errors.gender.message}</span>}
          </FormRow>
          <SaveButton type="submit">Save Changes</SaveButton>
        </Form>
      </DetailsCard>
    </Container>
  );
};

export default ProfilePage;

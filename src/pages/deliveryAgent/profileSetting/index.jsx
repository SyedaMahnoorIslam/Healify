
import React, { useState } from "react";
import { FiEdit2 } from "react-icons/fi";
import ProfileImg from '../../../assets/images/profile.png'
import {
Container, HeaderCard,ProfileImage,UserInfo,DetailsCard,Form,FormRow,Input,SaveButton,

} from './style'
const ProfilePage = () => {
  const [user, setUser] = useState({
    name: "Wan Fateh",
    email: "wanfateh@example.com",
    phone: "+92 300 1234567",
    city: "Attock",
    country: "Pakistan",
    role: "Delivery Agent",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Container>
      <HeaderCard>
        <ProfileImage
          src={ProfileImg}
          alt="Profile"
        />
        <UserInfo>
          <h2>{user.name}</h2>
          <p>{user.role}</p>
        </UserInfo>
      </HeaderCard>
      <DetailsCard>
        <h3>Profile Details</h3>
        <Form>
          <FormRow>
            <label>Name</label>
            <Input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
            />
            <FiEdit2 className="edit-icon" />
          </FormRow>

          <FormRow>
            <label>Email</label>
            <Input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
            />
            <FiEdit2 className="edit-icon" />
          </FormRow>

          <FormRow>
            <label>Phone</label>
            <Input
              type="text"
              name="phone"
              value={user.phone}
              onChange={handleChange}
            />
            <FiEdit2 className="edit-icon" />
          </FormRow>

          <FormRow>
            <label>City</label>
            <Input
              type="text"
              name="city"
              value={user.city}
              onChange={handleChange}
            />
            <FiEdit2 className="edit-icon" />
          </FormRow>

          <FormRow>
            <label>Country</label>
            <Input
              type="text"
              name="country"
              value={user.country}
              onChange={handleChange}
            />
            <FiEdit2 className="edit-icon" />
          </FormRow>
        </Form>

        <SaveButton>Save Changes</SaveButton>
      </DetailsCard>
    </Container>
  );
};

export default ProfilePage;


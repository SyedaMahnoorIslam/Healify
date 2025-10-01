import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Heading,
  ProfileSection,
  AddressBookSection,
  ProfileCard,
  UserInfo,
  SectionTitle,
  AddressList,
  AddressItem,
  AddButton,
  EditButton,
  SmallButton,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Field,
  Label,
  Input,
  SaveButton,
  CancelButton,
  CloseButton,
  StatusBadge,
  OrderTable,
} from "./style";
import ProfileImg from "../../../../assets/images/profile.png";

const Profile = () => {
  const [user, setUser] = useState({
    name: "Wan Fateh",
    email: "wanfateh@example.com",
    phone: "+92 300 1234567",
  });

  const [addresses, setAddresses] = useState([
    {
      id: 1,
      street: "House 123, Block C",
      city: "Lahore",
      state: "Punjab",
      zip_code: "54000",
      country: "Pakistan",
    },
    {
      id: 2,
      street: "456 Road",
      city: "Karachi",
      state: "Sindh",
      zip_code: "75000",
      country: "Pakistan",
    },
  ]);

  const [orders] = useState([
    { id: "ORD001", product: "Blood Pressure Monitor", price: "5000 PKR", delivery_status: "Delivered", payment_status: "Paid" },
    { id: "ORD002", product: "Glucose Meter", price: "3500 PKR", delivery_status: "Pending", payment_status: "Unpaid" },
    { id: "ORD003", product: "Thermometer", price: "1200 PKR", delivery_status: "Shipped", payment_status: "Paid" },
  ]);

  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
  const [isEditInfoModalOpen, setIsEditInfoModalOpen] = useState(false);
  const [isEditAddressModalOpen, setIsEditAddressModalOpen] = useState(false);
  const [editAddress, setEditAddress] = useState(null);

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const handleSaveUserInfo = (data) => {
    setUser(data);
    reset();
    setIsEditInfoModalOpen(false);
  };

  const handleSaveAddress = (data) => {
    setAddresses([...addresses, { id: Date.now(), ...data }]);
    reset();
    setIsAddressModalOpen(false);
  };

  const handleSaveEditedAddress = (data) => {
    setAddresses(addresses.map((addr) =>
      addr.id === editAddress.id ? { ...addr, ...data } : addr
    ));
    reset();
    setIsEditAddressModalOpen(false);
  };

  return (
    <div>
      <Heading><h1>User Profile</h1></Heading>

      {/* Profile Section */}
      <ProfileSection>
        <ProfileCard>
          <img src={ProfileImg} alt="User" className="profile-img" />
          <UserInfo>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <EditButton onClick={() => { reset(user); setIsEditInfoModalOpen(true); }}>
              ✏️ Edit Info
            </EditButton>
          </UserInfo>
        </ProfileCard>
      </ProfileSection>

      {/* Address Book */}
      <AddressBookSection>
        <SectionTitle>Address Book</SectionTitle>
        <AddressList>
          {addresses.map((addr) => (
            <AddressItem key={addr.id}>
              {`${addr.street}, ${addr.city}, ${addr.state}, ${addr.zip_code}, ${addr.country}`}
              <div className="actions">
                <SmallButton onClick={() => { setEditAddress(addr); reset(addr); setIsEditAddressModalOpen(true); }}>✏️</SmallButton>
                <SmallButton del onClick={() => setAddresses(addresses.filter((a) => a.id !== addr.id))}>🗑️</SmallButton>
              </div>
            </AddressItem>
          ))}
        </AddressList>
        <AddButton onClick={() => { reset(); setIsAddressModalOpen(true); }}>+ Add New Address</AddButton>
      </AddressBookSection>

      {/* Order History */}
      <AddressBookSection>
        <SectionTitle>Order History</SectionTitle>
        <OrderTable>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Product</th>
              <th>Price</th>
              <th>Delivery Status</th>
              <th>Payment Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o) => (
              <tr key={o.id}>
                <td>{o.id}</td>
                <td>{o.product}</td>
                <td>{o.price}</td>
                <td><StatusBadge status={o.delivery_status}>{o.delivery_status}</StatusBadge></td>
                <td><StatusBadge status={o.payment_status}>{o.payment_status}</StatusBadge></td>
              </tr>
            ))}
          </tbody>
        </OrderTable>
      </AddressBookSection>

      {/* Edit Profile Modal */}
      {isEditInfoModalOpen && (
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>
              Edit Profile Info
              <CloseButton onClick={() => setIsEditInfoModalOpen(false)}>×</CloseButton>
            </ModalHeader>
            <form onSubmit={handleSubmit(handleSaveUserInfo)}>
              <ModalBody>
                <Field>
                  <Label>Name</Label>
                  <Input {...register("name", { required: true })} />
                  {errors.name && <span>Name is required</span>}
                </Field>
                <Field>
                  <Label>Email</Label>
                  <Input type="email" {...register("email", { required: true })} />
                  {errors.email && <span>Email is required</span>}
                </Field>
                <Field>
                  <Label>Phone</Label>
                  <Input {...register("phone", { required: true })} />
                  {errors.phone && <span>Phone is required</span>}
                </Field>
              </ModalBody>
              <ModalFooter>
                <SaveButton type="submit">Save</SaveButton>
                <CancelButton onClick={() => setIsEditInfoModalOpen(false)}>Cancel</CancelButton>
              </ModalFooter>
            </form>
          </ModalContent>
        </ModalOverlay>
      )}

      {/* Add Address Modal */}
      {isAddressModalOpen && (
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>
              Add New Address
              <CloseButton onClick={() => setIsAddressModalOpen(false)}>×</CloseButton>
            </ModalHeader>
            <form onSubmit={handleSubmit(handleSaveAddress)}>
              <ModalBody>
                <Field><Label>Street</Label><Input {...register("street", { required: true })} /></Field>
                <Field><Label>City</Label><Input {...register("city", { required: true })} /></Field>
                <Field><Label>State</Label><Input {...register("state")} /></Field>
                <Field><Label>Zip Code</Label><Input {...register("zip_code")} /></Field>
                <Field><Label>Country</Label><Input {...register("country")} /></Field>
              </ModalBody>
              <ModalFooter>
                <SaveButton type="submit">Save</SaveButton>
                <CancelButton onClick={() => setIsAddressModalOpen(false)}>Cancel</CancelButton>
              </ModalFooter>
            </form>
          </ModalContent>
        </ModalOverlay>
      )}

      {/* Edit Address Modal */}
      {isEditAddressModalOpen && (
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>
              Edit Address
              <CloseButton onClick={() => setIsEditAddressModalOpen(false)}>×</CloseButton>
            </ModalHeader>
            <form onSubmit={handleSubmit(handleSaveEditedAddress)}>
              <ModalBody>
                <Field><Label>Street</Label><Input {...register("street", { required: true })} /></Field>
                <Field><Label>City</Label><Input {...register("city", { required: true })} /></Field>
                <Field><Label>State</Label><Input {...register("state")} /></Field>
                <Field><Label>Zip Code</Label><Input {...register("zip_code")} /></Field>
                <Field><Label>Country</Label><Input {...register("country")} /></Field>
              </ModalBody>
              <ModalFooter>
                <SaveButton type="submit">Save</SaveButton>
                <CancelButton onClick={() => setIsEditAddressModalOpen(false)}>Cancel</CancelButton>
              </ModalFooter>
            </form>
          </ModalContent>
        </ModalOverlay>
      )}
    </div>
  );
};

export default Profile;

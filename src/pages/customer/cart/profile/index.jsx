import React, { useEffect, useState } from "react";
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
  RadioGroup,
  RadioLabel,
} from "./style";
import ProfileImg from "../../../../assets/images/profile.png";
import { FiEdit2 } from "react-icons/fi";
import { UseProfile } from "../../../../components/useHooks";
import { toast } from "react-toastify";
import { useCustomer } from "../../useHooks";

const Profile = () => {
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isEditInfoModalOpen, setIsEditInfoModalOpen] = useState(false);
  const [profileData, setProfileData] = useState(null);
  const [addressData, setAddressData] = useState([]);
  const [orderHistory, setOrderHistory] = useState([]);
  const { getProfile, updateProfile } = UseProfile();
  const { getAddress, getOrderHistory, addAddress,deleteAddress } = useCustomer();
  // React Hook Form setup
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  // Fetch Profile Data
  const fetchProfile = async () => {
    const profile = await getProfile();
    if (profile) {
      setProfileData(profile);
      setValue("name", profile.name || "");
      setValue("email", profile.email || "");
      setValue("phone", profile.phone || "");
      setValue(
        "dob",
        profile.dob
          ? new Date(profile.dob).toISOString().split("T")[0]
          : ""
      );
      setValue("gender", profile.gender || "");
    }
  };
  useEffect(() => {
    fetchProfile();
  }, []);

  // Handle Update Profile API
  const onSubmit = async (data) => {
    const payload = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      dob: data.dob
        ? new Date(data.dob).toLocaleDateString("en-GB")
        : null,
      gender: data.gender,
      imageId: null,
    };
    updateProfile(payload);
    setIsEditInfoModalOpen(false);
    fetchProfile();
  };
  // Fetch Address Data
  const fetchAddress = async () => {
    const address = await getAddress();
    console.log("address: ", address);

    if (address) setAddressData(address);
  };
  useEffect(() => {
    fetchAddress();
  }, []);
  // Fetch Order History
  const fetchOrderHistory = async () => {
    const orderHistoryData = await getOrderHistory();
    console.log(orderHistoryData);
    if (orderHistoryData) setOrderHistory(orderHistoryData);

  };
  useEffect(() => {
    fetchOrderHistory();
  }, [])
  // Add Address
  const handleSaveAddress = (params) => {
    console.log("add adress", params);
    addAddress(params);
    reset();
    setIsAddressModalOpen(false);
    fetchAddress();
  };
  // Add Address
  const handleDeleteAddress = (id) => {
    console.log("del adres", id);
    deleteAddress(id);
    reset();
    setIsAddressModalOpen(false);
    fetchAddress();
  };
  return (
    <div>
      <Heading>
        <h1>User Profile</h1>
      </Heading>

      {/* Profile Section */}
      <ProfileSection>
        <ProfileCard>
          <img src={ProfileImg} alt="User" className="profile-img" />
          <UserInfo>
            <h2>{profileData?.name || "User"}</h2>
            <p>Email: {profileData?.email}</p>
            <p>Phone: {profileData?.phone}</p>
            <p>DOB: {profileData?.dob || "—"}</p>
            <p>Gender: {profileData?.gender || "—"}</p>

            <EditButton onClick={() => setIsEditInfoModalOpen(true)}>
              Edit Info
            </EditButton>
          </UserInfo>
        </ProfileCard>
      </ProfileSection>

      {/* Address Book */}
      <AddressBookSection>
        <SectionTitle>Address Book</SectionTitle>
        <AddressList>
          {Array.isArray(addressData) && addressData.length > 0 ? (
            addressData.map((addr) => (
              <AddressItem key={addr.id}>
                {`${addr?.street}, ${addr?.city}, ${addr?.state}, ${addr?.zip_code}, ${addr?.country}`}
                <div className="actions">
                  <SmallButton del onClick={()=>handleDeleteAddress(addr.id) }>
                    Delete
                  </SmallButton>
                </div>
              </AddressItem>
            ))
          ) : (
            <p>No addresses found.</p>
          )}

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
            {orderHistory.map((o) => (
              <tr key={o.id}>
                <td>{o.id}</td>
                {/* <td>{o.items?.Medicine?.name}</td> */}
                <td>
                  {o.items && o.items.length > 0 ? (
                    o.items.map((item, index) => (
                      <div key={index}>
                        {item.Medicine?.name} ({item.quantity})
                      </div>
                    ))
                  ) : (
                    "No items"
                  )}
                </td>

                <td>{o.total_amount}</td>
                <td><StatusBadge status={o.status}>{o.status}</StatusBadge></td>
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
              <CloseButton onClick={() => setIsEditInfoModalOpen(false)}>
                ×
              </CloseButton>
            </ModalHeader>

            <form onSubmit={handleSubmit(onSubmit)}>
              <ModalBody>
                <Field>
                  <Label>Name</Label>
                  <Input
                    type="text"
                    {...register("name")}readOnly
                  />
                  {errors.name && <span>{errors.name.message}</span>}
                </Field>

                <Field>
                  <Label>Email</Label>
                  <Input
                    type="email"
                    {...register("email")}readOnly
                  />
                  {errors.email && <span>{errors.email.message}</span>}
                </Field>

                <Field>
                  <Label>Phone</Label>
                  <Input
                    type="text"
                    {...register("phone", {
                      required: "Phone number is required",
                      minLength: { value: 7, message: "At least 7 digits" },
                    })}
                  />
                  {errors.phone && <span>{errors.phone.message}</span>}
                </Field>

                <Field>
                  <Label>Date of Birth</Label>
                  <Input
                    type="date"
                    {...register("dob", { required: "Date of Birth is required" })}
                  />
                  {errors.dob && <span>{errors.dob.message}</span>}
                </Field>

                <Field>
                  <Label>Gender</Label>
                  <RadioGroup>
                    <RadioLabel>
                      <input
                        type="radio"
                        value="male"
                        {...register("gender", { required: "Gender is required" })}
                      />
                      Male
                    </RadioLabel>
                    <RadioLabel>
                      <input
                        type="radio"
                        value="female"
                        {...register("gender")}
                      />
                      Female
                    </RadioLabel>
                    <RadioLabel>
                      <input
                        type="radio"
                        value="other"
                        {...register("gender")}
                      />
                      Other
                    </RadioLabel>
                  </RadioGroup>
                  {errors.gender && <span>{errors.gender.message}</span>}
                </Field>
              </ModalBody>

              <ModalFooter>
                <SaveButton type="submit" disabled={loading}>
                  {loading ? "Saving..." : "Save"}
                </SaveButton>
                <CancelButton onClick={() => setIsEditInfoModalOpen(false)}>
                  Cancel
                </CancelButton>
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
                <Field><Label>Province</Label><Input {...register("state")} /></Field>
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
    </div>
  );
};

export default Profile;

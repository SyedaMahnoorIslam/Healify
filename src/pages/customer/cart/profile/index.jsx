import React, { useState } from "react";
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
  Input,
  SaveButton,
  CancelButton,
} from "./style";
import ProfileImg from '../../../../assets/images/profile.png'

const Profile = () => {
  const [user, setUser] = useState({
    name: "Wan Fateh",
    email: "wanfateh@example.com",
    phone: "+92 300 1234567",
  });

  const [addresses, setAddresses] = useState([
    { id: 1, address: "123 Street, Karachi" },
    { id: 2, address: "456 Road, Lahore" },
  ]);

  const [medicalHistory, setMedicalHistory] = useState([
    { id: 1, note: "Diabetes Type 2" },
    { id: 2, note: "Allergy: Penicillin" },
  ]);

  // States
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
  const [isEditInfoModalOpen, setIsEditInfoModalOpen] = useState(false);
  const [isEditAddressModalOpen, setIsEditAddressModalOpen] = useState(false);
  const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false);
  const [isEditHistoryModalOpen, setIsEditHistoryModalOpen] = useState(false);

  const [newAddress, setNewAddress] = useState("");
  const [editUser, setEditUser] = useState(user);
  const [editAddress, setEditAddress] = useState({ id: null, address: "" });

  const [newHistory, setNewHistory] = useState("");
  const [editHistory, setEditHistory] = useState({ id: null, note: "" });

  // Address Handlers
  const handleSaveAddress = () => {
    if (newAddress.trim() !== "") {
      setAddresses([...addresses, { id: Date.now(), address: newAddress }]);
      setNewAddress("");
      setIsAddressModalOpen(false);
    }
  };

  const handleSaveUserInfo = () => {
    setUser(editUser);
    setIsEditInfoModalOpen(false);
  };

  const handleDeleteAddress = (id) => {
    setAddresses(addresses.filter((addr) => addr.id !== id));
  };

  const handleEditAddress = (addr) => {
    setEditAddress(addr);
    setIsEditAddressModalOpen(true);
  };

  const handleSaveEditedAddress = () => {
    setAddresses(
      addresses.map((addr) =>
        addr.id === editAddress.id ? { ...addr, address: editAddress.address } : addr
      )
    );
    setIsEditAddressModalOpen(false);
  };

  // Medical History Handlers
  const handleSaveHistory = () => {
    if (newHistory.trim() !== "") {
      setMedicalHistory([...medicalHistory, { id: Date.now(), note: newHistory }]);
      setNewHistory("");
      setIsHistoryModalOpen(false);
    }
  };

  const handleDeleteHistory = (id) => {
    setMedicalHistory(medicalHistory.filter((item) => item.id !== id));
  };

  const handleEditHistory = (item) => {
    setEditHistory(item);
    setIsEditHistoryModalOpen(true);
  };

  const handleSaveEditedHistory = () => {
    setMedicalHistory(
      medicalHistory.map((item) =>
        item.id === editHistory.id ? { ...item, note: editHistory.note } : item
      )
    );
    setIsEditHistoryModalOpen(false);
  };

  return (
    <div>
      <Heading>
        <h1>User Profile</h1>
      </Heading>
      {/* Profile Section */}
      <ProfileSection>
        <ProfileCard>
          <img
            src={ProfileImg}
            alt="User"
            className="profile-img"
          />
          <UserInfo>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <EditButton onClick={() => setIsEditInfoModalOpen(true)}>
              ✏️ Edit Info
            </EditButton>
          </UserInfo>
        </ProfileCard>
      </ProfileSection>

      {/* Address Book Section */}
      <AddressBookSection>
        <SectionTitle>Address Book</SectionTitle>
        <AddressList>
          {addresses.map((addr) => (
            <AddressItem key={addr.id}>
              {addr.address}
              <div className="actions">
                <SmallButton onClick={() => handleEditAddress(addr)}>✏️</SmallButton>
                <SmallButton del onClick={() => handleDeleteAddress(addr.id)}>🗑️</SmallButton>
              </div>
            </AddressItem>
          ))}
        </AddressList>
        <AddButton onClick={() => setIsAddressModalOpen(true)}>
          + Add New Address
        </AddButton>
      </AddressBookSection>

      {/* Medical History Section */}
      <AddressBookSection>
        <SectionTitle>Medical History</SectionTitle>
        <AddressList>
          {medicalHistory.map((item) => (
            <AddressItem key={item.id}>
              {item.note}
              <div className="actions">
                <SmallButton onClick={() => handleEditHistory(item)}>✏️</SmallButton>
                <SmallButton del onClick={() => handleDeleteHistory(item.id)}>🗑️</SmallButton>
              </div>
            </AddressItem>
          ))}
        </AddressList>
        <AddButton onClick={() => setIsHistoryModalOpen(true)}>
          + Add Medical History
        </AddButton>
      </AddressBookSection>

      {/* Address Modal */}
      {isAddressModalOpen && (
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>Add New Address</ModalHeader>
            <ModalBody>
              <Input
                type="text"
                value={newAddress}
                onChange={(e) => setNewAddress(e.target.value)}
                placeholder="Enter your new address"
              />
            </ModalBody>
            <ModalFooter>
              <SaveButton onClick={handleSaveAddress}>Save</SaveButton>
              <CancelButton onClick={() => setIsAddressModalOpen(false)}>
                Cancel
              </CancelButton>
            </ModalFooter>
          </ModalContent>
        </ModalOverlay>
      )}

      {/* Edit Info Modal */}
      {isEditInfoModalOpen && (
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>Edit Profile Info</ModalHeader>
            <ModalBody>
              <Input
                type="text"
                value={editUser.name}
                onChange={(e) =>
                  setEditUser({ ...editUser, name: e.target.value })
                }
                placeholder="Enter your name"
              />
              <Input
                type="email"
                value={editUser.email}
                onChange={(e) =>
                  setEditUser({ ...editUser, email: e.target.value })
                }
                placeholder="Enter your email"
              />
              <Input
                type="text"
                value={editUser.phone}
                onChange={(e) =>
                  setEditUser({ ...editUser, phone: e.target.value })
                }
                placeholder="Enter your phone"
              />
            </ModalBody>
            <ModalFooter>
              <SaveButton onClick={handleSaveUserInfo}>Save</SaveButton>
              <CancelButton onClick={() => setIsEditInfoModalOpen(false)}>
                Cancel
              </CancelButton>
            </ModalFooter>
          </ModalContent>
        </ModalOverlay>
      )}

      {/* Edit Address Modal */}
      {isEditAddressModalOpen && (
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>Edit Address</ModalHeader>
            <ModalBody>
              <Input
                type="text"
                value={editAddress.address}
                onChange={(e) =>
                  setEditAddress({ ...editAddress, address: e.target.value })
                }
                placeholder="Update address"
              />
            </ModalBody>
            <ModalFooter>
              <SaveButton onClick={handleSaveEditedAddress}>Save</SaveButton>
              <CancelButton onClick={() => setIsEditAddressModalOpen(false)}>
                Cancel
              </CancelButton>
            </ModalFooter>
          </ModalContent>
        </ModalOverlay>
      )}

      {/* Add Medical History Modal */}
      {isHistoryModalOpen && (
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>Add Medical History</ModalHeader>
            <ModalBody>
              <Input
                type="text"
                value={newHistory}
                onChange={(e) => setNewHistory(e.target.value)}
                placeholder="Enter medical condition or note"
              />
            </ModalBody>
            <ModalFooter>
              <SaveButton onClick={handleSaveHistory}>Save</SaveButton>
              <CancelButton onClick={() => setIsHistoryModalOpen(false)}>
                Cancel
              </CancelButton>
            </ModalFooter>
          </ModalContent>
        </ModalOverlay>
      )}

      {/* Edit Medical History Modal */}
      {isEditHistoryModalOpen && (
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>Edit Medical History</ModalHeader>
            <ModalBody>
              <Input
                type="text"
                value={editHistory.note}
                onChange={(e) =>
                  setEditHistory({ ...editHistory, note: e.target.value })
                }
                placeholder="Update medical history"
              />
            </ModalBody>
            <ModalFooter>
              <SaveButton onClick={handleSaveEditedHistory}>Save</SaveButton>
              <CancelButton onClick={() => setIsEditHistoryModalOpen(false)}>
                Cancel
              </CancelButton>
            </ModalFooter>
          </ModalContent>
        </ModalOverlay>
      )}
    </div>
  );
};

export default Profile;

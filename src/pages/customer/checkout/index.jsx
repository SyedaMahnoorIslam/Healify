
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  CheckoutWrapper,
  StepHeader,
  BackArrow,
  Title,
  Option,
  Button,
  Section,
  AddAddress,
  Heading,
} from "./style";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useCustomer } from "../useHooks";

//  Loader styling
const loaderStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(255, 255, 255, 0.8)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 9999,
  fontSize: "1.2rem",
  fontWeight: "500",
  color: "var(--color-primary)",
};

const Checkout = () => {
  const [step, setStep] = useState(1);
  const [addressData, setAddressData] = useState([]);
  const [deliverySlot, setDeliverySlot] = useState({});
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selectedPayment, setSelectedPayment] = useState("");
  const [loading, setLoading] = useState(false); // 👈 added

  const { getAddress, getDeliverySlot, checkout } = useCustomer();
  const navigate = useNavigate();

  // -------------------- Fetch Address --------------------
  const fetchAddress = async () => {
    try {
      const address = await getAddress();
      if (address) {
        const formatted =
          Array.isArray(address) && address.length > 0 ? address : [address];
        setAddressData(formatted);
      }
    } catch (error) {
      console.error("Error fetching address:", error);
    }
  };

  // -------------------- Fetch Delivery Slots --------------------
  const fetchDeliverySlot = async () => {
    try {
      const slots = await getDeliverySlot();
      if (slots && typeof slots === "object") {
        setDeliverySlot(slots);
      }
    } catch (error) {
      console.error("Error fetching delivery slots:", error);
    }
  };

  // -------------------- Handle Place Order --------------------
  const handlePlaceOrder = async () => {
    if (selectedAddress === null) return toast.error("Please select an address!");
    if (!selectedSlot) return toast.error("Please select a delivery slot!");
    if (!selectedPayment) return toast.error("Please select a payment method!");

    const addressId =
      addressData[selectedAddress]?.id || addressData[selectedAddress]?.addressId;

    let deliveryDate = "";
    let deliveryTimeSlot = "";
    if (selectedSlot.startsWith("Today:")) {
      const today = new Date();
      deliveryDate = `${today.getMonth() + 1}-${today.getDate()}-${today.getFullYear()}`;
      deliveryTimeSlot = selectedSlot.replace("Today: ", "").trim();
    } else if (selectedSlot.startsWith("Tomorrow:")) {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      deliveryDate = `${tomorrow.getMonth() + 1}-${tomorrow.getDate()}-${tomorrow.getFullYear()}`;
      deliveryTimeSlot = selectedSlot.replace("Tomorrow: ", "").trim();
    }

    const payload = {
      addressId,
      paymentMethod: selectedPayment,
      deliveryDate,
      deliveyTimeSlot: deliveryTimeSlot,
    };

    try {
      setLoading(true); // 👈 show loader
      const response = await checkout(payload);
      console.log("Checkout Response:", response);
      setLoading(false); // 👈 hide loader after response

      const { message, paymentDetails, url } = response || {};
      const stripeUrl = paymentDetails?.url || url;

      if (selectedPayment === "Stripe") {
        if (stripeUrl) {
          toast.success("Redirecting to Stripe for payment...");
          setTimeout(() => (window.location.href = stripeUrl), 1000);
        } else {
          toast.error("Stripe payment URL missing!");
        }
      } else {
        toast.success(message || "Order placed successfully with COD!");
        setTimeout(() => navigate("/customer/cart"), 1000);
      }
    } catch (error) {
      console.error("Checkout error:", error);
      setLoading(false); // 👈 hide loader on error
      toast.error("Something went wrong!");
    }
  };

  const goToCart = () => navigate("/customer/cart");

  useEffect(() => {
    fetchAddress();
  }, []);

  useEffect(() => {
    if (step === 2) fetchDeliverySlot();
  }, [step]);

  return (
    <>
      <Heading>
        <h1>Secure Checkout</h1>
      </Heading>

      {loading && (
        <div style={loaderStyle}>
          <div>
            <div className="spinner" style={{
              border: "4px solid #ccc",
              borderTop: "4px solid #007bff",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              animation: "spin 1s linear infinite",
              margin: "0 auto 10px"
            }} />
            Processing your order, please wait...
          </div>

          {/* Inline spinner animation */}
          <style>
            {`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}
          </style>
        </div>
      )}

      <CheckoutWrapper>
        <ToastContainer />

        <StepHeader>
          {step > 1 ? (
            <BackArrow onClick={() => setStep(step - 1)}>
              <IoMdArrowRoundBack size={22} />
            </BackArrow>
          ) : (
            <BackArrow onClick={goToCart}>
              <IoMdArrowRoundBack size={22} />
            </BackArrow>
          )}
          <Title>Checkout – Secure & Easy</Title>
        </StepHeader>

        {/* Step 1: Address */}
        {step === 1 && (
          <Section>
            <h3>1. Address</h3>
            <p>Select your preferred delivery address</p>

            {Array.isArray(addressData) && addressData.length > 0 ? (
              addressData
                .filter(
                  (addr) =>
                    addr &&
                    (addr.street || addr.city || addr.state || addr.zip_code || addr.country)
                )
                .map((addr, index) => (
                  <Option key={index}>
                    <input
                      type="radio"
                      name="address"
                      id={`addr${index}`}
                      checked={selectedAddress === index}
                      onChange={() => setSelectedAddress(index)}
                    />
                    <label htmlFor={`addr${index}`}>
                      {`${addr?.street || ""}${addr?.city ? `, ${addr.city}` : ""}${addr?.state ? `, ${addr.state}` : ""
                        }${addr?.zip_code ? ` - ${addr.zip_code}` : ""}${addr?.country ? `, ${addr.country}` : ""
                        }`}
                    </label>
                  </Option>
                ))
            ) : (
              <p style={{ color: "#888", margin: "10px 0" }}>
                🚫 No address added yet. Please add your address first.
              </p>
            )}

            <AddAddress onClick={() => navigate("/customer/profile")}>
              + Add new address
            </AddAddress>

            <Button
              onClick={() => {
                if (selectedAddress === null) {
                  toast.error("Please select an address to continue!");
                  return;
                }
                setStep(2);
              }}
            >
              Continue
            </Button>
          </Section>
        )}

        {/* Step 2: Delivery Schedule */}
        {step === 2 && (
          <Section>
            <h3>2. Delivery Schedule</h3>
            <p>Select your preferred delivery slot</p>

            {Object.keys(deliverySlot).length > 0 ? (
              <>
                {deliverySlot.today && (
                  <>
                    <h4>Today</h4>
                    {deliverySlot.today.map((time, index) => (
                      <Option key={`today-${index}`}>
                        <input
                          type="radio"
                          name="deliverySlot"
                          id={`today-${index}`}
                          checked={selectedSlot === `Today: ${time}`}
                          onChange={() => setSelectedSlot(`Today: ${time}`)}
                        />
                        <label htmlFor={`today-${index}`}>{time}</label>
                      </Option>
                    ))}
                  </>
                )}

                {deliverySlot.tomorrow && (
                  <>
                    <h4>Tomorrow</h4>
                    {deliverySlot.tomorrow.map((time, index) => (
                      <Option key={`tomorrow-${index}`}>
                        <input
                          type="radio"
                          name="deliverySlot"
                          id={`tomorrow-${index}`}
                          checked={selectedSlot === `Tomorrow: ${time}`}
                          onChange={() => setSelectedSlot(`Tomorrow: ${time}`)}
                        />
                        <label htmlFor={`tomorrow-${index}`}>{time}</label>
                      </Option>
                    ))}
                  </>
                )}
              </>
            ) : (
              <p>Loading delivery slots...</p>
            )}
            <Button
              onClick={() => {
                if (!selectedSlot) {
                  toast.error("Please select a delivery slot!");
                  return;
                }
                setStep(3);
              }}
            >
              Continue
            </Button>
          </Section>
        )}

        {/* Step 3: Payment */}
        {step === 3 && (
          <Section>
            <h3>3. Payment Method</h3>
            <Option>
              <input
                type="radio"
                name="payment"
                id="stripe"
                checked={selectedPayment === "Stripe"}
                onChange={() => setSelectedPayment("Stripe")}
              />
              <label htmlFor="stripe">Credit/Debit Card (Stripe)</label>
            </Option>
            <Option>
              <input
                type="radio"
                name="payment"
                id="cod"
                checked={selectedPayment === "COD"}
                onChange={() => setSelectedPayment("COD")}
              />
              <label htmlFor="cod">Cash on Delivery</label>
            </Option>
            <Button onClick={handlePlaceOrder}>Place Order</Button>
          </Section>
        )}
      </CheckoutWrapper>
    </>
  );
};

export default Checkout;


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

const Checkout = () => {
  const [step, setStep] = useState(1);
  const [addressData, setAddressData] = useState([]);
  const [deliverySlot, setDeliverySlot] = useState({});
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selectedPayment, setSelectedPayment] = useState("");

  const { getAddress, getDeliverySlot, checkout, stripePayment } = useCustomer();
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
    if (selectedAddress === null) {
      toast.error("Please select an address!");
      return;
    }
    if (!selectedSlot) {
      toast.error("Please select a delivery slot!");
      return;
    }
    if (!selectedPayment) {
      toast.error("Please select a payment method!");
      return;
    }

    const addressId =
      addressData[selectedAddress]?.id || addressData[selectedAddress]?.addressId;

    // --- Extract date and time slot ---
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

    // --- Checkout Payload ---
    const payload = {
      addressId,
      paymentMethod: selectedPayment,
      deliveryDate,
      deliveyTimeSlot: deliveryTimeSlot,
    };

    console.log("Checkout Payload:", payload);

    try {
      const response = await checkout(payload);
      if (response) {
        toast.error(response?.message);
        return;
      }

      console.log("Checkout Response:", response);

      const { paymentDetails } = response;

      // COD Flow
      // if (selectedPayment === "COD") {
        
      //   toast.success("Order placed successfully with Cash on Delivery!");
      //   setTimeout(() => navigate("/customer/cart"), 2000);
      //   return;
      // }

      // Stripe Flow
      if (selectedPayment === "Stripe") {
        if (paymentDetails?.url) {
          toast.success("Redirecting to Stripe for payment...");
          // Redirect user to Stripe checkout page
          window.location.href = paymentDetails.url;

         
        } else {
          toast.error("Stripe payment link not found!");
        }
      }
    } catch (error) {
      console.error("Checkout error:", error);
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

            {addressData.length > 0 ? (
              addressData.map((addr, index) => (
                <Option key={index}>
                  <input
                    type="radio"
                    name="address"
                    id={`addr${index}`}
                    checked={selectedAddress === index}
                    onChange={() => setSelectedAddress(index)}
                  />
                  <label htmlFor={`addr${index}`}>
                    {`${addr.street}, ${addr.city}, ${addr.state} - ${addr.zip_code}, ${addr.country}`}
                  </label>
                </Option>
              ))
            ) : (
              <p>No saved addresses found.</p>
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

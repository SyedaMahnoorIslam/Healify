import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  CheckoutWrapper, StepHeader, BackArrow, Title, Option, Button, Section, AddAddress, Heading,
} from "./style";
import { IoMdArrowRoundBack } from "react-icons/io";

const Checkout = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    toast.success("🎉 Order placed successfully!", { autoClose: 2000 });
    setTimeout(() => {
      navigate("/customer/cart");
    }, 2200);
  };

  return (
    <>
      <Heading>
        <h1>Secure Checkout</h1>
      </Heading>
      <CheckoutWrapper>
        <ToastContainer />

        <StepHeader>
          {step > 1 && (
            <BackArrow onClick={() => setStep(step - 1)}>
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
            <Option>
              <input type="radio" name="address" id="addr1" />
              <label htmlFor="addr1">Home: 123 Street, RYK</label>
            </Option>
            <Option>
              <input type="radio" name="address" id="addr2" />
              <label htmlFor="addr2">Office: City Center</label>
            </Option>

            <AddAddress onClick={() => navigate("/profile")}>
              + Add new address
            </AddAddress>

            <Button onClick={() => setStep(2)}>Continue</Button>
          </Section>
        )}

        {/* Step 2: Delivery Schedule */}
        {step === 2 && (
          <Section>
            <h3>2. Delivery Schedule</h3>
            <Option>
              <input type="radio" name="schedule" id="sch1" />
              <label htmlFor="sch1">Today (within 2 hours)</label>
            </Option>
            <Option>
              <input type="radio" name="schedule" id="sch2" />
              <label htmlFor="sch2">Tomorrow Morning</label>
            </Option>
            <Button onClick={() => setStep(3)}>Continue</Button>
          </Section>
        )}

        {/* Step 3: Payment */}
        {step === 3 && (
          <Section>
            <h3>3. Payment Method</h3>
            <Option>
              <input type="radio" name="payment" id="card" />
              <label htmlFor="card">Credit/Debit Card</label>
            </Option>
            <Option>
              <input type="radio" name="payment" id="cod" />
              <label htmlFor="cod">Cash on Delivery</label>
            </Option>
            <Option>
              <input type="radio" name="payment" id="wallet" />
              <label htmlFor="wallet">Wallet Balance</label>
            </Option>
            <Button onClick={handlePlaceOrder}>Place Order</Button>
          </Section>
        )}
      </CheckoutWrapper>
    </>
  );
};

export default Checkout;

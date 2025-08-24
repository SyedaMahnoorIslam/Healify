import React from "react";
import { CartWrapper, Header, CartContent, CartSummary, CheckoutButton } from "./style"
import ProductCard from "../../../../components/cards/productCard";


const AddToCart = () => {
  const subtotal = 970;
  const delivery = 150;
  const total = subtotal + delivery;
  return (
    <CartWrapper>
      <Header>My Cart</Header>
      <CartContent>
        <ProductCard total={8} />

        <CartSummary>
          <h3>Order Summary</h3>
          <div className="row">
            <span>Subtotal</span>
            <span>Rs. {subtotal}</span>
          </div>
          <div className="row">
            <span>Delivery</span>
            <span>Rs. {delivery}</span>
          </div>
          <div className="row total">
            <span>Total</span>
            <span>Rs. {total}</span>
          </div>
          <CheckoutButton>Proceed to Checkout</CheckoutButton>
        </CartSummary>
      </CartContent>
    </CartWrapper>
  )
}

export default AddToCart

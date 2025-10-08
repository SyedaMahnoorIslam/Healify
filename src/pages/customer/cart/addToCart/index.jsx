import React, { useEffect, useState } from "react";
import {
  CartWrapper,
  Header,
  CartContent,
  CartSummary,
  CheckoutButton,
  EmptyState,
} from "./style";
import ProductCard from "../../../../components/cards/productCard";
import { useCustomer } from "../../useHooks";
import { useNavigate } from "react-router-dom";

const AddToCart = () => {
  const navigate = useNavigate();
  const { getCart } = useCustomer();
  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await getCart();
        console.log("Cart API Response:", response);

        if (response?.CartItems?.length > 0) {
          const medicines = response.CartItems.map((item) => ({
            ...item.Medicine,
            quantity: item.quantity,
          }));
          setCartItems(medicines);
          setSubtotal(parseFloat(response.subtotal) || 0);
        } else {
          setCartItems([]);
          setSubtotal(0);
        }
      } catch (error) {
        console.error("Error fetching cart:", error);
        setCartItems([]);
        setSubtotal(0);
      }
    };

    fetchCart();
  }, []);

  const goToBrowsing = () => {
    navigate("/customer/medicine");
  };

  const delivery = 150;
  const total = subtotal + delivery;

  return (
    <CartWrapper>
      <Header>My Cart</Header>
      <CartContent>
        {cartItems.length > 0 ? (
          <ProductCard products={cartItems} perRow={4} />
        ) : (
          <EmptyState>
            <h3>Your cart is empty</h3>
            <p>Add some items to see them here.</p>
            <button onClick={goToBrowsing}>Browse Products</button>
          </EmptyState>
        )}

        <CartSummary>
          <h3>Order Summary</h3>
          <div className="row">
            <span>Subtotal</span>
            <span>Rs. {subtotal.toFixed(2)}</span>
          </div>
          <div className="row">
            <span>Delivery</span>
            <span>Rs. {delivery}</span>
          </div>
          <div className="row total">
            <span>Total</span>
            <span>Rs. {total.toFixed(2)}</span>
          </div>
          <CheckoutButton>Proceed to Checkout</CheckoutButton>
        </CartSummary>
      </CartContent>
    </CartWrapper>
  );
};

export default AddToCart;

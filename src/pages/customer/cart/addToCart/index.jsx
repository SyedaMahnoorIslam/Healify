
import React, { useEffect, useState } from "react";
import {
  CartWrapper,
  Header,
  CartContent,
  CartSummary,
  CheckoutButton,
  EmptyState,
  CartItem,
  ItemImage,
  ItemInfo,
  ItemPrice,
  ItemQuantity,
  ItemTotal,
  RemoveButton,
  ItemRow,
  QuantityControl,
  QuantityButton,
} from "./style";
import { useCustomer } from "../../useHooks";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddToCart = () => {
  const navigate = useNavigate();
  const { getCart, removeFromCart, updateCartQuantity, getPrescriptions } = useCustomer();
  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [prescriptions, setPrescriptions] = useState([]);

  // ---------- Fetch Cart ----------
  const fetchCart = async () => {
    try {
      const response = await getCart();
      console.log("Cart API Response:", response);

      if (response?.CartItems?.length > 0) {
        const medicines = response.CartItems.map((item) => ({
          ...item.Medicine,
          quantity: item.quantity,
          cartItemId: item.id,
        }));

        setCartItems(medicines);
        setSubtotal(parseFloat(response.subtotal) || 0);
      } else {
        setCartItems([]);
        setSubtotal(0);
      }
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  // ---------- Increase Quantity ----------
  const handleIncrease = async (cartItemId, currentQuantity, availableStock) => {
    try {
      if (currentQuantity >= availableStock) {
        toast.warn(`Only ${availableStock} items available in stock.`);
        return;
      }

      const newQuantity = currentQuantity + 1;
      const payload = { quantity: newQuantity };
      await updateCartQuantity(cartItemId, payload);
      fetchCart();
    } catch (error) {
      console.error("Error increasing quantity:", error);
      toast.error("Failed to update quantity.");
    }
  };

  // ---------- Decrease Quantity ----------
  const handleDecrease = async (cartItemId, currentQuantity) => {
    try {
      if (currentQuantity > 1) {
        const newQuantity = currentQuantity - 1;
        const payload = { quantity: newQuantity };
        await updateCartQuantity(cartItemId, payload);
        fetchCart();
      } else {
        await handleRemove(cartItemId);
      }
    } catch (error) {
      console.error("Error decreasing quantity:", error);
      toast.error("Failed to update quantity.");
    }
  };

  // ---------- Remove From Cart ----------
  const handleRemove = async (cartItemId) => {
    try {
      await removeFromCart(cartItemId);
      // toast.warn("Item removed from cart!");
      fetchCart();
    } catch (error) {
      console.error("Error removing from cart:", error);
    }
  };

  const goToCheckout = () => navigate("/customer/checkout");
  const goToBrowsing = () => navigate("/customer/medicine");

  const delivery = 300;

  const fetchPrescriptions = async () => {
    try {
      const data = await getPrescriptions();
      console.log("Prescription Response:", data);
      setPrescriptions(data);
    } catch (error) {
      console.error("Get prescription error:", error);
    }
  };
  useEffect(() => {
    fetchPrescriptions();
  }, []);

  return (
    <CartWrapper>
      <Header>My Cart</Header>
      <CartContent>
        {cartItems.length > 0 ? (
          <>
            {cartItems.map((item) => (
              <CartItem key={item.cartItemId}>
                <ItemRow>
                  <ItemImage>
                    <img
                      src={`${process.env.REACT_APP_API_URL}/${item.images?.[0]?.file_path}`}
                      alt={item.name}
                    />
                  </ItemImage>

                  <ItemInfo>
                    <h3>{item.name}</h3>
                    <p>{item.brand}</p>
                    <p>{item.category}</p>
                    <small style={{ color: "#777" }}>
                      Available: {item.inventory_quantity}
                    </small>
                    {item.requires_prescription && (
                      <span className="prescription">Prescription Required</span>
                    )}
                  </ItemInfo>

                  <ItemPrice>
                    <span>Rs. {item.final_price}</span>
                    {item.discount_percentage !== "0.00" && (
                      <small className="old">Rs. {item.price}</small>
                    )}
                  </ItemPrice>

                  {/* ---------- Quantity Controls ---------- */}
                  <ItemQuantity>
                    <QuantityControl>
                      <QuantityButton
                        disabled={item.quantity <= 1}
                        style={{
                          opacity: item.quantity <= 1 ? 0.5 : 1,
                          cursor:
                            item.quantity <= 1 ? "not-allowed" : "pointer",
                        }}
                        onClick={() =>
                          handleDecrease(item.cartItemId, item.quantity)
                        }
                      >
                        −
                      </QuantityButton>

                      <span>{item.quantity}</span>

                      <QuantityButton
                        disabled={item.quantity >= item.inventory_quantity}
                        style={{
                          opacity:
                            item.quantity >= item.inventory_quantity ? 0.5 : 1,
                          cursor:
                            item.quantity >= item.inventory_quantity
                              ? "not-allowed"
                              : "pointer",
                        }}
                        onClick={() =>
                          handleIncrease(
                            item.cartItemId,
                            item.quantity,
                            item.inventory_quantity
                          )
                        }
                      >
                        +
                      </QuantityButton>
                    </QuantityControl>
                  </ItemQuantity>

                  <ItemTotal>
                    Rs. {(item.final_price * item.quantity).toFixed(2)}
                  </ItemTotal>

                  <RemoveButton onClick={() => handleRemove(item.cartItemId)}>
                    Remove from Cart
                  </RemoveButton>
                </ItemRow>
              </CartItem>
            ))}

            {/* ---------- Cart Summary ---------- */}
            <CartSummary>
              <h3>Order Summary</h3>
              <div className="row">
                <span>Subtotal</span>
                <span>Rs. {(subtotal - delivery).toFixed(2)}</span>
              </div>
              <div className="row">
                <span>Delivery</span>
                <span>Rs. {delivery}</span>
              </div>
              <div className="row total">
                <span>Total</span>
                <span>Rs. {subtotal.toFixed(2)}</span>
              </div>

              {/* ---------- Button Logic ---------- */}
              {/* {cartItems.some((item) => item.requires_prescription) ? (
                <>
                  <CheckoutButton
                    disabled
                    style={{
                      opacity: 0.6,
                      cursor: "not-allowed",
                      background: "#ccc",
                    }}
                  >
                    Proceed to Checkout
                  </CheckoutButton>
                  <CheckoutButton
                    style={{
                      background: "var(--color-primary)",
                      color: "#fff",
                      marginTop: "10px",
                    }}
                    onClick={() => navigate("/customer/prescription")}
                  >
                    Upload Prescription
                  </CheckoutButton>
                </>
              ) : (
                <CheckoutButton onClick={goToCheckout}>
                  Proceed to Checkout
                </CheckoutButton>
              )} */}

              {/* ---------- Button Logic ---------- */}
              {cartItems.some((item) => item.requires_prescription) ? (
                prescriptions.some((p) => p.status === "Approved") ? (
                  <CheckoutButton onClick={goToCheckout}>
                    Proceed to Checkout
                  </CheckoutButton>
                ) : (
                  <>
                    <CheckoutButton
                      disabled
                      style={{
                        opacity: 0.6,
                        cursor: "not-allowed",
                        background: "#ccc",
                      }}
                    >
                      Proceed to Checkout
                    </CheckoutButton>
                    <CheckoutButton
                      style={{
                        background: "var(--color-primary)",
                        color: "#fff",
                        marginTop: "10px",
                      }}
                      onClick={() => navigate("/customer/prescription")}
                    >
                      Upload Prescription
                    </CheckoutButton>
                  </>
                )
              ) : (
                <CheckoutButton onClick={goToCheckout}>
                  Proceed to Checkout
                </CheckoutButton>
              )}

            </CartSummary>
          </>
        ) : (
          <EmptyState>
            <h3>Your cart is empty</h3>
            <p>Add some items to see them here.</p>
            <button onClick={goToBrowsing}>Browse Products</button>
          </EmptyState>
        )}
      </CartContent>
    </CartWrapper>
  );
};

export default AddToCart;

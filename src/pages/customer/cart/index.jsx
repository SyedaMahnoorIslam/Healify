import React, { useState } from "react";
import {
  CartContainer,
  Tabs,
  TabButton,
  TabContent,
  // CartItem,
  // OrderItem,
  // Heading
} from "./style";
import AddToCart from "./addToCart";
import OrderHistory from "./orders";

const CartPage = () => {
  const [activeTab, setActiveTab] = useState("cart");

  return (
    <CartContainer>
      
      <Tabs>
        <TabButton
          active={activeTab === "cart"}
          onClick={() => setActiveTab("cart")}
        >
          Add to Cart
        </TabButton>
        <TabButton
          active={activeTab === "orders"}
          onClick={() => setActiveTab("orders")}
        >
          Orders Detail
        </TabButton>
      </Tabs>

      {/* Tab Content */}
      {activeTab === "cart" && (
        <TabContent>
        <AddToCart/>
        </TabContent>

      )}

      {activeTab === "orders" && (
        <TabContent>
          {/* <Heading>📦 Order Details</Heading>
          <OrderItem>
            <p>Order #12345</p>
            <span>Status: Delivered ✅</span>
          </OrderItem>
          <OrderItem>
            <p>Order #12346</p>
            <span>Status: Pending ⏳</span>
          </OrderItem> */}
          <OrderHistory/>
        </TabContent>
      )}
    </CartContainer>
  );
};

export default CartPage;

import React, { useEffect, useState } from "react";
import ProductCard from "../../../components/cards/productCard";
import { WishlistWrapper, Header, WishlistContent, EmptyState } from "./style";
import { useNavigate } from "react-router-dom";
import { ApiEndPoints } from "../../../libs/http-service/api/endPoint";
import { useCustomer } from "../useHooks";
import { toast } from "react-toastify";

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const{getWishlist,removeFromWishlist}=useCustomer();
  const navigate = useNavigate();
  const goToBrowsing = () => {
    navigate("/customer/medicine");
  };

  useEffect(() => {
  const fetchWishlist = async () => {
    const response = await getWishlist();
    console.log("Wishlist API Response:", response);
    if (response?.WishlistItems?.length > 0) {
      const medicines = response.WishlistItems.map((item) => item.Medicine);
      setWishlistItems(medicines);
    } else {
      setWishlistItems([]);
    }
  };
  fetchWishlist();
}, []);
 
 // ---------- Remove From Cart ----------
  const handleRemove = async (cartItemId) => {
    try {
      await removeFromWishlist(cartItemId);
      toast.warn("Item removed from Wishlist!");
      fetch();
    } catch (error) {
      console.error("Error removing from cart:", error);
    }
  };

  return (
    <WishlistWrapper>
      <Header>My Wishlist</Header>
      <WishlistContent>
        {wishlistItems.length > 0 ? (
          <ProductCard products={wishlistItems} perRow={4}  wishlistIds={wishlistItems.map((item) => item.id)}  />
        ) : (
          <EmptyState>
            <h3>Your wishlist is empty</h3>
            <p>Start adding items you love for quick access later.</p>
            <button onClick={goToBrowsing}>Browse Products</button>
          </EmptyState>
        )}
      </WishlistContent>
    </WishlistWrapper>
  );
};

export default Wishlist;

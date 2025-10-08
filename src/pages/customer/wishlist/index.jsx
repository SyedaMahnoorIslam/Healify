import React, { useEffect, useState } from "react";
import ProductCard from "../../../components/cards/productCard";
import { WishlistWrapper, Header, WishlistContent, EmptyState } from "./style";
import { useNavigate } from "react-router-dom";
import { ApiEndPoints } from "../../../libs/http-service/api/endPoint";
import { useCustomer } from "../useHooks";

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const{getWishlist}=useCustomer();
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

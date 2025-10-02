import React, { useEffect, useState } from "react";
import ProductCard from "../../../components/cards/productCard";
import { WishlistWrapper, Header, WishlistContent, EmptyState } from "./style";
import { useNavigate } from "react-router-dom";
import { ApiEndPoints } from "../../../libs/http-service/api/endPoint";


const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);

  const navigate = useNavigate();

  const goToBrowsing = () => {
    navigate("/customer/medicine");
  };

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const response = await ApiEndPoints.getWishlist();
        console.log("Wishlist API Response:", response);
        const products = response.WishlistItems.map((item) => ({
          ...item.Medicine,
          wishlistId: item.id,
          wishlistIds: item.medicine_id,
        }));
        setWishlistItems(products);


      } catch (error) {
        console.error("Error fetching wishlist:", error);
      }
    };

    fetchWishlist();
  }, []);

  return (
    <WishlistWrapper>
      <Header>My Wishlist</Header>
      <WishlistContent>
        {wishlistItems.length > 0 ? (
          <ProductCard products={wishlistItems} perRow={3} />
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

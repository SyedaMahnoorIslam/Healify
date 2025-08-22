import React from "react";
import ProductCard from "../../../components/cards/productCard";
import { WishlistWrapper, Header, WishlistContent, ProductGrid, EmptyState } from "./style";
import { useNavigate } from "react-router-dom";

const Wishlist = () => {
  const navigate =useNavigate();
  const goToBrowsing = () => {
    navigate('/');
  };

  return (
    <WishlistWrapper>
      <Header>My Wishlist</Header>
      <WishlistContent>
      <ProductCard total={''}/>
          <EmptyState>
            <h3>Your wishlist is empty</h3>
            <p>Start adding items you love for quick access later.</p>
            <button onClick={goToBrowsing}>Browse Products</button>
          </EmptyState>
        
      </WishlistContent>
    </WishlistWrapper>
  );
};

export default Wishlist;

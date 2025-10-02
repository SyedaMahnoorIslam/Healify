import React, { useEffect, useState } from 'react';
import ProductDetail from '../../../components/cards/productDetailCard';
import { useCustomer } from '../useHooks';
import { useParams, useNavigate } from 'react-router-dom';

import {
  EmptyState,Wrapper,Header,Content,
} from './style'

const ProductDetailPage = () => {
  const [product, setProduct] = useState(null);
  const { medicinesList } = useCustomer();
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchProduct = async () => {
    try {
      const meds = await medicinesList();
      const selectedProduct = meds?.find((item) => String(item.id) === id);
      setProduct(selectedProduct || null);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const goToBrowsing = () => {
    navigate('/customer/medicine');
  };

  // BASEURL for image
  const BASE_URL = process.env.REACT_APP_API_URL;
  return (
    <div>
      {product ? (
        <ProductDetail product={product} />
      ) : (
        <Wrapper>
          <Header>Product Detail</Header>
          <Content>
            <EmptyState>
              <h3>No Product Found</h3>
              <p>Looks like this product doesn’t exist or wasn’t selected.</p>
              <button onClick={goToBrowsing}>Browse Products</button>
            </EmptyState>

          </Content>
        </Wrapper>
      )}
    </div>
  );
};

export default ProductDetailPage;

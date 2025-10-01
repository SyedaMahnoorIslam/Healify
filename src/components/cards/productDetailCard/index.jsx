import React from "react";
import {
  Wrapper,
  Container,
  ImageWrapper,
  InfoWrapper,
  Title,
  Company,
  Category,
  DetailRow,
  Label,
  Value,
  PriceBox,
  ButtonGroup,
  Button,
  Button1,
} from "./style";
import { useNavigate } from "react-router-dom";

const ProductDetail = ({ product }) => {
  const navigate = useNavigate();

  const goToCheckOut = () => {
    navigate('/customer/checkOut');
  };
  const goToCart = () => {
    navigate('/customer/cart');
  };

  if (!product) return null;
  return (
    <Wrapper>
      <Container>
        {/* Image Section */}
        <ImageWrapper>
          <img
            src ={`${process.env.REACT_APP_API_URL}/${product.images[0].file_path}`}
            alt={product.name}
          />

        </ImageWrapper>

        {/* Info Section */}
        <InfoWrapper>
          <Title>{product.name||"N/A"}</Title>
          <Company>{product.brand||"N/A"}</Company>
          <Category>{product.category||"N/A"}</Category>
          <DetailRow>
          <Label>Description: </Label>
          <Value>{product.description||"N/A"}</Value>
          </DetailRow>

          <DetailRow>
            <Label>Type:</Label>
            <Value>{product.category||"N/A"}</Value>
          </DetailRow>

          {/* <DetailRow>
            <Label>Pack Size:</Label>
            <Value>{product.packSize}</Value>
          </DetailRow> */}

          <DetailRow>
            <Label>Dosage:</Label>
            <Value>{product.dosage|| "As per your doctor Recomendation"}</Value>
          </DetailRow>

          <DetailRow>
            <Label>Side Effects:</Label>
            <Value>{product.side_effects ||"No specific Side effect but still use after consulting your doctor"}</Value>
          </DetailRow>

          <DetailRow>
            <Label style={{ color: "var(--color-alert)" }}>
              Prescription Required:
            </Label>
            <Value style={{ color: "var(--color-alert)" }}>
              {product.requires_prescription ? "Yes" : "No"}
            </Value>
          </DetailRow>

          {/* Pricing */}
          <PriceBox>
            <h2>Rs {product.final_price||"N/A"}</h2>
             <h4>Rs {product.price||"N/A"}</h4>
            <span>{product.discount_percentage||"N/A"}</span>
          </PriceBox>

          {/* Buttons */}
          <ButtonGroup>
            <Button onClick={goToCart}>Add to Cart</Button>
            <Button1 onClick={goToCheckOut}>Checkout</Button1>
          </ButtonGroup>
        </InfoWrapper>
      </Container>
    </Wrapper>
  );
};

export default ProductDetail;

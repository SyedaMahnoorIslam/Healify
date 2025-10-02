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
  BackArrow,
} from "./style";
import { useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

const ProductDetail = ({ product }) => {
  console.log(product);
  
  const navigate = useNavigate();

  const goToCheckOut = () => {
    navigate('/customer/checkOut');
  };
  const goToMedicine = () => {
    navigate('/customer/medicine');
  };
  const goToCart = () => {
    navigate('/customer/cart');
  };

  if (!product) return null;
  return (
    <Wrapper>
      <Container>
        <BackArrow onClick={goToMedicine}>
          <IoMdArrowRoundBack size={28} />
        </BackArrow>
        {/* Image Section */}
        <ImageWrapper>
          <img
            src={`${process.env.REACT_APP_API_URL}/${product.images[0].file_path}`}
            alt={product.name}
          />

        </ImageWrapper>

        {/* Info Section */}
        <InfoWrapper>
          <Title>{product.name || "N/A"}</Title>
          <Company>{product.brand || "N/A"}</Company>
          <Category>{product.category || "N/A"}</Category>
          <DetailRow>
            <Label>Description: </Label>
            <Value>{product.description || "N/A"}</Value>
          </DetailRow>

          <DetailRow>
            <Label>Type:</Label>
            <Value>{product.category || "N/A"}</Value>
          </DetailRow>

          {/* <DetailRow>
            <Label>Pack Size:</Label>
            <Value>{product.packSize}</Value>
          </DetailRow> */}

          <DetailRow>
            <Label>Dosage:</Label>
            <Value>{product.dosage || "As per your doctor Recomendation"}</Value>
          </DetailRow>

          <DetailRow>
            <Label>Side Effects:</Label>
            <Value>{product.side_effects || "No specific Side effect but still use after consulting your doctor"}</Value>
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
            <h2>Rs {product.final_price}</h2>
            {product.price === product.final_price && (
              <h4>Rs {product.price}</h4>
            )}
            {product.discount_percentage !== "0.00" && (
              <span>{product.discount_percentage}</span>
            )}
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

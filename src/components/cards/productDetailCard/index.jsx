// import React from "react";
// import {
//   Wrapper,
//   Container,
//   ImageWrapper,
//   InfoWrapper,
//   Title,
//   Company,
//   Category,
//   Description,
//   DetailRow,
//   Label,
//   Value,
//   PriceBox,
//   ButtonGroup,
//   Button,
//   Button1,
  
// } from "./style";
// import { productCards } from "../../../helpers/dummyData";

// const ProductDetail = ({ productId }) => {
//   return (
//     <Wrapper>{productCards.map((product) => (
//       <Container>
//         {/* Image Section */}
//         <ImageWrapper>
//           <img src={product.image} alt={product.name} />
//         </ImageWrapper>

//         {/* Info Section */}
//         <InfoWrapper>
//           <Title>{product.name}</Title>
//           <Company>{product.company}</Company>
//           <Category>{product.category}</Category>

//           <Description>{product.description}</Description>

//           <DetailRow>
//             <Label>Type:</Label>
//             <Value>{product.type}</Value>
//           </DetailRow>

//           <DetailRow>
//             <Label>Pack Size:</Label>
//             <Value>{product.packSize}</Value>
//           </DetailRow>

//           <DetailRow>
//             <Label>Dosage:</Label>
//             <Value>{product.dosage}</Value>
//           </DetailRow>

//           <DetailRow>
//             <Label>Side Effects:</Label>
//             <Value>{product.sideEffects}</Value>
//           </DetailRow>

//           <DetailRow>
//             <Label>Prescription Required:</Label>
//             <Value>{product.prescriptionRequired ? "Yes" : "No"}</Value>
//           </DetailRow>

//           {/* Pricing */}
//           <PriceBox>
//             <h2>Rs {product.discountPrice}</h2>
//             <h4>Rs {product.originalPrice}</h4>
//             <span>{product.discount}</span>
//           </PriceBox>

//           {/* Buttons */}
//           <ButtonGroup>
//             <Button>Add to Cart</Button>
//             <Button1>Checkout</Button1>
//           </ButtonGroup>
//         </InfoWrapper>
//       </Container>
//        ))}
//     </Wrapper>
//   );
// };

// export default ProductDetail;
import React from "react";
import {
  Wrapper,
  Container,
  ImageWrapper,
  InfoWrapper,
  Title,
  Company,
  Category,
  Description,
  DetailRow,
  Label,
  Value,
  PriceBox,
  ButtonGroup,
  Button,
  Button1,
} from "./style";
import { productCards } from "../../../helpers/dummyData";

const ProductDetail = ({ productId }) => {
  // sirf pehla product le lo
  const product = productCards[3];

  return (
    <Wrapper>
      {product && (
        <Container>
          {/* Image Section */}
          <ImageWrapper>
            <img src={product.image} alt={product.name} />
          </ImageWrapper>

          {/* Info Section */}
          <InfoWrapper>
            <Title>{product.name}</Title>
            <Company>{product.company}</Company>
            <Category>{product.category}</Category>

            <Description>{product.description}</Description>

            <DetailRow>
              <Label>Type:</Label>
              <Value>{product.type}</Value>
            </DetailRow>

            <DetailRow>
              <Label>Pack Size:</Label>
              <Value>{product.packSize}</Value>
            </DetailRow>

            <DetailRow>
              <Label>Dosage:</Label>
              <Value>{product.dosage}</Value>
            </DetailRow>

            <DetailRow>
              <Label>Side Effects:</Label>
              <Value>{product.sideEffects}</Value>
            </DetailRow>

            <DetailRow>
              <Label>Prescription Required:</Label>
              <Value>{product.prescriptionRequired ? "Yes" : "No"}</Value>
            </DetailRow>

            {/* Pricing */}
            <PriceBox>
              <h2>Rs {product.discountPrice}</h2>
              <h4>Rs {product.originalPrice}</h4>
              <span>{product.discount}</span>
            </PriceBox>

            {/* Buttons */}
            <ButtonGroup>
              <Button>Add to Cart</Button>
              <Button1>Checkout</Button1>
            </ButtonGroup>
          </InfoWrapper>
        </Container>
      )}
    </Wrapper>
  );
};

export default ProductDetail;

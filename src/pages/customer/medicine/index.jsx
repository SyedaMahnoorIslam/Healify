import React from 'react'
import {
    CategoryRow,
    CategoryButton,
    SearchWrapper,
    StyledInput,
    MainDiv,
    Main,
} from "./style";
import ProductCard from '../../../components/cards/productCard';

const Medicine = () => {
    const categories = ["Medicines", "Health Care", "Wellness", "Supplements", "Personal Care", "Baby Care", "Organic"];
    return (
        <MainDiv>
            <CategoryRow>
                <span>Explore Category:</span>
                {categories.map((opt) => (
                    <CategoryButton key={opt}>{opt}</CategoryButton>
                ))}
                <SearchWrapper>
                    <StyledInput type="text" placeholder="Search products..." />
                </SearchWrapper>
            </CategoryRow>
            <Main>
                <h1>Top Products</h1>
                {/* {productCards.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))} */}
                <ProductCard/>
            </Main>
        </MainDiv>
    )
}

export default Medicine




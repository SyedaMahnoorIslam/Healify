import React, { useEffect, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import {
    CategoryRow,
    CategoryButton,
    SearchWrapper,
    StyledInput,
    MainDiv,
    Main,
} from "./style";
import ProductCard from '../../../components/cards/productCard';
import { useCustomer } from '../useHooks';

const Medicine = () => {
    const [medicines, setMedicines] = useState([]);
    const { medicinesList } = useCustomer();


    const fetchMedicines = async () => {
        const meds = await medicinesList();
        setMedicines(meds || []);
    };
    useEffect(() => {
        fetchMedicines();
    }, []);
    
  // BASEURL for image
  const BASE_URL = process.env.REACT_APP_API_URL;
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
                    <div><FaSearch /></div>
                </SearchWrapper>
            </CategoryRow>
            <Main>
                <ProductCard products={medicines} />
            </Main>
        </MainDiv>
    )
}

export default Medicine




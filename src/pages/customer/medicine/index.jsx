
import React, { useEffect, useState } from 'react'
import { TbGhost2Filled } from "react-icons/tb";
import { FaSearch } from "react-icons/fa";
import {
    CategoryRow,
    CategoryButton,
    SearchWrapper,
    StyledInput,
    MainDiv,
    Main,
    Wrapper,
    Header,
    Content,
    EmptyState,
} from "./style";
import ProductCard from '../../../components/cards/productCard';
import { useCustomer } from '../useHooks';

const Medicine = () => {
    const [medicines, setMedicines] = useState([]);
    const [allMedicines, setAllMedicines] = useState([]); // store all medicines
    const { medicinesList, searchMedicine } = useCustomer();
    const [query, setQuery] = useState("");
    const [notFound, setNotFound] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("Medicines");

    const fetchMedicines = async () => {
        const meds = await medicinesList();
        setMedicines(meds || []);
        setAllMedicines(meds || []);
        setNotFound(false);
    };

    useEffect(() => {
        fetchMedicines();
    }, []);

    // search medicines
    const handleSearch = async () => {
        if (query.trim()) {
            const results = await searchMedicine({ q: query });

            if (results && results.length > 0) {
                setMedicines(results);
                setAllMedicines(results); 
                setNotFound(false);
            } else {
                setMedicines([]);
                setAllMedicines([]);
                setNotFound(true);
            }
        } else {
            fetchMedicines();
        }
    };

    // filter by category
    const handleCategoryClick = (category) => {
        setSelectedCategory(category);

        if (category === "Medicines") {
            setMedicines(allMedicines); // show all
        } else {
            const filtered = allMedicines.filter(
                (med) => med.category?.toLowerCase() === category.toLowerCase()
            );
            setMedicines(filtered);
            setNotFound(filtered.length === 0);
        }
    };

    const categories = [
        "Medicines",
        "Health Care",
        "Wellness",
        "Supplements",
        "Personal Care",
        "Baby Care",
        "Organic"
    ];

    return (
        <MainDiv>
            <CategoryRow>
                <span>Explore Category:</span>
                {categories.map((opt) => (
                    <CategoryButton
                        key={opt}
                        onClick={() => handleCategoryClick(opt)}
                        style={{
                            backgroundColor: selectedCategory === opt ? "var(--color-primary)" : "white",
                            color: selectedCategory === opt ? "white" : "black"
                        }}
                    >
                        {opt}
                    </CategoryButton>
                ))}
                <SearchWrapper>
                    <StyledInput
                        type="text"
                        placeholder="Search products..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                    />
                    <div onClick={handleSearch}><FaSearch /></div>
                </SearchWrapper>
            </CategoryRow>
            <Main>
                {notFound ? (
                    <Wrapper>
                        <Content>
                            <EmptyState>
                                <div>
                                    <TbGhost2Filled size={122} style={{
                                        color: "var(--color-primary)",
                                    }} />
                                </div>
                                <p>Now Not any Medicine of this category available!</p>
                            </EmptyState>

                        </Content>
                    </Wrapper>
                ) : (
                    <>
                        {console.log("Medicines to render:", medicines)}
                        <ProductCard products={medicines} />
                    </>
                )}
            </Main>
        </MainDiv>
    )
}
export default Medicine;

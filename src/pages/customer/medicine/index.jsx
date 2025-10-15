import React, { useEffect, useState } from "react";
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
  Content,
  EmptyState,
} from "./style";
import ProductCard from "../../../components/cards/productCard";
import Pagination from "../../../components/pagination";
import { useCustomer } from "../useHooks";

const Medicine = () => {
  const [medicines, setMedicines] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Medicines");
  const [notFound, setNotFound] = useState(false);

  const { medicinesList, searchMedicine } = useCustomer();
  const itemsPerPage = 9;

  //Fetch medicines
  const fetchMedicines = async (page = 1, category = "Medicines") => {
    try {
      const response = await medicinesList(page);
      if (response && response.medicines) {
        let meds = response.medicines;

        // category filtering
        if (category !== "Medicines") {
          meds = meds.filter(
            (m) => m.category?.toLowerCase() === category.toLowerCase()
          );
        }

        setMedicines(meds);
        setTotalItems(response.totalItems || meds.length);
        setTotalPages(response.totalPages || Math.ceil(meds.length / itemsPerPage));
        setCurrentPage(response.currentPage || page);
        setNotFound(meds.length === 0);
      }
    } catch (err) {
      console.error("Error fetching medicines:", err);
      setNotFound(true);
    }
  };

  useEffect(() => {
    fetchMedicines(currentPage, selectedCategory);
  }, [currentPage, selectedCategory]);

  //Handle search
  const handleSearch = async () => {
    if (query.trim()) {
      const results = await searchMedicine({ q: query });
      if (results && results.length > 0) {
        setMedicines(results);
        setTotalItems(results.length);
        setTotalPages(Math.ceil(results.length / itemsPerPage));
        setNotFound(false);
      } else {
        setMedicines([]);
        setNotFound(true);
      }
    } else {
      fetchMedicines(1, selectedCategory);
    }
  };

  // Handle category change
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const categories = [
    "Medicines",
    "Health Care",
    "Wellness",
    "Supplements",
    "Personal Care",
    "Baby Care",
    "Organic",
  ];

  return (
    <MainDiv>
      {/* Category + Search */}
      <CategoryRow>
        <span>Explore Category:</span>
        {categories.map((opt) => (
          <CategoryButton
            key={opt}
            onClick={() => handleCategoryClick(opt)}
            style={{
              backgroundColor:
                selectedCategory === opt ? "var(--color-primary)" : "white",
              color: selectedCategory === opt ? "white" : "black",
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
          <div onClick={handleSearch}>
            <FaSearch />
          </div>
        </SearchWrapper>
      </CategoryRow>

      {/* Main Content */}
      <Main>
        {notFound ? (
          <Wrapper>
            <Content>
              <EmptyState>
                <TbGhost2Filled
                  size={122}
                  style={{ color: "var(--color-primary)" }}
                />
                <p>No medicines available for this category!</p>
              </EmptyState>
            </Content>
          </Wrapper>
        ) : (
          <>
            <ProductCard products={medicines} />
            {totalPages > 1 && (
              <Pagination
                totalItems={totalItems}
                itemsPerPage={Math.ceil(totalItems / totalPages)}
                currentPage={currentPage}
                onPageChange={(page) => {
                  if (page !== currentPage) {
                    setCurrentPage(page);
                    fetchMedicines(page, selectedCategory);
                  }
                }}
              />
            )}
            <br />
          </>
        )}
      </Main>
    </MainDiv>
  );
};

export default Medicine;

import React, { useEffect, useState, useRef } from "react";
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
  Dropdown,
  DropdownItem,
  MoreResults,
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
  const [showDropdown, setShowDropdown] = useState(false);

  const { medicinesList, searchMedicine } = useCustomer();
  const itemsPerPage = 9;
  const searchTimeout = useRef(null);
  const dropdownRef = useRef(null);

  // Fetch medicines
  const fetchMedicines = async (page = 1, category = "Medicines") => {
    try {
      const response = await medicinesList(page);
      if (response && response.medicines) {
        let meds = response.medicines;
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

  // live search
  useEffect(() => {
    if (searchTimeout.current) clearTimeout(searchTimeout.current);

    if (query.trim()) {
      searchTimeout.current = setTimeout(async () => {
        const results = await searchMedicine({ q: query });
        if (results && results.length > 0) {
          setMedicines(results);
          setTotalItems(results.length);
          setTotalPages(Math.ceil(results.length / itemsPerPage));
          setNotFound(false);
          setShowDropdown(true);
        } else {
          setMedicines([]);
          setNotFound(true);
          setShowDropdown(false);
        }
      }, 400);
    } else {
      fetchMedicines(1, selectedCategory);
      setShowDropdown(false);
    }
  }, [query]);

  // close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    setQuery("");
  };

  const handleSuggestionClick = (name) => {
    setQuery(name);
    setShowDropdown(false);
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
      <CategoryRow>
        <span>Explore Category:</span>
        {categories.map((opt) => (
          <CategoryButton
            key={opt}
            onClick={() => handleCategoryClick(opt)}
            selected={selectedCategory === opt}
          >
            {opt}
          </CategoryButton>
        ))}

        {/* Search Field */}
        <SearchWrapper ref={dropdownRef}>
          <StyledInput
            type="text"
            placeholder="Search products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => query && setShowDropdown(true)}
          />
          <div>
            <FaSearch />
          </div>

          {/* Dropdown */}
          {showDropdown && medicines.length > 0 && (
            <Dropdown>
              {medicines.slice(0, 6).map((item, idx) => (
                <DropdownItem
                  key={idx}
                  onClick={() => handleSuggestionClick(item.name)}
                >
                  {item.name}
                </DropdownItem>
              ))}
              {medicines.length > 6 && (
                <MoreResults>
                  + {medicines.length - 6} more results
                </MoreResults>
              )}
            </Dropdown>
          )}
        </SearchWrapper>
      </CategoryRow>

      {/* Main Content */}
      <Main>
        {notFound ? (
          <Wrapper>
            <Content>
              <EmptyState>
                <TbGhost2Filled size={122} style={{ color: "var(--color-primary)" }} />
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

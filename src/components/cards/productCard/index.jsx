import React from 'react';
import {
    Card,
    Main,
    Grid,
    Discount,
    Image,
    ProductName,
    Detail,
    Price,
    Button,
    Wishlist,
    Top,
    Button1,
    ButtonGroup,
    PrescriptionTag
} from './style';
import { useNavigate } from 'react-router-dom';
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useCustomer } from '../../../pages/customer/useHooks';
import { toast } from 'react-toastify';

const ProductCard = ({ products = [], perRow = 4, wishlistIds = [] }) => {
    const { addToWishlist, addToCart } = useCustomer();
    const navigate = useNavigate();

    const goToDetail = (id) => {
        navigate(`/customer/productDetail/${id}`);
    };

    const goToCheckOut = () => {
        navigate('/customer/checkOut');
    };

    const handleAddWishlist = async (id) => {
        await addToWishlist(id);

    };

   const handleAddCart = async (id) => {
        const payload = { medicineId: id, quantity: 1 }; 
        await addToCart(payload);
        console.log("Added to cart successfully!");
          toast.success("Added to cart!");
};


   
    return (
        <Main>
            <Grid perRow={perRow}>
                {products.map((item) => {
                    const isWishlisted = wishlistIds?.includes(item.id);

                    return (
                        <Card onDoubleClick={() => goToDetail(item.id)} key={item.id}>
                            <Top>
                                {item.discount_percentage !== "0.00" && (
                                    <Discount>
                                        <div>{`${item.discount_percentage}% OFF`}</div>
                                    </Discount>
                                )}

                                {item.requires_prescription && (
                                    <PrescriptionTag>Prescription Required</PrescriptionTag>
                                )}

                                {/*Wishlist Icon */}
                                <Wishlist
                                    onClick={() => handleAddWishlist(item.id)}
                                    style={{ cursor: "pointer", fontSize: "1.2rem" }}
                                >
                                    {isWishlisted ? (
                                        <FaHeart color="red" title="Remove from wishlist" />
                                    ) : (
                                        <FaRegHeart title="Add to wishlist" />
                                    )}
                                </Wishlist>
                            </Top>

                            <Image>
                                <img
                                    src={`${process.env.REACT_APP_API_URL}/${item.images?.[0]?.file_path}`}
                                    alt={item.name}
                                />
                            </Image>

                            <ProductName>
                                <h3>{item.name}</h3>
                            </ProductName>

                            <Detail>
                                <p>{item.brand}</p>
                                <p>{item.category}</p>
                            </Detail>

                            <Price>
                                <h3>{`Rs ${item.final_price}`}</h3>
                                {item.discount_percentage !== "0.00" && (
                                    <h6>{`Rs ${item.price}`}</h6>
                                )}
                            </Price>

                            <ButtonGroup>
                                <Button onClick={() => handleAddCart(item.id)}>Add to Cart</Button>
                                <Button1 onClick={goToCheckOut}>Checkout</Button1>
                            </ButtonGroup>
                        </Card>
                    );
                })}
            </Grid>
        </Main>
    );
};

export default ProductCard;

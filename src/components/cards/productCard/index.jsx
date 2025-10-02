import React from 'react';
import {
    Card, Main, Grid, Discount, Image, ProductName, Detail, Price, Button, Wishlist, Top, Button1, ButtonGroup, PrescriptionTag
} from "./style";
import { useNavigate } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";
import { useCustomer } from '../../../pages/customer/useHooks';
const ProductCard = ({ products = [], perRow = 3 }) => {
    console.log(products);
    
    const { addToWishlist } = useCustomer();
    const navigate = useNavigate();

    const goToDetail = (id) => {
        navigate(`/customer/productDetail/${id}`);  //id for detail page
    };
    const goToCheckOut = () => {
        navigate('/customer/checkOut');
    };
    const goToCart = () => {
        navigate('/customer/cart');
    };
    const onSubmit = async (id) => {
        try {
            await addToWishlist(id);
        } catch (error) {
            console.error("Error adding to wishlist:", error);
        }
    };
    return (
        <Main>
            <Grid perRow={perRow}>
                {products.map((item) => (
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
                            <Wishlist onClick={() => onSubmit(item.id)}>

                                <FaRegHeart />
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
                            <Button onClick={goToCart}>Add to Cart</Button>
                            <Button1 onClick={goToCheckOut}>Checkout</Button1>
                        </ButtonGroup>
                    </Card>
                ))}
            </Grid>
        </Main>
    );
};

export default ProductCard;

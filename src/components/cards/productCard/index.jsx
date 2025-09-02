import React from 'react'
import { productCards } from '../../../helpers/dummyData'
import {
    Card, Main, Grid, Discount, Image, ProductName, Detail, Price, Button, Wishlist, Top,Button1,ButtonGroup
} from "./style"
import { useNavigate } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";


const ProductCard = ({ total = productCards.length, perRow = 3 }) => {
    const navigate = useNavigate();

    const goToDetail = () => {
        navigate('/customer/productDetail');
    };
    const goToCheckOut = () => {
        navigate('/customer/checkOut');
    };
    const goToCart = () => {
        navigate('/customer/cart');
    }; const goToWishList = () => {
        navigate('/customer/wishlist');
    };
    return (
        <Main>
            <Grid perRow={perRow}>
                {productCards.slice(0, total).map((item) => (
                    <Card onDoubleClick={goToDetail}>
                        <Top>
                            <Discount>
                                <div>{item.discount}</div>
                            </Discount>
                            <Wishlist onClick={goToWishList}>
                                <FaRegHeart />
                            </Wishlist>
                        </Top>
                        <Image>
                            <img src={item.image} alt='Healify' />
                        </Image>
                        <ProductName>
                            <h3>{item.name}</h3>
                        </ProductName>
                        <Detail>
                            <p>{item.type}</p>
                            <p>{item.packSize}</p>
                        </Detail>
                        <Price>
                            <h3>{`Rs ${item.discountPrice}`}</h3>
                            <h6>{`Rs ${item.originalPrice}`}</h6>
                        </Price>
                        <ButtonGroup>
                            <Button onClick={goToCart}>Add to Cart</Button>
                            <Button1 onClick={goToCheckOut}>Checkout</Button1>
                        </ButtonGroup>
                    </Card>
                ))}

            </Grid>
        </Main>
    )
}

export default ProductCard

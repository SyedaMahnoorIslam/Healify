// import React from 'react';
// import {
//     Card,
//     Main,
//     Grid,
//     Discount,
//     Image,
//     ProductName,
//     Detail,
//     Price,
//     Button,
//     Wishlist,
//     Top,
//     ButtonGroup,
//     PrescriptionTag
// } from './style';
// import { useNavigate } from 'react-router-dom';
// import { FaHeart, FaRegHeart } from "react-icons/fa";
// import { useCustomer } from '../../../pages/customer/useHooks';
// import { toast } from 'react-toastify';

// const ProductCard = ({ products = [], perRow = 0, wishlistIds = [] }) => {
//     const { addToWishlist, addToCart ,removeFromWishlist} = useCustomer();
//     const navigate = useNavigate();

//     const goToDetail = (id) => {
//         navigate(`/customer/productDetail/${id}`);
//     };

//     const handleAddWishlist = async (id) => {
//         await addToWishlist(id);
//         // toast.success("Added to Wishlist!");

//     };
//      const handleRemoveWishlist = async (id) => {
//         await removeFromWishlist(id);
//         // toast.success("Added to Wishlist!");

//     };

//     const handleAddCart = async (id) => {
//         const payload = { medicineId: id, quantity: 1 };
//         await addToCart(payload);
//         console.log("Added to cart successfully!");
//         // toast.success("Added to cart!");
//     };

//     return (
//         <Main>
//             <Grid perRow={perRow}>
//                 {products.map((item) => {
//                     const isWishlisted = wishlistIds?.includes(item.id);
//                     return (
//                         <Card onDoubleClick={() => goToDetail(item.id)} key={item.id}>
//                             <Top>
//                                 {item.discount_percentage !== "0.00" && (
//                                     <Discount>
//                                         <div>{`${item.discount_percentage}% OFF`}</div>
//                                     </Discount>
//                                 )}

//                                 {item.requires_prescription && (
//                                     <PrescriptionTag>Prescription Required</PrescriptionTag>
//                                 )}

//                                 {/*Wishlist Icon */}
//                                 <Wishlist
//                                     onClick={() => handleAddWishlist(item.id)}
//                                     style={{ cursor: "pointer", fontSize: "1.2rem" }}
//                                 >
//                                     {isWishlisted ? (
//                                         <FaHeart color="red" title="Remove from wishlist" />
//                                     ) : (
//                                         <FaRegHeart title="Add to wishlist" />
//                                     )}
//                                 </Wishlist>
//                             </Top>

//                             <Image>
//                                 <img
//                                     src={`${process.env.REACT_APP_API_URL}/${item.images?.[0]?.file_path}`}
//                                     alt={item.name}
//                                 />
//                             </Image>

//                             <ProductName>
//                                 <h3>{item.name}</h3>
//                             </ProductName>

//                             <Detail>
//                                 <p>{item.brand}</p>
//                                 <p>{item.category}</p>
//                             </Detail>

//                             <Price>
//                                 <h3>{`Rs ${item.final_price}`}</h3>
//                                 {item.discount_percentage !== "0.00" && (
//                                     <h6>{`Rs ${item.price}`}</h6>
//                                 )}
//                             </Price>

//                             <ButtonGroup>
//                                 <Button onClick={() => handleAddCart(item.id)}>Add to Cart</Button>
                                
//                             </ButtonGroup>
//                         </Card>
//                     );
//                 })}
//             </Grid>
//         </Main>
//     );
// };

// export default ProductCard;
import React, { useState } from 'react';
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
    ButtonGroup,
    PrescriptionTag
} from './style';
import { useNavigate } from 'react-router-dom';
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useCustomer } from '../../../pages/customer/useHooks';
import { toast } from 'react-toastify';

const ProductCard = ({ products = [], perRow = 0, wishlistIds = [] }) => {
    const { addToWishlist, removeFromWishlist, addToCart } = useCustomer();
    const navigate = useNavigate();

    // local state to reflect toggle instantly
    const [localWishlist, setLocalWishlist] = useState(wishlistIds || []);

    const goToDetail = (id) => {
        navigate(`/customer/productDetail/${id}`);
    };

    const handleToggleWishlist = async (id) => {
        const isWishlisted = localWishlist.includes(id);
        try {
            if (isWishlisted) {
                await removeFromWishlist(id);
                // toast.warn("Removed from Wishlist!");
                setLocalWishlist((prev) => prev.filter((wid) => wid !== id));
            } else {
                await addToWishlist(id);
                // toast.success("Added to Wishlist!");
                setLocalWishlist((prev) => [...prev, id]);
            }
        } catch (err) {
            console.error("Wishlist toggle error:", err);
        }
    };

    const handleAddCart = async (id) => {
        const payload = { medicineId: id, quantity: 1 };
        await addToCart(payload);
        toast.success("Added to cart!");
    };

    return (
        <Main>
            <Grid perRow={perRow}>
                {products.map((item) => {
                    const isWishlisted = localWishlist.includes(item.id);

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

                                {/* Wishlist Icon */}
                                <Wishlist
                                    onClick={() => handleToggleWishlist(item.id)}
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
                            </ButtonGroup>
                        </Card>
                    );
                })}
            </Grid>
        </Main>
    );
};

export default ProductCard;

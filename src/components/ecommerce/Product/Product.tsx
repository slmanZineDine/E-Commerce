import { memo, useEffect, useState } from "react";
import { useAppDispatch } from "@redux/hooks";
import { Button, Spinner } from "react-bootstrap";
import { addToCart } from "@redux/slices/cart/cartSlice";
import { TProduct } from "@customTypes/product";
// SVG
import Like from "@assets/svg/like.svg?react";
import LikeFill from "@assets/svg/like-fill.svg?react";

import styles from "./styles.module.css";
const { product, productImg, maximumNotice, wishlistBtn } = styles;

const Product = memo(function Product({
   id,
   title,
   price,
   img,
   max,
   quantity,
}: TProduct) {
   // ################### REACT HOOKS ###################
   const [isBtnDisabled, setIsBtnDisabled] = useState(false);

   // ################### REDUX HOOKS ###################
   const dispatch = useAppDispatch();

   // ################### SETTINGS ###################
   const currentRemainingQuantity = max - (quantity ?? 0);
   const quantityReachedToMax = currentRemainingQuantity <= 0 ? true : false;

   // ################### SIDE EFFECT ###################
   useEffect(() => {
      if (!isBtnDisabled) {
         return;
      }

      const debounce = setTimeout(() => {
         setIsBtnDisabled(false);
      }, 300);

      return () => clearTimeout(debounce);
   }, [isBtnDisabled]);

   // ################### HANDLER ###################
   const handleAddToCart = () => {
      dispatch(addToCart(id));
      setIsBtnDisabled(true);
   };
   return (
      <div className={product}>
         <div
            className={wishlistBtn}
            // onClick={likeToggleHandler}
         >
            {/* {isLoading ? (
               <Spinner animation="border" size="sm" variant="primary" />
            ) : isLiked ? (
               <LikeFill />
            ) : (
               <Like />
            )} */}
            <Like />
         </div>
         <div className={productImg}>
            <img src={img} alt={title} />
         </div>
         <h2>{title}</h2>
         <h3>{price} EGP</h3>
         <span className={maximumNotice}>
            {" "}
            {quantityReachedToMax
               ? "You reach to the limit"
               : `You can add ${currentRemainingQuantity} item(s)`}
         </span>
         <Button
            onClick={handleAddToCart}
            variant="info"
            style={{ color: "white" }}
            disabled={isBtnDisabled || quantityReachedToMax}
         >
            {isBtnDisabled ? (
               <>
                  <Spinner animation="border" size="sm" /> Loading...
               </>
            ) : (
               "Add to cart"
            )}
         </Button>
      </div>
   );
});

export default Product;

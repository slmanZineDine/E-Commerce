// Redux
import { useSelector } from "react-redux";
import { getCartTotalQuantitySelector } from "@redux/slices/cart/selectors/getCartTotalQuantitySelector";
// Svg
import BacketIcon from "@assets/svg/cart.svg?react";

import styles from "./styles.module.css";
import { useEffect, useState } from "react";
// Styles
const { basketContainer, basketQuantity, pumpCartQuantity, basketCart } =
   styles;

const HeaderBasket = () => {
   // ################### REACT HOOKS ###################
   const [isAnimate, setIsAnimate] = useState(false);

   // ################### REDUX HOOKS ###################
   const cartQuantity = useSelector(getCartTotalQuantitySelector);

   // ################### STYLING ###################
   const quantityStyle = `${basketQuantity} ${
      isAnimate ? pumpCartQuantity : ""
   }`;

   // ################### SIDE EFFECT ###################
   useEffect(() => {
      if (!cartQuantity) {
         return;
      }
      setIsAnimate(true);

      const debounce = setTimeout(() => {
         setIsAnimate(false);
      }, 300);

      return () => clearTimeout(debounce);
   }, [cartQuantity]);

   return (
      <div className={basketContainer}>
         <div className={basketCart}>
            <BacketIcon title="Basket-Icon" />
            <div className={quantityStyle}>{cartQuantity}</div>
         </div>
         <h3>Cart</h3>
      </div>
   );
};

export default HeaderBasket;

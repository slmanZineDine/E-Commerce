// Redux
import { useSelector } from "react-redux";
import { getCartTotalQuantitySelector } from "@redux/slices/cart/selectors/getCartTotalQuantitySelector";
// Svg
import WishlistIcon from "@assets/svg/wishlist.svg?react";

import styles from "./styles.module.css";
import { useEffect, useState } from "react";
// Styles
const { container, totalNum, pumpAnimate, iconWrapper } = styles;

const HeaderWishlist = () => {
   // ################### REACT HOOKS ###################
   const [isAnimate, setIsAnimate] = useState(false);

   // ################### REDUX HOOKS ###################
   const cartQuantity = 0;

   // ################### STYLING ###################
   const quantityStyle = `${totalNum} ${isAnimate ? pumpAnimate : ""}`;

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
      <div className={container}>
         <div className={iconWrapper}>
            <WishlistIcon title="Basket-Icon" />
            {cartQuantity > 0 && (
               <div className={quantityStyle}>{cartQuantity}</div>
            )}
         </div>
         <h3>Wishlist</h3>
      </div>
   );
};

export default HeaderWishlist;

import BacketIcon from "@assets/svg/cart.svg?react";

import styles from "./styles.module.css";
const { basketContainer, basketQuantity } = styles;

const HeaderBasket = () => {
   return (
      <div className={basketContainer}>
         <BacketIcon title="Basket-Icon" />
         <div className={basketQuantity}>0</div>
      </div>
   );
};

export default HeaderBasket;

import { Button } from "react-bootstrap";
import styles from "./styles.module.css";
import { TProduct } from "@customTypes/product";
import { useAppDispatch } from "@redux/hooks";
import { addToCart } from "@redux/slices/cart/cartSlice";
const { product, productImg } = styles;

const Product = ({ id, title, price, img }: TProduct) => {
   // ################### REDUX HOOKS ###################
   const dispatch = useAppDispatch();

   // ################### HANDLER ###################
   const handleAddToCart = () => {
      dispatch(addToCart(id));
   };
   return (
      <div className={product}>
         <div className={productImg}>
            <img src={img} alt={title} />
         </div>
         <h2>{title}</h2>
         <h3>{price} EGP</h3>
         <Button
            onClick={handleAddToCart}
            variant="info"
            style={{ color: "white" }}
         >
            Add to cart
         </Button>
      </div>
   );
};

export default Product;

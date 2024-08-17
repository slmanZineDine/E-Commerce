// Third-Party ====> react-router-dom
import { Link } from "react-router-dom";
// Types
import type { TCategory } from "@customTypes/category";

// Styles
import styles from "./styles.module.css";
const { category, categoryImg, categoryTitle } = styles;

const Category = ({ img, prefix, title }: TCategory) => {
   return (
      <div className={category}>
         <Link to={`/categories/products/${prefix}`}>
            <div className={categoryImg}>
               <img src={img} alt={title} />
            </div>
            <h4 className={categoryTitle}>{title}</h4>
         </Link>
      </div>
   );
};

export default Category;

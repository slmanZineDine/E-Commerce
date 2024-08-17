import { Container } from "react-bootstrap";
import { Product } from "@components/index";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { useEffect } from "react";
import {
   getProductsByCategoryThunk,
   productsCleanUp,
   selectProducts,
} from "@redux/slices/products/productsSlice";
import GridList from "@components/common/GridList/GridList";
import Loading from "@components/feedback/Loading/Loading";

const Products = () => {
   // ################### REDUX ROUTER ###################
   const params = useParams();

   // ################### REDUX HOOKS ###################
   const dispatch = useAppDispatch();
   const { loading, error, records } = useAppSelector(selectProducts);

   // ################### SIDE EFFECT ###################
   useEffect(() => {
      dispatch(
         getProductsByCategoryThunk(`?cat_prefix=${params.prefix as string}`)
      );

      return () => {
         dispatch(productsCleanUp());
      };
   }, [dispatch, params]);

   return (
      <Container>
         <Loading status={loading} error={error}>
            <GridList
               records={records}
               renderItem={(record) => <Product {...record} />}
            />
         </Loading>
      </Container>
   );
};

export default Products;

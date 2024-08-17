// React / Redux
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import {
   selectCategories,
   getCategoriesThunk,
} from "@redux/slices/categories/categoriesSlice";
// My-Component
import { Category } from "@components/index";
// Bootstrap
import { Container } from "react-bootstrap";
import GridList from "@components/common/GridList/GridList";
import Loading from "@components/feedback/Loading/Loading";

const Categories = () => {
   // ################### REDUX HOOKS ###################
   const dispatch = useAppDispatch();
   const { loading, error, records } = useAppSelector(selectCategories);

   // ################### SIDE EFFECT ###################
   useEffect(() => {
      if (records.length === 0) {
         dispatch(getCategoriesThunk());
      }
   }, [dispatch]);

   return (
      <Container>
         <Loading status={loading} error={error}>
            <GridList
               records={records}
               renderItem={(record) => <Category {...record} />}
            />
         </Loading>
      </Container>
   );
};

export default Categories;

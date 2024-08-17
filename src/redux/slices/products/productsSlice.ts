import { createSlice } from "@reduxjs/toolkit";
// My-Types
import type { TLoading } from "@customTypes/shared";

import type { RootState } from "@redux/store";
import getProductsByCategoryThunk from "./thunk/getProductsByCategoryThunk";
import { TProduct } from "@customTypes/product";

interface IProductsState {
   records: TProduct[];
   loading: TLoading;
   error: string | null;
}

const initialState: IProductsState = {
   records: [],
   loading: "idle",
   error: null,
};

const productsSlice = createSlice({
   name: "products",
   initialState,
   reducers: {
      productsCleanUp: (state) => {
         state.records = [];
      },
   },
   extraReducers: (builder) => {
      builder.addCase(getProductsByCategoryThunk.pending, (state) => {
         state.loading = "pending";
         state.error = null;
      });
      builder.addCase(getProductsByCategoryThunk.fulfilled, (state, action) => {
         state.loading = "succeeded";
         state.records = action.payload;
      });
      builder.addCase(getProductsByCategoryThunk.rejected, (state, action) => {
         state.loading = "failed";
         if (action.payload && typeof action.payload === "string") {
            state.error = action.payload;
         }
      });
   },
});

export const selectProducts = (state: RootState) => state.products;

export const { productsCleanUp } = productsSlice.actions;
export { getProductsByCategoryThunk };
export default productsSlice.reducer;

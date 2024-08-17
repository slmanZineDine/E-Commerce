import { createSlice } from "@reduxjs/toolkit";
// My-Types
import type { TLoading } from "@customTypes/shared";
import type { TCategory } from "@customTypes/category";
import getCategoriesThunk from "./thunk/getCategoriesThunk";
import type { RootState } from "@redux/store";

interface ICategoriesState {
   records: TCategory[];
   loading: TLoading;
   error: string | null;
}

const initialState: ICategoriesState = {
   records: [],
   loading: "idle",
   error: null,
};

const categoriesSlice = createSlice({
   name: "categories",
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(getCategoriesThunk.pending, (state) => {
         state.loading = "pending";
         state.error = null;
      });
      builder.addCase(getCategoriesThunk.fulfilled, (state, action) => {
         state.loading = "succeeded";
         state.records = action.payload;
      });
      builder.addCase(getCategoriesThunk.rejected, (state, action) => {
         state.loading = "failed";
         if (action.payload && typeof action.payload === "string") {
            state.error = action.payload;
         }
      });
   },
});

export const selectCategories = (state: RootState) => state.categories;

export { getCategoriesThunk };
export default categoriesSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
// My-Types
import type { TProduct } from "@customTypes/product";

interface ICart {
   items: { [key: number]: number };
   productFullInfo: TProduct[];
}

const initialState: ICart = {
   items: {},
   productFullInfo: [],
};

const cartSlice = createSlice({
   name: "cart",
   initialState,
   reducers: {
      addToCart: (state, { payload: id }) => {
         if (state.items[id]) {
            state.items[id]++;
         } else {
            state.items[id] = 1;
         }
      },
   },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;

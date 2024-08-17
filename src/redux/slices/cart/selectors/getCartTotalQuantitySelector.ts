import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "@redux/store";

export const getCartTotalQuantitySelector = createSelector(
   (state: RootState) => state.cart.items,
   (items) => {
      const totalQuantity = Object.values(items).reduce(
         (accumulator, currentValue) => {
            return accumulator + currentValue;
         },
         0
      );
      return totalQuantity;
   }
);

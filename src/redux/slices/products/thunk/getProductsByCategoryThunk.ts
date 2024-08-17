import type { TProduct } from "@customTypes/product";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getRequestWithParams } from "services/api";
import { endpoints } from "services/endpoints";

const getProductsByCategoryThunk = createAsyncThunk(
   "products/getProductsByCategory",
   async (prefix: string, { rejectWithValue }) => {
      try {
         const response = await getRequestWithParams<TProduct[]>(
            endpoints.products.root,
            prefix
         );
         return response;
      } catch (err) {
         if (axios.isAxiosError(err)) {
            return rejectWithValue(err.response?.data?.message || err.message);
         } else {
            return rejectWithValue("An unexpected error");
         }
      }
   }
);

export default getProductsByCategoryThunk;

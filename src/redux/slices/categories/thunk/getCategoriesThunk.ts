import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getRequest } from "services/api";
import { endpoints } from "services/endpoints";
// Types
import type { TCategory } from "@customTypes/category";

const getCategoriesThunk = createAsyncThunk(
   "categories/getCategories",
   async (_, { rejectWithValue }) => {
      try {
         const response = await getRequest<TCategory[]>(
            endpoints.categories.root
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

export default getCategoriesThunk;

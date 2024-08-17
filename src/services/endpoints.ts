// =================== BASE URL ===================
export const BASE_URL = import.meta.env.VITE_BASE_URL;

// =================== ROOTS ===================
const ROOTS = {
   CATEGORIES: "/categories",
   PRODUCTS: "/products",
};

// =================== ENDPOINTS ===================
export const endpoints = {
   // =================== CATEGORIES ===================
   categories: {
      root: ROOTS.CATEGORIES,
   },
   products: {
      root: ROOTS.PRODUCTS,
   },
};

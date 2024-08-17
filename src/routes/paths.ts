// =================== ROOTS ===================
const ROOTS = {
   HOME: "/",
   CATEGORIES: "/categories",
   PRODUCTS: "/products",
};

// =================== PATHS ===================
export const paths = {
   // ===== HOME =====
   home: ROOTS.HOME,

   // ===== CATEGORIES =====
   categories: {
      root: ROOTS.CATEGORIES,
   },

   // ===== PRODUCTS =====
   products: {
      root: ROOTS.PRODUCTS,
      registerDoctor: `${ROOTS.PRODUCTS}/register-doctor`,
   },
};

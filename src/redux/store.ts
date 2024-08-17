import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
   persistStore,
   persistReducer,
   FLUSH,
   REHYDRATE,
   PAUSE,
   PERSIST,
   PURGE,
   REGISTER,
} from "redux-persist";
// redux-persist
import storage from "redux-persist/lib/storage";
// Slices
import cart from "./slices/cart/cartSlice";
import products from "./slices/products/productsSlice";
import categories from "./slices/categories/categoriesSlice";

const cartPersistConfig = {
   key: "cart",
   storage, // Select where you want to store, defaults to localStorage for web
   whitelist: ["items"], // only these
   // blacklist: [""] Everything except these
};

const rootReducer = combineReducers({
   categories,
   products,
   cart: persistReducer(cartPersistConfig, cart),
});

const store = configureStore({
   reducer: rootReducer,
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: {
            // There is some action in redux persist against the redux so shulde ignored
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
         },
      }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

const persistor = persistStore(store);

export { store, persistor };

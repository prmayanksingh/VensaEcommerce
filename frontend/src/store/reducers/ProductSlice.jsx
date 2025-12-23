import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const productReducer = createSlice({
  name: "product",
  initialState,
  reducers: {
    loadlazyproduct: (state, action) => {
      const existingIds = new Set(state.products.map((p) => p._id));
      const newProducts = action.payload.filter((p) => !existingIds.has(p._id));
      state.products = [...state.products, ...newProducts];
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter((p) => p._id !== action.payload);
    },
    updateProduct: (state, action) => {
      state.products = state.products.map((p) =>
        p._id === action.payload._id ? action.payload : p
      );
    },
  },
});

export const { loadlazyproduct, removeProduct, updateProduct } = productReducer.actions;
export default productReducer.reducer;

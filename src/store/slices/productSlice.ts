import { createSlice } from '@reduxjs/toolkit';

import { fetchProductById, fetchProducts } from '../../services/actions/productActions';
import type { Product } from '../../services/actions/productActions';

type ProductState = {
  products: Product[];
  listLoading: boolean;
  refreshing: boolean;
  listError: string | null;
  selectedProduct: Product | null;
  detailsLoading: boolean;
  detailsError: string | null;
  listRequestId: string | null;
  detailsRequestId: string | null;
};

const initialState: ProductState = {
  products: [],
  listLoading: false,
  refreshing: false,
  listError: null,
  selectedProduct: null,
  detailsLoading: false,
  detailsError: null,
  listRequestId: null,
  detailsRequestId: null,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.listRequestId = action.meta.requestId;
        state.refreshing = state.products.length > 0;
        state.listLoading = state.products.length === 0;
        state.listError = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        if (state.listRequestId !== action.meta.requestId) return;
        state.products = action.payload;
        state.listLoading = false;
        state.refreshing = false;
        state.listError = null;
        state.listRequestId = null;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        if (state.listRequestId !== action.meta.requestId) return;
        state.listLoading = false;
        state.refreshing = false;
        state.listRequestId = null;
        if (!action.meta.aborted) {
          state.listError = action.payload ?? action.error.message ?? 'Products could not be loaded.';
        }
      })
      .addCase(fetchProductById.pending, (state, action) => {
        state.detailsRequestId = action.meta.requestId;
        state.detailsLoading = true;
        state.detailsError = null;
        if (state.selectedProduct?.id !== action.meta.arg) state.selectedProduct = null;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        if (state.detailsRequestId !== action.meta.requestId) return;
        state.selectedProduct = action.payload;
        state.detailsLoading = false;
        state.detailsError = null;
        state.detailsRequestId = null;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        if (state.detailsRequestId !== action.meta.requestId) return;
        state.detailsLoading = false;
        state.detailsRequestId = null;
        if (!action.meta.aborted) {
          state.detailsError = action.payload ?? action.error.message ?? 'This product could not be loaded.';
        }
      });
  },
});

export default productSlice.reducer;
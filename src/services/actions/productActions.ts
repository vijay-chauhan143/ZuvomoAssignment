import { createAsyncThunk } from '@reduxjs/toolkit';
import { isAxiosError } from 'axios';

import { api } from '../api';

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  category: string;
  thumbnail: string;
  images: string[];
}

type ProductsResponse = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};

type ProductThunkConfig = {
  rejectValue: string;
};

function getProductErrorMessage(error: unknown): string {
  if (isAxiosError(error)) {
    const responseData: unknown = error.response?.data;

    if (
      typeof responseData === 'object'
      && responseData !== null
      && 'message' in responseData
      && typeof responseData.message === 'string'
    ) {
      return responseData.message;
    }

    return 'Please check your connection and try again.';
  }

  return error instanceof Error ? error.message : 'Something went wrong. Please try again.';
}

export const fetchProducts = createAsyncThunk<Product[], void, ProductThunkConfig>(
  'products/fetchProducts',
  async (_, { rejectWithValue, signal }) => {
    try {
      const response = await api.get<ProductsResponse>('/products', { signal });
      return response.data.products;
    } catch (error: unknown) {
      return rejectWithValue(getProductErrorMessage(error));
    }
  },
);

export const fetchProductById = createAsyncThunk<Product, number, ProductThunkConfig>(
  'products/fetchProductById',
  async (productId, { rejectWithValue, signal }) => {
    try {
      const response = await api.get<Product>(`/products/${productId}`, { signal });
      return response.data;
    } catch (error: unknown) {
      return rejectWithValue(getProductErrorMessage(error));
    }
  },
);
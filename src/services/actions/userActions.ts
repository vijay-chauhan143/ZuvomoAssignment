import { createAsyncThunk } from '@reduxjs/toolkit';
import { isAxiosError } from 'axios';

import { api } from '../api';

export type UserDataPayload = Record<string, unknown>;

const USER_DATA_ENDPOINT = '/REPLACE_WITH_USER_ENDPOINT';

function getErrorMessage(error: unknown): string {
  if (isAxiosError(error)) {
    const responseData: unknown = error.response?.data;

    if (typeof responseData === 'string') return responseData;
    if (
      typeof responseData === 'object'
      && responseData !== null
      && 'message' in responseData
      && typeof responseData.message === 'string'
    ) {
      return responseData.message;
    }

    return error.message || 'The request could not be completed.';
  }

  return error instanceof Error ? error.message : 'The request could not be completed.';
}

export const fetchUserData = createAsyncThunk<
  unknown,
  UserDataPayload,
  { rejectValue: string }
>(
  'user/fetchUserData',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await api.post<unknown>(USER_DATA_ENDPOINT, payload);
      return response.data;
    } catch (error: unknown) {
      return rejectWithValue(getErrorMessage(error));
    }
  },
);
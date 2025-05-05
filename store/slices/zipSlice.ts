import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

// Type for ZIP code data
export interface ZipData {
  id: number;
  state_fips: string;
  state: string;
  state_abbr: string;
  zip: string;
  county: string;
  city: string;
}

// State type for the slice
interface ZipState {
  data: ZipData | null;
  loading: boolean;
  error: string | null;
}

const initialState: ZipState = {
  data: null,
  loading: false,
  error: null,
};

// Async thunk to fetch ZIP code data
export const fetchZipData = createAsyncThunk<
  ZipData,
  string,
  { rejectValue: string }
>('zip/fetchZipData', async (zipCode: string, { rejectWithValue }) => {
  try {
    const response = await fetch(`https://app.demo2.asdev.tech/zip/${zipCode}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }
    const data = await response.json();
    if (!data.length) {
      throw new Error('No data found for ZIP code');
    }
    return data[0]; // Assuming one record per ZIP
  } catch (error) {
    return rejectWithValue(error instanceof Error ? error.message : 'Unknown error');
  }
});

const zipSlice = createSlice({
  name: 'zip',
  initialState,
  reducers: {
    clearZipData(state) {
      state.data = null;
      state.error = null;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchZipData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchZipData.fulfilled, (state, action: PayloadAction<ZipData>) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchZipData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to fetch ZIP data';
      });
  },
});

export const { clearZipData } = zipSlice.actions;
export default zipSlice.reducer;

import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { ChannelData } from '../../data/types/channelsTypes';


// Define the state type
interface DirectvState {
  data: ChannelData | null;
  loading: boolean;
  error: string | null;
}

// Initial state
const initialState: DirectvState = {
  data: null,
  loading: false,
  error: null,
};

// Thunk to fetch Directv data by ZIP
export const fetchDirectvByZip = createAsyncThunk<
  ChannelData,
  string,
  { rejectValue: string }
>('directv/fetchDirectvByZip', async (zipCode, { rejectWithValue }) => {
  try {
    const response = await fetch(`https://app.demo2.asdev.tech/directv/${zipCode}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    const data = await response.json();
    if (!data) {
      throw new Error('No data found for ZIP code');
    }

    return data as ChannelData;
  } catch (error) {
    return rejectWithValue(error instanceof Error ? error.message : 'Unknown error');
  }
});

const directvSlice = createSlice({
  name: 'directv',
  initialState,
  reducers: {
    clearDirectvData(state) {
      state.data = null;
      state.error = null;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDirectvByZip.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDirectvByZip.fulfilled, (state, action: PayloadAction<ChannelData>) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchDirectvByZip.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to fetch Directv data';
      });
  },
});

export const { clearDirectvData } = directvSlice.actions;
export default directvSlice.reducer;

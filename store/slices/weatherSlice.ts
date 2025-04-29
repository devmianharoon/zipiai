// store/weatherSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { WeatherData } from '../../data/types/weatherTypes'; // Adjust path as needed
export const fetchWeather = createAsyncThunk<WeatherData, string>(
    'weather/fetchWeather',
    async (zipCode: string) => {
      const res = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=c4e04f21fd0a4088bb795453252804&q=${zipCode}&days=3&aqi=no&alerts=no`
      );
      if (!res.ok) throw new Error('Failed to fetch weather data');
      return await res.json();
    }
  );
  
  const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
      data: null as WeatherData | null,
      status: 'idle' as 'idle' | 'loading' | 'succeeded' | 'failed',
      error: null as string | null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchWeather.pending, (state) => {
          state.status = 'loading';
          state.error = null;
        })
        .addCase(fetchWeather.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.data = action.payload;
        })
        .addCase(fetchWeather.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message || 'Error';
        });
    },
  });
  
  export default weatherSlice.reducer;
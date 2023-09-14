import { configureStore } from '@reduxjs/toolkit';
import WeatherSlice from "./WeatherSlice"

export default configureStore({
  reducer: {
    weatherReport: WeatherSlice,
  }
})
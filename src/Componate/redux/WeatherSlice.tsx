import { createSlice } from '@reduxjs/toolkit'
export const WeatherSlice = createSlice({

    name: "counter",
    initialState: {
        cityData: []
    },
    reducers: {
        searchButton: (state: any, action: any) => {
            state.cityData = action.payload;
        }
    },
})

export const { searchButton } = WeatherSlice.actions

export default WeatherSlice.reducer
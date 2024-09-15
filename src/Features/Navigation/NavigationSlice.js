import { createSlice } from "@reduxjs/toolkit";


const NavigationSlice = createSlice({
    name: "NavigationSlice",
    initialState: {
        query: "",
        showSensitiveContent: true,
        blurSensitiveContent: true,
        
    },
    reducers: {
        setQuery: (state, action) => {
            state.query = action.payload;
        }
    }
})

export const selectQuery = state => state.NavigationSlice.query;

export const { setQuery } = NavigationSlice.actions;

export default NavigationSlice.reducer;
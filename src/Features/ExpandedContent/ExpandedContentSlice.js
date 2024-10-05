import { createSlice } from "@reduxjs/toolkit";


const ExpandedContentSlice = createSlice({
    name: "ExpandedContentSlice",
    initialState: {
        content: {},
        open: false
    },
    reducers: {
        setContent: (state, action) => {
            state.open = true;
            state.content = action.payload;
        },
        closeContent: (state, action) => {
            state.open = false;
            state.content = {};
        }
    }
})

export const selectCurrentContent = state => state.ExpandedContentSlice.content;

export const selectContentOpen = state => state.ExpandedContentSlice.open;

export const { setContent, closeContent } = ExpandedContentSlice.actions;

export default ExpandedContentSlice.reducer;
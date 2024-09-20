import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import Axios from 'axios';
import { setQuery } from "../Navigation/NavigationSlice";
import { test_data } from "../../Utilities/History";

export const searchImages = createAsyncThunk(
    "ResultsSlice/searchImages",
    async (_, {rejectWithValue, getState, dispatch}) => {

        try {

            let search_term;

            const {query} = getState().NavigationSlice;

            const urlParams = new URLSearchParams(window.location.search);

            if (urlParams.has('q')) {
                search_term = urlParams.get('q');
            } else {
                search_term = query;
            }

            if (search_term.length === 0) return rejectWithValue({message: 'invalid search'});

            const images = test_data;

            // const images = await Axios({
            //     method: "POST",
            //     url: 'http://10.0.0.38:3333/search-for-images',
            //     data: {
            //         query: search_term,
            //     }
            // }).then(res => {
            //     return res?.data?.media;
            // })

            console.log(images)
            return images;
        
        } catch (error) {
            console.log(error);
            return rejectWithValue({message: error.message});
        }
    }
)

const ResultsSlice = createSlice({
    name: "ResultsSlice",
    initialState: {
        loading: false,
        results: [],
        loadingMore: false,
    },
    extraReducers: {
        [searchImages.pending]: (state, action) => {
            state.loading = true;
            state.results = [];
        },
        [searchImages.fulfilled]: (state, action) => {
            state.loading = false;
            state.results = action.payload;
        },
        [searchImages.rejected]: (state, action) => {
            state.loading = false;
            
        }
    }
})

export const selectResults = state => state.ResultsSlice.results;

export const selectLoadingState = state => state.ResultsSlice.loading;

export default ResultsSlice.reducer;
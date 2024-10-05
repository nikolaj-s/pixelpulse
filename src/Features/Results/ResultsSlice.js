import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import Axios from 'axios';

import { test_data } from "../../Utilities/History";

export const searchImages = createAsyncThunk(
    "ResultsSlice/searchImages",
    async (_, {rejectWithValue, getState, dispatch}) => {

        try {

            window.scrollTo(0, 0)

            let search_term;

            const {query, source, currentSortOption} = getState().NavigationSlice;

            const urlParams = new URLSearchParams(window.location.search);

            if (urlParams.has('q')) {
                search_term = urlParams.get('q');
            } else {
                search_term = query;
            }

            if (search_term.length === 0) return rejectWithValue({message: 'invalid search'});

            const images = await Axios({
                method: "POST",
                url: 'https://pixelpulsebackend-c3cc3b10a201.herokuapp.com/search-for-images',
                data: {
                    query: search_term,
                    source: source,
                    sortBy: currentSortOption
                }
            }).then(res => {
                return res?.data?.media;
            })

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
        error: false
    },
    extraReducers: {
        [searchImages.pending]: (state, action) => {
            state.loading = true;
            state.error = false;
        },
        [searchImages.fulfilled]: (state, action) => {
            state.error = false;
            state.loading = false;
            state.results = action.payload;
        },
        [searchImages.rejected]: (state, action) => {
            state.loading = false;
            state.error = true;
        }
    }
})

export const selectErrorState = state => state.ResultsSlice.error;

export const selectResults = state => state.ResultsSlice.results;

export const selectLoadingState = state => state.ResultsSlice.loading;

export default ResultsSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";


const NavigationSlice = createSlice({
    name: "NavigationSlice",
    initialState: {
        query: "",
        showSensitiveContent: true,
        blurSensitiveContent: true,
        optionsMenuOpen: false,
        explicitContentOptions: ['hide', 'blur', 'show'],
        sortOptions: ['new', 'relevance'],
        currentExplicitContentOption: 'blur',
        currentSortOption: 'relevance',
        source: ""
    },
    reducers: {
        setQuery: (state, action) => {
            state.query = action.payload;
        },
        toggleOptionsMenu: (state, action) => {
            state.optionsMenuOpen = !state.optionsMenuOpen;
        },
        setOption: (state, action) => {
            state[action.payload.selector] = action.payload.value;
        },
        setSource: (state, action) => {
            state.source = action.payload;
        }
    }
})

export const selectExplicitContentOptions = state => state.NavigationSlice.explicitContentOptions;

export const selectCurrentExplicitContentOption = state => state.NavigationSlice.currentExplicitContentOption;

export const selectSortOptions = state => state.NavigationSlice.sortOptions;

export const selectCurrentSortOption = state => state.NavigationSlice.currentSortOption;

export const selectOptionsMenuOpenState = state => state.NavigationSlice.optionsMenuOpen;

export const selectQuery = state => state.NavigationSlice.query;

export const selectSource = state => state.NavigationSlice.source;

export const { setOption, setQuery, toggleOptionsMenu, setSource } = NavigationSlice.actions;

export default NavigationSlice.reducer;
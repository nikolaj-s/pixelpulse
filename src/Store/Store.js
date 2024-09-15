import { configureStore } from "@reduxjs/toolkit";
import NavigationSlice from "../Features/Navigation/NavigationSlice";
import ResultsSlice from "../Features/Results/ResultsSlice";

const Store = configureStore({
    reducer: {
        NavigationSlice: NavigationSlice,
        ResultsSlice: ResultsSlice
    }
})

export default Store;
import { configureStore } from "@reduxjs/toolkit";
import NavigationSlice from "../Features/Navigation/NavigationSlice";
import ResultsSlice from "../Features/Results/ResultsSlice";
import ExpandedContentSlice from "../Features/ExpandedContent/ExpandedContentSlice";

const Store = configureStore({
    reducer: {
        NavigationSlice: NavigationSlice,
        ResultsSlice: ResultsSlice,
        ExpandedContentSlice: ExpandedContentSlice
    }
})

export default Store;
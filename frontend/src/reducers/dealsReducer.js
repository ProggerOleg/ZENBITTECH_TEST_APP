// dealsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    deals: [], // List of deals
};

const dealsSlice = createSlice({
    name: 'deals',
    initialState,
    reducers: {
        setDeals: (state, action) => {
            state.deals = action.payload; // Set the list of deals
        },
    },
});

export const { setDeals } = dealsSlice.actions;
export default dealsSlice.reducer;
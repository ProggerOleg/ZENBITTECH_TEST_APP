import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            // Set the user data in the store
            state.user = action.payload;
        },
        clearUser: (state) => {
            // Clear the user data (e.g., for logout)
            state.user = null;
        },
    },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;

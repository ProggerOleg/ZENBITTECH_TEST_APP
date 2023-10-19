import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../reducers/userReducer';
import dealsReducer from '../reducers/dealsReducer';
import { authApi } from '../api/authApi';
import { dealsApi } from '../api/dealsApi';

const store = configureStore({
    reducer: {
        user: userReducer,
        deals: dealsReducer,
        [authApi.reducerPath]: authApi.reducer,
        [dealsApi.reducerPath]: dealsApi.reducer,
    }, middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(authApi.middleware)
            .concat(dealsApi.middleware),
});

export default store;
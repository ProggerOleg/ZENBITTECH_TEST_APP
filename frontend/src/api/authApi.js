import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
    tagTypes: ['Auth'],
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: '/api/user/login',
                method: 'POST',
                body: credentials,
            }),
            invalidatesTags: ['Auth'],
        }),
        register: builder.mutation({
            query: (userData) => ({
                url: '/api/user/register',
                method: 'POST',
                body: userData,
            }),
            invalidatesTags: ['Auth'],
        }),
        forgotPassword: builder.mutation({
            query: (email) => ({
                url: '/api/user/forgot-password-token',
                method: 'POST',
                body: email,
            }),
            invalidatesTags: ['Auth'],
        }),
        resetPassword: builder.mutation({
            query: (email) => ({
                url: '/api/user/reset-password-token/:token',
                method: 'PUT',
                body: email,
            }),
            invalidatesTags: ['Auth'],
        }),
        logout: builder.mutation({
            query: () => ({
                url: '/api/user/logout',
                method: 'GET',
                credentials: 'include',
            }),
            invalidatesTags: ['Auth'],
        }),
    }),
});

export const { useLoginMutation, useRegisterMutation, useForgotPasswordMutation, useLogoutMutation, useResetPasswordMutation } = authApi;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const dealsApi = createApi({
    reducerPath: 'dealsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }), // Adjust the URL as needed
    tagTypes: ['Deals'],
    endpoints: (builder) => ({
        getAllDeals: builder.query({
            query: () => '/api/deals', // Adjust the endpoint URL
            providesTags: ['Deals'],
        }),
        getDealById: builder.query({
            query: (dealId) => `/api/deals/${dealId}`, // Adjust the endpoint URL
            providesTags: ['Deals'],
        }),
    }),
});

export const { useGetAllDealsQuery, useGetDealByIdQuery } = dealsApi;

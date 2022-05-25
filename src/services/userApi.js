import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const userApiHeaders = {
    'Content-type': 'application/json; charset=UTF-8',
};
const baseUrl = 'https://jsonplaceholder.typicode.com';
const createRequest = (url) => ({ url, headers: userApiHeaders});

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
        baseUrl
    }),
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => createRequest('/posts'),
        })
    })
});

export const {
    useGetUsersQuery,
} = userApi;
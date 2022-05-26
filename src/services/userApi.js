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
            query: () => createRequest(`/users`),
        }),
        getUserId: builder.query({
            query: (userId) => createRequest(`/users/${userId}`),
        }),
        getPosts: builder.query({
            query: (userId) => createRequest(`/posts?userId=${userId}`),
        }),
        // getPostDetails: builder.query({
        //     query: (userId) => createRequest(`/posts?userId=${userId}`),
        // ?limit=${postLimit}
        // }),
        getComments: builder.query({
            query: (userId) => createRequest(`/comments/${userId}`),
        })
    })
});

export const {
    useGetUsersQuery,
    useGetUserIdQuery,
    useGetPostsQuery,
    useGetCommentsQuery
} = userApi;
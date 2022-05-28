import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Post } from '../components/Post';

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
        getPost: builder.query({
            query: (postId) => createRequest(`/posts?id=${postId}`),
        }),
        getComments: builder.query({
            query: (postId) => createRequest(`/comments?postId=${postId}`),
        }),
        postComments: builder.mutation ({
            query: (body, postId) => ({
                url: `/comments?postId=${postId}`,
                method: 'POST',
                body,
            })
        }),
    })
});

export const {
    useGetUsersQuery,
    useGetUserIdQuery,
    useGetPostsQuery,
    useGetCommentsQuery,
    useGetPostQuery,
    usePostCommentsMutation
} = userApi;
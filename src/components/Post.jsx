import React, { useState, useEffect } from 'react';
import '../App.css';
import { useParams } from "react-router-dom";

import { useGetUserIdQuery, useGetCommentsQuery, useGetPostQuery, usePostCommentsQuery } from '../services/userApi';

export const Post = () => {
    const params = useParams();
    const postId = params.postId;
    const userId = params.userId;

    // Информация о пользователе
    const { data } = useGetUserIdQuery(userId);
    const userDetails = data;
    
    // Посты
    const { currentData } = useGetPostQuery(postId);
    let postInfos = currentData;

    console.log(postInfos)

    // Комментарии
    const { commentData } = useGetCommentsQuery(postId);
    let comments = commentData;



    // if (userDetails && postInfos && commentData) {
        return (
            <section className='post'>
                <div className='container'>
                    <h1>Пост</h1>
                    {postInfos?.map((post, index) => (
                        <div key={index} className='post__container'>
                             <p className='post__title'>{post.title}</p>
                             <p className='post__body'>{post.body}</p>
                        </div>
                    ))}
                </div>
            </section>
        )
    // }

    console.log(postId,userId)
}


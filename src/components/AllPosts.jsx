import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";

import { useGetUserIdQuery, useGetPostsQuery } from '../services/userApi';

export const AllPosts = () => {
    
    // Информация о пользователе
    const { userId } = useParams();
    const { data } = useGetUserIdQuery(userId);
    const userDetails = data;


    // Посты
    const { currentData } = useGetPostsQuery(userId);
    let postInfos = currentData;


    if (userDetails && postInfos) {
        return (
            <section className='profile'>
                <div className='profile__body'>
                    <div className='container'>
                        <h2 className='title'>Все посты</h2>
                        <div className='posts__body'>
                            {postInfos?.map((post, index) => (
                                <Link key={index} to={`${post.id}`}>
                                    <div className='post__card'>
                                        <p key={post.name} className='post__title'>{post.title}</p>
                                        <p key={post.body} className='post__body'>{post.body}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        )

    }
    
}
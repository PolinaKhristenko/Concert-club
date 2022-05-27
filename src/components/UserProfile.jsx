import React, { useState, useEffect } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { AllPosts } from '../components/AllPosts';
import { Post } from '../components/Post';

import { useGetUserIdQuery, useGetPostsQuery } from '../services/userApi';


export const UserProfile = () => {
    
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
                        <div className='profile__layout'>
                            <div className='profile__row'><h2 className='profile__data title'>{`${userDetails.username}`}</h2></div>
                            <div className='profile__row border-top'><p className='profile__data profile__contacts'>{`${userDetails.name}`}</p><p className='profile__data profile__contacts'>{`${userDetails.email}`}</p><p className='profile__data profile__contacts'>{`${userDetails.phone}`}</p><p className='profile__data profile__contacts'>{`${userDetails.website}`}</p><p className='profile__data profile__contacts'>{`${userDetails.company.name}, ${userDetails.company.bs}`}</p></div>
                        </div>
                    </div>
                </div>

                <div className='profile__body'>
                    <div className='container'>
                        <h2 className='title'>Посты</h2>
                        <div className='posts__body'>
                            {postInfos?.slice(0, 3).map((post) => (
                                <Link key={post.id} to={`/${post.id}`}>
                                    <div className='post__card'>
                                        <p key={post.name} className='post__title'>{post.title}</p>
                                        <p key={post.body} className='post__body'>{post.body}</p>
                                    </div>
                                </Link>
                            ))}
                            <Link key='posts' to={`/${userId}/posts`}>
                                <button className="btn__black" type='button'>Показать все посты</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        )

    }
    
}
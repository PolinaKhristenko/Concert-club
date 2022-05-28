import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";

import { useGetUserIdQuery, useGetPostsQuery } from '../services/userApi';


export const UserProfile = () => {
    
    // Информация о пользователе
    const { userId } = useParams();
    const { data, isFetching } = useGetUserIdQuery(userId);
    const userDetails = data;

    // Посты
    const { currentData } = useGetPostsQuery(userId);
    let postInfos = currentData;


    if (isFetching) return <div className='container'>Идёт загрузка...</div>

    // Страница пользоваталя. Экран 2
    if (userDetails && postInfos) {
        return (
            <section className='profile'>
                <div className='profile__body'>
    
                        <div className='profile__layout'>
                            <div className='profile__row-1 container'><h2 className='profile__data title'>{`${userDetails.username}`}</h2></div>
                            <div className='border-top'></div>
                            <div className='profile__row-2 container'><p className='profile__data profile__contacts'>{`${userDetails.name}`}</p>
                                <a href={`mailto:${userDetails.email}`} className='profile__data profile__contacts'>{`${userDetails.email}`}</a>
                                <a href={`tel:${userDetails.phone}`} className='profile__data profile__contacts'>{`${userDetails.phone}`}</a>
                                <a href={`${userDetails.website}`} target='_blank' className='profile__data profile__contacts'>{`${userDetails.website}`}</a>
                                <p className='profile__data profile__contacts'>{`${userDetails.company.name}`}</p>
                                <p className='profile__data profile__contacts'>{`${userDetails.company.bs}`}</p>
                            </div>
                        </div>
                
                </div>

                <div className='profile__body'>
                    <div className='container'>
                        <h2 className='title'>Посты</h2>
                        <div className='posts__body'>
                            {postInfos?.slice(0, 3).map((post) => (
                                <Link key={post.id} to={`posts/${post.id}`}>
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
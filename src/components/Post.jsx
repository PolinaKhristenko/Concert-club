import React, { useState } from 'react';
import '../App.css';
import { useParams } from "react-router-dom";
import Comment from './Comment';

import { useGetCommentsQuery, useGetPostQuery } from '../services/userApi';

export const Post = () => {
    const params = useParams();
    const postId = params.postId;
    
    // Посты
    const { currentData, isFetching } = useGetPostQuery(postId);
    let postInfos = currentData;

    // Комментарии
    const { data } = useGetCommentsQuery(postId);
    let comments = data;

    const [formActive, setFormActive] = useState(false); 

    if (isFetching) return <div className='container'>Идёт загрузка...</div>

    // Страница с деталями поста и комментариями. Экран 4

        return (
            <section className='post'>
                <div className='container'>
                    <div className='post__infos'>
                        <h3 className='post__title'>Пост</h3>
                        {postInfos?.map((post, index) => (
                            <div key={index} className='post__container'>
                                <h1 className='post__title'>{post.title}</h1>
                                <p className='post__txt'>{post.body}</p>
                            </div>
                        ))}
                        <div className='comments'>
                            <h3 className='comments__title'>Комментарии:</h3>
                            {comments?.map((comment, index) => (
                                <div key={index} className='comment__card'>
                                    <div className='comment__user'>
                                        <p className='comment__name'>Имя: {comment.name}</p>
                                        <p className='comment__email'>Почта: {comment.email}</p>
                                    </div>
                                    <p className='comment__body'>{comment.body}</p>
                                </div>
                            ))}

                            <button type='button' className='btn__black' onClick={() => setFormActive(true)}>Добавить комментарий</button>
                            <Comment active={formActive} setActive={setFormActive} />
                        </div>
                    </div>
                </div>
            </section>
        )
}


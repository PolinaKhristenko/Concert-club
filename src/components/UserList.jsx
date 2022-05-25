import React from 'react';
import '../App.css';
import logo from '../logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserProfile } from './UserProfile';

import { useGetUsersQuery } from '../services/userApi';

export const UserList = () => {
    const { data, isFetching } = useGetUsersQuery();

    
    // console.log(data);

    return (
        <section className='users'>
            <div className='container'>
                <h1>Пользователи</h1>
                <div className='users__body'>
                    <div className='user__card'>
                        <div className='user__info'>
                            <p className='user__name'></p>
                            <p className='user__surname'></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
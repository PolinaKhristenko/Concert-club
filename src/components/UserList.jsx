import React, { useState, useEffect } from 'react';
import '../App.css';
import {Link } from 'react-router-dom';
import { UserProfile } from './UserProfile';

import { useGetUsersQuery } from '../services/userApi';

export const UserList = () => {
    const { data } = useGetUsersQuery();
    let fullNameData = data;
    const [users, setUsers] = useState([]);
    useEffect(() => { setUsers(fullNameData); }, [setUsers, fullNameData] ); 
    // Пришлось добавить из-за асинхронности useState

    if (users) {
        return (
            <section className='users'>
                <div className='container'>
                    <h1 className='title'>Пользователи</h1>
                    <div className='users__body'>
                        {users?.map((user) => (
                            <Link key={user.id} to={`/${user.id}`}>
                                <div className='user__card'>
                                    <div className='user__info'>
                                        <p key={user.name} className='user__full'>{user.name}</p>
                                        <button className="btn__black" type='button'>Смотреть Профиль</button>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        )
    }
};
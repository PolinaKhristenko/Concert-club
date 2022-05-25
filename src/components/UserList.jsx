import React, { useState } from 'react';
import '../App.css';
import {Link } from 'react-router-dom';
import { UserProfile } from './UserProfile';

import { useGetUsersQuery } from '../services/userApi';

export const UserList = () => {
    const { data, isFetching } = useGetUsersQuery();
    let fullNameData = data;
    const [users, setUsers] = useState(fullNameData);
    if (isFetching) return 'Loading...';

    // console.log(data);

    return (
        <section className='users'>
            <div className='container'>
                <h1>Пользователи</h1>
                <div className='users__body'>
                    {users.map((user) => (
                        <Link to={`/${user.id}`}>
                            <div className='user__card'>
                                <div className='user__info'>
                                    <p className='user__full'>{user.name}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}